
let mapCanvas = document.getElementById("canvas");
let showVelocity = document.getElementById("showColumn");
let responseData;
let setTimeoutID;

mapCanvas.width = $(window).get(0).innerWidth;
mapCanvas.height = $(window).get(0).innerHeight;


let showColumnVisible = false;

document.getElementById('showWind').addEventListener('change', function () {
    if (this.checked) {
        if (windVelocityArray.length === 0) {
            fetch('http://localhost:8080/gfs.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    responseData = data;
                    postMapRender();
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            postMapRender();
        }
    } else {
        // Perform actions if checkbox is unchecked
        clearCanvas();
        // Add any additional actions to perform when checkbox is unchecked
        hideShowColumn();
    }
});


function postMapRender() {
  moveendFlag = 1;
  mapCanvas.style.zIndex = 0;
  if (windVelocityArray.length === 0) {
    buildWindVelocityArray();
  }
  clearCanvas();
  getBounds();
  animate();
}

let colorTable = [
  "rgb(36,104, 180)", "rgb(60,157, 194)", "rgb(128,205,193)", "rgb(151,218,168)", "rgb(198,231,181)",
  "rgb(238,247,217)", "rgb(255,238,159)", "rgb(252,217,125)", "rgb(255,182,100)", "rgb(252,150,75)",
  "rgb(250,112,52)", "rgb(245,64,32)", "rgb(237,45,28)", "rgb(220,24,32)", "rgb(180,0,35)"
];

let particleMaxAge = 100;
let zoomFlag;
let pixelWidth;
let pixelHeigh;
let windVelocityArray = [];
let WindVelocityGrid = [];
let particles = [];
let buckets = [];
let extent = [];

// Get the wind array
function buildWindVelocityArray() {
  let windVolecityX = responseData[0].data;
  let windVolecityY = responseData[1].data;
  let getData = (p) => [windVolecityX[p], windVolecityY[p]];

  let numberX = responseData[0].header.nx;
  let numberY = responseData[0].header.ny;
  let p = 0;
  for (let j = 0; j < numberY; j++) {
    let windRow = [];
    for (let i = 0; i < numberX; i++, p++) {
      windRow[i] = getData(p);
    }
    windVelocityArray[j] = windRow;
  }
}
// 获取范围
function getBounds() {
  extent = [];
  let lonStart = responseData[0].header.lo1;
  let latStart = responseData[0].header.la1;
  let lonEnd = responseData[0].header.lo2;
  let latEnd = responseData[0].header.la2;
  let start = [lonStart, latStart]
  let end = [lonEnd, latEnd];

  let extentStartCoordinate = ol.proj.fromLonLat(start);
  let extentEndCoordinate = ol.proj.fromLonLat(end);

  let sizeXY = map.getSize();
  //var extent = map.getView().calculateExtent(sizeXY);
  
  let topLeftXY = map.getCoordinateFromPixel([0, 0]);
  let topLeftLonLat = ol.proj.toLonLat(topLeftXY);
  let bottomRightXY = map.getCoordinateFromPixel(sizeXY);
  let bottomRightLonLat = ol.proj.toLonLat(bottomRightXY);
  //console.log(sizeXY[0])
 // console.log(topLeftXY)
  
  
  let topLeftLon = topLeftLonLat[0];
  let topLeftLat = topLeftLonLat[1];
  let bottomRightLon = bottomRightLonLat[0];
  let bottomRightLat = bottomRightLonLat[1];
  if (
    topLeftLon > lonStart &&
    topLeftLat < latStart &&
    bottomRightLon < lonEnd &&
    bottomRightLat > latEnd
  ) {
    zoomFlag = 0;
    extent = [0, 0, sizeXY[0], sizeXY[1]];
	//extent = ol.proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326');
	
  } else {
    zoomFlag = 1;
  }

  let extentStartPixel = map.getPixelFromCoordinate(extentStartCoordinate);
  let extentEndPixel = map.getPixelFromCoordinate(extentEndCoordinate);
  extent = [
    Math.round(extentStartPixel[0]),
    Math.round(extentStartPixel[1]),
    Math.round(extentEndPixel[0]),
    Math.round(extentEndPixel[1]),
  ];
  //extent = ol.proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326');
  
   //let nx = responseData[0].header.dx;
  // let ny = responseData[0].header.dy;

  let numberX = responseData[0].header.nx - 1;
  let numberY = responseData[0].header.ny - 1;

  let pixelPerGridX = (extent[2] - extent[0]) / numberX;
  let pixelPerGridY = (extent[3] - extent[1]) / numberY;

  let pixelPerGrid = [Math.ceil(pixelPerGridX), Math.ceil(pixelPerGridY)];

  buildWindVelocityGrid(pixelPerGrid, sizeXY, extentStartPixel);
}

//build the wind-volecity interpolation grid
function buildWindVelocityGrid(pixelPerGrid, sizeXY, extentStartPixel) {
  WindVelocityGrid = [];
  pixelWidth = zoomFlag === 0 ? sizeXY[0] : extent[2] - extent[0];
  pixelHeigh = zoomFlag === 0 ? sizeXY[1] : extent[3] - extent[1];

  for (let j = 0; j < pixelHeigh; j += 2) {
    let pixelRow = [];
    for (let i = 0; i < pixelWidth; i += 2) {
      let interpolated = interpolateWindVelocity(
        i + (zoomFlag === 0 ? Math.abs(extentStartPixel[0]) : 0),
        j + (zoomFlag === 0 ? Math.abs(extentStartPixel[1]) : 0),
        pixelPerGrid
      );
      pixelRow[i] = interpolated;
      pixelRow[i + 1] = interpolated;
    //  pixelRow[i + 2] = interpolated;
    //  pixelRow[i + 3] = interpolated;
    }
    WindVelocityGrid[j] = pixelRow;
    WindVelocityGrid[j + 1] = pixelRow;
   // WindVelocityGrid[j + 2] = pixelRow;
   // WindVelocityGrid[j + 3] = pixelRow;
  }
  addParticles();
}

    var isValue = function (x) {
      return x !== null && x !== undefined;
    };



function interpolateWindVelocity(x, y, pixelPerGrid) {
	
  let gridXDecimal = x / pixelPerGrid[0];
  let gridYDecimal = y / pixelPerGrid[1];
  
  
  let gridX = Math.floor(gridXDecimal); let gridNextX = gridX + 1;
  let gridY = Math.floor(gridYDecimal); let gridNextY = gridY + 1;

  
  let absoluteX = gridXDecimal - gridX;let absoluteY = gridYDecimal - gridY;
 // console.log(gridX)
  let row;
  //if (row = windVelocityArray[gridY]){
	 row = windVelocityArray[gridY]
	 let gridTopLeft = row[gridX];
     let gridTopRight = row[gridNextX];
	// if (isValue(gridTopLeft)&&isValue(gridTopRight)&&(row=windVelocityArray[gridNextY])){
	  let gridBottomLeft = windVelocityArray[gridNextY][gridX];
      let gridBottomRight = windVelocityArray[gridNextY][gridNextX];
	//  if(isValue(gridBottomLeft)&&isValue(gridBottomRight)){
	  return bilinearInterpolateVector(absoluteX, absoluteY, gridTopLeft, gridTopRight, gridBottomLeft, gridBottomRight); 
//	  } 
//	 } 
//  }
  //return null;
}













function bilinearInterpolateVector(x, y, g00, g10, g01, g11) {
  let rx = 1 - x;
  let ry = 1 - y;
  let a = rx * ry;
  let b = x * ry;
  let c = rx * y;
  let d = x * y;
  let u = g00[0] * a + g10[0] * b + g01[0] * c + g11[0] * d;
  let v = g00[1] * a + g10[1] * b + g01[1] * c + g11[1] * d;

  return [u, v, Math.sqrt(u * u + v * v)];
}


function addParticles() {
  let zoomNow = map.getView().getZoom();
  particles = [];
  for (let i = 0; i < controls.particleCount; i++) {
    particles[i] = particleRandomize();
  }

  let topLeftXY = map.getCoordinateFromPixel([0, 0]);
  let topLeftLonLat = ol.proj.toLonLat(topLeftXY);
  addMyOverlay(topLeftLonLat);
}

controls = {
  slowScale: 6,
  particleCount: 1198,
};

let gui = new dat.GUI();
gui.add(controls, 'slowScale', 0.4, 20);
gui.add(controls, 'particleCount', 100, 10000).onChange(() => {
  if (moveendFlag) {
    clearCanvas();
    if (windVelocityArray.length === 0) {
      buildWindVelocityArray();
    }
    getBounds();
    animate();
  }
});


function particleRandomize() {
  let pixelWidth = extent[2] - extent[0];
  let pixelHeigh = extent[3] - extent[1];
  let x = Math.random() * pixelWidth;
  let y = Math.random() * pixelHeigh;
  let age = Math.random() * particleMaxAge;

  return getNewParticleSingle(x, y, age);
}

function getNewParticleSingle(x, y, age) {
  let particleSingle = {
    x: zoomFlag === 0 ? x : x + extent[0],
    y: zoomFlag === 0 ? y : y + extent[1],
    age: age,
    xt: 0,
    yt: 0,
    strong: 0
  };

  return particleSingle;
}

function getPointWindData(x, y) {
  let row = WindVelocityGrid[y];
  let data = row ? row[x] : null;
  return data ? data : [NaN, NaN, null];
}

function drawParticles() {
  let ctx = mapCanvas.getContext('2d');
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.8;
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
  ctx.globalCompositeOperation = "source-over";

  buckets.forEach((bucket, i) => {
    ctx.strokeStyle = colorTable[i];

    bucket.forEach(particle => {
      if (particle.age < particleMaxAge) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.xt, particle.yt);
        particle.x = particle.xt;
        particle.y = particle.yt;
        ctx.closePath();
        ctx.stroke();
      }
    });
  });
}


function changeParticle(particle) {
  let newParticle = particleRandomize();
  Object.assign(particle, newParticle);
}

function initializeBuckets() {
  buckets = Array.from({ length: colorTable.length }, () => []);
}

function updataParticlePosition() {
  initializeBuckets();

  particles.forEach(particle => {
    if (particle.age > particleMaxAge) {
      changeParticle(particle);
    }

    let [offsetX, offsetY] = zoomFlag === 0 ? [0, 0] : [extent[0], extent[1]];
    let pointWindData = getPointWindData(Math.floor(particle.x) - offsetX, Math.floor(particle.y) - offsetY);

    particle.strong = pointWindData[2];
    if (!particle.strong || particle.strong === null) {
      particle.age = particleMaxAge;
    } else {
      particle.xt = particle.x + pointWindData[0] / controls.slowScale;
      particle.yt = particle.y + pointWindData[1] / controls.slowScale;
    }
    particle.age++;

    let drawColorNumber = Math.min(Math.ceil(particle.strong * 2), 14);
    buckets[drawColorNumber].push(particle);
  });
}

function animate() {
  updataParticlePosition();
  drawParticles();

  setTimeoutID = setTimeout(animate, 80);
}

function addMyOverlay(topLeftLonLat) {
  let myOver = new ol.Overlay({
    element: canvas,
    position: ol.proj.fromLonLat(topLeftLonLat),
    stopEvent: false
  });
  map.addOverlay(myOver);
}

function clearCanvas() {
  if (setTimeoutID) {
    clearTimeout(setTimeoutID);
  }

  let ctx = mapCanvas.getContext('2d');
  ctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
}

let moveendFlag = 0;
map.on('movestart', () => {
  if (moveendFlag) {
    clearCanvas();
  }
});

map.on('moveend', () => {
  if (moveendFlag) {
    clearCanvas();
    if (windVelocityArray.length === 0) {
      buildWindVelocityArray();
    }
    getBounds();
    animate();
  }
});

function hideShowColumn() {
  showColumn.innerHTML = ''; // Clear the content inside showColumn
}
map.on('pointermove', function (evt) {
  if (document.getElementById('myCheckbox').checked) {
      let coordinateNow = evt.coordinate;
      let lonLatNow = ol.proj.toLonLat(coordinateNow);
      let [pixelXabsolute, pixelYabsolute] = evt.pixel;

      let pixelVelocity;
      if (zoomFlag === 0) {
          pixelVelocity = getPointWindData(Math.floor(pixelXabsolute), Math.floor(pixelYabsolute));
      } else {
          pixelVelocity = getPointWindData(Math.floor(pixelXabsolute - extent[0]), Math.floor(pixelYabsolute - extent[1]));
      }

      let locationInfo = `<strong>此处位置:</strong>[${lonLatNow[0].toFixed(2)}°, ${lonLatNow[1].toFixed(2)}°]`;
      if (pixelVelocity[2] === null) {
          showColumn.innerHTML = `${locationInfo}&nbsp;&nbsp;<strong>此处风速:</strong> 无数据&nbsp;(zoom = ${map.getView().getZoom()})`;
      } else {
          let windSpeed = pixelVelocity[2].toFixed(2);
          let windDirection = calculateWindDirection(pixelVelocity[0], pixelVelocity[1]);
          showColumn.innerHTML = `${locationInfo}&nbsp;&nbsp;<strong>此处风速:</strong> ${windSpeed}m/s&nbsp;&nbsp;<strong>风向:</strong> ${windDirection}&nbsp;(zoom = ${map.getView().getZoom()})`;
      }

      showColumnVisible = true;
  } else {
      showColumnVisible = false;
      hideShowColumn();
  }
});

function calculateWindDirection(u, v) {
  let windAngle = Math.atan2(-v, -u) * (180 / Math.PI);
  let direction = '';

  if (windAngle >= -180 && windAngle < -157.5) {
      direction = '北风';
  } else if (windAngle >= -157.5 && windAngle < -112.5) {
      direction = '西北风';
  } else if (windAngle >= -112.5 && windAngle < -67.5) {
      direction = '西风';
  } else if (windAngle >= -67.5 && windAngle < -22.5) {
      direction = '西南风';
  } else if (windAngle >= -22.5 && windAngle < 22.5) {
      direction = '南风';
  } else if (windAngle >= 22.5 && windAngle < 67.5) {
      direction = '东南风';
  } else if (windAngle >= 67.5 && windAngle < 112.5) {
      direction = '东风';
  } else if (windAngle >= 112.5 && windAngle < 157.5) {
      direction = '东北风';
  } else if (windAngle >= 157.5 && windAngle <= 180) {
      direction = '北风';
  }

  return direction;
}





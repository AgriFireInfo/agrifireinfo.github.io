//Origin code obtained from https://github.com/brother-forteen/wind-Amap/blob/master/windy.js
let Windy = function (params) {
  const VELOCITY_SCALE = 0.008;
  const INTENSITY_SCALE_STEP = 10;
  const MAX_WIND_INTENSITY = 10;
  const MAX_PARTICLE_AGE = 200;
  const PARTICLE_LINE_WIDTH = 1;
  const PARTICLE_MULTIPLIER = 1 / 300;
  const PARTICLE_REDUCTION = 0.75;
  const FRAME_RATE = 20;
  const BOUNDARY = 0.45;
  const NULL_WIND_VECTOR = [NaN, NaN, null];
  const TRANSPARENT_BLACK = [255, 0, 0, 0];
  const τ = 2 * Math.PI;
  const H = 10 ** -5.2;

  const bilinearInterpolateVector = (x, y, g00, g10, g01, g11) => {
    const rx = 1 - x;
    const ry = 1 - y;
    const a = rx * ry;
    const b = x * ry;
    const c = rx * y;
    const d = x * y;
    const u = g00[0] * a + g10[0] * b + g01[0] * c + g11[0] * d;
    const v = g00[1] * a + g10[1] * b + g01[1] * c + g11[1] * d;
    return [u, v, Math.sqrt(u * u + v * v)];
  };

  const createWindBuilder = (uComp, vComp) => ({
    header: uComp.header,
    data: (i) => [uComp.data[i], vComp.data[i]],
    interpolate: bilinearInterpolateVector
  });

  const createBuilder = (data) => {
    let uComp = null;
    let vComp = null;
    let scalar = null;

    data.forEach((record) => {
      const { parameterCategory, parameterNumber } = record.header;
      switch (`${parameterCategory},${parameterNumber}`) {
        case '2,2':
          uComp = record;
          break;
        case '2,3':
          vComp = record;
          break;
        default:
          scalar = record;
      }
    });

    return createWindBuilder(uComp, vComp);
  };

  const buildGrid = (data, callback) => {
    const builder = createBuilder(data);
    const { header } = builder;
    const λ0 = header.lo1;
    const φ0 = header.la1;
    const Δλ = header.dx;
    const Δφ = header.dy;
    const ni = header.nx;
    const nj = header.ny;
    const date = new Date(header.refTime);
    date.setHours(date.getHours() + header.forecastTime);

    const isContinuous = Math.floor(ni * Δλ) >= 360;
    const grid = [];
    let p = 0;

    for (let j = 0; j < nj; j++) {
      const row = [];
      for (let i = 0; i < ni; i++, p++) {
        row[i] = builder.data(p);
      }
      if (isContinuous) {
        row.push(row[0]);
      }
      grid[j] = row;
    }

    const interpolate = (λ, φ) => {
      const i = floorMod(λ - λ0, 360) / Δλ;
      const j = (φ0 - φ) / Δφ;

      const fi = Math.floor(i);
      const ci = fi + 1;
      const fj = Math.floor(j);
      const cj = fj + 1;

      let row;
      if ((row = grid[fj])) {
        const g00 = row[fi];
        const g10 = row[ci];
        if (isValue(g00) && isValue(g10) && (row = grid[cj])) {
          const g01 = row[fi];
          const g11 = row[ci];
          if (isValue(g01) && isValue(g11)) {
            return builder.interpolate(i - fi, j - fj, g00, g10, g01, g11);
          }
        }
      }
      return null;
    };

    callback({
      date,
      interpolate
    });
  };


  const isValue = (x) => x !== null && x !== undefined;

  const floorMod = (a, n) => a - n * Math.floor(a / n);

  const clamp = (x, range) => Math.max(range[0], Math.min(x, range[1]));

  const isMobile = () => (/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent);

  const distort = (projection, λ, φ, x, y, scale, wind, windy) => {
    const u = wind[0] * scale;
    const v = wind[1] * scale;
    const d = distortion(projection, λ, φ, x, y, windy);

    wind[0] = d[0] * u + d[2] * v;
    wind[1] = d[1] * u + d[3] * v;
    return wind;
  };

  const distortion = (projection, λ, φ, x, y, windy) => {
    const τ = 2 * Math.PI;
    const H = 10 ** -5.2;
    const hλ = λ < 0 ? H : -H;
    const hφ = φ < 0 ? H : -H;

    const pλ = project(φ, λ + hλ, windy);
    const pφ = project(φ + hφ, λ, windy);

    const k = Math.cos(φ / 360 * τ);
    return [
      (pλ[0] - x) / hλ / k,
      (pλ[1] - y) / hλ / k,
      (pφ[0] - x) / hφ,
      (pφ[1] - y) / hφ
    ];
  };


  const createField = (columns, bounds, callback) => {
    const field = (x, y) => {
      const column = columns[Math.round(x)];
      return column && column[Math.round(y)] || NULL_WIND_VECTOR;
    };

    field.release = () => {
      columns = [];
    };

    field.randomize = (o) => {
      let x, y;
      let safetyNet = 0;
      do {
        x = Math.round(Math.floor(Math.random() * bounds.width) + bounds.x);
        y = Math.round(Math.floor(Math.random() * bounds.height) + bounds.y);
      } while (field(x, y)[2] === null && safetyNet++ < 30);
      o.x = x;
      o.y = y;
      return o;
    };

    callback(bounds, field);
  };

  const buildBounds = (bounds, width, height) => {
    const upperLeft = bounds[0];
    const lowerRight = bounds[1];
    const x = Math.round(upperLeft[0]);
    const y = Math.max(Math.floor(upperLeft[1]), 0);
    const xMax = Math.min(Math.ceil(lowerRight[0]), width - 1);
    const yMax = Math.min(Math.ceil(lowerRight[1]), height - 1);
    return { x, y, xMax: width, yMax, width, height };
  };

  const deg2rad = (deg) => (deg / 180) * Math.PI;
  const rad2deg = (ang) => ang / (Math.PI / 180.0);

  const invert = (x, y, windy) => {
    const mapLonDelta = windy.east - windy.west;
    const worldMapRadius = windy.width / rad2deg(mapLonDelta) * 360 / (2 * Math.PI);
    const mapOffsetY = (worldMapRadius / 2 * Math.log((1 + Math.sin(windy.south)) / (1 - Math.sin(windy.south))));
    const equatorY = windy.height + mapOffsetY;
    const a = (equatorY - y) / worldMapRadius;

    const lat = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
    const lon = rad2deg(windy.west) + x / windy.width * rad2deg(mapLonDelta);
    return [lon, lat];
  };

  const mercY = (lat) => Math.log(Math.tan(lat / 2 + Math.PI / 4));



  const project = (lat, lon, windy) => {
    const ymin = mercY(windy.south);
    const ymax = mercY(windy.north);
    const xFactor = windy.width / (windy.east - windy.west);
    const yFactor = windy.height / (ymax - ymin);

    const yMerc = mercY(deg2rad(lat));
    const x = (deg2rad(lon) - windy.west) * xFactor;
    const y = (ymax - yMerc) * yFactor;
    return [x, y];
  };

  const interpolateField = (grid, bounds, extent, callback) => {
    const projection = {};
    const velocityScale = VELOCITY_SCALE;
    const columns = [];
    let x = bounds.x;

    const interpolateColumn = (x) => {
      const column = [];
      for (let y = bounds.y; y <= bounds.yMax; y += 2) {
        const coord = invert(x, y, extent);
        if (coord) {
          const λ = coord[0];
          const φ = coord[1];
          if (isFinite(λ)) {
            let wind = grid.interpolate(λ, φ);
            if (wind) {
              wind = distort(projection, λ, φ, x, y, velocityScale, wind, extent);
              column[y + 1] = column[y] = wind;
            }
          }
        }
      }
      columns[x + 1] = columns[x] = column;
    };

    const batchInterpolate = () => {
      const start = Date.now();
      while (x < bounds.width) {
        interpolateColumn(x);
        x += 2;
        if (Date.now() - start > 1000) {
          setTimeout(batchInterpolate, 25);
          return;
        }
      }
      createField(columns, bounds, callback);
    };

    batchInterpolate();
  };

  const animate = (bounds, field) => {
    const asColorStyle = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;
    const hexToR = (h) => parseInt(cutHex(h).substring(0, 2), 16);
    const hexToG = (h) => parseInt(cutHex(h).substring(2, 4), 16);
    const hexToB = (h) => parseInt(cutHex(h).substring(4, 6), 16);
    const cutHex = (h) => (h.charAt(0) === "#") ? h.substring(1, 7) : h;

    const windIntensityColorScale = (step, maxWind) => {
      const defaulColorScale = [
        "rgb(36,104,180)", "rgb(60,157,194)", "rgb(128,205,193)",
        "rgb(151,218,168)","rgb(198,231,181)","rgb(238,247,217)",
        "rgb(255,238,159)","rgb(252,217,125)","rgb(255,182,100)",
        "rgb(252,150,75)", "rgb(250,112,52)", "rgb(245,64,32)",
        "rgb(237,45,28)",  "rgb(220,24,32)",  "rgb(180,0,35)" ];
      const result = [...defaulColorScale];

      result.indexFor = (m) => Math.floor(Math.min(m, maxWind) / maxWind * (result.length - 1));

      return result;
    };

    const colorStyles = windIntensityColorScale(INTENSITY_SCALE_STEP, MAX_WIND_INTENSITY);
    const buckets = colorStyles.map(() => []);

    let particleCount = Math.round(bounds.width * bounds.height * PARTICLE_MULTIPLIER);
    if (isMobile()) {
      particleCount *= PARTICLE_REDUCTION;
    }

    const fadeFillStyle = "rgba(0, 0, 0, 0.97)";

    const particles = Array.from({ length: particleCount }, () => field.randomize({ age: Math.floor(Math.random() * MAX_PARTICLE_AGE) }));

    const evolve = () => {
      buckets.forEach((bucket) => {
        bucket.length = 0;
      });

      particles.forEach((particle) => {
        if (particle.age > MAX_PARTICLE_AGE) {
          field.randomize(particle).age = 0;
        }

        const x = particle.x;
        const y = particle.y;
        const v = field(x, y);
        const m = v[2];

        if (m === null) {
          particle.age = MAX_PARTICLE_AGE;
        } else {
          const xt = x + v[0];
          const yt = y + v[1];

          if (field(xt, yt)[2] !== null) {
            particle.xt = xt;
            particle.yt = yt;
            buckets[colorStyles.indexFor(m)].push(particle);
          } else {
            particle.x = xt;
            particle.y = yt;
          }
        }

        particle.age += 1;
      });
    };

    const g = params.canvas.getContext("2d");
    g.lineWidth = PARTICLE_LINE_WIDTH;
    g.fillStyle = fadeFillStyle;

    const draw = () => {
      const prev = g.globalCompositeOperation;
      g.globalCompositeOperation = "destination-in";
      g.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
      g.globalCompositeOperation = prev;

      buckets.forEach((bucket, i) => {
        if (bucket.length > 0) {
          g.beginPath();
          g.strokeStyle = colorStyles[i];
          bucket.forEach((particle) => {
            g.moveTo(particle.x, particle.y);
            g.lineTo(particle.xt, particle.yt);
            particle.x = particle.xt;
            particle.y = particle.yt;
          });
          g.stroke();
        }
      });
    };

    (function frame() {
      try {
        windy.timer = setTimeout(() => {
          requestAnimationFrame(frame);
          evolve();
          draw();
        }, 1000 / FRAME_RATE);
      } catch (e) {
        console.error(e);
      }
    })();
  };


  const start = (bounds, width, height, extent) => {
    const mapBounds = {
      south: deg2rad(extent[0][1]),
      north: deg2rad(extent[1][1]),
      east: deg2rad(extent[1][0]),
      west: deg2rad(extent[0][0]),
      width,
      height
    };

    stop();

    buildGrid(params.data, (grid) => {
      interpolateField(grid, buildBounds(bounds, width, height), mapBounds, (bounds, field) => {
        windy.field = field;
        animate(bounds, field);
      });
    });
  };

  const stop = () => {
    if (windy.field) windy.field.release();
    if (windy.timer) clearTimeout(windy.timer);
  };

  const windy = {
    params,
    start,
    stop
  };

  return windy;
}

window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 20);
    };
})();

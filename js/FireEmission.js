let attribution = new ol.control.Attribution({
    collapsible: false
});

//Basemap Layer

//Arcgis map layer: 
let Arcgis = new ol.layer.Tile({
    Tile: "ArcgisMap",
    source: new ol.source.XYZ({
        url: 'http://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scale=1&style=8',
        maxZoom: 18
    })
});

//Open street map layer
let OSM = new ol.layer.Tile({
    Title: "OpenStreetMap",
    source: new ol.source.OSM({
        url: 'https://api.maptiler.com/maps/d0cddbbe-6f77-45ae-aafb-25f8d32aa78d/{z}/{x}/{y}.jpg?key=pNUD8X90rA79U5qeh6na',
        maxZoom: 18
    })
});
Arcgis.setOpacity(1);
OSM.setOpacity(0);
//Map底图 Reference: 
let map = new ol.Map({
    controls: ol.control.defaults({ attribution: false }).extend([attribution]),
    layers: [Arcgis,OSM], //切换底图
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([110, 32]), //设置中心经纬度点
        maxZoom: 18,
        zoom: 4
    })
});
//--------------------------------------------------------
let provincesSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "https://pfplatform.oss-cn-beijing.aliyuncs.com/Chinapro/Chinapro.geojson" // 替换为县区数据的 JSON 数据文件路径
});

// 创建一个包含地级市数据的 VectorSource
let citiesSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "https://pfplatform.oss-cn-beijing.aliyuncs.com/Chinacity/Chinacity.geojson" // 替换为地级市数据的 JSON 数据文件路径
});

// 创建样式以设置线颜色
let provinceVectorStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'rgba(0, 0, 0, 0.7)', // 设置为黑色
        width: 1.2
    })
});
let cityVectorStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'rgba(84, 84, 84, 0.7)', // 设置为浅灰色
        width: 0.9
    })
});
// 创建县区 Vector Layer
let provincesLayer = new ol.layer.Vector({
    source: provincesSource,
    style: provinceVectorStyle // 应用样式
});

// 创建地级市 Vector Layer
let citiesLayer = new ol.layer.Vector({
    source: citiesSource,
    style: cityVectorStyle // 应用样式
});

// 将 Vector Layers 添加到地图
//map.addLayer(provincesLayer);
map.addLayer(citiesLayer);

//--------------------------------------------------------
let speciesVectorSources = {
    'PM25': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../json/Chinafireemis0326.geojson'
    }),
    'PM10': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../json/Chinafireemis0326.geojson'
    }),
    'CO': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../json/Chinafireemis0326.geojson'
    }),
    'NO2': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../json/Chinafireemis0326.geojson'
    }),
    'VOC': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../json/Chinafireemis0326.geojson'
    }),
    'CH4': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../json/Chinafireemis0326.geojson'
    })
  
};

var speciesStyles = {
    'PM25': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 64, 0, 0.8)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(223, 50, 1, 0.8)' // Sample color for range 2 of PM25
            })
        }),
        'colorthr': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(191, 36, 2, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfou': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(159, 22, 3, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfiv': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(127, 6, 4, 0.8)' // Sample color for range 2 of PM25
            })
        }), 

    },
    'PM10': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(251, 95, 251, 0.8)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(219, 72, 219, 0.8)' // Sample color for range 2 of PM25
            })
        }),
        'colorthr': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(187, 49, 187, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfou': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(155, 26, 155, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfiv': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(123, 2, 123, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
    },
    'CO': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(240, 146, 82, 0.8)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(224, 130, 65, 0.8)' // Sample color for range 2 of PM25
            })
        }),
        'colorthr': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(208, 114, 48, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfou': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(192, 98, 31, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfiv': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(177, 81,15, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
    } ,
    'NO2': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(134, 0, 255, 0.8)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(111, 0, 210, 0.8)' // Sample color for range 2 of PM25
            })
        }),
        'colorthr': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(91, 0, 174, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfou': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(75, 0, 145, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfiv': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(58, 0, 111, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
    },
    'VOC': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(74, 74, 255, 0.8)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(40, 40, 255, 0.8)' // Sample color for range 2 of PM25
            })
        }),
        'colorthr': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 227, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfou': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 198, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfiv': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 147, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
    },
    'CH4': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 187, 0, 0.8)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 166, 0, 0.8)' // Sample color for range 2 of PM25
            })
        }),
        'colorthr': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 145, 0, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfou': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 117, 0, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfiv': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 96, 0, 0.8)' // Sample color for range 2 of PM25
            })
        }), 
    }      
};

var speciesVectorLayers = {};

Object.keys(speciesVectorSources).forEach(function(species) {
    speciesVectorLayers[species] = new ol.layer.Vector({
        source: speciesVectorSources[species],
        style: function (feature) {
            let value = feature.get(species);
            let minValue = Number.MAX_VALUE;
            let maxValue = Number.MIN_VALUE;

            speciesVectorSources[species].forEachFeature(function (feature) {
                let featureValue = feature.get(species);
                minValue = Math.min(minValue, featureValue);
                maxValue = Math.max(maxValue, featureValue);
            });
            let colorRange = (maxValue - minValue) / 5;
            if (value > minValue && value <= minValue + colorRange) {
                return speciesStyles[species]['colorone'];
            } else if (value > minValue + colorRange && value <= minValue + 2 * colorRange) {
                return speciesStyles[species]['colortwo'];
            } else if (value > minValue + colorRange && value <= minValue + 3 * colorRange) {
                return speciesStyles[species]['colorthr'];
            } else if (value > minValue + colorRange && value <= minValue + 4 * colorRange) {
                return speciesStyles[species]['colorfou'];
            } else if (value > minValue + colorRange && value <= maxValue) {
                return speciesStyles[species]['colorfiv'];
            }

        }
    });
});

//----------------------------------------------------------------------------

var label = new ol.Overlay({
    element: document.createElement('div'),
    positioning: 'top-right'
});
map.addOverlay(label);

map.on('pointermove', function (event) {
    let selectedSpecies = document.querySelector('input[name="pollutants"]:checked');
    if (selectedSpecies) {
        let species = selectedSpecies.value;
        let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
            return feature;
        }, {layerFilter: function(layer) {
            return layer === speciesVectorLayers[species];
        }});
        if (feature && feature.get(species)) {
            let value = feature.get(species);
			if (species==='PM25') {
				species='PM<sub>2.5</sub>'
            let content = '<p>' + species + ': ' + value +' kg/day'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
			label.getElement().style.zIndex = 1001;
			} else if(species==='PM10'){	
		    species='PM<sub>10</sub>'
            let content = '<p>' + species + ': ' + value +' kg/day'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;			
			} else if(species==='CO'){	
            let content = '<p>' + species + ': ' + value +' models/day'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			} else if(species==='CO'){	
            let content = '<p>' + species + ': ' + value +' models/day'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";	
			label.getElement().style.zIndex = 10011;			
			} else if(species==='NO2'){	
			species='NO<sub>2</sub>'
            let content = '<p>' + species + ': ' + value +' models/day'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";	
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;			
			} else if(species==='CH4'){	
			species='CH<sub>4</sub>'
            let content = '<p>' + species + ': ' + value +' models/day'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";	
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;			
			} else if(species==='VOC'){	
			species='VOC<sub>s</sub>'
            let content = '<p>' + species + ': ' + value +' models/day'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			}

        } else {
            label.getElement().style.display = 'none';
        }
    }
});

//-----------------------------------------------------------------------------

function chgLayer(species) {
    map.getLayers().getArray().forEach(function(layer) {
        if (layer instanceof ol.layer.Vector&& layer !== citiesLayer) {
            map.removeLayer(layer);
        }
    });
    if (speciesVectorLayers[species]) {
        if (!map.getLayers().getArray().includes(speciesVectorLayers[species])) {
            map.addLayer(speciesVectorLayers[species]);
        }
    }
}

//----------------------------------------
function switchMap(type) {
    if (type === 'OSM') {
        Arcgis.setOpacity(0);
        OSM.setOpacity(1);
    } else {
        Arcgis.setOpacity(1);
        OSM.setOpacity(0);
    }
    //chgLayer(species);
}

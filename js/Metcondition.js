let attribution = new ol.control.Attribution({
    collapsible: false
});

//Basemap Layer

//Arcgis map layer: 
const Arcgis = new ol.layer.Tile({
    Tile: "ArcgisMap",
    source: new ol.source.XYZ({
        url: 'http://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scale=1&style=8',
        maxZoom: 18
    })
});
//http://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scale=1&style=8
//Open street map layer
const OSM = new ol.layer.Tile({
    Title: "OpenStreetMap",
    source: new ol.source.XYZ({
        url: 'https://api.maptiler.com/maps/d0cddbbe-6f77-45ae-aafb-25f8d32aa78d/{z}/{x}/{y}.jpg?key=pNUD8X90rA79U5qeh6na',
        maxZoom: 18
    })
});

const aqiLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72'
      }),
      visible: false, // Set AQI layer initially visible
      title: 'AQI'
    });

const pm25Layer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.waqi.info/tiles/usepa-pm25/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72'
      }),
      visible: false, 
      title: 'PM2.5'
    });

const pm10Layer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.waqi.info/tiles/usepa-10/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72'
      }),
      visible: false, 
      title: 'PM10'
    });
const coLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.waqi.info/tiles/usepa-co/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72'
      }),
      visible: false, 
      title: 'CO'
    });
const no2Layer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.waqi.info/tiles/usepa-no2/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72'
      }),
      visible: false, 
      title: 'NO2'
    });

const so2Layer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.waqi.info/tiles/usepa-so2/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72'
      }),
      visible: false, 
      title: 'SO2'
    });

const o3Layer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.waqi.info/tiles/usepa-o3/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72'
      }),
      visible: false, 
      title: 'O3'
    });



//https://tiles.aqicn.org/tiles/{aqi}/{z}/{x}/{y}.png?token=3f8e2c5ddd2245192ea722a9e00df7cdfc61dd72
//https://api.maptiler.com/maps/d0cddbbe-6f77-45ae-aafb-25f8d32aa78d/{z}/{x}/{y}.jpg?key=pNUD8X90rA79U5qeh6na
Arcgis.setOpacity(1);
OSM.setOpacity(0);
//Map底图 Reference: 
let map = new ol.Map({
    controls: ol.control.defaults({ attribution: false }).extend([attribution]),
    layers: [Arcgis,OSM,aqiLayer,pm25Layer,pm10Layer,coLayer,no2Layer,so2Layer,o3Layer], //切换底图
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
let metVectorSources = {
    'ST2': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/GFSMET/Chinamet.geojson'
    }),
    'RH2': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/GFSMET/Chinamet.geojson'
    }),
    'Prep': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/GFSMET/Chinamet.geojson'
    }),
    'SnowC': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/GFSMET/ChinaSnow.geojson'
    }),
    'WS10': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/GFSMET/Chinamet.geojson'
    }),
};

var metStyles = {
    'ST2': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(52, 53, 195, 0.5)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(54, 84, 244, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'colorthr': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(53, 169, 242, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfou': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(76, 243, 215, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfiv': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(147, 243, 145, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
		
        'colorsix': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(214, 243, 77, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorsev': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(243, 186, 53, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'coloreig': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(243, 106, 52, 0.5)' // Sample color for range 2 of PM25
            })
        }), 						
        'colornin': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(196, 54, 53, 0.5)' // Sample color for range 2 of PM25
            })
        }), 								
        'colorten': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(131, 0, 1, 0.5)' // Sample color for range 2 of PM25
            })
        }), 		
    },
    'RH2': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(240, 0, 0, 0.5)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(240, 0, 0, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'colorthree': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(200, 66, 13, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfour': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(200, 66, 13, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfive': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(194, 134, 62, 0.5)' // Sample color for range 2 of PM25
            })
        }), 	
        'colorsix': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(194, 134, 62, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'colorseven': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(105, 173, 56, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'coloreight': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(105, 173, 56, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colornine': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(117, 203, 190, 0.5)' // Sample color for range 2 of PM25
            })
        }), 			
        'colorten': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(117, 203, 190, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'coloreleven': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(56, 174, 173, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colortwelve': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(56, 157, 173, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorthirteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(15, 147, 167, 0.5)' // Sample color for range 2 of PM25
            })
        }), 			
        'colorfourteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(56, 132, 173, 0.5)' // Sample color for range 2 of PM25
            })
        }), 		
        'colorfifteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(56, 70, 114, 0.5)' // Sample color for range 2 of PM25
            })
        }), 		
    },
    'Prep': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(180, 215, 255, 0.5)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(53, 154, 255, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'colorthree': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(4, 130, 255, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfour': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 105, 210, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfive': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 54, 127, 0.5)' // Sample color for range 2 of PM25
            })
        }), 	
        'colorsix': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(20, 143, 27, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'colorseven': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(26, 207, 5, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'coloreight': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(99, 237, 7, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colornine': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 244, 43, 0.5)' // Sample color for range 2 of PM25
            })
        }), 			
        'colorten': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(232, 220, 0, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'coloreleven': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(240, 96, 0, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colortwelve': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 127, 39, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorthirteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 166, 106, 0.5)' // Sample color for range 2 of PM25
            })
        }), 			
        'colorfourteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(248, 78, 120, 0.5)' // Sample color for range 2 of PM25
            })
        }), 		
        'colorfifteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(247, 30, 84, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorsixteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(191, 0, 0, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorseventeen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(136, 0, 0, 0.5)' // Sample color for range 2 of PM25
            })
        }), 		
    }, 
    'WS10': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(197, 214, 216, 0.5)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(166, 215, 218, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'colorthree': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(61, 162, 214, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfour': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(38, 73, 186, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfive': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(55, 114, 55, 0.5)' // Sample color for range 2 of PM25
            })
        }), 	
        'colorsix': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(43, 172, 43, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'colorseven': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(130, 190, 134, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'coloreight': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(222, 226, 105, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colornine': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(236, 165, 54, 0.5)' // Sample color for range 2 of PM25
            })
        }), 			
        'colorten': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(228, 117, 63, 0.5)' // Sample color for range 2 of PM25
            })
        }),
        'coloreleven': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(212, 77, 92, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colortwelve': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(152, 14, 14, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorthirteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(13, 27, 114, 0.5)' // Sample color for range 2 of PM25
            })
        }), 			
        'colorfourteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(180, 153, 176, 0.5)' // Sample color for range 2 of PM25
            })
        }), 		
        'colorfifteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(220, 220, 220, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorsixteen': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(148, 148, 148, 0.5)' // Sample color for range 2 of PM25
            })
        }), 	
    },
	
    'SnowC': {
        'colorone': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(221, 255, 255, 0.6)' // Sample color for range 1 of PM25
            })
        }),
        'colortwo': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(154, 255, 255, 0.6)' // Sample color for range 2 of PM25
            })
        }),
        'colorthree': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(143, 211, 266, 0.6)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfour': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(133, 182, 255, 0.6)' // Sample color for range 2 of PM25
            })
        }), 
        'colorfive': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(106, 121, 255, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
		
        'colorsix': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(108, 69, 255, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'colorseven': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(142, 18, 255, 0.5)' // Sample color for range 2 of PM25
            })
        }), 
        'coloreight': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(188, 0, 235, 0.5)' // Sample color for range 2 of PM25
            })
        }), 						
        'colornine': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(215, 0, 192, 0.5)' // Sample color for range 2 of PM25
            })
        }), 								
        'colorten': new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(194, 0, 117, 0.5)' // Sample color for range 2 of PM25
            })
        }), 		
    },	
};

var metVectorLayers = {};

Object.keys(metVectorSources).forEach(function(met) {
    metVectorLayers[met] = new ol.layer.Vector({
        source: metVectorSources[met],
        style: function (feature) {
//-------------------------------------------------------------------------------------------			
		if (met==='ST2'){	
            let value = feature.get(met);
            if (value <-40) {
                return metStyles[met]['colorone'];
            } else if (value > -40 && value <= -30) {
                return metStyles[met]['colortwo'];
            } else if (value > -30 && value <= -20) {
                return metStyles[met]['colorthr'];
            } else if (value > -20 && value <= -10) {
                return metStyles[met]['colorfou'];
            } else if (value > -10 && value <= 0) {
                return metStyles[met]['colorfiv'];
		    }  else if (value > 0 && value <= 10) {
                return metStyles[met]['colorsix'];
            } else if (value > 10 && value <= 20) {
                return metStyles[met]['colorsev'];
            } else if (value > 20 && value <= 30) {
                return metStyles[met]['coloreig'];
            } else if (value > 30 && value <= 40) {
                return metStyles[met]['colornin'];
		    } else if (value > 40) {
                return metStyles[met]['colorten'];
		    }
		} else if (met==='RH2'){
            let value = feature.get(met);
            if (value > 0 && value <= 8) {
                return metStyles[met]['colorone'];
            } else if (value > 8 && value <= 12) {
                return metStyles[met]['colortwo'];
            } else if (value > 12 && value <= 18) {
                return metStyles[met]['colorthree'];
            } else if (value > 18 && value <= 22) {
                return metStyles[met]['colorfour'];
            } else if (value > 22 && value <= 28) {
                return metStyles[met]['colorfive'];
		    } else if (value > 28 && value <= 32) {
                return metStyles[met]['colorsix'];
            } else if (value > 32 && value <= 38) {
                return metStyles[met]['colorseven'];
            } else if (value > 38 && value <= 42) {
                return metStyles[met]['coloreight'];
            } else if (value > 42 && value <= 50) {
                return metStyles[met]['colornine'];
		    } else if (value > 50 && value <= 60) {
                return metStyles[met]['colorten'];
            } else if (value > 60 && value <= 70) {
                return metStyles[met]['coloreleven'];
            } else if (value > 70 && value <= 80) {
                return metStyles[met]['colortwelve'];
            } else if (value > 80 && value <= 90) {
                return metStyles[met]['colorthirteen'];
		    } else if (value > 90 && value <= 100) {
                return metStyles[met]['colorfourteen'];
            } 
		} else if (met==='Prep'){
            let value = feature.get(met);
            if (value > 0 && value <= 0.1) {
                return metStyles[met]['colorone'];
            } else if (value > 0.1 && value <= 3.0) {
                return metStyles[met]['colortwo'];
            } else if (value > 3.0 && value <= 5.0) {
                return metStyles[met]['colorthree'];
            } else if (value > 5.0 && value <= 7.0) {
                return metStyles[met]['colorfour'];
            } else if (value > 7.0 && value <= 10.0) {
                return metStyles[met]['colorfive'];
		    } else if (value > 10.0 && value <= 15.0) {
                return metStyles[met]['colorsix'];
            } else if (value > 15.0 && value <= 20.0) {
                return metStyles[met]['colorseven'];
            } else if (value > 20.0 && value <= 25.0) {
                return metStyles[met]['coloreight'];
            } else if (value > 25.0 && value <= 30.0) {
                return metStyles[met]['colornine'];
		    } else if (value > 30.0 && value <= 40.0) {
                return metStyles[met]['colorten'];
            } else if (value > 40.0 && value <= 50.0) {
                return metStyles[met]['coloreleven'];
            } else if (value > 50.0 && value <= 60.0) {
                return metStyles[met]['colortwelve'];
            } else if (value > 60.0 && value <= 70.0) {
                return metStyles[met]['colorthirteen'];
		    } else if (value > 70.0 && value <= 80.0) {
                return metStyles[met]['colorfourteen'];
            } else if (value > 80.0 && value <= 90.0) {
                return metStyles[met]['colorfifteen'];
            } else if (value > 90.0 && value <= 100.0) {
                return metStyles[met]['colorsixteen'];
            } else if (value > 100.0 && value <= 125.0) {
                return metStyles[met]['colorseventeen'];
		    }				
		}  else if (met==='WS10'){
            let value = feature.get(met);
            if (value > 0 && value <= 2) {
                return metStyles[met]['colorone'];
            } else if (value > 2 && value <= 4) {
                return metStyles[met]['colortwo'];
            } else if (value > 4 && value <= 6) {
                return metStyles[met]['colorthree'];
            } else if (value > 6 && value <= 7) {
                return metStyles[met]['colorfour'];
            } else if (value > 7 && value <= 9) {
                return metStyles[met]['colorfive'];
		    } else if (value > 9 && value <= 10) {
                return metStyles[met]['colorsix'];
            } else if (value > 10 && value <= 11) {
                return metStyles[met]['colorseven'];
            } else if (value > 11 && value <= 14) {
                return metStyles[met]['coloreight'];
            } else if (value > 14 && value <= 16) {
                return metStyles[met]['colornine'];
		    } else if (value > 16 && value <= 18) {
                return metStyles[met]['colorten'];
            } else if (value > 18 && value <= 19) {
                return metStyles[met]['coloreleven'];
            } else if (value > 19 && value <= 20) {
                return metStyles[met]['colortwelve'];
            } else if (value > 20 && value <= 24) {
                return metStyles[met]['colorthirteen'];
		    } else if (value > 24 && value <= 25) {
                return metStyles[met]['colorfourteen'];
            } else if (value > 25 && value <= 35) {
                return metStyles[met]['colorfifteen'];
            } else if (value > 35 ) {
                return metStyles[met]['colorsixteen'];
            } 
         }	else if (met==='SnowC'){
            let value = feature.get(met);
            if (value > 0 && value <= 10) {
                return metStyles[met]['colorone'];
            } else if (value > 10 && value <= 20) {
                return metStyles[met]['colortwo'];
            } else if (value > 20 && value <= 30) {
                return metStyles[met]['colorthree'];
            } else if (value > 30 && value <= 40) {
                return metStyles[met]['colorfour'];
            } else if (value > 40 && value <= 50) {
                return metStyles[met]['colorfive'];
		    } else if (value > 50 && value <= 60) {
                return metStyles[met]['colorsix'];
            } else if (value > 60 && value <= 70) {
                return metStyles[met]['colorseven'];
            } else if (value > 70 && value <= 80) {
                return metStyles[met]['coloreight'];
            } else if (value > 80 && value <= 90) {
                return metStyles[met]['colornine'];
		    } else if (value > 90 && value <= 100) {
                return metStyles[met]['colorten'];
            } 
         }	
		}
    });
});

//----------------------------------------------------------------------------

let label = new ol.Overlay({
    element: document.createElement('div'),
    positioning: 'top-right'
});
map.addOverlay(label);

map.on('pointermove', function (event) {
    let selectedmet = document.querySelector('input[name="met"]:checked');
    if (selectedmet) {
        let met = selectedmet.value;
        let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
            return feature;
        }, {layerFilter: function(layer) {
            return layer === metVectorLayers[met];
        }});
        if (feature && feature.get(met)) {
            let value = feature.get(met);
			if (met==='ST2') {
				met='Surface temperature at 2m'
            let content = '<p>' + met + ': ' + value +' ℃'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
			label.getElement().style.zIndex = 1001;
			} else if(met==='RH2'){	
		    met='Relative humidity at 2m'
            let content = '<p>' + met + ': ' + value +' %'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;			
			} else if(met==='Prep'){	
			met='Precipitation'
            let content = '<p>' + met + ': ' + value +' mm'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			} else if(met==='SnowC'){	
			met='Snow cover percentage'
            let content = '<p>' + met + ': ' + value +' %'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			} else if(met==='WS10'){	
			met='Wind speed at 10m'
            let content = '<p>' + met + ': ' + value +' m/s'+'</p>';
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

function chgMetLayer(met) {
    map.getLayers().getArray().forEach(function(layer) {
        if (layer instanceof ol.layer.Vector&& layer !== citiesLayer) {
            map.removeLayer(layer);
        }
    });
    if (metVectorLayers[met]) {
        if (!map.getLayers().getArray().includes(metVectorLayers[met])) {
            map.addLayer(metVectorLayers[met]);
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
    //chgLayer(met);
}
//---------------------------------------------------------------
    function handleRadioChange() {
      const radios = document.getElementsByName('data');
      radios.forEach(radio => {
        radio.addEventListener('change', function() {
          const selectedValue = this.value;

          map.getLayers().forEach(layer => {
            if (layer === Arcgis || layer === OSM) {
              layer.setVisible(true); // Always keep OSM layer visible
            } else {
              layer.setVisible(layer.get('title') === selectedValue);
            }
          });
        });
      });
    }

    handleRadioChange(); // Call the function to set up event listeners





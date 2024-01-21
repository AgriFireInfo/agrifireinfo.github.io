
//--------------------------------------------------------
let cropsVectorSources = {
    'MaizR': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/MaizR.geojson'
    }),
    'MaizI': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/MaizI.geojson'
    }),
    'RiceR': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/RiceR.geojson'
    }),
    'RiceI': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/RiceI.geojson'
    }),
    'SoybR': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/SoybR.geojson'
    }),
    'SoybI': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/SoybI.geojson'
    }),
	
    'WheSR': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/WheSR.geojson'
    }),
    'WheSI': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/WheSI.geojson'
    }),
    'WheWR': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/WheWR.geojson'
    }),
    'WheWI': new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://pfplatform.oss-cn-beijing.aliyuncs.com/FestC/WheWI.geojson'
    })
	
};

var cropStyles = {
    'MaizR': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },
    'MaizI': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },
    'RiceI': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },
    'RiceR': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },
   'SoybR': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },
   'SoybI': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },	

   'WheSI': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },	

   'WheSR': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },	

   'WheWI': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },	

   'WheWR': {
    'colorone': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(251, 241, 132, 0.5)' // 
        })
    }),
    'colortwo': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 90, 31, 0.5)' // 
        })
    }),
    'colorthr': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 64, 0.5)' // 
        })
    }),
    'colorfou': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 102, 0.5)' // 
        })
    }),
    'colorfiv': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(245, 0, 151, 0.5)' // 
        })
    }),
    'colorsix': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(169, 0, 207, 0.5)' // 204，0，0
        })
    }),	
    'colorsev': new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 255, 0.5)' // 
        })
    }),
    },		
};

var cropsVectorLayers = {};

Object.keys(cropsVectorSources).forEach(function(crops) {
    cropsVectorLayers[crops] = new ol.layer.Vector({
        source: cropsVectorSources[crops],
        style: function (feature) {
			if (crops==='MaizR' || crops==='MaizI'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 100 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 100 && value <= 150 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 150 && value <= 200 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 200 && value <= 250 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 250 && value <= 300 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 300 && value <= 350 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 350) {
                return cropStyles[crops]['colorsev'];
            } 
		}else if(crops==='RiceI'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 20 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 20 && value <= 40 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 40 && value <= 60 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 60 && value <= 80 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 80 && value <= 100 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 100 && value <= 120 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 120) {
                return cropStyles[crops]['colorsev'];
            } 				
		} else if(crops==='RiceR'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 40 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 40 && value <= 80 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 80 && value <= 120 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 120 && value <= 160 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 160 && value <= 200 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 200 && value <= 240 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 240) {
                return cropStyles[crops]['colorsev'];
            } 				
		}  else if(crops==='SoybR'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 20 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 20 && value <= 40 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 40 && value <= 60 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 60 && value <= 80 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 80 && value <= 100 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 100 && value <= 120 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 120) {
                return cropStyles[crops]['colorsev'];
            } 				
		}   else if(crops==='SoybI'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 10 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 10 && value <= 20 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 20 && value <= 30 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 30 && value <= 40 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 40 && value <= 50 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 50 && value <= 60 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 60) {
                return cropStyles[crops]['colorsev'];
            } 				
		}   else if(crops==='WheSI'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 10 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 10 && value <= 20 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 20 && value <= 30 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 30 && value <= 40 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 40 && value <= 50 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 50 && value <= 60 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 60) {
                return cropStyles[crops]['colorsev'];
            } 				
		}  else if(crops==='WheSR'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 20 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 20 && value <= 40 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 40 && value <= 60 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 60 && value <= 80 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 80 && value <= 100 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 100 && value <= 120 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 120) {
                return cropStyles[crops]['colorsev'];
            } 				
		} else if(crops==='WheWI'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 20 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 20 && value <= 40 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 40 && value <= 60 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 60 && value <= 80 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 80 && value <= 100 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 100 && value <= 120 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 120) {
                return cropStyles[crops]['colorsev'];
            } 				
		}  else if(crops==='WheWR'){
            let value = feature.get(crops);
            if (value >= 1 && value <= 10 ) {
                return cropStyles[crops]['colorone'];
            } else if (value > 10 && value <= 20 ) {
                return cropStyles[crops]['colortwo'];
            } else if (value > 20 && value <= 30 ) {
                return cropStyles[crops]['colorthr'];
            } else if (value > 30 && value <= 40 ) {
                return cropStyles[crops]['colorfou'];
            } else if (value > 40 && value <= 50 ) {
                return cropStyles[crops]['colorfiv'];
            } else if (value > 50 && value <= 60 ) {
                return cropStyles[crops]['colorsix'];
            } else if (value > 60) {
                return cropStyles[crops]['colorsev'];
            } 				
		}
      }
    });
});

//----------------------------------------------------------------------------
//var label = new ol.Overlay({
//    element: document.createElement('div'),
//    positioning: 'top-right'
//});
//map.addOverlay(label);

map.on('pointermove', function (event) {
    let selectedcrops = document.querySelector('input[name="Cropmap"]:checked');
    if (selectedcrops) {
        let crops = selectedcrops.value;
        let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
            return feature;
        }, {layerFilter: function(layer) {
            return layer === cropsVectorLayers[crops];
        }});
        if (feature && feature.get(crops)) {
            let value = feature.get(crops);
			if (crops==='MaizR') {
				crops='Maize(rain-fed)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
			label.getElement().style.zIndex = 1001;
			} else if(crops==='MaizI'){	
		    crops = 'Maize(irrigated)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;			
			} else if(crops==='RiceR'){	
			crops = 'Rice(rain-fed)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			} else if(crops==='RiceI'){	
			crops = 'Rice(irrigated)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";	
			label.getElement().style.zIndex = 10011;			
			} else if(crops==='SoybR'){	
			crops='Soybean(rain-fed)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";	
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;			
			} else if(crops==='SoybI'){	
			crops='Soybean(irrigated)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";	
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;			
			} else if(crops==='WheSR'){	
			crops='Spring wheat(rain-fed)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			} else if(crops==='WheSI'){	
			crops='Spring wheat(irrigated)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			} else if(crops==='WheWR'){	
			crops='Winter wheat(rain-fed)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
            label.getElement().innerHTML = content;
            label.setPosition(event.coordinate);
            label.getElement().style.display = 'block';
            label.getElement().style.backgroundColor = "#D3D3D3";
            label.getElement().style.borderRadius = "6px";
			label.getElement().style.position = 'relative';
            label.getElement().style.zIndex = 1001;				
			} else if(crops==='WheWI'){	
			crops='Winter wheat(irrigated)'
            let content = '<p>' + crops + ': ' + value +' Gg'+'</p>';
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

function chgCrop(crops) {
    map.getLayers().getArray().forEach(function(layer) {
        if (layer instanceof ol.layer.Vector&& layer !== citiesLayer) {
            map.removeLayer(layer);
        }
    });
    if (cropsVectorLayers[crops]) {
        if (!map.getLayers().getArray().includes(cropsVectorLayers[crops])) {
            map.addLayer(cropsVectorLayers[crops]);
        }
    }
}


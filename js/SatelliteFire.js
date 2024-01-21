//-----------------------------------------------------------------------
//Platform name : AgriFireWatch
//Author        : Guangyi Yang
//Email         : 1050011755@qq.com
//-----------------------------------------------------------------------


let attribution = new ol.control.Attribution({
    collapsible: false
});

//Basemap Layer
//Arcgis map layer: Gaode street
let Arcgis = new ol.layer.Tile({
    Tile: "ArcgisMap",
    source: new ol.source.XYZ({
        url: 'http://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scale=1&style=8',
        maxZoom: 18
    })
});

//Open street map layer street
//Reference:https://effis.jrc.ec.europa.eu/
let OSM = new ol.layer.Tile({
    Title: "OpenStreetMap",
    source: new ol.source.OSM({
        url: 'https://api.maptiler.com/maps/d0cddbbe-6f77-45ae-aafb-25f8d32aa78d/{z}/{x}/{y}.jpg?key=pNUD8X90rA79U5qeh6na',
        maxZoom: 18
    })
});

Arcgis.setOpacity(1);
OSM.setOpacity(0);


let map = new ol.Map({
    controls: ol.control.defaults({ attribution: false }).extend([attribution]),
    layers: [Arcgis,OSM], //Change Layer
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([110, 32]), //CenterLonLat
        maxZoom: 18,
        zoom: 4
    })
});
//Date: 2023/04/04
//Fire spot style Reference: https://openlayers.org/en/latest/examples/regularshape.html
Stroke = new ol.style.Stroke({ color: 'black', width: 0.9 });
NOAA20Fill = new ol.style.Fill({ color: 'red' });
ViirsFill = new ol.style.Fill({ color: 'darkorange' });
ModisFill = new ol.style.Fill({ color: 'magenta' });
KuihuaFill = new ol.style.Fill({ color: 'green' });

let ViirsStyleOneDay = new ol.style.Circle({
    radius: 2.5, //控制形状的大小
    stroke: Stroke, //形状边框
    scale: 1, //设置比例
    fill: ViirsFill, //填充颜色
});

let ViirsStyleTwoDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 3,
    scale: 1, //设置比例
    fill: ViirsFill, //填充颜色
    angle: Math.PI / 4,
});

let ViirsStyleThreeDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 4,
    scale: 1, //设置比例
    fill: ViirsFill, //填充颜色
    angle: Math.PI / 4,
});

let ViirsStyleSevenDay = new ol.style.RegularShape({
    points: 5,
    radius: 3.5, //控制形状的大小
    redius2: 4,
    stroke: Stroke, //形状边框
    fill: ViirsFill, //填充颜色
    angle: 0,
});

//Date: 2023/04/07
//Modis Style
let ModisStyleOneDay = new ol.style.Circle({
    radius: 2.5, //控制形状的大小
    stroke: Stroke, //形状边框
    scale: 1, //设置比例
    fill: ModisFill, //填充颜色
});

let ModisStyleTwoDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 3,
    scale: 1, //设置比例
    fill: ModisFill, //填充颜色
    angle: Math.PI / 4,
});

let ModisStyleThreeDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 4,
    scale: 1, //设置比例
    fill: ModisFill, //填充颜色
    angle: Math.PI / 4,
});

let ModisStyleSevenDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 5,
    scale: 1, //设置比例
    fill: ModisFill, //填充颜色
    angle: Math.PI / 4,
});

//Date: 2023/04/07
//KH Style
let KuihuaStyleOneDay = new ol.style.Circle({
    radius: 2.5, //控制形状的大小
    stroke: Stroke, //形状边框
    scale: 1, //设置比例
    fill: KuihuaFill, //填充颜色
});

let KuihuaStyleTwoDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 3,
    scale: 1, //设置比例
    fill: KuihuaFill, //填充颜色
    angle: Math.PI / 4,
});

let KuihuaStyleThreeDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 4,
    scale: 1, //设置比例
    fill: KuihuaFill, //填充颜色
    angle: Math.PI / 4,
});

let KuihuaStyleSevenDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 5,
    scale: 1, //设置比例
    fill: KuihuaFill, //填充颜色
    angle: Math.PI / 4,
});

//Date: 2023/04/07
//NOAA20 Style
let NOAA20StyleOneDay = new ol.style.Circle({
    radius: 2.5, //控制形状的大小
    stroke: Stroke, //形状边框
    scale: 1, //设置比例
    fill: NOAA20Fill, //填充颜色
});

let NOAA20StyleTwoDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 3,
    scale: 1, //设置比例
    fill: NOAA20Fill, //填充颜色
    angle: Math.PI / 4,
});

let NOAA20StyleThreeDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 4,
    scale: 1, //设置比例
    fill: NOAA20Fill, //填充颜色
    angle: Math.PI / 4,
});

let NOAA20StyleSevenDay = new ol.style.RegularShape({
    radius: 3.5, //控制形状的大小
    stroke: Stroke, //形状边框
    points: 5,
    scale: 1, //设置比例
    fill: NOAA20Fill, //填充颜色
    angle: Math.PI / 4,
});

//VIIRS火点图层1day
let ViirsLayerOneDay = null;
function AddViirsLayerOneDay() {
    if (ViirsLayerOneDay) {
        map.addLayer(ViirsLayerOneDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/viirs20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frp);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpone: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ViirsLayerOneDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ViirsStyleOneDay })
        });
        map.addLayer(ViirsLayerOneDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
		//----------------------
		//let overlayDiv = label.getElement();
        //  overlayDiv.style.opacity = '0.8';
		//----------------------
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frpone')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpone');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//VIIRS火点图层2day
let ViirsLayerTwoDay = null;
function AddViirsLayerTwoDay() {
    if (ViirsLayerTwoDay) {
        map.addLayer(ViirsLayerTwoDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/viirs20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frp);
                let address = d.address;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frptwo: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ViirsLayerTwoDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ViirsStyleTwoDay })
        });
        map.addLayer(ViirsLayerTwoDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);
        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frptwo')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frptwo');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//VIIRS火点图层3day
let ViirsLayerThreeDay = null;
function AddViirsLayerThreeDay() {
    if (ViirsLayerThreeDay) {
        map.addLayer(ViirsLayerThreeDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/viirs20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frp);
                let address = d.address;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpthr: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ViirsLayerThreeDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ViirsStyleThreeDay })
        });
        map.addLayer(ViirsLayerThreeDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frpthr')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpthr');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//VIIRS火点图层7day
let ViirsLayerSevenDay = null;
function AddViirsLayerSevenDay() {
    if (ViirsLayerSevenDay) {
        map.addLayer(ViirsLayerSevenDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/viirs20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frp);
                let address = d.address;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpsev: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ViirsLayerSevenDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ViirsStyleSevenDay })
        });
        map.addLayer(ViirsLayerSevenDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frpsev')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpsev');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//MODIS火点图层及调用函数
let ModisLayerOneDay = null;
function AddModisLayerOneDay() {
    if (ModisLayerOneDay) {
        map.addLayer(ModisLayerOneDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/modis20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frpm);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpmone: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ModisLayerOneDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ModisStyleOneDay })
        });
        map.addLayer(ModisLayerOneDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frpmone')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpmone');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------

    }
}

//MODIS火点图层及调用函数
let ModisLayerTwoDay = null;
function AddModisLayerTwoDay() {
    if (ModisLayerTwoDay) {
        map.addLayer(ModisLayerTwoDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/modis20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frpm);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpmtwo: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ModisLayerTwoDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ModisStyleTwoDay })
        });
        map.addLayer(ModisLayerTwoDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frpmtwo')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpmtwo');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//MODIS火点图层及调用函数
let ModisLayerThreeDay = null;
function AddModisLayerThreeDay() {
    if (ModisLayerThreeDay) {
        map.addLayer(ModisLayerThreeDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/modis20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frpm);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpmthr: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ModisLayerThreeDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ModisStyleThreeDay })
        });
        map.addLayer(ModisLayerThreeDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frpmthr')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpmthr');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//MODIS火点图层及调用函数
let ModisLayerSevenDay = null;
function AddModisLayerSevenDay() {
    if (ModisLayerSevenDay) {
        map.addLayer(ModisLayerSevenDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/modis20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frpm);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpmsev: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        ModisLayerSevenDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: ModisStyleSevenDay })
        });
        map.addLayer(ModisLayerSevenDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
            if (feature && feature.get('frpmsev')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpmsev');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//H8火点图层
let KuihuaLayerOneDay = null;
function AddKuihuaLayerOneDay() {
    if (KuihuaLayerOneDay) {
        map.addLayer(KuihuaLayerOneDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/h920230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.lon);
                let lat = parseFloat(d.lat);
                let frp = parseFloat(d.frph);
                let address = d.addressen;
                let time = d.acq_time;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frphone: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        KuihuaLayerOneDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: KuihuaStyleOneDay })
        });
        map.addLayer(KuihuaLayerOneDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frphone')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frphone');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//H8火点图层
let KuihuaLayerTwoDay = null;
function AddKuihuaLayerTwoDay() {
    if (KuihuaLayerTwoDay) {
        map.addLayer(KuihuaLayerTwoDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/h920230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.lon);
                let lat = parseFloat(d.lat);
                let frp = parseFloat(d.frph);
                let address = d.addressen;
                let time = d.acq_time;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frphtwo: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        KuihuaLayerTwoDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: KuihuaStyleTwoDay })
        });
        map.addLayer(KuihuaLayerTwoDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frphtwo')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frphtwo');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//H8火点图层
let KuihuaLayerThreeDay = null;
function AddKuihuaLayerThreeDay() {
    if (KuihuaLayerThreeDay) {
        map.addLayer(KuihuaLayerThreeDay);
    } else {
        var vectorSource = new ol.source.Vector({});
        d3.csv("./csv/h920230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.lon);
                let lat = parseFloat(d.lat);
                let frp = parseFloat(d.frph);
                let address = d.addressen;
                let time = d.acq_time;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frphthr: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        KuihuaLayerThreeDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: KuihuaStyleThreeDay })
        });
        map.addLayer(KuihuaLayerThreeDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frphthr')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frphthr');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//H8火点图层
let KuihuaLayerSevenDay = null;
function AddKuihuaLayerSevenDay() {
    if (KuihuaLayerSevenDay) {
        map.addLayer(KuihuaLayerSevenDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/h920230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.lon);
                let lat = parseFloat(d.lat);
                let frp = parseFloat(d.frph);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frphsev: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        KuihuaLayerSevenDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: KuihuaStyleSevenDay })
        });
        map.addLayer(KuihuaLayerSevenDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frphsev')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frphsev');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//FY火点图层
let NOAA20LayerOneDay = null;
function AddNOAA20LayerOneDay() {
    if (NOAA20LayerOneDay) {
        map.addLayer(NOAA20LayerOneDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/noaa20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frp);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpnone: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        NOAA20LayerOneDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: NOAA20StyleOneDay })
        });
        map.addLayer(NOAA20LayerOneDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frpnone')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpnone');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
    }
}

let NOAA20LayerTwoDay = null;
function AddNOAA20LayerTwoDay() {
    if (NOAA20LayerTwoDay) {
        map.addLayer(NOAA20LayerTwoDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/noaa20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frp);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpntwo: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        NOAA20LayerTwoDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: NOAA20StyleTwoDay })
        });
        map.addLayer(NOAA20LayerTwoDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frpntwo')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpntwo');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------

    }
}


//FY火点图层
let NOAA20LayerThreeDay = null;
function AddNOAA20LayerThreeDay() {
    if (NOAA20LayerThreeDay) {
        map.addLayer(NOAA20LayerThreeDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/noaa20230405.csv").then(function (data) {
            data.forEach(function (d) {
                let lon = parseFloat(d.longitude);
                let lat = parseFloat(d.latitude);
                let frp = parseFloat(d.frp);
                let address = d.addressen;
                let time = d.acq_date;
                let satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpnthr: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        NOAA20LayerThreeDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: NOAA20StyleThreeDay })
        });
		
        map.addLayer(NOAA20LayerThreeDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frpnthr')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpnthr');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

let NOAA20LayerSevenDay = null;
function AddNOAA20LayerSevenDay() {
    if (NOAA20LayerSevenDay) {
        map.addLayer(NOAA20LayerSevenDay);
    } else {
        let vectorSource = new ol.source.Vector({});
        d3.csv("./csv/noaa20230405.csv").then(function (data) {
            data.forEach(function (d) {
                const lon = parseFloat(d.longitude);
                const lat = parseFloat(d.latitude);
                const frp = parseFloat(d.frp);
                const address = d.addressen;
                const time = d.acq_date;
                const satellite = d.instrument;
                if (!isNaN(lon) && !isNaN(lat)) {
                    let feature = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                        lon: lon,
                        lat: lat,
                        address: address,
                        time: time,
                        frpnsev: frp,
                        satellite: satellite
                    });
                    vectorSource.addFeature(feature);
                }
            });
        });
        NOAA20LayerSevenDay = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({ image: NOAA20StyleSevenDay })
        });
        map.addLayer(NOAA20LayerSevenDay);
        //-----------------------------------------------------------------------------------
        let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
        });
        map.addOverlay(label);

        // 创建一个监听器，以便在鼠标移动到点对象上时显示标签
        map.on('pointermove', function (event) {
            let feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
                return feature;
            });
           if (feature && feature.get('frpnsev')) {
                let obsLon=feature.get('lon');
                let obsLat=feature.get('lat');
                let obsAddress = feature.get('address');
                let obsTime = feature.get('time');
                let obsSate = feature.get('satellite');
                let obsFrp = feature.get('frpnsev');

                let content = '<p>Longitude: ' + obsLon + '</p>' +
                              '<p>Latitude: ' + obsLat + '</p>' +
                              '<p>Geographic location: ' + obsAddress + '</p>' +
                              '<p>Observation time: ' + obsTime + '</p>' +
                              '<p>Satellite: ' + obsSate + '</p>' +
                              '<p>Fire radiative power: ' + obsFrp + ' MW</p>'
                label.getElement().innerHTML = content;
                label.setPosition(event.coordinate);
                label.getElement().style.display = 'block';
                label.getElement().style.backgroundColor = "rgba(211, 211, 211, 0.7)";
                label.getElement().style.borderRadius = "6px";
				label.getElement().style.fontFamily = 'Times New Roman, serif';
                label.getElement().style.fontWeight = 'bold';
            } else {
                label.getElement().style.display = 'none';
            }
        });
        //------------------------------------------------------------------------------------------
    }
}

//-----------------------------------------------------------------------------
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
var citiesLayer = new ol.layer.Vector({
    source: citiesSource,
    style: cityVectorStyle // 应用样式
});

// 将 Vector Layers 添加到地图
//map.addLayer(provincesLayer);
//map.addLayer(citiesLayer);
//-----------------------------------------------------
let label = new ol.Overlay({
            element: document.createElement('div'),
            positioning: 'top-right'
             });
map.addOverlay(label);	
		
//------------------------------------------------------------------------------------------------


function switchMap(type) {
    const arcgisOpacity = type === 'OSM' ? 0 : 1;
    const osmOpacity = type === 'OSM' ? 1 : 0;
    Arcgis.setOpacity(arcgisOpacity);
    OSM.setOpacity(osmOpacity);
    chgDate();
}

function switchMap(type) {
    const arcgisOpacity = type === 'OSM' ? 0 : 1;
    const osmOpacity = type === 'OSM' ? 1 : 0;
    Arcgis.setOpacity(arcgisOpacity);
    OSM.setOpacity(osmOpacity);
    chgDate();
}

function chgDate() {
    const layers = [
        { layer: ViirsLayerOneDay, zIndex: 1 },
        { layer: ViirsLayerTwoDay, zIndex: 2 },
        { layer: ViirsLayerThreeDay, zIndex: 3 },
        { layer: ViirsLayerSevenDay, zIndex: 4 },
        { layer: ModisLayerOneDay, zIndex: 5 },
        { layer: ModisLayerTwoDay, zIndex: 6 },
        { layer: ModisLayerThreeDay, zIndex: 7 },
        { layer: ModisLayerSevenDay, zIndex: 8 },
        { layer: KuihuaLayerOneDay, zIndex: 9 },
        { layer: KuihuaLayerTwoDay, zIndex: 10 },
        { layer: KuihuaLayerThreeDay, zIndex: 11 },
        { layer: KuihuaLayerSevenDay, zIndex: 12 },
        { layer: NOAA20LayerOneDay, zIndex: 13 },
        { layer: NOAA20LayerTwoDay, zIndex: 14 },
        { layer: NOAA20LayerThreeDay, zIndex: 15 },
        { layer: NOAA20LayerSevenDay, zIndex: 16 }
    ];

    layers.forEach(layerObj => {
        const { layer, zIndex } = layerObj;
        if (layer) {
            layer.setZIndex(zIndex);
            map.removeLayer(layer);
        }
    });

    const satelliteSources = document.getElementsByName('satelliteSource');
    satelliteSources.forEach(item => {
        if (item.checked) {
            switch (item.value) {
                case 'pastOneV':
                    this.AddViirsLayerOneDay();
                    break;
                case 'pastTwoV':
                    this.AddViirsLayerTwoDay();
                    break;
                case 'pastThrV':
                    this.AddViirsLayerThreeDay();
                    break;
                case 'pastSevV':
                    this.AddViirsLayerSevenDay();
                    break;
                case 'pastOneM':
                    this.AddModisLayerOneDay();
                    break;
                case 'pastTwoM':
                    this.AddModisLayerTwoDay();
                    break;
                case 'pastThrM':
                    this.AddModisLayerThreeDay();
                    break;
                case 'pastSevM':
                    this.AddModisLayerSevenDay();
                    break;
                case 'pastOneH':
                    this.AddKuihuaLayerOneDay();
                    break;
                case 'pastTwoH':
                    this.AddKuihuaLayerTwoDay();
                    break;
                case 'pastThrH':
                    this.AddKuihuaLayerThreeDay();
                    break;
                case 'pastSevH':
                    this.AddKuihuaLayerSevenDay();
                    break;
                case 'pastOneN':
                    this.AddNOAA20LayerOneDay();
                    break;
                case 'pastTwoN':
                    this.AddNOAA20LayerTwoDay();
                    break;
                case 'pastThrN':
                    this.AddNOAA20LayerThreeDay();
                    break;
                case 'pastSevN':
                    this.AddNOAA20LayerSevenDay();
                    break;
            }
        }
    });
}

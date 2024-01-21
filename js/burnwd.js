
let attribution = new ol.control.Attribution({
    collapsible: false
});

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

let projectionName = 'EPSG:5479';
proj4.defs(projectionName, '+proj=lcc +lat_1=36 +lat_2=46 +lat_0=42 +lon_0=126 +units=m +no_defs');
ol.proj.proj4.register(proj4);

//Map底图
let map = new ol.Map({
    target: 'map',
    layers: [Arcgis, OSM],
    view: new ol.View({
        projection: projectionName,
        center: ol.proj.transform([125, 41], 'EPSG:4326', projectionName),
        zoom: 5.2,
        maxZoom: 18,
    })
});

//----------------Swipe-----------------
let swipe = new ol.control.Swipe();
map.addControl(swipe);
//--------------------------------------
var windTimeVal = [];
var T2TimeVal = [];

//let extent = [-895000.0000, -415000.0000, 690000.0000, 1413000.0000]
let extent = [-883000.0000, -390000.0000, 690000.0000, 1419000.0000]
//-------添加Grid燃烧窗口图片---------
let gridImgUrl = [
"../bwpnggrid/2023110220.png",
"../bwpnggrid/2023110221.png",
"../bwpnggrid/2023110222.png",
"../bwpnggrid/2023110223.png",
"../bwpnggrid/2023110300.png",
"../bwpnggrid/2023110301.png",
"../bwpnggrid/2023110302.png",
"../bwpnggrid/2023110303.png",
"../bwpnggrid/2023110304.png",
"../bwpnggrid/2023110305.png",
"../bwpnggrid/2023110306.png",
"../bwpnggrid/2023110307.png",
"../bwpnggrid/2023110308.png",
"../bwpnggrid/2023110309.png",
"../bwpnggrid/2023110310.png",
"../bwpnggrid/2023110311.png",
"../bwpnggrid/2023110312.png",
"../bwpnggrid/2023110313.png",
"../bwpnggrid/2023110314.png",
"../bwpnggrid/2023110315.png",
"../bwpnggrid/2023110316.png",
"../bwpnggrid/2023110317.png",
"../bwpnggrid/2023110318.png",
"../bwpnggrid/2023110319.png",
"../bwpnggrid/2023110320.png",
"../bwpnggrid/2023110321.png",
"../bwpnggrid/2023110322.png",
"../bwpnggrid/2023110323.png",
"../bwpnggrid/2023110400.png",
"../bwpnggrid/2023110401.png",
"../bwpnggrid/2023110402.png",
"../bwpnggrid/2023110403.png",
"../bwpnggrid/2023110404.png",
"../bwpnggrid/2023110405.png",
"../bwpnggrid/2023110406.png",
"../bwpnggrid/2023110407.png",
"../bwpnggrid/2023110408.png",
"../bwpnggrid/2023110409.png",
"../bwpnggrid/2023110410.png",
"../bwpnggrid/2023110411.png",
"../bwpnggrid/2023110412.png",
"../bwpnggrid/2023110413.png",
"../bwpnggrid/2023110414.png",
"../bwpnggrid/2023110415.png",
"../bwpnggrid/2023110416.png",
"../bwpnggrid/2023110417.png",
"../bwpnggrid/2023110418.png",
"../bwpnggrid/2023110419.png",
"../bwpnggrid/2023110420.png"]
let gridLayers = []
function addGridImgLayer() {
    for (let i = 0; i <= gridImgUrl.length - 1; i++) {
        let gridImgLayer = new ol.layer.Image({
            source: new ol.source.ImageStatic({
                url: gridImgUrl[i],
                imageExtent: extent
            })
        })
        gridImgLayer.setOpacity(0)
        gridLayers.push(gridImgLayer)
        map.addLayer(gridImgLayer)
    }
}
addGridImgLayer()

let countyImgUrl = [
"../bwpngcounty/2023110220.png",
"../bwpngcounty/2023110221.png",
"../bwpngcounty/2023110222.png",
"../bwpngcounty/2023110223.png",
"../bwpngcounty/2023110300.png",
"../bwpngcounty/2023110301.png",
"../bwpngcounty/2023110302.png",
"../bwpngcounty/2023110303.png",
"../bwpngcounty/2023110304.png",
"../bwpngcounty/2023110305.png",
"../bwpngcounty/2023110306.png",
"../bwpngcounty/2023110307.png",
"../bwpngcounty/2023110308.png",
"../bwpngcounty/2023110309.png",
"../bwpngcounty/2023110310.png",
"../bwpngcounty/2023110311.png",
"../bwpngcounty/2023110312.png",
"../bwpngcounty/2023110313.png",
"../bwpngcounty/2023110314.png",
"../bwpngcounty/2023110315.png",
"../bwpngcounty/2023110316.png",
"../bwpngcounty/2023110317.png",
"../bwpngcounty/2023110318.png",
"../bwpngcounty/2023110319.png",
"../bwpngcounty/2023110320.png",
"../bwpngcounty/2023110321.png",
"../bwpngcounty/2023110322.png",
"../bwpngcounty/2023110323.png",
"../bwpngcounty/2023110400.png",
"../bwpngcounty/2023110401.png",
"../bwpngcounty/2023110402.png",
"../bwpngcounty/2023110403.png",
"../bwpngcounty/2023110404.png",
"../bwpngcounty/2023110405.png",
"../bwpngcounty/2023110406.png",
"../bwpngcounty/2023110407.png",
"../bwpngcounty/2023110408.png",
"../bwpngcounty/2023110409.png",
"../bwpngcounty/2023110410.png",
"../bwpngcounty/2023110411.png",
"../bwpngcounty/2023110412.png",
"../bwpngcounty/2023110413.png",
"../bwpngcounty/2023110414.png",
"../bwpngcounty/2023110415.png",
"../bwpngcounty/2023110416.png",
"../bwpngcounty/2023110417.png",
"../bwpngcounty/2023110418.png",
"../bwpngcounty/2023110419.png",
"../bwpngcounty/2023110420.png"]

let countyLayers = []
function addCountyImgLayer() {
    for (let i = 0; i <= countyImgUrl.length - 1; i++) {
        let countyImgLayer = new ol.layer.Image({
            source: new ol.source.ImageStatic({
                url: countyImgUrl[i],
                imageExtent: extent
            })
        })
        countyImgLayer.setOpacity(0)
        countyLayers.push(countyImgLayer)
        map.addLayer(countyImgLayer)
    }
}

addCountyImgLayer()

function updateInfo(TimeIndex) {
    const el = document.getElementById('info')
    el.innerHTML = countyImgUrl[TimeIndex]
}

var index = 0
function setTimeImage(imageIndex) {
    index = imageIndex
    gridLayers[index].setOpacity(1.0)
    countyLayers[index].setOpacity(1.0)
    //------Reference:
    swipe.addLayer(gridLayers[index])
    swipe.addLayer(countyLayers[index], true)
    let selectPointerMove1 = new ol.interaction.Select({
        condition: function (e) {
            return (
                ol.events.condition.pointerMove(e) &&
                e.pixel[0] < map.getSize()[0] * swipe.get('position')
            );
        },
        multi: false,
        layers: gridLayers[index],
    })

    let selectPointerMove2 = new ol.interaction.Select({
        condition: function (e) {
            return (
                ol.events.condition.pointerMove(e) &&
                e.pixel[0] > map.getSize()[0] * swipe.get('position')
            );
        },
        multi: false,
        layers: countyLayers[index],
    });

    map.addInteraction(selectPointerMove1);
    map.addInteraction(selectPointerMove2);

    gridLayers.map((item, i) => {
        if (i !== index) {
            item.setOpacity(0)
        }
    })
    countyLayers.map((item, i) => {
        if (i !== index) {
            item.setOpacity(0)
        }
    })



}

function switchMap(type) {
    if (type === 'OSM') {
        Arcgis.setOpacity(0);
        OSM.setOpacity(1);
    } else {
        Arcgis.setOpacity(1);
        OSM.setOpacity(0);
    }
    checkSelectedValues()//getValue()
}

let provinceSelect = document.getElementById('province');
let citySelect = document.getElementById('city');
let countySelect = document.getElementById('county');

let cities = {
    'Heilongjiang': ['Harbin', 'Qiqihar', 'Jixi', 'Hegang', 'Shuangyashan', 'Daqing', 'Yichun', 'Jiamusi', 'Qitaihe', 'Mudanjiang', 'Heihe', 'Suihua', 'Daxinganling'],
    'Jilin': ['Changchun', 'Jilin', 'Siping', 'Liaoyuan', 'Tonghua', 'Baishan', 'Songyuan', 'Baicheng', 'Yanbian'],
    'Liaoning': ['Shenyang', 'Dalian', 'Anshan', 'Fushun', 'Benxi', 'Dandong', 'Jinzhou', 'Yingkou', 'Fuxin', 'Liaoyang', 'Panjin', 'Tieling', 'Chaoyang', 'Huludao']
};
let counties = {
    'Harbin': ['Daoli', 'Daowai', 'Nangang', 'Pingfang', 'Songbei', 'Xiangfang', 'Hulan', 'Echeng', 'Shuangcheng', 'Yilan', 'Fangzheng', 'Binxian', 'Bayan', 'Mulan', 'Tonghe', 'Yanshou', 'Shangzhi', 'Wuchang'],
    'Qiqihar': ['Longsha', 'Jianhua', 'Tiefeng', 'Angangxi', 'Fulaerji', 'Nianzishan', 'Meilisidawoerzu', 'Longjiang', 'Yian', 'Tailai', 'Gannan', 'Fuyu', 'Keshan', 'Kedong', 'Baiquan', 'Nehe'],
    'Jixi': ['Jiguan', 'Hengshan', 'Didao', 'Lishu', 'Chengzihe', 'Mashan', 'Jidong', 'Hulin', 'Mishan'],
    'Hegang': ['Xingshan', 'Gongnong', 'Nanshan', 'Xingan', 'Dongshan', 'Xingshan', 'Luobeixian', 'Suibin'],
    'Shuangyashan': ['Jianshan', 'Lingdong', 'Sifangtai', 'Baoshan', 'Jixian', 'Youyi', 'Baoqing', 'Raohe'],
    'Daqing': ['Saertu', 'Longfeng', 'Ranghulu', 'Honggang', 'Datong', 'Zhaozhou', 'Zhaoyuan', 'Lindian', 'Duerbote'],
    'Yichun': ['Yimei', 'Wucui', 'Youhao', 'Jiayin', 'Tangwang', 'Fenglin', 'Daqingshan', 'Nancha', 'Jinlin', 'Tieli'],
    'Jiamusi': ['Xingshan', 'Qianjin', 'Dongfeng', 'Jiaoqu', 'Huanan', 'Huachuan', 'Tangyuan', 'Tongjiang', 'Fujin', 'Fuyuan'],
    'Qitaihe': ['Xinxing', 'Taoshan', 'Qiezihe', 'Boli'],
    'Mudanjiang': ['Dongan', 'Yangming', 'Aimin', 'Xian', 'Linkou', 'Suifenhe', 'Hailin', 'Ningan', 'Muling', 'Dongning'],
    'Heihe': ['Aihui', 'Xunke', 'Sunwu', 'Beian', 'Wudalianchi', 'Nenjiang'],
    'Suihua': ['Beilin', 'Wangkui', 'Lanxi', 'Qinggang', 'Qingan', 'Mingshui', 'Suiling', 'Anda', 'Zhaodong', 'Hailun'],
    'Daxinganling': ['Mohe', 'Huma', 'Tahe'],
    'Changchun': ['Nanguan', 'Kuancheng', 'Chaoyang', 'Erdao', 'Lvyuan', 'Shuangyang', 'Jiutai', 'Nongan', 'Yushu', 'Panshi','Gongzhuling'],
    'Jilin': ['Changyi', 'Longtan', 'Chuanying', 'Fengman', 'Yongji', 'Jiaohe', 'Huadian', 'Shulan', 'Panshi'],
    'Siping': ['Tiexi', 'Tiedong', 'Lishu', 'Yintongmanzu', 'Shuangliao'],
    'Liaoyuan': ['Longshan', 'Xian', 'Dongfeng', 'Dongliao'],
    'Tonghua': ['Dongchang', 'Erdaojiang', 'Tonghua', 'Huinan', 'Liuhe', 'Meihekou', 'Jian'],
    'Baishan': ['Hunjiang', 'Jiangyuan', 'Fusong', 'Jingyu', 'Changbaichaoxian', 'Linjiang'],
    'Songyuan': ['Ningjiang', 'Qianguoerluosi', 'Changling', 'Qianan', 'Fuyu'],
    'Baicheng': ['Taobei', 'Zhenlai', 'Tongyu', 'Taonan', 'Daan'],
    'Yanbian': ['Yanji', 'Tumen', 'Dunhua', 'Hunchun', 'Longjing', 'Helong', 'Wangqing', 'Antu'],
    'Shenyang': ['Heping', 'Shenhe', 'Dadong', 'Huanggu', 'Tiexi', 'Sujiatun', 'Hunnan', 'Shenbeixin', 'Yuhong', 'Liaozhong', 'Kangping', 'Faku', 'Xinmin'],
    'Dalian': ['Zhongshan', 'Xigang', 'Shahekou', 'Ganjingzi', 'Lvshunkou', 'Jinzhou', 'Pulandian', 'Changhai', 'Wafangdian', 'Zhuanghe'],
    'Anshan': ['Tiedong', 'Tiexi', 'Lishan', 'Qianshan', 'Taian', 'Youyanmanzu', 'Haicheng'],
    'Fushun': ['Xinfu', 'Dongzhou', 'Wanghua', 'Shuncheng', 'Fushun', 'Xinbinmanzu', 'Qingyuanmanzu'],
    'Benxi': ['Pingshan', 'Xihu', 'Mingshan', 'Nanfen', 'Benximanzu', 'Huanrenmanzu'],
    'Dandong': ['Yuanbao', 'Zhenxing', 'Zhenan', 'Kuandianmanzu', 'Donggang', 'Fengcheng'],
    'Jinzhou': ['Guta', 'Linghe', 'Taihe', 'Heishan', 'Yixian', 'Linghai', 'Beizhen'],
    'Yingkou': ['Zhanqian', 'Xishi', 'Bayuquan', 'Laobian', 'Gaizhou', 'Dashiqiao'],
    'Fuxin': ['Haizhou', 'Xinqiu', 'Taiping', 'Qinghemen', 'Xihe', 'Fuxinmengguzu', 'Zhangwu'],
    'Liaoyang': ['Baita', 'Wensheng', 'Hongwei', 'Gongchangling', 'Taizihe', 'Liaoyang', 'Dengta'],
    'Panjin': ['Shuangtaizi', 'Xinglongtai', 'Dawa', 'Panshan'],
    'Tieling': ['Yinzhou', 'Qinghe', 'Tieling', 'Xifeng', 'Changtu', 'Diaobingshan', 'Kaiyuan'],
    'Chaoyang': ['Shuangta', 'Longcheng', 'Chaoyang', 'Jianping', 'Kezuomenggu', 'Beipiao', 'lingyuan'],
    'Huludao': ['Lianshan', 'Longgang', 'Nanpiao', 'Suizhong', 'Jianchang', 'Xingcheng']
};
provinceSelect.innerHTML = '<option value="">Select Province</option>';
// 初始化省份下拉框
for (let province in cities) {
    let option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
}

// 省份下拉框改变事件
provinceSelect.onchange = function () {
    let selectedProvince = provinceSelect.value;
    let citiesArray = cities[selectedProvince];

    // 清空城市和县区下拉框
    citySelect.innerHTML = '<option value="">Select City</option>';
    countySelect.innerHTML = '<option value="">Select County</option>';

    // 初始化城市下拉框
    for (let i = 0; i < citiesArray.length; i++) {
        let option = document.createElement('option');
        option.value = citiesArray[i];
        option.textContent = citiesArray[i];
        citySelect.appendChild(option);
    }
}

// 城市下拉框改变事件
citySelect.onchange = function () {
    let selectedCity = citySelect.value;
    let countiesArray = counties[selectedCity];

    // 清空县区下拉框
    countySelect.innerHTML = '<option value="">Select County</option>';

    // 初始化县区下拉框
    for (let i = 0; i < countiesArray.length; i++) {
        let option = document.createElement('option');
        option.value = countiesArray[i];
        option.textContent = countiesArray[i];
        countySelect.appendChild(option);
    }
}

function checkSelectedValues() {
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Daoli') {
        index = 0
        setTimeImage(0)
        time(labelHarbinDaoliDistrict)
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Daowai') {
        index = 0
        setTimeImage(0)
        time(labelHarbinDaowaiDistrict)
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Nangang') {
        index = 0
        setTimeImage(0)
        time(labelHarbinNangangDistrict)
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Pingfang') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinPingfangDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Songbei') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinSongbeiDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Xiangfang') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinXiangfangDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Hulan') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinHulanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Echeng') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinEchengDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Shuangcheng') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinShuangchengDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Yilan') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinYilanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Fangzheng') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinFangzhengCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Binxian') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinBinCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Bayan') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinBayanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Mulan') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinMulanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Tonghe') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinTongheCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Yanshou') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinYanshouCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Shangzhi') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinShangzhiCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Harbin' && countySelect.value === 'Wuchang') {
        index = 0;
        setTimeImage(0);
        time(labelHarbinWuchangCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Longsha') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharLongshaDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Jianhua') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharJianhuaDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Tiefeng') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharTiefengDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Angangxi') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharAngangxiDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Fulaerji') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharFulaerjiDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Nianzishan') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharNianzishanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Meilisidawoerzu') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharMeilisiDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Longjiang') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharLongjiangCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Yian') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharYianCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Tailai') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharTailaiCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Gannan') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharGannanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Fuyu') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharFuyuCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Keshan') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharKeshanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Kedong') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharKedongCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Baiquan') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharBaiquanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qiqihar' && countySelect.value === 'Nehe') {
        index = 0;
        setTimeImage(0);
        time(labelQiqiharNeheCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Jiguan') {
        index = 0;
        setTimeImage(0);
        time(labelJixiJiguanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Hengshan') {
        index = 0;
        setTimeImage(0);
        time(labelJixiHengshanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Didao') {
        index = 0;
        setTimeImage(0);
        time(labelJixiDidaoDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Lishu') {
        index = 0;
        setTimeImage(0);
        time(labelJixiLishuDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Chengzihe') {
        index = 0;
        setTimeImage(0);
        time(labelJixiChengziheDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Mashan') {
        index = 0;
        setTimeImage(0);
        time(labelJixiMashanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Jidong') {
        index = 0;
        setTimeImage(0);
        time(labelJixiJidongCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Hulin') {
        index = 0;
        setTimeImage(0);
        time(labelJixiHulinCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jixi' && countySelect.value === 'Mishan') {
        index = 0;
        setTimeImage(0);
        time(labelJixiMishanCity);
    }
    //Hegang
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Xingshan') {
        index = 0;
        setTimeImage(0);
        time(labelHegangXiangyangDistrict);
    }


    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Gongnong') {
        index = 0;
        setTimeImage(0);
        time(labelHegangGongnongDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Nanshan') {
        index = 0;
        setTimeImage(0);
        time(labelHegangNanshanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Xingan') {
        index = 0;
        setTimeImage(0);
        time(labelHegangXinganDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Dongshan') {
        index = 0;
        setTimeImage(0);
        time(labelHegangDongshanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Xingshan') {
        index = 0;
        setTimeImage(0);
        time(labelHegangXingshanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Luobeixian') {
        index = 0;
        setTimeImage(0);
        time(labelHegangLuobeiCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Hegang' && countySelect.value === 'Suibin') {
        index = 0;
        setTimeImage(0);
        time(labelHegangSuibinCounty);
    }
    //Shuangyashan
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Jianshan') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanJianshanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Lingdong') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanLingdongDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Sifangtai') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanSifangtaiDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Baoshan') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanBaoshanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Jixian') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanJixianCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Youyi') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanYouyiCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Baoqing') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanBaoqingCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Shuangyashan' && countySelect.value === 'Raohe') {
        index = 0;
        setTimeImage(0);
        time(labelShuangyashanYaoheCounty);
    }
    //Daqing
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Saertu') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingSaertuDistrict);
    }


    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Longfeng') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingLongfengDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Ranghulu') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingRanghuluDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Honggang') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingHonggangDistrict);
    } else if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Datong') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingDatongDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Zhaozhou') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingZhaozhouCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Zhaoyuan') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingZhaoyuanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Lindian') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingLindianCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daqing' && countySelect.value === 'Duerbote') {
        index = 0;
        setTimeImage(0);
        time(labelDaqingDuerboteCounty);
    }
    //Yichun
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Yimei') {
        index = 0;
        setTimeImage(0);
        time(labelYichunYimeiDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Wucui') {
        index = 0;
        setTimeImage(0);
        time(labelYichunWucuiDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Youhao') {
        index = 0;
        setTimeImage(0);
        time(labelYichunYouhaoDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Jinlin') {
        index = 0;
        setTimeImage(0);
        time(labelYichunJinlinDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Jiayin') {
        index = 0;
        setTimeImage(0);
        time(labelYichunJiayinCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Tangwang') {
        index = 0;
        setTimeImage(0);
        time(labelYichunTangwangCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Fenglin') {
        index = 0;
        setTimeImage(0);
        time(labelYichunFenglinCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Daqingshan') {
        index = 0;
        setTimeImage(0);
        time(labelYichunDaqingshanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Nancha') {
        index = 0;
        setTimeImage(0);
        time(labelYichunNanchaCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Yichun' && countySelect.value === 'Tieli') {
        index = 0;
        setTimeImage(0);
        time(labelYichunTieliCity);
    }
    //Jiamusi
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Xingshan') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiXiangyangDistrict);
    }

    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Qianjin') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiQianjinDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Dongfeng') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiDongfengDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Jiaoqu') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiJiaoDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Huanan') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiHuananCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Huachuan') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiHuachuanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Tangyuan') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiTangyuanCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Tongjiang') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiTongjiangCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Fujin') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiFujinCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Jiamusi' && countySelect.value === 'Fuyuan') {
        index = 0;
        setTimeImage(0);
        time(labelJiamusiFuyuanCity);
    }
    //Qitaihe
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qitaihe' && countySelect.value === 'Xinxing') {
        index = 0;
        setTimeImage(0);
        time(labelQitaiheXinxingDistrict);
    }

    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qitaihe' && countySelect.value === 'Taoshan') {
        index = 0;
        setTimeImage(0);
        time(labelQitaiheTaoshanDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qitaihe' && countySelect.value === 'Qiezihe') {
        index = 0;
        setTimeImage(0);
        time(labelQitaiheQieziheDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Qitaihe' && countySelect.value === 'Boli') {
        index = 0;
        setTimeImage(0);
        time(labelQitaiheBoliCounty);
    }
    //Mudanjiang
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Dongan') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangDonganDistrict);
    }


    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Yangming') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangYangmingDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Aimin') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangAiminDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Xian') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangXianDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Linkou') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangLinkouCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Suifenhe') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangSuifenheCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Hailin') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangHailinCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Ningan') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangNinganCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Muling') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangMulingCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Mudanjiang' && countySelect.value === 'Dongning') {
        index = 0;
        setTimeImage(0);
        time(labelMudanjiangDongningCity);
    }
    //Heihe
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Heihe' && countySelect.value === 'Aihui') {
        index = 0;
        setTimeImage(0);
        time(labelHeiheAihuiDistrict);
    }

    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Heihe' && countySelect.value === 'Xunke') {
        index = 0;
        setTimeImage(0);
        time(labelHeiheXunkeCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Heihe' && countySelect.value === 'Sunwu') {
        index = 0;
        setTimeImage(0);
        time(labelHeiheSunwuCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Heihe' && countySelect.value === 'Beian') {
        index = 0;
        setTimeImage(0);
        time(labelHeiheBeianCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Heihe' && countySelect.value === 'Wudalianchi') {
        index = 0;
        setTimeImage(0);
        time(labelHeiheWudalianchiCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Heihe' && countySelect.value === 'Nenjiang') {
        index = 0;
        setTimeImage(0);
        time(labelHeiheNenjiangCity);
    }
    //Suihua
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Beilin') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaBeilinDistrict);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Wangkui') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaWangkuiCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Lanxi') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaLanxiCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Qinggang') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaQinggangCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Qingan') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaQinganCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Mingshui') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaMingshuiCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Suiling') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaSuilingCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Anda') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaAndaCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Zhaodong') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaZhaodongCity);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Suihua' && countySelect.value === 'Hailun') {
        index = 0;
        setTimeImage(0);
        time(labelSuihuaHailunCity);
    }
    //Daxinganling
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daxinganling' && countySelect.value === 'Mohe') {
        index = 0;
        setTimeImage(0);
        time(labelDaxinganlingMoheCity);
    }

    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daxinganling' && countySelect.value === 'Huma') {
        index = 0;
        setTimeImage(0);
        time(labelDaxinganlingHumaCounty);
    }
    if (provinceSelect.value === 'Heilongjiang' && citySelect.value === 'Daxinganling' && countySelect.value === 'Tahe') {
        index = 0;
        setTimeImage(0);
        time(labelDaxinganlingTaheCounty);
    }
    //Changchun
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Nanguan') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunNanguanDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Kuancheng') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunKuanchengDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Chaoyang') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunChaoyangDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Erdao') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunErdaoDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Lvyuan') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunLvyouDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Shuangyang') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunShuangyangDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Jiutai') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunJiutaiDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Nongan') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunNonganCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Yushu') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunYushuCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Panshi') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunDehuiCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Changchun' && countySelect.value === 'Gongzhuling') {
        index = 0;
        setTimeImage(0);
        time(labelChangchunGongzhulingCity);
    }
    //Jilin
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Changyi') {
        index = 0;
        setTimeImage(0);
        time(labelJilinChangyiDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Longtan') {
        index = 0;
        setTimeImage(0);
        time(labelJilinLongtanDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Chuanying') {
        index = 0;
        setTimeImage(0);
        time(labelJilinChuanyingDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Fengman') {
        index = 0;
        setTimeImage(0);
        time(labelJilinFengmanDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Yongji') {
        index = 0;
        setTimeImage(0);
        time(labelJilinYongjiCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Jiaohe') {
        index = 0;
        setTimeImage(0);
        time(labelJilinJiaoheCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Huadian') {
        index = 0;
        setTimeImage(0);
        time(labelJilinHuadianCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Shulan') {
        index = 0;
        setTimeImage(0);
        time(labelJilinShulanCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Jilin' && countySelect.value === 'Panshi') {
        index = 0;
        setTimeImage(0);
        time(labelJilinPanshiCity);
    }
    //Siping
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Siping' && countySelect.value === 'Tiexi') {
        index = 0;
        setTimeImage(0);
        time(labelSipingTiexiDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Siping' && countySelect.value === 'Tiedong') {
        index = 0;
        setTimeImage(0);
        time(labelSipingTiedongDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Siping' && countySelect.value === 'Lishu') {
        index = 0;
        setTimeImage(0);
        time(labelSipingLishuCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Siping' && countySelect.value === 'Yintongmanzu') {
        index = 0;
        setTimeImage(0);
        time(labelSipingYimanCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Siping' && countySelect.value === 'Shuangliao') {
        index = 0;
        setTimeImage(0);
        time(labelSipingShuangliaoCity);
    }
    //Liaoyuan
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Liaoyuan' && countySelect.value === 'Longshan') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyuanLongshanDistrict);
    }

    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Liaoyuan' && countySelect.value === 'Xian') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyuanXianDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Liaoyuan' && countySelect.value === 'Dongfeng') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyuanDongfengCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Liaoyuan' && countySelect.value === 'Dongliao') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyuanDongliaoCounty);
    }
    //Tonghua
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Tonghua' && countySelect.value === 'Dongchang') {
        index = 0;
        setTimeImage(0);
        time(labelTonghuaDongchangDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Tonghua' && countySelect.value === 'Erdaojiang') {
        index = 0;
        setTimeImage(0);
        time(labelTonghuaErdaojiangDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Tonghua' && countySelect.value === 'Tonghua') {
        index = 0;
        setTimeImage(0);
        time(labelTonghuaTonghuaCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Tonghua' && countySelect.value === 'Huinan') {
        index = 0;
        setTimeImage(0);
        time(labelTonghuaHuinanCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Tonghua' && countySelect.value === 'Liuhe') {
        index = 0;
        setTimeImage(0);
        time(labelTonghuaLiuheCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Tonghua' && countySelect.value === 'Meihekou') {
        index = 0;
        setTimeImage(0);
        time(labelTonghuaMeihekouCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Tonghua' && countySelect.value === 'Jian') {
        index = 0;
        setTimeImage(0);
        time(labelTonghuaJianCity);
    }
    //Baishan
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baishan' && countySelect.value === 'Hunjiang') {
        index = 0;
        setTimeImage(0);
        time(labelBaishanHunjiangDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baishan' && countySelect.value === 'Jiangyuan') {
        index = 0;
        setTimeImage(0);
        time(labelBaishanJiangyuanDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baishan' && countySelect.value === 'Fusong') {
        index = 0;
        setTimeImage(0);
        time(labelBaishanFusongCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baishan' && countySelect.value === 'Jingyu') {
        index = 0;
        setTimeImage(0);
        time(labelBaishanJingyuCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baishan' && countySelect.value === 'Changbaichaoxian') {
        index = 0;
        setTimeImage(0);
        time(labelBaishanChangbaichaoxianCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baishan' && countySelect.value === 'Linjiang') {
        index = 0;
        setTimeImage(0);
        time(labelBaishanLinjiangCity);
    }
    //Songyuan
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Songyuan' && countySelect.value === 'Ningjiang') {
        index = 0;
        setTimeImage(0);
        time(labelSongyuanNingjiangDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Songyuan' && countySelect.value === 'Qianguoerluosi') {
        index = 0;
        setTimeImage(0);
        time(labelSongyuanQianguoerluosiCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Songyuan' && countySelect.value === 'Changling') {
        index = 0;
        setTimeImage(0);
        time(labelSongyuanChanglingCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Songyuan' && countySelect.value === 'Qianan') {
        index = 0;
        setTimeImage(0);
        time(labelSongyuanQiananCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Songyuan' && countySelect.value === 'Fuyu') {
        index = 0;
        setTimeImage(0);
        time(labelSongyuanFuyuCity);
    }
    //Baicheng
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baicheng' && countySelect.value === 'Taobei') {
        index = 0;
        setTimeImage(0);
        time(labelBaichengTaobeiDistrict);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baicheng' && countySelect.value === 'Zhenlai') {
        index = 0;
        setTimeImage(0);
        time(labelBaichengZhenlaiCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baicheng' && countySelect.value === 'Tongyu') {
        index = 0;
        setTimeImage(0);
        time(labelBaichengTongyuCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baicheng' && countySelect.value === 'Taonan') {
        index = 0;
        setTimeImage(0);
        time(labelBaichengTaonanCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Baicheng' && countySelect.value === 'Daan') {
        index = 0;
        setTimeImage(0);
        time(labelBaichengDaanCity);
    }
    //Yanbian
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Yanji') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianYanjiCity);
    }

    //'Yanbian': ['Yanji', 'Tumen', 'Dunhua', 'Hunchun', 'Longjing', 'Helong', 'Wangqing', 'Antu'],
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Tumen') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianTumenCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Dunhua') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianDunhuaCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Hunchun') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianHunchunCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Longjing') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianLongjingCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Helong') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianHelongCity);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Wangqing') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianWangqingCounty);
    }
    if (provinceSelect.value === 'Jilin' && citySelect.value === 'Yanbian' && countySelect.value === 'Antu') {
        index = 0;
        setTimeImage(0);
        time(labelYanbianAntuCounty);
    }
    //Shenyang
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Heping') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangHepingDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Shenhe') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangShenheDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Dadong') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangDadongDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Huanggu') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangHuangguDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Tiexi') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangTiexiDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Sujiatun') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangSujiatunDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Hunnan') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangHunnanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Shenbeixin') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangShenbeixinDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Yuhong') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangYuhongDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Liaozhong') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangLiaozhongDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Kangping') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangKangpingCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Faku') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangFakuCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Shenyang' && countySelect.value === 'Xinmin') {
        index = 0;
        setTimeImage(0);
        time(labelShenyangXinminCity);
    }
    //Dalian
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Zhongshan') {
        index = 0;
        setTimeImage(0);
        time(labelDalianZhongshanDistrict);
    }

    //'Dalian': ['Zhongshan', 'Xigang', 'Shahekou', 'Ganjingzi', 'Lvshunkou', 'Jinzhou', 'Pulandian', 'Changhai', 'Wafangdian', 'Zhuanghe'],
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Xigang') {
        index = 0;
        setTimeImage(0);
        time(labelDalianXigangDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Shahekou') {
        index = 0;
        setTimeImage(0);
        time(labelDalianShahekouDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Ganjingzi') {
        index = 0;
        setTimeImage(0);
        time(labelDalianGanjingziDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Lvshunkou') {
        index = 0;
        setTimeImage(0);
        time(labelDalianLvshunkouDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Jinzhou') {
        index = 0;
        setTimeImage(0);
        time(labelDalianJinzhouDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Pulandian') {
        index = 0;
        setTimeImage(0);
        time(labelDalianPulandianDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Changhai') {
        index = 0;
        setTimeImage(0);
        time(labelDalianChanghaiCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Wafangdian') {
        index = 0;
        setTimeImage(0);
        time(labelDalianWafangdianCity);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dalian' && countySelect.value === 'Zhuanghe') {
        index = 0;
        setTimeImage(0);
        time(labelDalianZhuangheCity);
    }
    //Anshan
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Anshan' && countySelect.value === 'Tiedong') {
        index = 0;
        setTimeImage(0);
        time(labelAnshanTiedongDistrict);
    }



    //'Anshan': ['Tiedong', 'Tiexi', 'Lishan', 'Qianshan', 'Taian', 'Youyanmanzu', 'Haicheng'],
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Anshan' && countySelect.value === 'Tiexi') {
        index = 0;
        setTimeImage(0);
        time(labelAnshanTiexiDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Anshan' && countySelect.value === 'Lishan') {
        index = 0;
        setTimeImage(0);
        time(labelAnshanLishanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Anshan' && countySelect.value === 'Qianshan') {
        index = 0;
        setTimeImage(0);
        time(labelAnshanQianshanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Anshan' && countySelect.value === 'Taian') {
        index = 0;
        setTimeImage(0);
        time(labelAnshanTaianCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Anshan' && countySelect.value === 'Youyanmanzu') {
        index = 0;
        setTimeImage(0);
        time(labelAnshanYoumanCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Anshan' && countySelect.value === 'Haicheng') {
        index = 0;
        setTimeImage(0);
        time(labelAnshanHaichengCity);
    }
    //Fushun
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fushun' && countySelect.value === 'Xinfu') {
        index = 0;
        setTimeImage(0);
        time(labelFushunXinfuDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fushun' && countySelect.value === 'Dongzhou') {
        index = 0;
        setTimeImage(0);
        time(labelFushunDongzhouDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fushun' && countySelect.value === 'Wanghua') {
        index = 0;
        setTimeImage(0);
        time(labelFushunWanghuaDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fushun' && countySelect.value === 'Shuncheng') {
        index = 0;
        setTimeImage(0);
        time(labelFushunShunchengDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fushun' && countySelect.value === 'Fushun') {
        index = 0;
        setTimeImage(0);
        time(labelFushunFushunCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fushun' && countySelect.value === 'Xinbinmanzu') {
        index = 0;
        setTimeImage(0);
        time(labelFushunXinmanCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fushun' && countySelect.value === 'Qingyuanmanzu') {
        index = 0;
        setTimeImage(0);
        time(labelFushunQingmanCounty);
    }
    //Benxi
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Benxi' && countySelect.value === 'Pingshan') {
        index = 0;
        setTimeImage(0);
        time(labelBenxiPingshanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Benxi' && countySelect.value === 'Xihu') {
        index = 0;
        setTimeImage(0);
        time(labelBenxiXihuDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Benxi' && countySelect.value === 'Mingshan') {
        index = 0;
        setTimeImage(0);
        time(labelBenxiMingshanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Benxi' && countySelect.value === 'Nanfen') {
        index = 0;
        setTimeImage(0);
        time(labelBenxiNanfenDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Benxi' && countySelect.value === 'Benximanzu') {
        index = 0;
        setTimeImage(0);
        time(labelBenxiBenmanCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Benxi' && countySelect.value === 'Huanrenmanzu') {
        index = 0;
        setTimeImage(0);
        time(labelBenxiHuanmanCounty);
    }
    //Dandong
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dandong' && countySelect.value === 'Yuanbao') {
        index = 0;
        setTimeImage(0);
        time(labelDandongYuanbaoDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dandong' && countySelect.value === 'Zhenxing') {
        index = 0;
        setTimeImage(0);
        time(labelDandongZhenxingDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dandong' && countySelect.value === 'Zhenan') {
        index = 0;
        setTimeImage(0);
        time(labelDandongZhenanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dandong' && countySelect.value === 'Kuandianmanzu') {
        index = 0;
        setTimeImage(0);
        time(labelDandongKuanmanCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dandong' && countySelect.value === 'Donggang') {
        index = 0;
        setTimeImage(0);
        time(labelDandongDonggangCity);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Dandong' && countySelect.value === 'Fengcheng') {
        index = 0;
        setTimeImage(0);
        time(labelDandongFengchengCity);
    }
    //Jinzhou
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Jinzhou' && countySelect.value === 'Guta') {
        index = 0;
        setTimeImage(0);
        time(labelJinzhouGutaDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Jinzhou' && countySelect.value === 'Linghe') {
        index = 0;
        setTimeImage(0);
        time(labelJinzhouLingheDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Jinzhou' && countySelect.value === 'Taihe') {
        index = 0;
        setTimeImage(0);
        time(labelJinzhouTaiheDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Jinzhou' && countySelect.value === 'Heishan') {
        index = 0;
        setTimeImage(0);
        time(labelJinzhouHeishanCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Jinzhou' && countySelect.value === 'Yixian') {
        index = 0;
        setTimeImage(0);
        time(labelJinzhouYiCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Jinzhou' && countySelect.value === 'Linghai') {
        index = 0;
        setTimeImage(0);
        time(labelJinzhouLinghaiCity);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Jinzhou' && countySelect.value === 'Beizhen') {
        index = 0;
        setTimeImage(0);
        time(labelJinzhouBeizhenCity);
    }
    //Yingkou
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Yingkou' && countySelect.value === 'Zhanqian') {
        index = 0;
        setTimeImage(0);
        time(labelYingkouZhanqianDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Yingkou' && countySelect.value === 'Xishi') {
        index = 0;
        setTimeImage(0);
        time(labelYingkouXishiDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Yingkou' && countySelect.value === 'Bayuquan') {
        index = 0;
        setTimeImage(0);
        time(labelYingkouBayuquanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Yingkou' && countySelect.value === 'Laobian') {
        index = 0;
        setTimeImage(0);
        time(labelYingkouLaobianDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Yingkou' && countySelect.value === 'Gaizhou') {
        index = 0;
        setTimeImage(0);
        time(labelYingkouGaizhouCity);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Yingkou' && countySelect.value === 'Dashiqiao') {
        index = 0;
        setTimeImage(0);
        time(labelYingkouDashiqiaoCity);
    }
    //Fuxin
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fuxin' && countySelect.value === 'Haizhou') {
        index = 0;
        setTimeImage(0);
        time(labelFuxinHaizhouDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fuxin' && countySelect.value === 'Xinqiu') {
        index = 0;
        setTimeImage(0);
        time(labelFuxinXinqiuDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fuxin' && countySelect.value === 'Taiping') {
        index = 0;
        setTimeImage(0);
        time(labelFuxinTaipingDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fuxin' && countySelect.value === 'Qinghemen') {
        index = 0;
        setTimeImage(0);
        time(labelFuxinQinghemenDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fuxin' && countySelect.value === 'Xihe') {
        index = 0;
        setTimeImage(0);
        time(labelFuxinXiheDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fuxin' && countySelect.value === 'Fuxinmengguzu') {
        index = 0;
        setTimeImage(0);
        time(labelFuxinFumengCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Fuxin' && countySelect.value === 'Zhangwu') {
        index = 0;
        setTimeImage(0);
        time(labelFuxinZhangwuCounty);
    }
    //Liaoyang
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Liaoyang' && countySelect.value === 'Baita') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyangBaitaDistrict);
    }

    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Liaoyang' && countySelect.value === 'Wensheng') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyangWenshengDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Liaoyang' && countySelect.value === 'Hongwei') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyangHongweiDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Liaoyang' && countySelect.value === 'Gongchangling') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyangGongchanglingDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Liaoyang' && countySelect.value === 'Taizihe') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyangTaiziheDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Liaoyang' && countySelect.value === 'Liaoyang') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyangLiaoyangCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Liaoyang' && countySelect.value === 'Dengta') {
        index = 0;
        setTimeImage(0);
        time(labelLiaoyangDengtaCity);
    }
    //Panjin
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Panjin' && countySelect.value === 'Shuangtaizi') {
        index = 0;
        setTimeImage(0);
        time(labelPanjinShuangtaiziDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Panjin' && countySelect.value === 'Xinglongtai') {
        index = 0;
        setTimeImage(0);
        time(labelPanjinXinglongtaiDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Panjin' && countySelect.value === 'Dawa') {
        index = 0;
        setTimeImage(0);
        time(labelPanjinDawaDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Panjin' && countySelect.value === 'Panshan') {
        index = 0;
        setTimeImage(0);
        time(labelPanjinPanshanCounty);
    }
    //Tieling
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Tieling' && countySelect.value === 'Yinzhou') {
        index = 0;
        setTimeImage(0);
        time(labelTielingYinzhouDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Tieling' && countySelect.value === 'Qinghe') {
        index = 0;
        setTimeImage(0);
        time(labelTielingQingheDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Tieling' && countySelect.value === 'Tieling') {
        index = 0;
        setTimeImage(0);
        time(labelTielingTielingCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Tieling' && countySelect.value === 'Xifeng') {
        index = 0;
        setTimeImage(0);
        time(labelTielingXifengCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Tieling' && countySelect.value === 'Changtu') {
        index = 0;
        setTimeImage(0);
        time(labelTielingChangtuCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Tieling' && countySelect.value === 'Diaobingshan') {
        index = 0;
        setTimeImage(0);
        time(labelTielingDiaobingshanCity);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Tieling' && countySelect.value === 'Kaiyuan') {
        index = 0;
        setTimeImage(0);
        time(labelTielingKaiyuanCity);
    }
    //Chaoyang
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Chaoyang' && countySelect.value === 'Shuangta') {
        index = 0;
        setTimeImage(0);
        time(labelChaoyangShuangtaDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Chaoyang' && countySelect.value === 'Longcheng') {
        index = 0;
        setTimeImage(0);
        time(labelChaoyangLongchengDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Chaoyang' && countySelect.value === 'Chaoyang') {
        index = 0;
        setTimeImage(0);
        time(labelChaoyangChaoyangCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Chaoyang' && countySelect.value === 'Jianping') {
        index = 0;
        setTimeImage(0);
        time(labelChaoyangJianpingCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Chaoyang' && countySelect.value === 'Kezuomenggu') {
        index = 0;
        setTimeImage(0);
        time(labelChaoyangKezuoCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Chaoyang' && countySelect.value === 'Beipiao') {
        index = 0;
        setTimeImage(0);
        time(labelChaoyangBeipiaoCity);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Chaoyang' && countySelect.value === 'lingyuan') {
        index = 0;
        setTimeImage(0);
        time(labelChaoyangLingyuanCity);
    }
    //Huludao
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Huludao' && countySelect.value === 'Lianshan') {
        index = 0;
        setTimeImage(0);
        time(labelHuludaoLianshanDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Huludao' && countySelect.value === 'Longgang') {
        index = 0;
        setTimeImage(0);
        time(labelHuludaoLonggangDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Huludao' && countySelect.value === 'Nanpiao') {
        index = 0;
        setTimeImage(0);
        time(labelHuludaoNanpiaoDistrict);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Huludao' && countySelect.value === 'Suizhong') {
        index = 0;
        setTimeImage(0);
        time(labelHuludaoSuizhongCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Huludao' && countySelect.value === 'Jianchang') {
        index = 0;
        setTimeImage(0);
        time(labelHuludaoJianchangCounty);
    }
    if (provinceSelect.value === 'Liaoning' && citySelect.value === 'Huludao' && countySelect.value === 'Xingcheng') {
        index = 0;
        setTimeImage(0);
        time(labelHuludaoXingchengCity);
    }
}

// 监听下拉框改变事件
provinceSelect.addEventListener('change', checkSelectedValues);
citySelect.addEventListener('change', checkSelectedValues);
countySelect.addEventListener('change', checkSelectedValues);

//'Harbin': ['Daoli', 'Daowai', 'Nangang', 'Pingfang', 'Songbei', 'Xiangfang', 'Hulan', 'Echeng', 'Shuangcheng', '依兰区', '方正区', 'Binxian', 'Bayan', 'Mulan', 'Tonghe', 'Yanshou', '双城市', 'Shangzhi', 'Wuchang'],
let labelHarbinDaoliDistrict = [];
let labelHarbinDaowaiDistrict = [];
let labelHarbinNangangDistrict = [];
let labelHarbinPingfangDistrict = [];
let labelHarbinSongbeiDistrict = [];
let labelHarbinXiangfangDistrict = [];
let labelHarbinHulanDistrict = [];
let labelHarbinEchengDistrict = [];
let labelHarbinShuangchengDistrict = [];
let labelHarbinYilanCounty = [];
let labelHarbinFangzhengCounty = [];
let labelHarbinBinCounty = [];
let labelHarbinBayanCounty = [];
let labelHarbinMulanCounty = [];
let labelHarbinTongheCounty = [];
let labelHarbinYanshouCounty = [];
let labelHarbinShangzhiCity = [];
let labelHarbinWuchangCity = [];
//'Qiqihar': ['Longsha', 'Jianhua', 'Tiefeng', 'Angangxi', 'Fulaerji', 'Nianzishan', 'Meilisidawoerzu', 'Longjiang', 'Yian', 'Tailai', 'Gannan', 'Fuyu', 'Keshan', 'Kedong', 'Baiquan', 'Nehe'],
let labelQiqiharLongshaDistrict = [];
let labelQiqiharJianhuaDistrict = [];
let labelQiqiharTiefengDistrict = [];
let labelQiqiharAngangxiDistrict = [];
let labelQiqiharFulaerjiDistrict = [];
let labelQiqiharNianzishanDistrict = [];
let labelQiqiharMeilisiDistrict = [];
let labelQiqiharLongjiangCounty = [];
let labelQiqiharYianCounty = [];
let labelQiqiharTailaiCounty = [];
let labelQiqiharGannanCounty = [];
let labelQiqiharFuyuCounty = [];
let labelQiqiharKeshanCounty = [];
let labelQiqiharKedongCounty = [];
let labelQiqiharBaiquanCounty = [];
let labelQiqiharNeheCity = [];
//'Jixi': ['Jiguan', 'Hengshan', 'Didao', 'Lishu', 'Chengzihe', 'Mashan', 'Jidong', 'Hulin', 'Mishan'],
let labelJixiJiguanDistrict = [];
let labelJixiHengshanDistrict = [];
let labelJixiDidaoDistrict = [];
let labelJixiLishuDistrict = [];
let labelJixiChengziheDistrict = [];
let labelJixiMashanDistrict = [];
let labelJixiJidongCounty = [];
let labelJixiHulinCity = [];
let labelJixiMishanCity = [];
//'Hegang': ['Xingshan', 'Gongnong', 'Nanshan', 'Xingan', 'Dongshan', 'Xingshan', 'Luobeixian', 'Suibin'],
let labelHegangXiangyangDistrict = [];
let labelHegangGongnongDistrict = [];
let labelHegangNanshanDistrict = [];
let labelHegangXinganDistrict = [];
let labelHegangDongshanDistrict = [];
let labelHegangXingshanDistrict = [];
let labelHegangLuobeiCounty = [];
let labelHegangSuibinCounty = [];
//'Shuangyashan': ['Jianshan', 'Lingdong', 'Sifangtai', 'Baoshan', 'Jixian', 'Youyi', 'Baoqing', 'Raohe'],
let labelShuangyashanJianshanDistrict = [];
let labelShuangyashanLingdongDistrict = [];
let labelShuangyashanSifangtaiDistrict = [];
let labelShuangyashanBaoshanDistrict = [];
let labelShuangyashanJixianCounty = [];
let labelShuangyashanYouyiCounty = [];
let labelShuangyashanBaoqingCounty = [];
let labelShuangyashanYaoheCounty = [];
//'Daqing': ['Saertu', 'Longfeng', 'Ranghulu', 'Honggang', 'Datong', 'Zhaozhou', 'Zhaoyuan', 'Lindian', 'Duerbote'],
let labelDaqingSaertuDistrict = [];
let labelDaqingLongfengDistrict = [];
let labelDaqingRanghuluDistrict = [];
let labelDaqingHonggangDistrict = [];
let labelDaqingDatongDistrict = [];
let labelDaqingZhaozhouCounty = [];
let labelDaqingZhaoyuanCounty = [];
let labelDaqingLindianCounty = [];
let labelDaqingDuerboteCounty = [];
//'Yichun': ['Yimei', 'Wucui', 'Youhao','Jinlin', 'Jiayin', 'Tangwang', 'Fenglin', 'Daqingshan', 'Nancha', 'Tieli'],
let labelYichunYimeiDistrict = [];
let labelYichunWucuiDistrict = [];
let labelYichunYouhaoDistrict = [];
let labelYichunJinlinDistrict = [];
let labelYichunJiayinCounty = [];
let labelYichunTangwangCounty = [];
let labelYichunFenglinCounty = [];
let labelYichunDaqingshanCounty = [];
let labelYichunNanchaCounty = [];
let labelYichunTieliCity = [];
//'Jiamusi': ['Xingshan', 'Qianjin', 'Dongfeng', 'Jiaoqu', 'Huanan', 'Huachuan', 'Tangyuan', 'Tongjiang', 'Fujin', 'Fuyuan'],
let labelJiamusiXiangyangDistrict = [];
let labelJiamusiQianjinDistrict = [];
let labelJiamusiDongfengDistrict = [];
let labelJiamusiJiaoDistrict = [];
let labelJiamusiHuananCounty = [];
let labelJiamusiHuachuanCounty = [];
let labelJiamusiTangyuanCounty = [];
let labelJiamusiTongjiangCity = [];
let labelJiamusiFujinCity = [];
let labelJiamusiFuyuanCity = [];
//'Qitaihe': ['Xinxing', 'Taoshan', 'Qiezihe', 'Boli'],
let labelQitaiheXinxingDistrict = [];
let labelQitaiheTaoshanDistrict = [];
let labelQitaiheQieziheDistrict = [];
let labelQitaiheBoliCounty = [];
//'Mudanjiang': ['Dongan', 'Yangming', 'Aimin', 'Xian', 'Linkou', 'Suifenhe', 'Hailin', 'Ningan', 'Muling', 'Dongning'],
let labelMudanjiangDonganDistrict = [];
let labelMudanjiangYangmingDistrict = [];
let labelMudanjiangAiminDistrict = [];
let labelMudanjiangXianDistrict = [];
let labelMudanjiangLinkouCounty = [];
let labelMudanjiangSuifenheCity = [];
let labelMudanjiangHailinCity = [];
let labelMudanjiangNinganCity = [];
let labelMudanjiangMulingCity = [];
let labelMudanjiangDongningCity = [];
//'Heihe': ['Aihui', 'Xunke', 'Sunwu', 'Beian', 'Wudalianchi', 'Nenjiang'],
let labelHeiheAihuiDistrict = [];
let labelHeiheXunkeCounty = [];
let labelHeiheSunwuCounty = [];
let labelHeiheBeianCity = [];
let labelHeiheWudalianchiCity = [];
let labelHeiheNenjiangCity = [];
//'Suihua': ['Beilin', 'Wangkui', 'Lanxi', 'Qinggang', 'Qingan', 'Mingshui', 'Suiling', 'Anda', 'Zhaodong', 'Hailun'],
let labelSuihuaBeilinDistrict = [];
let labelSuihuaWangkuiCounty = [];
let labelSuihuaLanxiCounty = [];
let labelSuihuaQinggangCounty = [];
let labelSuihuaQinganCounty = [];
let labelSuihuaMingshuiCounty = [];
let labelSuihuaSuilingCounty = [];
let labelSuihuaAndaCity = [];
let labelSuihuaZhaodongCity = [];
let labelSuihuaHailunCity = [];
//'Daxinganling': ['Mohe', 'Huma', 'Tahe'],
let labelDaxinganlingMoheCity = [];
let labelDaxinganlingHumaCounty = [];
let labelDaxinganlingTaheCounty = [];
//'Changchun': ['Nanguan', 'Kuancheng', 'Chaoyang', 'Erdao', 'Lvyuan', 'Shuangyang', 'Jiutai', 'Nongan', 'Yushu', 'Panshi','Gongzhuling'],
let labelChangchunNanguanDistrict = [];
let labelChangchunKuanchengDistrict = [];
let labelChangchunChaoyangDistrict = [];
let labelChangchunErdaoDistrict = [];
let labelChangchunLvyuanDistrict = [];
let labelChangchunShuangyangDistrict = [];
let labelChangchunJiutaiDistrict = [];
let labelChangchunNonganCounty = [];
let labelChangchunYushuCity = [];
let labelChangchunDehuiCity = [];
let labelChangchunGongzhulingCity = [];
//'Jilin': ['Changyi', 'Longtan', 'Chuanying', 'Fengman', 'Yongji', 'Jiaohe', 'Huadian', 'Shulan', 'Panshi'],
let labelJilinChangyiDistrict = [];
let labelJilinLongtanDistrict = [];
let labelJilinChuanyingDistrict = [];
let labelJilinFengmanDistrict = [];
let labelJilinYongjiCounty = [];
let labelJilinJiaoheCity = [];
let labelJilinHuadianCity = [];
let labelJilinShulanCity = [];
let labelJilinPanshiCity = [];
//'Siping': ['Tiexi', 'Tiedong', 'Lishu', 'Yintongmanzu', 'Shuangliao'],
let labelSipingTiexiDistrict = [];
let labelSipingTiedongDistrict = [];
let labelSipingLishuCounty = [];
let labelSipingYimanCounty = [];
let labelSipingShuangliaoCity = [];
//'Liaoyuan': ['Longshan', 'Xian', 'Dongfeng', 'Dongliao'],
let labelLiaoyuanLongshanDistrict = [];
let labelLiaoyuanXianDistrict = [];
let labelLiaoyuanDongfengCounty = [];
let labelLiaoyuanDongliaoCounty = [];
//'Tonghua': ['Dongchang', 'Erdaojiang', 'Tonghua', 'Huinan', 'Liuhe', 'Meihekou', 'Jian'],
let labelTonghuaDongchangDistrict = [];
let labelTonghuaErdaojiangDistrict = [];
let labelTonghuaTonghuaCounty = [];
let labelTonghuaHuinanCounty = [];
let labelTonghuaLiuheCounty = [];
let labelTonghuaMeihekouCity = [];
let labelTonghuaJianCity = [];
//'Baishan': ['Hunjiang', 'Jiangyuan', 'Fusong', 'Jingyu', 'Changbaichaoxian', 'Linjiang'],
let labelBaishanHunjiangDistrict = [];
let labelBaishanJiangyuanDistrict = [];
let labelBaishanFusongCounty = [];
let labelBaishanJingyuCounty = [];
let labelBaishanChangbaichaoxianCounty = [];
let labelBaishanLinjiangCity = [];
//'Songyuan': ['Ningjiang', 'Qianguoerluosi', 'Changling', 'Qianan', 'Fuyu'],
let labelSongyuanNingjiangDistrict = [];
let labelSongyuanQianguoerluosiCounty = [];
let labelSongyuanChanglingCounty = [];
let labelSongyuanQiananCounty = [];
let labelSongyuanFuyuCity = [];
//'Baicheng': ['Taobei', 'Zhenlai', 'Tongyu', 'Taonan', 'Daan'],
let labelBaichengTaobeiDistrict = [];
let labelBaichengZhenlaiCounty = [];
let labelBaichengTongyuCounty = [];
let labelBaichengTaonanCity = [];
let labelBaichengDaanCity = [];
//'Yanbian': ['Yanji', 'Tumen', 'Dunhua', 'Hunchun', 'Longjing', 'Helong', 'Wangqing', 'Antu'],
let labelYanbianYanjiCity = [];
let labelYanbianTumenCity = [];
let labelYanbianDunhuaCity = [];
let labelYanbianHunchunCity = [];
let labelYanbianLongjingCity = [];
let labelYanbianHelongCity = [];
let labelYanbianWangqingCounty = [];
let labelYanbianAntuCounty = [];
//'Shenyang': ['Heping', 'Shenhe', 'Dadong', 'Huanggu', 'Tiexi', 'Sujiatun', 'Hunnan', 'Shenbeixin', 'Yuhong', 'Liaozhong', 'Kangping', 'Faku', 'Xinmin'],
let labelShenyangHepingDistrict = [];
let labelShenyangShenheDistrict = [];
let labelShenyangDadongDistrict = [];
let labelShenyangHuangguDistrict = [];
let labelShenyangTiexiDistrict = [];
let labelShenyangSujiatunDistrict = [];
let labelShenyangHunnanDistrict = [];
let labelShenyangShenbeixinDistrict = [];
let labelShenyangYuhongDistrict = [];
let labelShenyangLiaozhongDistrict = [];
let labelShenyangKangpingCounty = [];
let labelShenyangFakuCounty = [];
let labelShenyangXinminCity = [];
//'Dalian': ['Zhongshan', 'Xigang', 'Shahekou', 'Ganjingzi', 'Lvshunkou', 'Jinzhou', 'Pulandian', 'Changhai', 'Wafangdian', 'Zhuanghe'],
let labelDalianZhongshanDistrict = [];
let labelDalianXigangDistrict = [];
let labelDalianShahekouDistrict = [];
let labelDalianGanjingziDistrict = [];
let labelDalianLvshunkouDistrict = [];
let labelDalianJinzhouDistrict = [];
let labelDalianPulandianDistrict = [];
let labelDalianChanghaiCounty = [];
let labelDalianWafangdianCity = [];
let labelDalianZhuangheCity = [];
//'Anshan': ['Tiedong', 'Tiexi', 'Lishan', 'Qianshan', 'Taian', 'Youyanmanzu', 'Haicheng'],
let labelAnshanTiedongDistrict = [];
let labelAnshanTiexiDistrict = [];
let labelAnshanLishanDistrict = [];
let labelAnshanQianshanDistrict = [];
let labelAnshanTaianCounty = [];
let labelAnshanYoumanCounty = [];
let labelAnshanHaichengCity = [];
//'Fushun': ['Xinfu', 'Dongzhou', 'Wanghua', 'Shuncheng', 'Fushun', 'Xinbinmanzu', 'Qingyuanmanzu'],
let labelFushunXinfuDistrict = [];
let labelFushunDongzhouDistrict = [];
let labelFushunWanghuaDistrict = [];
let labelFushunShunchengDistrict = [];
let labelFushunFushunCounty = [];
let labelFushunXinmanCounty = [];
let labelFushunQingmanCounty = [];
//'Benxi': ['Pingshan', 'Xihu', 'Mingshan', 'Nanfen', 'Benximanzu', 'Huanrenmanzu'],
let labelBenxiPingshanDistrict = [];
let labelBenxiXihuDistrict = [];
let labelBenxiMingshanDistrict = [];
let labelBenxiNanfenDistrict = [];
let labelBenxiBenmanCounty = [];
let labelBenxiHuanmanCounty = [];
//'Dandong': ['Yuanbao', 'Zhenxing', 'Zhenan', 'Kuandianmanzu', 'Donggang', 'Fengcheng'],
let labelDandongYuanbaoDistrict = [];
let labelDandongZhenxingDistrict = [];
let labelDandongZhenanDistrict = [];
let labelDandongKuanmanCounty = [];
let labelDandongDonggangCity = [];
let labelDandongFengchengCity = [];
//'Jinzhou': ['Guta', 'Linghe', 'Taihe', 'Heishan', 'Yixian', 'Linghai', 'Beizhen'],
let labelJinzhouGutaDistrict = [];
let labelJinzhouLingheDistrict = [];
let labelJinzhouTaiheDistrict = [];
let labelJinzhouHeishanCounty = [];
let labelJinzhouYiCounty = [];
let labelJinzhouLinghaiCity = [];
let labelJinzhouBeizhenCity = [];
//'Yingkou': ['Zhanqian', 'Xishi', 'Bayuquan', 'Laobian', 'Gaizhou', 'Dashiqiao'],
let labelYingkouZhanqianDistrict = [];
let labelYingkouXishiDistrict = [];
let labelYingkouBayuquanDistrict = [];
let labelYingkouLaobianDistrict = [];
let labelYingkouGaizhouCity = [];
let labelYingkouDashiqiaoCity = [];
//'Fuxin': ['Haizhou', 'Xinqiu', 'Taiping', 'Qinghemen', 'Xihe', 'Fuxinmengguzu', 'Zhangwu'],
let labelFuxinHaizhouDistrict = [];
let labelFuxinXinqiuDistrict = [];
let labelFuxinTaipingDistrict = [];
let labelFuxinQinghemenDistrict = [];
let labelFuxinXiheDistrict = [];
let labelFuxinFumengCounty = [];
let labelFuxinZhangwuCounty = [];
//'Liaoyang': ['Baita', 'Wensheng', 'Hongwei', 'Gongchangling', 'Taizihe', 'Liaoyang', 'Dengta'],
let labelLiaoyangBaitaDistrict = [];
let labelLiaoyangWenshengDistrict = [];
let labelLiaoyangHongweiDistrict = [];
let labelLiaoyangGongchanglingDistrict = [];
let labelLiaoyangTaiziheDistrict = [];
let labelLiaoyangLiaoyangCounty = [];
let labelLiaoyangDengtaCity = [];
//'Panjin': ['Shuangtaizi', 'Xinglongtai', 'Dawa', 'Panshan'],
let labelPanjinShuangtaiziDistrict = [];
let labelPanjinXinglongtaiDistrict = [];
let labelPanjinDawaDistrict = [];
let labelPanjinPanshanCounty = [];
//'Tieling': ['Yinzhou', 'Qinghe', 'Tieling', 'Xifeng', 'Changtu', 'Diaobingshan', 'Kaiyuan'],
let labelTielingYinzhouDistrict = [];
let labelTielingQingheDistrict = [];
let labelTielingTielingCounty = [];
let labelTielingXifengCounty = [];
let labelTielingChangtuCounty = [];
let labelTielingDiaobingshanCity = [];
let labelTielingKaiyuanCity = [];
//'Chaoyang': ['Shuangta', 'Longcheng', 'Chaoyang', 'Jianping', 'Kezuomenggu', 'Beipiao', 'lingyuan'],
let labelChaoyangShuangtaDistrict = [];
let labelChaoyangLongchengDistrict = [];
let labelChaoyangChaoyangCounty = [];
let labelChaoyangJianpingCounty = [];
let labelChaoyangKezuoCounty = [];
let labelChaoyangBeipiaoCity = [];
let labelChaoyangLingyuanCity = [];
//'Huludao': ['Lianshan', 'Longgang', 'Nanpiao', 'Suizhong', 'Jianchang', 'Xingcheng']
let labelHuludaoLianshanDistrict = [];
let labelHuludaoLonggangDistrict = [];
let labelHuludaoNanpiaoDistrict = [];
let labelHuludaoSuizhongCounty = [];
let labelHuludaoJianchangCounty = [];
let labelHuludaoXingchengCity = [];
/////////////////////////////////////////////////////////////////
readCSVFile();
function readCSVFile() {
    d3.csv("../csv/File20231102.csv").then(function (data) {
        data.forEach(function (d) {
            let hour = parseFloat(d.Hour);
            //Harbin
            let harbinDaoliDistrict = parseFloat(d.harbinDaoliDist);
            let harbinDaowaiDistrict = parseFloat(d.harbinDaowaiDist);
            let harbinNangangDistrict = parseFloat(d.harbinNangangDist);
            let harbinPingfangDistrict = parseFloat(d.harbinPingfangDist);
            let harbinSongbeiDistrict = parseFloat(d.harbinSongbeiDist);
            let harbinXiangfangDistrict = parseFloat(d.harbinXiangfangDist);
            let harbinHulanDistrict = parseFloat(d.harbinHulanDist);
            let harbinEchengDistrict = parseFloat(d.harbinEchengDist);
            let harbinShuangchengDistrict = parseFloat(d.harbinShuangchengDist);
            let harbinYilanCounty = parseFloat(d.harbinYilanCoun);
            let harbinFangzhengCounty = parseFloat(d.harbinFangzhengCoun);
            let harbinBinCounty = parseFloat(d.harbinBinCoun);
            let harbinBayanCounty = parseFloat(d.harbinBayanCoun);
            let harbinMulanCounty = parseFloat(d.harbinMulanCoun);
            let harbinTongheCounty = parseFloat(d.harbinTongheCoun);
            let harbinYanshouCounty = parseFloat(d.harbinYanshouCoun);
            let harbinShangzhiCity = parseFloat(d.harbinShangzhiCity);
            let harbinWuchangCity = parseFloat(d.harbinWuchangCity);
            //Qiqihar
            let qiqiharLongshaDistrict = parseFloat(d.qiqiharLongshaDist);
            let qiqiharJianhuaDistrict = parseFloat(d.qiqiharJianhuaDist);
            let qiqiharTiefengDistrict = parseFloat(d.qiqiharTiefengDist);
            let qiqiharAngangxiDistrict = parseFloat(d.qiqiharAngangxiDist);
            let qiqiharFulaerjiDistrict = parseFloat(d.qiqiharFulaerjiDist);
            let qiqiharNianzishanDistrict = parseFloat(d.qiqiharNianzishanDist);
            let qiqiharMeilisiDistrict = parseFloat(d.qiqiharMeilisiDist);
            let qiqiharLongjiangCounty = parseFloat(d.qiqiharLongjiangCoun);
            let qiqiharYianCounty = parseFloat(d.qiqiharYianCoun);
            let qiqiharTailaiCounty = parseFloat(d.qiqiharTailaiCoun);
            let qiqiharGannanCounty = parseFloat(d.qiqiharGannanCoun);
            let qiqiharFuyuCounty = parseFloat(d.qiqiharFuyuCoun);
            let qiqiharKeshanCounty = parseFloat(d.qiqiharKeshanCoun);
            let qiqiharKedongCounty = parseFloat(d.qiqiharKedongCoun);
            let qiqiharBaiquanCounty = parseFloat(d.qiqiharBaiquanCoun);
            let qiqiharNeheCity = parseFloat(d.qiqiharNeheCity);
            //Jixi
            let jixiJiguanDistrict = parseFloat(d.jixiJiguanDist);
            let jixiHengshanDistrict = parseFloat(d.jixiHengshanDist);
            let jixiDidaoDistrict = parseFloat(d.jixiDidaoDist);
            let jixiLishuDistrict = parseFloat(d.jixiLishuDist);
            let jixiChengziheDistrict = parseFloat(d.jixiChengziheDist);
            let jixiMashanDistrict = parseFloat(d.jixiMashanDist);
            let jixiJidongCounty = parseFloat(d.jixiJidongCoun);
            let jixiHulinCity = parseFloat(d.jixiHulinCity);
            let jixiMishanCity = parseFloat(d.jixiMishanCity);
            //Hegang
            let hegangXiangyangDistrict = parseFloat(d.hegangXiangyangDist);
            let hegangGongnongDistrict = parseFloat(d.hegangGongnongDist);
            let hegangNanshanDistrict = parseFloat(d.hegangNanshanDist);
            let hegangXinganDistrict = parseFloat(d.hegangXinganDist);
            let hegangDongshanDistrict = parseFloat(d.hegangDongshanDist);
            let hegangXingshanDistrict = parseFloat(d.hegangXingshanDist);
            let hegangLuobeiCounty = parseFloat(d.hegangLuobeiCoun);
            let hegangSuibinCounty = parseFloat(d.hegangSuibinCoun);
            //Shuangyashan
            let shuangyashanJianshanDistrict = parseFloat(d.shuangyashanJianshanDist);
            let shuangyashanLingdongDistrict = parseFloat(d.shuangyashanLingdongDist);
            let shuangyashanSifangtaiDistrict = parseFloat(d.shuangyashanSifangtaiDist);
            let shuangyashanBaoshanDistrict = parseFloat(d.shuangyashanBaoshanDist);
            let shuangyashanJixianCounty = parseFloat(d.shuangyashanJixianCoun);
            let shuangyashanYouyiCounty = parseFloat(d.shuangyashanYouyiCoun);
            let shuangyashanBaoqingCounty = parseFloat(d.shuangyashanBaoqingCoun);
            let shuangyashanYaoheCounty = parseFloat(d.shuangyashanYaoheCoun);
            //Daqing
            let daqingSaertuDistrict = parseFloat(d.daqingSaertuDist);
            let daqingLongfengDistrict = parseFloat(d.daqingLongfengDist);
            let daqingRanghuluDistrict = parseFloat(d.daqingRanghuluDist);
            let daqingHonggangDistrict = parseFloat(d.daqingHonggangDist);
            let daqingDatongDistrict = parseFloat(d.daqingDatongDist);
            let daqingZhaozhouCounty = parseFloat(d.daqingZhaozhouCoun);
            let daqingZhaoyuanCounty = parseFloat(d.daqingZhaoyuanCoun);
            let daqingLindianCounty = parseFloat(d.daqingLindianCoun);
            let daqingDuerboteCounty = parseFloat(d.daqingDuerboteCoun);
            //Yichun
            let yichunYimeiDistrict = parseFloat(d.yichunYimeiDist);
            let yichunWucuiDistrict = parseFloat(d.yichunWucuiDist);
            let yichunYouhaoDistrict = parseFloat(d.yichunYouhaoDist);
            let yichunJinlinDistrict = parseFloat(d.yichunJinlinDist);
            let yichunJiayinCounty = parseFloat(d.yichunJiayinCoun);
            let yichunTangwangCounty = parseFloat(d.yichunTangwangCoun);
            let yichunFenglinCounty = parseFloat(d.yichunFenglinCoun);
            let yichunDaqingshanCounty = parseFloat(d.yichunDaqingshanCoun);
            let yichunNanchaCounty = parseFloat(d.yichunNanchaCoun);
            let yichunTieliCity = parseFloat(d.yichunTieliCity);
            //Jiamusi
            let jiamusiXiangyangDistrict = parseFloat(d.jiamusiXiangyangDist);
            let jiamusiQianjinDistrict = parseFloat(d.jiamusiQianjinDist);
            let jiamusiDongfengDistrict = parseFloat(d.jiamusiDongfengDist);
            let jiamusiJiaoDistrict = parseFloat(d.jiamusiJiaoDist);
            let jiamusiHuananCounty = parseFloat(d.jiamusiHuananCoun);
            let jiamusiHuachuanCounty = parseFloat(d.jiamusiHuachuanCoun);
            let jiamusiTangyuanCounty = parseFloat(d.jiamusiTangyuanCoun);
            let jiamusiTongjiangCity = parseFloat(d.jiamusiTongjiangCity);
            let jiamusiFujinCity = parseFloat(d.jiamusiFujinCity);
            let jiamusiFuyuanCity = parseFloat(d.jiamusiFuyuanCity);
            //Qitaihe
            let qitaiheXinxingDistrict = parseFloat(d.qitaiheXinxingDist);
            let qitaiheTaoshanDistrict = parseFloat(d.qitaiheTaoshanDist);
            let qitaiheQieziheDistrict = parseFloat(d.qitaiheQieziheDist);
            let qitaiheBoliCounty = parseFloat(d.qitaiheBoliCoun);
            //Mudanjiang
            let mudanjiangDonganDistrict = parseFloat(d.mudanjiangDonganDist);
            let mudanjiangYangmingDistrict = parseFloat(d.mudanjiangYangmingDist);
            let mudanjiangAiminDistrict = parseFloat(d.mudanjiangAiminDist);
            let mudanjiangXianDistrict = parseFloat(d.mudanjiangXianDist);
            let mudanjiangLinkouCounty = parseFloat(d.mudanjiangLinkouCoun);
            let mudanjiangSuifenheCity = parseFloat(d.mudanjiangSuifenheCity);
            let mudanjiangHailinCity = parseFloat(d.mudanjiangHailinCity);
            let mudanjiangNinganCity = parseFloat(d.mudanjiangNinganCity);
            let mudanjiangMulingCity = parseFloat(d.mudanjiangMulingCity);
            let mudanjiangDongningCity = parseFloat(d.mudanjiangDongningCity);
            //Heihe
            let heiheAihuiDistrict = parseFloat(d.heiheAihuiDist);
            let heiheXunkeCounty = parseFloat(d.heiheXunkeCoun);
            let heiheSunwuCounty = parseFloat(d.heiheSunwuCoun);
            let heiheBeianCity = parseFloat(d.heiheBeianCity);
            let heiheWudalianchiCity = parseFloat(d.heiheWudalianchiCity);
            let heiheNenjiangCity = parseFloat(d.heiheNenjiangCity);
            //Suihua
            let suihuaBeilinDistrict = parseFloat(d.suihuaBeilinDist);
            let suihuaWangkuiCounty = parseFloat(d.suihuaWangkuiCoun);
            let suihuaLanxiCounty = parseFloat(d.suihuaLanxiCoun);
            let suihuaQinggangCounty = parseFloat(d.suihuaQinggangCoun);
            let suihuaQinganCounty = parseFloat(d.suihuaQinganCoun);
            let suihuaMingshuiCounty = parseFloat(d.suihuaMingshuiCoun);
            let suihuaSuilingCounty = parseFloat(d.suihuaSuilingCoun);
            let suihuaAndaCity = parseFloat(d.suihuaAndaCity);
            let suihuaZhaodongCity = parseFloat(d.suihuaZhaodongCity);
            let suihuaHailunCity = parseFloat(d.suihuaHailunCity);
            //Daxinganling
            let daxinganlingMoheCity = parseFloat(d.daxinganlingMoheCity);
            let daxinganlingHumaCounty = parseFloat(d.daxinganlingHumaCoun);
            let daxinganlingTaheCounty = parseFloat(d.daxinganlingTaheCoun);
            //Changchun
            let changchunNanguanDistrict = parseFloat(d.changchunNanguanDist);
            let changchunKuanchengDistrict = parseFloat(d.changchunKuanchengDist);
            let changchunChaoyangDistrict = parseFloat(d.changchunChaoyangDist);
            let changchunErdaoDistrict = parseFloat(d.changchunErdaoDist);
            let changchunLvyuanDistrict = parseFloat(d.changchunLvyuanDist);
            let changchunShuangyangDistrict = parseFloat(d.changchunShuangyangDist);
            let changchunJiutaiDistrict = parseFloat(d.changchunJiutaiDist);
            let changchunNonganCounty = parseFloat(d.changchunNonganCoun);
            let changchunYushuCity = parseFloat(d.changchunYushuCity);
            let changchunDehuiCity = parseFloat(d.changchunDehuiCity);
            let changchunGongzhulingCity = parseFloat(d.changchunGongzhulingCity);
            //Jilin
            let jilinChangyiDistrict = parseFloat(d.jilinChangyiDist);
            let jilinLongtanDistrict = parseFloat(d.jilinLongtanDist);
            let jilinChuanyingDistrict = parseFloat(d.jilinChuanyingDist);
            let jilinFengmanDistrict = parseFloat(d.jilinFengmanDist);
            let jilinYongjiCounty = parseFloat(d.jilinYongjiCoun);
            let jilinJiaoheCity = parseFloat(d.jilinJiaoheCity);
            let jilinHuadianCity = parseFloat(d.jilinHuadianCity);
            let jilinShulanCity = parseFloat(d.jilinShulanCity);
            let jilinPanshiCity = parseFloat(d.jilinPanshiCity);
            //Siping
            let sipingTiexiDistrict = parseFloat(d.sipingTiexiDist);
            let sipingTiedongDistrict = parseFloat(d.sipingTiedongDist);
            let sipingLishuCounty = parseFloat(d.sipingLishuCoun);
            let sipingYimanCounty = parseFloat(d.sipingYimanCoun);
            let sipingShuangliaoCity = parseFloat(d.sipingShuangliaoCity);
            //Liaoyuan
            let liaoyuanLongshanDistrict = parseFloat(d.liaoyuanLongshanDist);
            let liaoyuanXianDistrict = parseFloat(d.liaoyuanXianDist);
            let liaoyuanDongfengCounty = parseFloat(d.liaoyuanDongfengCoun);
            let liaoyuanDongliaoCounty = parseFloat(d.liaoyuanDongliaoCoun);
            //Tonghua
            let tonghuaDongchangDistrict = parseFloat(d.tonghuaDongchangDist);
            let tonghuaErdaojiangDistrict = parseFloat(d.tonghuaErdaojiangDist);
            let tonghuaTonghuaCounty = parseFloat(d.tonghuaTonghuaCoun);
            let tonghuaHuinanCounty = parseFloat(d.tonghuaHuinanCoun);
            let tonghuaLiuheCounty = parseFloat(d.tonghuaLiuheCoun);
            let tonghuaMeihekouCity = parseFloat(d.tonghuaMeihekouCity);
            let tonghuaJianCity = parseFloat(d.tonghuaJianCity);
            //Baishan
            let baishanHunjiangDistrict = parseFloat(d.baishanHunjiangDist);
            let baishanJiangyuanDistrict = parseFloat(d.baishanJiangyuanDist);
            let baishanFusongCounty = parseFloat(d.baishanFusongCoun);
            let baishanJingyuCounty = parseFloat(d.baishanJingyuCoun);
            let baishanChangbaichaoxianCounty = parseFloat(d.baishanChangbaichaoxianCoun);
            let baishanLinjiangCity = parseFloat(d.baishanLinjiangCity);
            //Songyuan
            let songyuanNingjiangDistrict = parseFloat(d.songyuanNingjiangDist);
            let songyuanQianguoerluosiCounty = parseFloat(d.songyuanQianguoerluosiCoun);
            let songyuanChanglingCounty = parseFloat(d.songyuanChanglingCoun);
            let songyuanQiananCounty = parseFloat(d.songyuanQiananCoun);
            let songyuanFuyuCity = parseFloat(d.songyuanFuyuCity);
            //Baicheng
            let baichengTaobeiDistrict = parseFloat(d.baichengTaobeiDist);
            let baichengZhenlaiCounty = parseFloat(d.baichengZhenlaiCoun);
            let baichengTongyuCounty = parseFloat(d.baichengTongyuCoun);
            let baichengTaonanCity = parseFloat(d.baichengTaonanCity);
            let baichengDaanCity = parseFloat(d.baichengDaanCity);
            //Yanbian
            let yanbianYanjiCity = parseFloat(d.yanbianYanjiCity);
            let yanbianTumenCity = parseFloat(d.yanbianTumenCity);
            let yanbianDunhuaCity = parseFloat(d.yanbianDunhuaCity);
            let yanbianHunchunCity = parseFloat(d.yanbianHunchunCity);
            let yanbianLongjingCity = parseFloat(d.yanbianLongjingCity);
            let yanbianHelongCity = parseFloat(d.yanbianHelongCity);
            let yanbianWangqingCounty = parseFloat(d.yanbianWangqingCoun);
            let yanbianAntuCounty = parseFloat(d.yanbianAntuCoun);
            //Shenyang
            let shenyangHepingDistrict = parseFloat(d.shenyangHepingDist);
            let shenyangShenheDistrict = parseFloat(d.shenyangShenheDist);
            let shenyangDadongDistrict = parseFloat(d.shenyangDadongDist);
            let shenyangHuangguDistrict = parseFloat(d.shenyangHuangguDist);
            let shenyangTiexiDistrict = parseFloat(d.shenyangTiexiDist);
            let shenyangSujiatunDistrict = parseFloat(d.shenyangSujiatunDist);
            let shenyangHunnanDistrict = parseFloat(d.shenyangHunnanDist);
            let shenyangShenbeixinDistrict = parseFloat(d.shenyangShenbeixinDist);
            let shenyangYuhongDistrict = parseFloat(d.shenyangYuhongDist);
            let shenyangLiaozhongDistrict = parseFloat(d.shenyangLiaozhongDist);
            let shenyangKangpingCounty = parseFloat(d.shenyangKangpingCoun);
            let shenyangFakuCounty = parseFloat(d.shenyangFakuCoun);
            let shenyangXinminCity = parseFloat(d.shenyangXinminCity);
            //Dalian
            let dalianZhongshanDistrict = parseFloat(d.dalianZhongshanDist);
            let dalianXigangDistrict = parseFloat(d.dalianXigangDist);
            let dalianShahekouDistrict = parseFloat(d.dalianShahekouDist);
            let dalianGanjingziDistrict = parseFloat(d.dalianGanjingziDist);
            let dalianLvshunkouDistrict = parseFloat(d.dalianLvshunkouDist);
            let dalianJinzhouDistrict = parseFloat(d.dalianJinzhouDist);
            let dalianPulandianDistrict = parseFloat(d.dalianPulandianDist);
            let dalianChanghaiCounty = parseFloat(d.dalianChanghaiCoun);
            let dalianWafangdianCity = parseFloat(d.dalianWafangdianCity);
            let dalianZhuangheCity = parseFloat(d.dalianZhuangheCity);
            //Anshan
            let anshanTiedongDistrict = parseFloat(d.anshanTiedongDist);
            let anshanTiexiDistrict = parseFloat(d.anshanTiexiDist);
            let anshanLishanDistrict = parseFloat(d.anshanLishanDist);
            let anshanQianshanDistrict = parseFloat(d.anshanQianshanDist);
            let anshanTaianCounty = parseFloat(d.anshanTaianCoun);
            let anshanYoumanCounty = parseFloat(d.anshanYoumanCoun);
            let anshanHaichengCity = parseFloat(d.anshanHaichengCity);
            //Fushun
            let fushunXinfuDistrict = parseFloat(d.fushunXinfuDist);
            let fushunDongzhouDistrict = parseFloat(d.fushunDongzhouDist);
            let fushunWanghuaDistrict = parseFloat(d.fushunWanghuaDist);
            let fushunShunchengDistrict = parseFloat(d.fushunShunchengDist);
            let fushunFushunCounty = parseFloat(d.fushunFushunCoun);
            let fushunXinmanCounty = parseFloat(d.fushunXinmanCoun);
            let fushunQingmanCounty = parseFloat(d.fushunQingmanCoun);
            //Benxi
            let benxiPingshanDistrict = parseFloat(d.benxiPingshanDist);
            let benxiXihuDistrict = parseFloat(d.benxiXihuDist);
            let benxiMingshanDistrict = parseFloat(d.benxiMingshanDist);
            let benxiNanfenDistrict = parseFloat(d.benxiNanfenDist);
            let benxiBenmanCounty = parseFloat(d.benxiBenmanCoun);
            let benxiHuanmanCounty = parseFloat(d.benxiHuanmanCoun);
            //Dandong
            let dandongYuanbaoDistrict = parseFloat(d.dandongYuanbaoDist);
            let dandongZhenxingDistrict = parseFloat(d.dandongZhenxingDist);
            let dandongZhenanDistrict = parseFloat(d.dandongZhenanDist);
            let dandongKuanmanCounty = parseFloat(d.dandongKuanmanCoun);
            let dandongDonggangCity = parseFloat(d.dandongDonggangCity);
            let dandongFengchengCity = parseFloat(d.dandongFengchengCity);
            //Jinzhou
            let jinzhouGutaDistrict = parseFloat(d.jinzhouGutaDist);
            let jinzhouLingheDistrict = parseFloat(d.jinzhouLingheDist);
            let jinzhouTaiheDistrict = parseFloat(d.jinzhouTaiheDist);
            let jinzhouHeishanCounty = parseFloat(d.jinzhouHeishanCoun);
            let jinzhouYiCounty = parseFloat(d.jinzhouYiCoun);
            let jinzhouLinghaiCity = parseFloat(d.jinzhouLinghaiCity);
            let jinzhouBeizhenCity = parseFloat(d.jinzhouBeizhenCity);
            //Yingkou
            let yingkouZhanqianDistrict = parseFloat(d.yingkouZhanqianDist);
            let yingkouXishiDistrict = parseFloat(d.yingkouXishiDist);
            let yingkouBayuquanDistrict = parseFloat(d.yingkouBayuquanDist);
            let yingkouLaobianDistrict = parseFloat(d.yingkouLaobianDist);
            let yingkouGaizhouCity = parseFloat(d.yingkouGaizhouCity);
            let yingkouDashiqiaoCity = parseFloat(d.yingkouDashiqiaoCity);
            //Fuxin
            let fuxinHaizhouDistrict = parseFloat(d.fuxinHaizhouDist);
            let fuxinXinqiuDistrict = parseFloat(d.fuxinXinqiuDist);
            let fuxinTaipingDistrict = parseFloat(d.fuxinTaipingDist);
            let fuxinQinghemenDistrict = parseFloat(d.fuxinQinghemenDist);
            let fuxinXiheDistrict = parseFloat(d.fuxinXiheDist);
            let fuxinFumengCounty = parseFloat(d.fuxinFumengCoun);
            let fuxinZhangwuCounty = parseFloat(d.fuxinZhangwuCoun);
            //Liaoyang
            let liaoyangBaitaDistrict = parseFloat(d.liaoyangBaitaDist);
            let liaoyangWenshengDistrict = parseFloat(d.liaoyangWenshengDist);
            let liaoyangHongweiDistrict = parseFloat(d.liaoyangHongweiDist);
            let liaoyangGongchanglingDistrict = parseFloat(d.liaoyangGongchanglingDist);
            let liaoyangTaiziheDistrict = parseFloat(d.liaoyangTaiziheDist);
            let liaoyangLiaoyangCounty = parseFloat(d.liaoyangLiaoyangCoun);
            let liaoyangDengtaCity = parseFloat(d.liaoyangDengtaCoun);
            //Panjin
            let panjinShuangtaiziDistrict = parseFloat(d.panjinShuangtaiziDist);
            let panjinXinglongtaiDistrict = parseFloat(d.panjinXinglongtaiDist);
            let panjinDawaDistrict = parseFloat(d.panjinDawaDist);
            let panjinPanshanCounty = parseFloat(d.panjinPanshanCoun);
            //Tieling
            let tielingYinzhouDistrict = parseFloat(d.tielingYinzhouDist);
            let tielingQingheDistrict = parseFloat(d.tielingQingheDist);
            let tielingTielingCounty = parseFloat(d.tielingTielingCoun);
            let tielingXifengCounty = parseFloat(d.tielingXifengCoun);
            let tielingChangtuCounty = parseFloat(d.tielingChangtuCoun);
            let tielingDiaobingshanCity = parseFloat(d.tielingDiaobingshanCity);
            let tielingKaiyuanCity = parseFloat(d.tielingKaiyuanCity);
            //Chaoyang
            let chaoyangShuangtaDistrict = parseFloat(d.chaoyangShuangtaDist);
            let chaoyangLongchengDistrict = parseFloat(d.chaoyangLongchengDist);
            let chaoyangChaoyangCounty = parseFloat(d.chaoyangChaoyangCoun);
            let chaoyangJianpingCounty = parseFloat(d.chaoyangJianpingCoun);
            let chaoyangKezuoCounty = parseFloat(d.chaoyangKezuoCoun);
            let chaoyangBeipiaoCity = parseFloat(d.chaoyangBeipiaoCity);
            let chaoyangLingyuanCity = parseFloat(d.chaoyangLingyuanCity);
            //Huludao
            let huludaoLianshanDistrict = parseFloat(d.huludaoLianshanDist);
            let huludaoLonggangDistrict = parseFloat(d.huludaoLonggangDist);
            let huludaoNanpiaoDistrict = parseFloat(d.huludaoNanpiaoDist);
            let huludaoSuizhongCounty = parseFloat(d.huludaoSuizhongCoun);
            let huludaoJianchangCounty = parseFloat(d.huludaoJianchangCoun);
            let huludaoXingchengCity = parseFloat(d.huludaoXingchengCity);
            //Harbin
            if (!isNaN(hour) && !isNaN(harbinDaoliDistrict)) {
                let harbinDaoliDistObj = createLabelObject(hour, harbinDaoliDistrict);
                labelHarbinDaoliDistrict.push(harbinDaoliDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinDaowaiDistrict)) {
                let harbinDaowaiDistObj = createLabelObject(hour, harbinDaowaiDistrict);
                labelHarbinDaowaiDistrict.push(harbinDaowaiDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinNangangDistrict)) {
                let harbinNangangDistObj = createLabelObject(hour, harbinNangangDistrict);
                labelHarbinNangangDistrict.push(harbinNangangDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinPingfangDistrict)) {
                let harbinPingfangDistObj = createLabelObject(hour, harbinPingfangDistrict);
                labelHarbinPingfangDistrict.push(harbinPingfangDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinSongbeiDistrict)) {
                let harbinSongbeiDistObj = createLabelObject(hour, harbinSongbeiDistrict);
                labelHarbinSongbeiDistrict.push(harbinSongbeiDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinXiangfangDistrict)) {
                let harbinXiangfangDistObj = createLabelObject(hour, harbinXiangfangDistrict);
                labelHarbinXiangfangDistrict.push(harbinXiangfangDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinHulanDistrict)) {
                let harbinHulanDistObj = createLabelObject(hour, harbinHulanDistrict);
                labelHarbinHulanDistrict.push(harbinHulanDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinEchengDistrict)) {
                let harbinEchengDistObj = createLabelObject(hour, harbinEchengDistrict);
                labelHarbinEchengDistrict.push(harbinEchengDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinShuangchengDistrict)) {
                let harbinShuangchengDistObj = createLabelObject(hour, harbinShuangchengDistrict);
                labelHarbinShuangchengDistrict.push(harbinShuangchengDistObj);
            }
            if (!isNaN(hour) && !isNaN(harbinYilanCounty)) {
                let harbinYilanCounObj = createLabelObject(hour, harbinYilanCounty);
                labelHarbinYilanCounty.push(harbinYilanCounObj);
            }
            if (!isNaN(hour) && !isNaN(harbinFangzhengCounty)) {
                let harbinFangzhengCounObj = createLabelObject(hour, harbinFangzhengCounty);
                labelHarbinFangzhengCounty.push(harbinFangzhengCounObj);
            }
            if (!isNaN(hour) && !isNaN(harbinBinCounty)) {
                let harbinBinCounObj = createLabelObject(hour, harbinBinCounty);
                labelHarbinBinCounty.push(harbinBinCounObj);
            }
            if (!isNaN(hour) && !isNaN(harbinBayanCounty)) {
                let harbinBayanCounObj = createLabelObject(hour, harbinBayanCounty);
                labelHarbinBayanCounty.push(harbinBayanCounObj);
            }
            if (!isNaN(hour) && !isNaN(harbinMulanCounty)) {
                let harbinMulanCounObj = createLabelObject(hour, harbinMulanCounty);
                labelHarbinMulanCounty.push(harbinMulanCounObj);
            }
            if (!isNaN(hour) && !isNaN(harbinTongheCounty)) {
                let harbinTongheCounObj = createLabelObject(hour, harbinTongheCounty);
                labelHarbinTongheCounty.push(harbinTongheCounObj);
            }
            if (!isNaN(hour) && !isNaN(harbinYanshouCounty)) {
                let harbinYanshouCounObj = createLabelObject(hour, harbinYanshouCounty);
                labelHarbinYanshouCounty.push(harbinYanshouCounObj);
            }
            if (!isNaN(hour) && !isNaN(harbinShangzhiCity)) {
                let harbinShangzhiCityObj = createLabelObject(hour, harbinShangzhiCity);
                labelHarbinShangzhiCity.push(harbinShangzhiCityObj);
            }
            if (!isNaN(hour) && !isNaN(harbinWuchangCity)) {
                let harbinWuchangCityObj = createLabelObject(hour, harbinWuchangCity);
                labelHarbinWuchangCity.push(harbinWuchangCityObj);
            }
            //Qiqihar
            if (!isNaN(hour) && !isNaN(qiqiharLongshaDistrict)) {
                let qiqiharLongshaDistObj = createLabelObject(hour, qiqiharLongshaDistrict);
                labelQiqiharLongshaDistrict.push(qiqiharLongshaDistObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharJianhuaDistrict)) {
                let qiqiharJianhuaDistObj = createLabelObject(hour, qiqiharJianhuaDistrict);
                labelQiqiharJianhuaDistrict.push(qiqiharJianhuaDistObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharTiefengDistrict)) {
                let qiqiharTiefengDistObj = createLabelObject(hour, qiqiharTiefengDistrict);
                labelQiqiharTiefengDistrict.push(qiqiharTiefengDistObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharAngangxiDistrict)) {
                let qiqiharAngangxiDistObj = createLabelObject(hour, qiqiharAngangxiDistrict);
                labelQiqiharAngangxiDistrict.push(qiqiharAngangxiDistObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharFulaerjiDistrict)) {
                let qiqiharFulaerjiDistObj = createLabelObject(hour, qiqiharFulaerjiDistrict);
                labelQiqiharFulaerjiDistrict.push(qiqiharFulaerjiDistObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharNianzishanDistrict)) {
                let qiqiharNianzishanDistObj = createLabelObject(hour, qiqiharNianzishanDistrict);
                labelQiqiharNianzishanDistrict.push(qiqiharNianzishanDistObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharMeilisiDistrict)) {
                let qiqiharMeilisiDistObj = createLabelObject(hour, qiqiharMeilisiDistrict);
                labelQiqiharMeilisiDistrict.push(qiqiharMeilisiDistObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharLongjiangCounty)) {
                let qiqiharLongjiangCounObj = createLabelObject(hour, qiqiharLongjiangCounty);
                labelQiqiharLongjiangCounty.push(qiqiharLongjiangCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharYianCounty)) {
                let qiqiharYianCounObj = createLabelObject(hour, qiqiharYianCounty);
                labelQiqiharYianCounty.push(qiqiharYianCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharTailaiCounty)) {
                let qiqiharTailaiCounObj = createLabelObject(hour, qiqiharTailaiCounty);
                labelQiqiharTailaiCounty.push(qiqiharTailaiCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharGannanCounty)) {
                let qiqiharGannanCounObj = createLabelObject(hour, qiqiharGannanCounty);
                labelQiqiharGannanCounty.push(qiqiharGannanCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharFuyuCounty)) {
                let qiqiharFuyuCounObj = createLabelObject(hour, qiqiharFuyuCounty);
                labelQiqiharFuyuCounty.push(qiqiharFuyuCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharKeshanCounty)) {
                let qiqiharKeshanCounObj = createLabelObject(hour, qiqiharKeshanCounty);
                labelQiqiharKeshanCounty.push(qiqiharKeshanCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharKedongCounty)) {
                let qiqiharKedongCounObj = createLabelObject(hour, qiqiharKedongCounty);
                labelQiqiharKedongCounty.push(qiqiharKedongCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharBaiquanCounty)) {
                let qiqiharBaiquanCounObj = createLabelObject(hour, qiqiharBaiquanCounty);
                labelQiqiharBaiquanCounty.push(qiqiharBaiquanCounObj);
            }
            if (!isNaN(hour) && !isNaN(qiqiharNeheCity)) {
                let qiqiharNeheCityObj = createLabelObject(hour, qiqiharNeheCity);
                labelQiqiharNeheCity.push(qiqiharNeheCityObj);
            }
            //Jixi
            if (!isNaN(hour) && !isNaN(jixiJiguanDistrict)) {
                let jixiJiguanDistObj = createLabelObject(hour, jixiJiguanDistrict);
                labelJixiJiguanDistrict.push(jixiJiguanDistObj);
            }
            if (!isNaN(hour) && !isNaN(jixiHengshanDistrict)) {
                let jixiHengshanDistObj = createLabelObject(hour, jixiHengshanDistrict);
                labelJixiHengshanDistrict.push(jixiHengshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(jixiDidaoDistrict)) {
                let jixiDidaoDistObj = createLabelObject(hour, jixiDidaoDistrict);
                labelJixiDidaoDistrict.push(jixiDidaoDistObj);
            }
            if (!isNaN(hour) && !isNaN(jixiLishuDistrict)) {
                let jixiLishuDistObj = createLabelObject(hour, jixiLishuDistrict);
                labelJixiLishuDistrict.push(jixiLishuDistObj);
            }
            if (!isNaN(hour) && !isNaN(jixiChengziheDistrict)) {
                let jixiChengziheDistObj = createLabelObject(hour, jixiChengziheDistrict);
                labelJixiChengziheDistrict.push(jixiChengziheDistObj);
            }
            if (!isNaN(hour) && !isNaN(jixiMashanDistrict)) {
                let jixiMashanDistObj = createLabelObject(hour, jixiMashanDistrict);
                labelJixiMashanDistrict.push(jixiMashanDistObj);
            }
            if (!isNaN(hour) && !isNaN(jixiJidongCounty)) {
                let jixiJidongCounObj = createLabelObject(hour, jixiJidongCounty);
                labelJixiJidongCounty.push(jixiJidongCounObj);
            }
            if (!isNaN(hour) && !isNaN(jixiHulinCity)) {
                let jixiHulinCityObj = createLabelObject(hour, jixiHulinCity);
                labelJixiHulinCity.push(jixiHulinCityObj);
            }
            if (!isNaN(hour) && !isNaN(jixiMishanCity)) {
                let jixiMishanCityObj = createLabelObject(hour, jixiMishanCity);
                labelJixiMishanCity.push(jixiMishanCityObj);
            }
            //Hegang
            if (!isNaN(hour) && !isNaN(hegangXiangyangDistrict)) {
                let hegangXiangyangDistObj = createLabelObject(hour, hegangXiangyangDistrict);
                labelHegangXiangyangDistrict.push(hegangXiangyangDistObj);
            }
            if (!isNaN(hour) && !isNaN(hegangGongnongDistrict)) {
                let hegangGongnongDistObj = createLabelObject(hour, hegangGongnongDistrict);
                labelHegangGongnongDistrict.push(hegangGongnongDistObj);
            }
            if (!isNaN(hour) && !isNaN(hegangNanshanDistrict)) {
                let hegangNanshanDistObj = createLabelObject(hour, hegangNanshanDistrict);
                labelHegangNanshanDistrict.push(hegangNanshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(hegangXinganDistrict)) {
                let hegangXinganDistObj = createLabelObject(hour, hegangXinganDistrict);
                labelHegangXinganDistrict.push(hegangXinganDistObj);
            }
            if (!isNaN(hour) && !isNaN(hegangDongshanDistrict)) {
                let hegangDongshanDistObj = createLabelObject(hour, hegangDongshanDistrict);
                labelHegangDongshanDistrict.push(hegangDongshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(hegangXingshanDistrict)) {
                let hegangXingshanDistObj = createLabelObject(hour, hegangXingshanDistrict);
                labelHegangXingshanDistrict.push(hegangXingshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(hegangLuobeiCounty)) {
                let hegangLuobeiCounObj = createLabelObject(hour, hegangLuobeiCounty);
                labelHegangLuobeiCounty.push(hegangLuobeiCounObj);
            }
            if (!isNaN(hour) && !isNaN(hegangSuibinCounty)) {
                let hegangSuibinCounObj = createLabelObject(hour, hegangSuibinCounty);
                labelHegangSuibinCounty.push(hegangSuibinCounObj);
            }
            //Shuangyashan
            if (!isNaN(hour) && !isNaN(shuangyashanJianshanDistrict)) {
                let shuangyashanJianshanDistObj = createLabelObject(hour, shuangyashanJianshanDistrict);
                labelShuangyashanJianshanDistrict.push(shuangyashanJianshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(shuangyashanLingdongDistrict)) {
                let shuangyashanLingdongDistObj = createLabelObject(hour, shuangyashanLingdongDistrict);
                labelShuangyashanLingdongDistrict.push(shuangyashanLingdongDistObj);
            }
            if (!isNaN(hour) && !isNaN(shuangyashanSifangtaiDistrict)) {
                let shuangyashanSifangtaiDistObj = createLabelObject(hour, shuangyashanSifangtaiDistrict);
                labelShuangyashanSifangtaiDistrict.push(shuangyashanSifangtaiDistObj);
            }
            if (!isNaN(hour) && !isNaN(shuangyashanBaoshanDistrict)) {
                let shuangyashanBaoshanDistObj = createLabelObject(hour, shuangyashanBaoshanDistrict);
                labelShuangyashanBaoshanDistrict.push(shuangyashanBaoshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(shuangyashanJixianCounty)) {
                let shuangyashanJixianCounObj = createLabelObject(hour, shuangyashanJixianCounty);
                labelShuangyashanJixianCounty.push(shuangyashanJixianCounObj);
            }
            if (!isNaN(hour) && !isNaN(shuangyashanYouyiCounty)) {
                let shuangyashanYouyiCounObj = createLabelObject(hour, shuangyashanYouyiCounty);
                labelShuangyashanYouyiCounty.push(shuangyashanYouyiCounObj);
            }
            if (!isNaN(hour) && !isNaN(shuangyashanBaoqingCounty)) {
                let shuangyashanBaoqingCounObj = createLabelObject(hour, shuangyashanBaoqingCounty);
                labelShuangyashanBaoqingCounty.push(shuangyashanBaoqingCounObj);
            }
            if (!isNaN(hour) && !isNaN(shuangyashanYaoheCounty)) {
                let shuangyashanYaoheCounObj = createLabelObject(hour, shuangyashanYaoheCounty);
                labelShuangyashanYaoheCounty.push(shuangyashanYaoheCounObj);
            }
            //Daqing
            if (!isNaN(hour) && !isNaN(daqingSaertuDistrict)) {
                let daqingSaertuDistObj = createLabelObject(hour, daqingSaertuDistrict);
                labelDaqingSaertuDistrict.push(daqingSaertuDistObj);
            }
            if (!isNaN(hour) && !isNaN(daqingLongfengDistrict)) {
                let daqingLongfengDistObj = createLabelObject(hour, daqingLongfengDistrict);
                labelDaqingLongfengDistrict.push(daqingLongfengDistObj);
            }
            if (!isNaN(hour) && !isNaN(daqingRanghuluDistrict)) {
                let daqingRanghuluDistObj = createLabelObject(hour, daqingRanghuluDistrict);
                labelDaqingRanghuluDistrict.push(daqingRanghuluDistObj);
            }
            if (!isNaN(hour) && !isNaN(daqingHonggangDistrict)) {
                let daqingHonggangDistObj = createLabelObject(hour, daqingHonggangDistrict);
                labelDaqingHonggangDistrict.push(daqingHonggangDistObj);
            }
            if (!isNaN(hour) && !isNaN(daqingDatongDistrict)) {
                let daqingDatongDistObj = createLabelObject(hour, daqingDatongDistrict);
                labelDaqingDatongDistrict.push(daqingDatongDistObj);
            }
            if (!isNaN(hour) && !isNaN(daqingZhaozhouCounty)) {
                let daqingZhaozhouCounObj = createLabelObject(hour, daqingZhaozhouCounty);
                labelDaqingZhaozhouCounty.push(daqingZhaozhouCounObj);
            }
            if (!isNaN(hour) && !isNaN(daqingZhaoyuanCounty)) {
                let daqingZhaoyuanCounObj = createLabelObject(hour, daqingZhaoyuanCounty);
                labelDaqingZhaoyuanCounty.push(daqingZhaoyuanCounObj);
            }
            if (!isNaN(hour) && !isNaN(daqingLindianCounty)) {
                let daqingLindianCounObj = createLabelObject(hour, daqingLindianCounty);
                labelDaqingLindianCounty.push(daqingLindianCounObj);
            }
            if (!isNaN(hour) && !isNaN(daqingDuerboteCounty)) {
                let daqingDuerboteCounObj = createLabelObject(hour, daqingDuerboteCounty);
                labelDaqingDuerboteCounty.push(daqingDuerboteCounObj);
            }
            //Yichun
            if (!isNaN(hour) && !isNaN(yichunYimeiDistrict)) {
                let yichunYimeiDistObj = createLabelObject(hour, yichunYimeiDistrict);
                labelYichunYimeiDistrict.push(yichunYimeiDistObj);
            }
            if (!isNaN(hour) && !isNaN(yichunWucuiDistrict)) {
                let yichunWucuiDistObj = createLabelObject(hour, yichunWucuiDistrict);
                labelYichunWucuiDistrict.push(yichunWucuiDistObj);
            }
            if (!isNaN(hour) && !isNaN(yichunYouhaoDistrict)) {
                let yichunYouhaoDistObj = createLabelObject(hour, yichunYouhaoDistrict);
                labelYichunYouhaoDistrict.push(yichunYouhaoDistObj);
            }
            if (!isNaN(hour) && !isNaN(yichunJinlinDistrict)) {
                let yichunJinlinDistObj = createLabelObject(hour, yichunJinlinDistrict);
                labelYichunJinlinDistrict.push(yichunJinlinDistObj);
            }
            if (!isNaN(hour) && !isNaN(yichunJiayinCounty)) {
                let yichunJiayinCounObj = createLabelObject(hour, yichunJiayinCounty);
                labelYichunJiayinCounty.push(yichunJiayinCounObj);
            }
            if (!isNaN(hour) && !isNaN(yichunTangwangCounty)) {
                let yichunTangwangCounObj = createLabelObject(hour, yichunTangwangCounty);
                labelYichunTangwangCounty.push(yichunTangwangCounObj);
            }
            if (!isNaN(hour) && !isNaN(yichunFenglinCounty)) {
                let yichunFenglinCounObj = createLabelObject(hour, yichunFenglinCounty);
                labelYichunFenglinCounty.push(yichunFenglinCounObj);
            }
            if (!isNaN(hour) && !isNaN(yichunDaqingshanCounty)) {
                let yichunDaqingshanCounObj = createLabelObject(hour, yichunDaqingshanCounty);
                labelYichunDaqingshanCounty.push(yichunDaqingshanCounObj);
            }
            if (!isNaN(hour) && !isNaN(yichunNanchaCounty)) {
                let yichunNanchaCounObj = createLabelObject(hour, yichunNanchaCounty);
                labelYichunNanchaCounty.push(yichunNanchaCounObj);
            }
            if (!isNaN(hour) && !isNaN(yichunTieliCity)) {
                let yichunTieliCityObj = createLabelObject(hour, yichunTieliCity);
                labelYichunTieliCity.push(yichunTieliCityObj);
            }
            //Jiamusi
            if (!isNaN(hour) && !isNaN(jiamusiXiangyangDistrict)) {
                let jiamusiXiangyangDistObj = createLabelObject(hour, jiamusiXiangyangDistrict);
                labelJiamusiXiangyangDistrict.push(jiamusiXiangyangDistObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiQianjinDistrict)) {
                let jiamusiQianjinDistObj = createLabelObject(hour, jiamusiQianjinDistrict);
                labelJiamusiQianjinDistrict.push(jiamusiQianjinDistObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiDongfengDistrict)) {
                let jiamusiDongfengDistObj = createLabelObject(hour, jiamusiDongfengDistrict);
                labelJiamusiDongfengDistrict.push(jiamusiDongfengDistObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiJiaoDistrict)) {
                let jiamusiJiaoDistObj = createLabelObject(hour, jiamusiJiaoDistrict);
                labelJiamusiJiaoDistrict.push(jiamusiJiaoDistObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiHuananCounty)) {
                let jiamusiHuananCounObj = createLabelObject(hour, jiamusiHuananCounty);
                labelJiamusiHuananCounty.push(jiamusiHuananCounObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiHuachuanCounty)) {
                let jiamusiHuachuanCounObj = createLabelObject(hour, jiamusiHuachuanCounty);
                labelJiamusiHuachuanCounty.push(jiamusiHuachuanCounObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiTangyuanCounty)) {
                let jiamusiTangyuanCounObj = createLabelObject(hour, jiamusiTangyuanCounty);
                labelJiamusiTangyuanCounty.push(jiamusiTangyuanCounObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiTongjiangCity)) {
                let jiamusiTongjiangCityObj = createLabelObject(hour, jiamusiTongjiangCity);
                labelJiamusiTongjiangCity.push(jiamusiTongjiangCityObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiFujinCity)) {
                let jiamusiFujinCityObj = createLabelObject(hour, jiamusiFujinCity);
                labelJiamusiFujinCity.push(jiamusiFujinCityObj);
            }
            if (!isNaN(hour) && !isNaN(jiamusiFuyuanCity)) {
                let jiamusiFuyuanCityObj = createLabelObject(hour, jiamusiFuyuanCity);
                labelJiamusiFuyuanCity.push(jiamusiFuyuanCityObj);
            }
            //Qitaihe
            if (!isNaN(hour) && !isNaN(qitaiheXinxingDistrict)) {
                let qitaiheXinxingDistObj = createLabelObject(hour, qitaiheXinxingDistrict);
                labelQitaiheXinxingDistrict.push(qitaiheXinxingDistObj);
            }
            if (!isNaN(hour) && !isNaN(qitaiheTaoshanDistrict)) {
                let qitaiheTaoshanDistObj = createLabelObject(hour, qitaiheTaoshanDistrict);
                labelQitaiheTaoshanDistrict.push(qitaiheTaoshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(qitaiheQieziheDistrict)) {
                let qitaiheQieziheDistObj = createLabelObject(hour, qitaiheQieziheDistrict);
                labelQitaiheQieziheDistrict.push(qitaiheQieziheDistObj);
            }
            if (!isNaN(hour) && !isNaN(qitaiheBoliCounty)) {
                let qitaiheBoliCounObj = createLabelObject(hour, qitaiheBoliCounty);
                labelQitaiheBoliCounty.push(qitaiheBoliCounObj);
            }
            //Mudanjiang
            if (!isNaN(hour) && !isNaN(mudanjiangDonganDistrict)) {
                let mudanjiangDonganDistObj = createLabelObject(hour, mudanjiangDonganDistrict);
                labelMudanjiangDonganDistrict.push(mudanjiangDonganDistObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangYangmingDistrict)) {
                let mudanjiangYangmingDistObj = createLabelObject(hour, mudanjiangYangmingDistrict);
                labelMudanjiangYangmingDistrict.push(mudanjiangYangmingDistObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangAiminDistrict)) {
                let mudanjiangAiminDistObj = createLabelObject(hour, mudanjiangAiminDistrict);
                labelMudanjiangAiminDistrict.push(mudanjiangAiminDistObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangXianDistrict)) {
                let mudanjiangXianDistObj = createLabelObject(hour, mudanjiangXianDistrict);
                labelMudanjiangXianDistrict.push(mudanjiangXianDistObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangLinkouCounty)) {
                let mudanjiangLinkouCounObj = createLabelObject(hour, mudanjiangLinkouCounty);
                labelMudanjiangLinkouCounty.push(mudanjiangLinkouCounObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangSuifenheCity)) {
                let mudanjiangSuifenheCityObj = createLabelObject(hour, mudanjiangSuifenheCity);
                labelMudanjiangSuifenheCity.push(mudanjiangSuifenheCityObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangHailinCity)) {
                let mudanjiangHailinCityObj = createLabelObject(hour, mudanjiangHailinCity);
                labelMudanjiangHailinCity.push(mudanjiangHailinCityObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangNinganCity)) {
                let mudanjiangNinganCityObj = createLabelObject(hour, mudanjiangNinganCity);
                labelMudanjiangNinganCity.push(mudanjiangNinganCityObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangMulingCity)) {
                let mudanjiangMulingCityObj = createLabelObject(hour, mudanjiangMulingCity);
                labelMudanjiangMulingCity.push(mudanjiangMulingCityObj);
            }
            if (!isNaN(hour) && !isNaN(mudanjiangDongningCity)) {
                let mudanjiangDongningCityObj = createLabelObject(hour, mudanjiangDongningCity);
                labelMudanjiangDongningCity.push(mudanjiangDongningCityObj);
            }
            //Heihe
            if (!isNaN(hour) && !isNaN(heiheAihuiDistrict)) {
                let heiheAihuiDistObj = createLabelObject(hour, heiheAihuiDistrict);
                labelHeiheAihuiDistrict.push(heiheAihuiDistObj);
            }
            if (!isNaN(hour) && !isNaN(heiheXunkeCounty)) {
                let heiheXunkeCounObj = createLabelObject(hour, heiheXunkeCounty);
                labelHeiheXunkeCounty.push(heiheXunkeCounObj);
            }
            if (!isNaN(hour) && !isNaN(heiheSunwuCounty)) {
                let heiheSunwuCounObj = createLabelObject(hour, heiheSunwuCounty);
                labelHeiheSunwuCounty.push(heiheSunwuCounObj);
            }
            if (!isNaN(hour) && !isNaN(heiheBeianCity)) {
                let heiheBeianCityObj = createLabelObject(hour, heiheBeianCity);
                labelHeiheBeianCity.push(heiheBeianCityObj);
            }
            if (!isNaN(hour) && !isNaN(heiheWudalianchiCity)) {
                let heiheWudalianchiCityObj = createLabelObject(hour, heiheWudalianchiCity);
                labelHeiheWudalianchiCity.push(heiheWudalianchiCityObj);
            }
            if (!isNaN(hour) && !isNaN(heiheNenjiangCity)) {
                let heiheNenjiangCityObj = createLabelObject(hour, heiheNenjiangCity);
                labelHeiheNenjiangCity.push(heiheNenjiangCityObj);
            }
            //Suihua
            if (!isNaN(hour) && !isNaN(suihuaBeilinDistrict)) {
                let suihuaBeilinDistObj = createLabelObject(hour, suihuaBeilinDistrict);
                labelSuihuaBeilinDistrict.push(suihuaBeilinDistObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaWangkuiCounty)) {
                let suihuaWangkuiCounObj = createLabelObject(hour, suihuaWangkuiCounty);
                labelSuihuaWangkuiCounty.push(suihuaWangkuiCounObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaLanxiCounty)) {
                let suihuaLanxiCounObj = createLabelObject(hour, suihuaLanxiCounty);
                labelSuihuaLanxiCounty.push(suihuaLanxiCounObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaQinggangCounty)) {
                let suihuaQinggangCounObj = createLabelObject(hour, suihuaQinggangCounty);
                labelSuihuaQinggangCounty.push(suihuaQinggangCounObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaQinganCounty)) {
                let suihuaQinganCounObj = createLabelObject(hour, suihuaQinganCounty);
                labelSuihuaQinganCounty.push(suihuaQinganCounObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaMingshuiCounty)) {
                let suihuaMingshuiCounObj = createLabelObject(hour, suihuaMingshuiCounty);
                labelSuihuaMingshuiCounty.push(suihuaMingshuiCounObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaSuilingCounty)) {
                let suihuaSuilingCounObj = createLabelObject(hour, suihuaSuilingCounty);
                labelSuihuaSuilingCounty.push(suihuaSuilingCounObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaAndaCity)) {
                let suihuaAndaCityObj = createLabelObject(hour, suihuaAndaCity);
                labelSuihuaAndaCity.push(suihuaAndaCityObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaZhaodongCity)) {
                let suihuaZhaodongCityObj = createLabelObject(hour, suihuaZhaodongCity);
                labelSuihuaZhaodongCity.push(suihuaZhaodongCityObj);
            }
            if (!isNaN(hour) && !isNaN(suihuaHailunCity)) {
                let suihuaHailunCityObj = createLabelObject(hour, suihuaHailunCity);
                labelSuihuaHailunCity.push(suihuaHailunCityObj);
            }
            //Daxinganling
            if (!isNaN(hour) && !isNaN(daxinganlingMoheCity)) {
                let daxinganlingMoheCityObj = createLabelObject(hour, daxinganlingMoheCity);
                labelDaxinganlingMoheCity.push(daxinganlingMoheCityObj);
            }
            if (!isNaN(hour) && !isNaN(daxinganlingHumaCounty)) {
                let daxinganlingHumaCounObj = createLabelObject(hour, daxinganlingHumaCounty);
                labelDaxinganlingHumaCounty.push(daxinganlingHumaCounObj);
            }
            if (!isNaN(hour) && !isNaN(daxinganlingTaheCounty)) {
                let daxinganlingTaheCounObj = createLabelObject(hour, daxinganlingTaheCounty);
                labelDaxinganlingTaheCounty.push(daxinganlingTaheCounObj);
            }
            //Changchun
            if (!isNaN(hour) && !isNaN(changchunNanguanDistrict)) {
                let changchunNanguanDistObj = createLabelObject(hour, changchunNanguanDistrict);
                labelChangchunNanguanDistrict.push(changchunNanguanDistObj);
            }

            if (!isNaN(hour) && !isNaN(changchunKuanchengDistrict)) {
                let changchunKuanchengDistObj = createLabelObject(hour, changchunKuanchengDistrict);
                labelChangchunKuanchengDistrict.push(changchunKuanchengDistObj);
            }
            if (!isNaN(hour) && !isNaN(changchunChaoyangDistrict)) {
                let changchunChaoyangDistObj = createLabelObject(hour, changchunChaoyangDistrict);
                labelChangchunChaoyangDistrict.push(changchunChaoyangDistObj);
            }
            if (!isNaN(hour) && !isNaN(changchunErdaoDistrict)) {
                let changchunErdaoDistObj = createLabelObject(hour, changchunErdaoDistrict);
                labelChangchunErdaoDistrict.push(changchunErdaoDistObj);
            }
            if (!isNaN(hour) && !isNaN(changchunLvyuanDistrict)) {
                let changchunLvyuanDistObj = createLabelObject(hour, changchunLvyuanDistrict);
                labelChangchunLvyuanDistrict.push(changchunLvyuanDistObj);
            }
            if (!isNaN(hour) && !isNaN(changchunShuangyangDistrict)) {
                let changchunShuangyangDistObj = createLabelObject(hour, changchunShuangyangDistrict);
                labelChangchunShuangyangDistrict.push(changchunShuangyangDistObj);
            }
            if (!isNaN(hour) && !isNaN(changchunJiutaiDistrict)) {
                let changchunJiutaiDistObj = createLabelObject(hour, changchunJiutaiDistrict);
                labelChangchunJiutaiDistrict.push(changchunJiutaiDistObj);
            }
            if (!isNaN(hour) && !isNaN(changchunNonganCounty)) {
                let changchunNonganCounObj = createLabelObject(hour, changchunNonganCounty);
                labelChangchunNonganCounty.push(changchunNonganCounObj);
            }
            if (!isNaN(hour) && !isNaN(changchunYushuCity)) {
                let changchunYushuCityObj = createLabelObject(hour, changchunYushuCity);
                labelChangchunYushuCity.push(changchunYushuCityObj);
            }
            if (!isNaN(hour) && !isNaN(changchunDehuiCity)) {
                let changchunDehuiCityObj = createLabelObject(hour, changchunDehuiCity);
                labelChangchunDehuiCity.push(changchunDehuiCityObj);
            }
            if (!isNaN(hour) && !isNaN(changchunGongzhulingCity)) {
                let changchunGongzhulingCityObj = createLabelObject(hour, changchunGongzhulingCity);
                labelChangchunGongzhulingCity.push(changchunGongzhulingCityObj);
            }
            //Jilin
            if (!isNaN(hour) && !isNaN(jilinChangyiDistrict)) {
                let jilinChangyiDistObj = createLabelObject(hour, jilinChangyiDistrict);
                labelJilinChangyiDistrict.push(jilinChangyiDistObj);
            }
            if (!isNaN(hour) && !isNaN(jilinLongtanDistrict)) {
                let jilinLongtanDistObj = createLabelObject(hour, jilinLongtanDistrict);
                labelJilinLongtanDistrict.push(jilinLongtanDistObj);
            }
            if (!isNaN(hour) && !isNaN(jilinChuanyingDistrict)) {
                let jilinChuanyingDistObj = createLabelObject(hour, jilinChuanyingDistrict);
                labelJilinChuanyingDistrict.push(jilinChuanyingDistObj);
            }
            if (!isNaN(hour) && !isNaN(jilinFengmanDistrict)) {
                let jilinFengmanDistObj = createLabelObject(hour, jilinFengmanDistrict);
                labelJilinFengmanDistrict.push(jilinFengmanDistObj);
            }
            if (!isNaN(hour) && !isNaN(jilinYongjiCounty)) {
                let jilinYongjiCounObj = createLabelObject(hour, jilinYongjiCounty);
                labelJilinYongjiCounty.push(jilinYongjiCounObj);
            }
            if (!isNaN(hour) && !isNaN(jilinJiaoheCity)) {
                let jilinJiaoheCityObj = createLabelObject(hour, jilinJiaoheCity);
                labelJilinJiaoheCity.push(jilinJiaoheCityObj);
            }
            if (!isNaN(hour) && !isNaN(jilinHuadianCity)) {
                let jilinHuadianCityObj = createLabelObject(hour, jilinHuadianCity);
                labelJilinHuadianCity.push(jilinHuadianCityObj);
            }
            if (!isNaN(hour) && !isNaN(jilinShulanCity)) {
                let jilinShulanCityObj = createLabelObject(hour, jilinShulanCity);
                labelJilinShulanCity.push(jilinShulanCityObj);
            }
            if (!isNaN(hour) && !isNaN(jilinPanshiCity)) {
                let jilinPanshiCityObj = createLabelObject(hour, jilinPanshiCity);
                labelJilinPanshiCity.push(jilinPanshiCityObj);
            }
            //Siping
            if (!isNaN(hour) && !isNaN(sipingTiexiDistrict)) {
                let sipingTiexiDistObj = createLabelObject(hour, sipingTiexiDistrict);
                labelSipingTiexiDistrict.push(sipingTiexiDistObj);
            }
            if (!isNaN(hour) && !isNaN(sipingTiedongDistrict)) {
                let sipingTiedongDistObj = createLabelObject(hour, sipingTiedongDistrict);
                labelSipingTiedongDistrict.push(sipingTiedongDistObj);
            }
            if (!isNaN(hour) && !isNaN(sipingLishuCounty)) {
                let sipingLishuCounObj = createLabelObject(hour, sipingLishuCounty);
                labelSipingLishuCounty.push(sipingLishuCounObj);
            }
            if (!isNaN(hour) && !isNaN(sipingYimanCounty)) {
                let sipingYimanCounObj = createLabelObject(hour, sipingYimanCounty);
                labelSipingYimanCounty.push(sipingYimanCounObj);
            }
            if (!isNaN(hour) && !isNaN(sipingShuangliaoCity)) {
                let sipingShuangliaoCityObj = createLabelObject(hour, sipingShuangliaoCity);
                labelSipingShuangliaoCity.push(sipingShuangliaoCityObj);
            }
            //Liaoyuan
            if (!isNaN(hour) && !isNaN(liaoyuanLongshanDistrict)) {
                let liaoyuanLongshanDistObj = createLabelObject(hour, liaoyuanLongshanDistrict);
                labelLiaoyuanLongshanDistrict.push(liaoyuanLongshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(liaoyuanXianDistrict)) {
                let liaoyuanXianDistObj = createLabelObject(hour, liaoyuanXianDistrict);
                labelLiaoyuanXianDistrict.push(liaoyuanXianDistObj);
            }
            if (!isNaN(hour) && !isNaN(liaoyuanDongfengCounty)) {
                let liaoyuanDongfengCounObj = createLabelObject(hour, liaoyuanDongfengCounty);
                labelLiaoyuanDongfengCounty.push(liaoyuanDongfengCounObj);
            }
            if (!isNaN(hour) && !isNaN(liaoyuanDongliaoCounty)) {
                let liaoyuanDongliaoCounObj = createLabelObject(hour, liaoyuanDongliaoCounty);
                labelLiaoyuanDongliaoCounty.push(liaoyuanDongliaoCounObj);
            }
            // Tonghua
            if (!isNaN(hour) && !isNaN(tonghuaDongchangDistrict)) {
                let tonghuaDongchangDistObj = createLabelObject(hour, tonghuaDongchangDistrict);
                labelTonghuaDongchangDistrict.push(tonghuaDongchangDistObj);
            }

            if (!isNaN(hour) && !isNaN(tonghuaErdaojiangDistrict)) {
                let tonghuaErdaojiangDistObj = createLabelObject(hour, tonghuaErdaojiangDistrict);
                labelTonghuaErdaojiangDistrict.push(tonghuaErdaojiangDistObj);
            }
            if (!isNaN(hour) && !isNaN(tonghuaTonghuaCounty)) {
                let tonghuaTonghuaCounObj = createLabelObject(hour, tonghuaTonghuaCounty);
                labelTonghuaTonghuaCounty.push(tonghuaTonghuaCounObj);
            }
            if (!isNaN(hour) && !isNaN(tonghuaHuinanCounty)) {
                let tonghuaHuinanCounObj = createLabelObject(hour, tonghuaHuinanCounty);
                labelTonghuaHuinanCounty.push(tonghuaHuinanCounObj);
            }
            if (!isNaN(hour) && !isNaN(tonghuaLiuheCounty)) {
                let tonghuaLiuheCounObj = createLabelObject(hour, tonghuaLiuheCounty);
                labelTonghuaLiuheCounty.push(tonghuaLiuheCounObj);
            }
            if (!isNaN(hour) && !isNaN(tonghuaMeihekouCity)) {
                let tonghuaMeihekouCityObj = createLabelObject(hour, tonghuaMeihekouCity);
                labelTonghuaMeihekouCity.push(tonghuaMeihekouCityObj);
            }
            if (!isNaN(hour) && !isNaN(tonghuaJianCity)) {
                let tonghuaJianCityObj = createLabelObject(hour, tonghuaJianCity);
                labelTonghuaJianCity.push(tonghuaJianCityObj);
            }
            //Baishan
            if (!isNaN(hour) && !isNaN(baishanHunjiangDistrict)) {
                let baishanHunjiangDistObj = createLabelObject(hour, baishanHunjiangDistrict);
                labelBaishanHunjiangDistrict.push(baishanHunjiangDistObj);
            }
            if (!isNaN(hour) && !isNaN(baishanJiangyuanDistrict)) {
                let baishanJiangyuanDistObj = createLabelObject(hour, baishanJiangyuanDistrict);
                labelBaishanJiangyuanDistrict.push(baishanJiangyuanDistObj);
            }
            if (!isNaN(hour) && !isNaN(baishanFusongCounty)) {
                let baishanFusongCounObj = createLabelObject(hour, baishanFusongCounty);
                labelBaishanFusongCounty.push(baishanFusongCounObj);
            }
            if (!isNaN(hour) && !isNaN(baishanJingyuCounty)) {
                let baishanJingyuCounObj = createLabelObject(hour, baishanJingyuCounty);
                labelBaishanJingyuCounty.push(baishanJingyuCounObj);
            }
            if (!isNaN(hour) && !isNaN(baishanChangbaichaoxianCounty)) {
                let baishanChangbaichaoxianCounObj = createLabelObject(hour, baishanChangbaichaoxianCounty);
                labelBaishanChangbaichaoxianCounty.push(baishanChangbaichaoxianCounObj);
            }
            if (!isNaN(hour) && !isNaN(baishanLinjiangCity)) {
                let baishanLinjiangCityObj = createLabelObject(hour, baishanLinjiangCity);
                labelBaishanLinjiangCity.push(baishanLinjiangCityObj);
            }
            //Songyuan
            if (!isNaN(hour) && !isNaN(songyuanNingjiangDistrict)) {
                let songyuanNingjiangDistObj = createLabelObject(hour, songyuanNingjiangDistrict);
                labelSongyuanNingjiangDistrict.push(songyuanNingjiangDistObj);
            }
            if (!isNaN(hour) && !isNaN(songyuanQianguoerluosiCounty)) {
                let songyuanQianguoerluosiCounObj = createLabelObject(hour, songyuanQianguoerluosiCounty);
                labelSongyuanQianguoerluosiCounty.push(songyuanQianguoerluosiCounObj);
            }
            if (!isNaN(hour) && !isNaN(songyuanChanglingCounty)) {
                let songyuanChanglingCounObj = createLabelObject(hour, songyuanChanglingCounty);
                labelSongyuanChanglingCounty.push(songyuanChanglingCounObj);
            }
            if (!isNaN(hour) && !isNaN(songyuanQiananCounty)) {
                let songyuanQiananCounObj = createLabelObject(hour, songyuanQiananCounty);
                labelSongyuanQiananCounty.push(songyuanQiananCounObj);
            }
            if (!isNaN(hour) && !isNaN(songyuanFuyuCity)) {
                let songyuanFuyuCityObj = createLabelObject(hour, songyuanFuyuCity);
                labelSongyuanFuyuCity.push(songyuanFuyuCityObj);
            }
            //Baicheng
            if (!isNaN(hour) && !isNaN(baichengTaobeiDistrict)) {
                let baichengTaobeiDistObj = createLabelObject(hour, baichengTaobeiDistrict);
                labelBaichengTaobeiDistrict.push(baichengTaobeiDistObj);
            }
            if (!isNaN(hour) && !isNaN(baichengZhenlaiCounty)) {
                let baichengZhenlaiCounObj = createLabelObject(hour, baichengZhenlaiCounty);
                labelBaichengZhenlaiCounty.push(baichengZhenlaiCounObj);
            }

            if (!isNaN(hour) && !isNaN(baichengTongyuCounty)) {
                let baichengTongyuCounObj = createLabelObject(hour, baichengTongyuCounty);
                labelBaichengTongyuCounty.push(baichengTongyuCounObj);
            }
            if (!isNaN(hour) && !isNaN(baichengTaonanCity)) {
                let baichengTaonanCityObj = createLabelObject(hour, baichengTaonanCity);
                labelBaichengTaonanCity.push(baichengTaonanCityObj);
            }
            if (!isNaN(hour) && !isNaN(baichengDaanCity)) {
                let baichengDaanCityObj = createLabelObject(hour, baichengDaanCity);
                labelBaichengDaanCity.push(baichengDaanCityObj);
            }
            //Yanbian
            if (!isNaN(hour) && !isNaN(yanbianYanjiCity)) {
                let yanbianYanjiCityObj = createLabelObject(hour, yanbianYanjiCity);
                labelYanbianYanjiCity.push(yanbianYanjiCityObj);
            }
            if (!isNaN(hour) && !isNaN(yanbianTumenCity)) {
                let yanbianTumenCityObj = createLabelObject(hour, yanbianTumenCity);
                labelYanbianTumenCity.push(yanbianTumenCityObj);
            }
            if (!isNaN(hour) && !isNaN(yanbianDunhuaCity)) {
                let yanbianDunhuaCityObj = createLabelObject(hour, yanbianDunhuaCity);
                labelYanbianDunhuaCity.push(yanbianDunhuaCityObj);
            }
            if (!isNaN(hour) && !isNaN(yanbianHunchunCity)) {
                let yanbianHunchunCityObj = createLabelObject(hour, yanbianHunchunCity);
                labelYanbianHunchunCity.push(yanbianHunchunCityObj);
            }
            if (!isNaN(hour) && !isNaN(yanbianLongjingCity)) {
                let yanbianLongjingCityObj = createLabelObject(hour, yanbianLongjingCity);
                labelYanbianLongjingCity.push(yanbianLongjingCityObj);
            }
            if (!isNaN(hour) && !isNaN(yanbianHelongCity)) {
                let yanbianHelongCityObj = createLabelObject(hour, yanbianHelongCity);
                labelYanbianHelongCity.push(yanbianHelongCityObj);
            }
            if (!isNaN(hour) && !isNaN(yanbianWangqingCounty)) {
                let yanbianWangqingCounObj = createLabelObject(hour, yanbianWangqingCounty);
                labelYanbianWangqingCounty.push(yanbianWangqingCounObj);
            }
            if (!isNaN(hour) && !isNaN(yanbianAntuCounty)) {
                let yanbianAntuCounObj = createLabelObject(hour, yanbianAntuCounty);
                labelYanbianAntuCounty.push(yanbianAntuCounObj);
            }
            //Shenyang
            if (!isNaN(hour) && !isNaN(shenyangHepingDistrict)) {
                let shenyangHepingDistObj = createLabelObject(hour, shenyangHepingDistrict);
                labelShenyangHepingDistrict.push(shenyangHepingDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangShenheDistrict)) {
                let shenyangShenheDistObj = createLabelObject(hour, shenyangShenheDistrict);
                labelShenyangShenheDistrict.push(shenyangShenheDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangDadongDistrict)) {
                let shenyangDadongDistObj = createLabelObject(hour, shenyangDadongDistrict);
                labelShenyangDadongDistrict.push(shenyangDadongDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangHuangguDistrict)) {
                let shenyangHuangguDistObj = createLabelObject(hour, shenyangHuangguDistrict);
                labelShenyangHuangguDistrict.push(shenyangHuangguDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangTiexiDistrict)) {
                let shenyangTiexiDistObj = createLabelObject(hour, shenyangTiexiDistrict);
                labelShenyangTiexiDistrict.push(shenyangTiexiDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangSujiatunDistrict)) {
                let shenyangSujiatunDistObj = createLabelObject(hour, shenyangSujiatunDistrict);
                labelShenyangSujiatunDistrict.push(shenyangSujiatunDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangHunnanDistrict)) {
                let shenyangHunnanDistObj = createLabelObject(hour, shenyangHunnanDistrict);
                labelShenyangHunnanDistrict.push(shenyangHunnanDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangShenbeixinDistrict)) {
                let shenyangShenbeixinDistObj = createLabelObject(hour, shenyangShenbeixinDistrict);
                labelShenyangShenbeixinDistrict.push(shenyangShenbeixinDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangYuhongDistrict)) {
                let shenyangYuhongDistObj = createLabelObject(hour, shenyangYuhongDistrict);
                labelShenyangYuhongDistrict.push(shenyangYuhongDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangLiaozhongDistrict)) {
                let shenyangLiaozhongDistObj = createLabelObject(hour, shenyangLiaozhongDistrict);
                labelShenyangLiaozhongDistrict.push(shenyangLiaozhongDistObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangKangpingCounty)) {
                let shenyangKangpingCounObj = createLabelObject(hour, shenyangKangpingCounty);
                labelShenyangKangpingCounty.push(shenyangKangpingCounObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangFakuCounty)) {
                let shenyangFakuCounObj = createLabelObject(hour, shenyangFakuCounty);
                labelShenyangFakuCounty.push(shenyangFakuCounObj);
            }
            if (!isNaN(hour) && !isNaN(shenyangXinminCity)) {
                let shenyangXinminCityObj = createLabelObject(hour, shenyangXinminCity);
                labelShenyangXinminCity.push(shenyangXinminCityObj);
            }
            //Dalian
            if (!isNaN(hour) && !isNaN(dalianZhongshanDistrict)) {
                let dalianZhongshanDistObj = createLabelObject(hour, dalianZhongshanDistrict);
                labelDalianZhongshanDistrict.push(dalianZhongshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(dalianXigangDistrict)) {
                let dalianXigangDistObj = createLabelObject(hour, dalianXigangDistrict);
                labelDalianXigangDistrict.push(dalianXigangDistObj);
            }
            if (!isNaN(hour) && !isNaN(dalianShahekouDistrict)) {
                let dalianShahekouDistObj = createLabelObject(hour, dalianShahekouDistrict);
                labelDalianShahekouDistrict.push(dalianShahekouDistObj);
            }
            if (!isNaN(hour) && !isNaN(dalianGanjingziDistrict)) {
                let dalianGanjingziDistObj = createLabelObject(hour, dalianGanjingziDistrict);
                labelDalianGanjingziDistrict.push(dalianGanjingziDistObj);
            }
            if (!isNaN(hour) && !isNaN(dalianLvshunkouDistrict)) {
                let dalianLvshunkouDistObj = createLabelObject(hour, dalianLvshunkouDistrict);
                labelDalianLvshunkouDistrict.push(dalianLvshunkouDistObj);
            }
            if (!isNaN(hour) && !isNaN(dalianJinzhouDistrict)) {
                let dalianJinzhouDistObj = createLabelObject(hour, dalianJinzhouDistrict);
                labelDalianJinzhouDistrict.push(dalianJinzhouDistObj);
            }
            if (!isNaN(hour) && !isNaN(dalianPulandianDistrict)) {
                let dalianPulandianDistObj = createLabelObject(hour, dalianPulandianDistrict);
                labelDalianPulandianDistrict.push(dalianPulandianDistObj);
            }
            if (!isNaN(hour) && !isNaN(dalianChanghaiCounty)) {
                let dalianChanghaiCounObj = createLabelObject(hour, dalianChanghaiCounty);
                labelDalianChanghaiCounty.push(dalianChanghaiCounObj);
            }
            if (!isNaN(hour) && !isNaN(dalianWafangdianCity)) {
                let dalianWafangdianCityObj = createLabelObject(hour, dalianWafangdianCity);
                labelDalianWafangdianCity.push(dalianWafangdianCityObj);
            }
            if (!isNaN(hour) && !isNaN(dalianZhuangheCity)) {
                let dalianZhuangheCityObj = createLabelObject(hour, dalianZhuangheCity);
                labelDalianZhuangheCity.push(dalianZhuangheCityObj);
            }
            //Anshan
            if (!isNaN(hour) && !isNaN(anshanTiedongDistrict)) {
                let anshanTiedongDistObj = createLabelObject(hour, anshanTiedongDistrict);
                labelAnshanTiedongDistrict.push(anshanTiedongDistObj);
            }
            if (!isNaN(hour) && !isNaN(anshanTiexiDistrict)) {
                let anshanTiexiDistObj = createLabelObject(hour, anshanTiexiDistrict);
                labelAnshanTiexiDistrict.push(anshanTiexiDistObj);
            }
            if (!isNaN(hour) && !isNaN(anshanLishanDistrict)) {
                let anshanLishanDistObj = createLabelObject(hour, anshanLishanDistrict);
                labelAnshanLishanDistrict.push(anshanLishanDistObj);
            }
            if (!isNaN(hour) && !isNaN(anshanQianshanDistrict)) {
                let anshanQianshanDistObj = createLabelObject(hour, anshanQianshanDistrict);
                labelAnshanQianshanDistrict.push(anshanQianshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(anshanTaianCounty)) {
                let anshanTaianCounObj = createLabelObject(hour, anshanTaianCounty);
                labelAnshanTaianCounty.push(anshanTaianCounObj);
            }
            if (!isNaN(hour) && !isNaN(anshanYoumanCounty)) {
                let anshanYoumanCounObj = createLabelObject(hour, anshanYoumanCounty);
                labelAnshanYoumanCounty.push(anshanYoumanCounObj);
            }
            if (!isNaN(hour) && !isNaN(anshanHaichengCity)) {
                let anshanHaichengCityObj = createLabelObject(hour, anshanHaichengCity);
                labelAnshanHaichengCity.push(anshanHaichengCityObj);
            }
            //Fushun
            if (!isNaN(hour) && !isNaN(fushunXinfuDistrict)) {
                let fushunXinfuDistObj = createLabelObject(hour, fushunXinfuDistrict);
                labelFushunXinfuDistrict.push(fushunXinfuDistObj);
            }
            if (!isNaN(hour) && !isNaN(fushunDongzhouDistrict)) {
                let fushunDongzhouDistObj = createLabelObject(hour, fushunDongzhouDistrict);
                labelFushunDongzhouDistrict.push(fushunDongzhouDistObj);
            }
            if (!isNaN(hour) && !isNaN(fushunWanghuaDistrict)) {
                let fushunWanghuaDistObj = createLabelObject(hour, fushunWanghuaDistrict);
                labelFushunWanghuaDistrict.push(fushunWanghuaDistObj);
            }
            if (!isNaN(hour) && !isNaN(fushunShunchengDistrict)) {
                let fushunShunchengDistObj = createLabelObject(hour, fushunShunchengDistrict);
                labelFushunShunchengDistrict.push(fushunShunchengDistObj);
            }
            if (!isNaN(hour) && !isNaN(fushunFushunCounty)) {
                let fushunFushunCounObj = createLabelObject(hour, fushunFushunCounty);
                labelFushunFushunCounty.push(fushunFushunCounObj);
            }
            if (!isNaN(hour) && !isNaN(fushunXinmanCounty)) {
                let fushunXinmanCounObj = createLabelObject(hour, fushunXinmanCounty);
                labelFushunXinmanCounty.push(fushunXinmanCounObj);
            }
            if (!isNaN(hour) && !isNaN(fushunQingmanCounty)) {
                let fushunQingmanCounObj = createLabelObject(hour, fushunQingmanCounty);
                labelFushunQingmanCounty.push(fushunQingmanCounObj);
            }
            //Benxi
            if (!isNaN(hour) && !isNaN(benxiPingshanDistrict)) {
                let benxiPingshanDistObj = createLabelObject(hour, benxiPingshanDistrict);
                labelBenxiPingshanDistrict.push(benxiPingshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(benxiXihuDistrict)) {
                let benxiXihuDistObj = createLabelObject(hour, benxiXihuDistrict);
                labelBenxiXihuDistrict.push(benxiXihuDistObj);
            }
            if (!isNaN(hour) && !isNaN(benxiMingshanDistrict)) {
                let benxiMingshanDistObj = createLabelObject(hour, benxiMingshanDistrict);
                labelBenxiMingshanDistrict.push(benxiMingshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(benxiNanfenDistrict)) {
                let benxiNanfenDistObj = createLabelObject(hour, benxiNanfenDistrict);
                labelBenxiNanfenDistrict.push(benxiNanfenDistObj);
            }
            if (!isNaN(hour) && !isNaN(benxiBenmanCounty)) {
                let benxiBenmanCounObj = createLabelObject(hour, benxiBenmanCounty);
                labelBenxiBenmanCounty.push(benxiBenmanCounObj);
            }
            if (!isNaN(hour) && !isNaN(benxiHuanmanCounty)) {
                let benxiHuanmanCounObj = createLabelObject(hour, benxiHuanmanCounty);
                labelBenxiHuanmanCounty.push(benxiHuanmanCounObj);
            }
            //Dandong
            if (!isNaN(hour) && !isNaN(dandongYuanbaoDistrict)) {
                let dandongYuanbaoDistObj = createLabelObject(hour, dandongYuanbaoDistrict);
                labelDandongYuanbaoDistrict.push(dandongYuanbaoDistObj);
            }
            if (!isNaN(hour) && !isNaN(dandongZhenxingDistrict)) {
                let dandongZhenxingDistObj = createLabelObject(hour, dandongZhenxingDistrict);
                labelDandongZhenxingDistrict.push(dandongZhenxingDistObj);
            }
            if (!isNaN(hour) && !isNaN(dandongZhenanDistrict)) {
                let dandongZhenanDistObj = createLabelObject(hour, dandongZhenanDistrict);
                labelDandongZhenanDistrict.push(dandongZhenanDistObj);
            }
            if (!isNaN(hour) && !isNaN(dandongKuanmanCounty)) {
                let dandongKuanmanCounObj = createLabelObject(hour, dandongKuanmanCounty);
                labelDandongKuanmanCounty.push(dandongKuanmanCounObj);
            }
            if (!isNaN(hour) && !isNaN(dandongDonggangCity)) {
                let dandongDonggangCityObj = createLabelObject(hour, dandongDonggangCity);
                labelDandongDonggangCity.push(dandongDonggangCityObj);
            }
            if (!isNaN(hour) && !isNaN(dandongFengchengCity)) {
                let dandongFengchengCityObj = createLabelObject(hour, dandongFengchengCity);
                labelDandongFengchengCity.push(dandongFengchengCityObj);
            }
            //Jinzhou
            if (!isNaN(hour) && !isNaN(jinzhouGutaDistrict)) {
                let jinzhouGutaDistObj = createLabelObject(hour, jinzhouGutaDistrict);
                labelJinzhouGutaDistrict.push(jinzhouGutaDistObj);
            }

            if (!isNaN(hour) && !isNaN(jinzhouLingheDistrict)) {
                let jinzhouLingheDistObj = createLabelObject(hour, jinzhouLingheDistrict);
                labelJinzhouLingheDistrict.push(jinzhouLingheDistObj);
            }

            if (!isNaN(hour) && !isNaN(jinzhouTaiheDistrict)) {
                let jinzhouTaiheDistObj = createLabelObject(hour, jinzhouTaiheDistrict);
                labelJinzhouTaiheDistrict.push(jinzhouTaiheDistObj);
            }
            if (!isNaN(hour) && !isNaN(jinzhouHeishanCounty)) {
                let jinzhouHeishanCounObj = createLabelObject(hour, jinzhouHeishanCounty);
                labelJinzhouHeishanCounty.push(jinzhouHeishanCounObj);
            }
            if (!isNaN(hour) && !isNaN(jinzhouYiCounty)) {
                let jinzhouYiCounObj = createLabelObject(hour, jinzhouYiCounty);
                labelJinzhouYiCounty.push(jinzhouYiCounObj);
            }
            if (!isNaN(hour) && !isNaN(jinzhouLinghaiCity)) {
                let jinzhouLinghaiCityObj = createLabelObject(hour, jinzhouLinghaiCity);
                labelJinzhouLinghaiCity.push(jinzhouLinghaiCityObj);
            }
            if (!isNaN(hour) && !isNaN(jinzhouBeizhenCity)) {
                let jinzhouBeizhenCityObj = createLabelObject(hour, jinzhouBeizhenCity);
                labelJinzhouBeizhenCity.push(jinzhouBeizhenCityObj);
            }
            //Yingkou
            if (!isNaN(hour) && !isNaN(yingkouZhanqianDistrict)) {
                let yingkouZhanqianDistObj = createLabelObject(hour, yingkouZhanqianDistrict);
                labelYingkouZhanqianDistrict.push(yingkouZhanqianDistObj);
            }
            if (!isNaN(hour) && !isNaN(yingkouXishiDistrict)) {
                let yingkouXishiDistObj = createLabelObject(hour, yingkouXishiDistrict);
                labelYingkouXishiDistrict.push(yingkouXishiDistObj);
            }

            if (!isNaN(hour) && !isNaN(yingkouBayuquanDistrict)) {
                let yingkouBayuquanDistObj = createLabelObject(hour, yingkouBayuquanDistrict);
                labelYingkouBayuquanDistrict.push(yingkouBayuquanDistObj);
            }

            if (!isNaN(hour) && !isNaN(yingkouLaobianDistrict)) {
                let yingkouLaobianDistObj = createLabelObject(hour, yingkouLaobianDistrict);
                labelYingkouLaobianDistrict.push(yingkouLaobianDistObj);
            }

            if (!isNaN(hour) && !isNaN(yingkouGaizhouCity)) {
                let yingkouGaizhouCityObj = createLabelObject(hour, yingkouGaizhouCity);
                labelYingkouGaizhouCity.push(yingkouGaizhouCityObj);
            }
            if (!isNaN(hour) && !isNaN(yingkouDashiqiaoCity)) {
                let yingkouDashiqiaoCityObj = createLabelObject(hour, yingkouDashiqiaoCity);
                labelYingkouDashiqiaoCity.push(yingkouDashiqiaoCityObj);
            }
            //Fuxin
            if (!isNaN(hour) && !isNaN(fuxinHaizhouDistrict)) {
                let fuxinHaizhouDistObj = createLabelObject(hour, fuxinHaizhouDistrict);
                labelFuxinHaizhouDistrict.push(fuxinHaizhouDistObj);
            }
            if (!isNaN(hour) && !isNaN(fuxinXinqiuDistrict)) {
                let fuxinXinqiuDistObj = createLabelObject(hour, fuxinXinqiuDistrict);
                labelFuxinXinqiuDistrict.push(fuxinXinqiuDistObj);
            }
            if (!isNaN(hour) && !isNaN(fuxinTaipingDistrict)) {
                let fuxinTaipingDistObj = createLabelObject(hour, fuxinTaipingDistrict);
                labelFuxinTaipingDistrict.push(fuxinTaipingDistObj);
            }
            if (!isNaN(hour) && !isNaN(fuxinQinghemenDistrict)) {
                let fuxinQinghemenDistObj = createLabelObject(hour, fuxinQinghemenDistrict);
                labelFuxinQinghemenDistrict.push(fuxinQinghemenDistObj);
            }
            if (!isNaN(hour) && !isNaN(fuxinXiheDistrict)) {
                let fuxinXiheDistObj = createLabelObject(hour, fuxinXiheDistrict);
                labelFuxinXiheDistrict.push(fuxinXiheDistObj);
            }
            if (!isNaN(hour) && !isNaN(fuxinFumengCounty)) {
                let fuxinFumengCounObj = createLabelObject(hour, fuxinFumengCounty);
                labelFuxinFumengCounty.push(fuxinFumengCounObj);
            }
            if (!isNaN(hour) && !isNaN(fuxinZhangwuCounty)) {
                let fuxinZhangwuCounObj = createLabelObject(hour, fuxinZhangwuCounty);
                labelFuxinZhangwuCounty.push(fuxinZhangwuCounObj);
            }
            //Liaoyang
            if (!isNaN(hour) && !isNaN(liaoyangBaitaDistrict)) {
                let liaoyangBaitaDistObj = createLabelObject(hour, liaoyangBaitaDistrict);
                labelLiaoyangBaitaDistrict.push(liaoyangBaitaDistObj);
            }

            if (!isNaN(hour) && !isNaN(liaoyangWenshengDistrict)) {
                let liaoyangWenshengDistObj = createLabelObject(hour, liaoyangWenshengDistrict);
                labelLiaoyangWenshengDistrict.push(liaoyangWenshengDistObj);
            }

            if (!isNaN(hour) && !isNaN(liaoyangHongweiDistrict)) {
                let liaoyangHongweiDistObj = createLabelObject(hour, liaoyangHongweiDistrict);
                labelLiaoyangHongweiDistrict.push(liaoyangHongweiDistObj);
            }

            if (!isNaN(hour) && !isNaN(liaoyangGongchanglingDistrict)) {
                let liaoyangGongchanglingDistObj = createLabelObject(hour, liaoyangGongchanglingDistrict);
                labelLiaoyangGongchanglingDistrict.push(liaoyangGongchanglingDistObj);
            }

            if (!isNaN(hour) && !isNaN(liaoyangTaiziheDistrict)) {
                let liaoyangTaiziheDistObj = createLabelObject(hour, liaoyangTaiziheDistrict);
                labelLiaoyangTaiziheDistrict.push(liaoyangTaiziheDistObj);
            }

            if (!isNaN(hour) && !isNaN(liaoyangLiaoyangCounty)) {
                let liaoyangLiaoyangCounObj = createLabelObject(hour, liaoyangLiaoyangCounty);
                labelLiaoyangLiaoyangCounty.push(liaoyangLiaoyangCounObj);
            }
            if (!isNaN(hour) && !isNaN(liaoyangDengtaCity)) {
                let liaoyangDengtaCityObj = createLabelObject(hour, liaoyangDengtaCity);
                labelLiaoyangDengtaCity.push(liaoyangDengtaCityObj);
            }
            //Panjin
            if (!isNaN(hour) && !isNaN(panjinShuangtaiziDistrict)) {
                let panjinShuangtaiziDistObj = createLabelObject(hour, panjinShuangtaiziDistrict);
                labelPanjinShuangtaiziDistrict.push(panjinShuangtaiziDistObj);
            }
            if (!isNaN(hour) && !isNaN(panjinXinglongtaiDistrict)) {
                let panjinXinglongtaiDistObj = createLabelObject(hour, panjinXinglongtaiDistrict);
                labelPanjinXinglongtaiDistrict.push(panjinXinglongtaiDistObj);
            }
            if (!isNaN(hour) && !isNaN(panjinDawaDistrict)) {
                let panjinDawaDistObj = createLabelObject(hour, panjinDawaDistrict);
                labelPanjinDawaDistrict.push(panjinDawaDistObj);
            }
            if (!isNaN(hour) && !isNaN(panjinPanshanCounty)) {
                let panjinPanshanCounObj = createLabelObject(hour, panjinPanshanCounty);
                labelPanjinPanshanCounty.push(panjinPanshanCounObj);
            }
            //Tieling
            if (!isNaN(hour) && !isNaN(tielingYinzhouDistrict)) {
                let tielingYinzhouDistObj = createLabelObject(hour, tielingYinzhouDistrict);
                labelTielingYinzhouDistrict.push(tielingYinzhouDistObj);
            }
            if (!isNaN(hour) && !isNaN(tielingQingheDistrict)) {
                let tielingQingheDistObj = createLabelObject(hour, tielingQingheDistrict);
                labelTielingQingheDistrict.push(tielingQingheDistObj);
            }
            if (!isNaN(hour) && !isNaN(tielingTielingCounty)) {
                let tielingTielingCounObj = createLabelObject(hour, tielingTielingCounty);
                labelTielingTielingCounty.push(tielingTielingCounObj);
            }
            if (!isNaN(hour) && !isNaN(tielingXifengCounty)) {
                let tielingXifengCounObj = createLabelObject(hour, tielingXifengCounty);
                labelTielingXifengCounty.push(tielingXifengCounObj);
            }
            if (!isNaN(hour) && !isNaN(tielingChangtuCounty)) {
                let tielingChangtuCounObj = createLabelObject(hour, tielingChangtuCounty);
                labelTielingChangtuCounty.push(tielingChangtuCounObj);
            }
            if (!isNaN(hour) && !isNaN(tielingDiaobingshanCity)) {
                let tielingDiaobingshanCityObj = createLabelObject(hour, tielingDiaobingshanCity);
                labelTielingDiaobingshanCity.push(tielingDiaobingshanCityObj);
            }
            if (!isNaN(hour) && !isNaN(tielingKaiyuanCity)) {
                let tielingKaiyuanCityObj = createLabelObject(hour, tielingKaiyuanCity);
                labelTielingKaiyuanCity.push(tielingKaiyuanCityObj);
            }
            //Chaoyang
            if (!isNaN(hour) && !isNaN(chaoyangShuangtaDistrict)) {
                let chaoyangShuangtaDistObj = createLabelObject(hour, chaoyangShuangtaDistrict);
                labelChaoyangShuangtaDistrict.push(chaoyangShuangtaDistObj);
            }
            if (!isNaN(hour) && !isNaN(chaoyangLongchengDistrict)) {
                let chaoyangLongchengDistObj = createLabelObject(hour, chaoyangLongchengDistrict);
                labelChaoyangLongchengDistrict.push(chaoyangLongchengDistObj);
            }
            if (!isNaN(hour) && !isNaN(chaoyangChaoyangCounty)) {
                let chaoyangChaoyangCounObj = createLabelObject(hour, chaoyangChaoyangCounty);
                labelChaoyangChaoyangCounty.push(chaoyangChaoyangCounObj);
            }
            if (!isNaN(hour) && !isNaN(chaoyangJianpingCounty)) {
                let chaoyangJianpingCounObj = createLabelObject(hour, chaoyangJianpingCounty);
                labelChaoyangJianpingCounty.push(chaoyangJianpingCounObj);
            }
            if (!isNaN(hour) && !isNaN(chaoyangKezuoCounty)) {
                let chaoyangKezuoCounObj = createLabelObject(hour, chaoyangKezuoCounty);
                labelChaoyangKezuoCounty.push(chaoyangKezuoCounObj);
            }
            if (!isNaN(hour) && !isNaN(chaoyangBeipiaoCity)) {
                let chaoyangBeipiaoCityObj = createLabelObject(hour, chaoyangBeipiaoCity);
                labelChaoyangBeipiaoCity.push(chaoyangBeipiaoCityObj);
            }
            if (!isNaN(hour) && !isNaN(chaoyangLingyuanCity)) {
                let chaoyangLingyuanCityObj = createLabelObject(hour, chaoyangLingyuanCity);
                labelChaoyangLingyuanCity.push(chaoyangLingyuanCityObj);
            }
            //Huludao
            if (!isNaN(hour) && !isNaN(huludaoLianshanDistrict)) {
                let huludaoLianshanDistObj = createLabelObject(hour, huludaoLianshanDistrict);
                labelHuludaoLianshanDistrict.push(huludaoLianshanDistObj);
            }
            if (!isNaN(hour) && !isNaN(huludaoLonggangDistrict)) {
                let huludaoLonggangDistObj = createLabelObject(hour, huludaoLonggangDistrict);
                labelHuludaoLonggangDistrict.push(huludaoLonggangDistObj);
            }
            if (!isNaN(hour) && !isNaN(huludaoNanpiaoDistrict)) {
                let huludaoNanpiaoDistObj = createLabelObject(hour, huludaoNanpiaoDistrict);
                labelHuludaoNanpiaoDistrict.push(huludaoNanpiaoDistObj);
            }
            if (!isNaN(hour) && !isNaN(huludaoSuizhongCounty)) {
                let huludaoSuizhongCounObj = createLabelObject(hour, huludaoSuizhongCounty);
                labelHuludaoSuizhongCounty.push(huludaoSuizhongCounObj);
            }

            if (!isNaN(hour) && !isNaN(huludaoJianchangCounty)) {
                let huludaoJianchangCounObj = createLabelObject(hour, huludaoJianchangCounty);
                labelHuludaoJianchangCounty.push(huludaoJianchangCounObj);
            }

            if (!isNaN(hour) && !isNaN(huludaoXingchengCity)) {
                let huludaoXingchengCityObj = createLabelObject(hour, huludaoXingchengCity);
                labelHuludaoXingchengCity.push(huludaoXingchengCityObj);
            }
        });
    });
}

function createLabelObject(hour, value) {
    let checkpointStyle = {};
    let progressItemStyle = {};

    if (value === 0) {
        checkpointStyle.color = 'red';
        progressItemStyle.color = 'red';
        progressItemStyle.borderColor = 'red';
    } else if (value > 0 && value <= 0.25) {
        checkpointStyle.color = '#D5FFE8';
        progressItemStyle.color = '#D5FFE8';
        progressItemStyle.borderColor = '#D5FFE8';
    } else if (value > 0.25 && value <= 0.50) {
        checkpointStyle.color = '#57FFA3';
        progressItemStyle.color = '#57FFA3';
        progressItemStyle.borderColor = '#57FFA3';
    } else if (value > 0.50 && value <= 0.75) {
        checkpointStyle.color = '#00EA6A';
        progressItemStyle.color = '#00EA6A';
        progressItemStyle.borderColor = '#00EA6A';
    } else {
        checkpointStyle.color = '#00B050';
        progressItemStyle.color = '#00B050';
        progressItemStyle.borderColor = '#00B050';
    }

    return {
        value: hour,
        checkpointStyle: checkpointStyle,
        progress: {
            itemStyle: progressItemStyle,
            opacity: 1.0,
            borderWidth: 1,
        },
    };
}

let chart = '';
function time(data) {
    chart = echarts.init(document.getElementById('main'));
    let option = {
        timeline: {
            data: data,
            axisType: 'category',
            currentIndex: 0, //默认显示data中的哪项
            label: {
                show: true,
                interval: 'auto', //label 的间隔
                color: '#7c8196',
                borderColor: '#7c8196',
            },
            orient: 'horizontal',
            padding: [5, 5, 5, 5], //内边距
            left: '2%', //距离容器左侧的距离
            right: '2%', //距离容器右侧的距离
            controlPosition: 'left',
            realtime: true,
            loop: true, //是否循环播放
            rewind: false, //是否反向播放
            autoPlay: false, //自动播放
            playInterval: 2000, //播放间隔时间
            lineStyle: {
                show: true,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#7c8196' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#7c8196'
                    }],
                    globalCoord: false
                },
                type: 'solid',
            }
        },
    }
    chart.setOption(option);
    chart.on('timelinechanged', function (timeLineIndex) {
        if (provinceSelect.value === 'Heilongjiang') {
            setTimeImage(timeLineIndex.currentIndex);
        }
        if (provinceSelect.value === 'Jilin') {
            setTimeImage(timeLineIndex.currentIndex);
        }
        if (provinceSelect.value === 'Liaoning') {
            setTimeImage(timeLineIndex.currentIndex);
        }
    })
}



        var chart_Chongqing = echarts.init(
            document.getElementById('Chongqing'), 'white', {renderer: 'canvas'});
        var option_Chongqing = {
    "baseOption": {
        "series": [
            {
                "type": "bar",
                "name": "chongqing: Fire Radiative Energy (MJ)",
                "legendHoverLink": true,
                "data": [
                    1000,
                    1000,
                    1000,
                    1000,
                    1000,
                    1000,
                    1000,
                    null,
                    null,
                    null,
                    null,
                    null,
                    1000,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    1000,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    1000,
                    null,
                    null,
                    null,
                    null,
                    null,
                    1000,
                    null,
                    null
                ],
                "realtimeSort": false,
                "showBackground": false,
                "stackStrategy": "samesign",
                "cursor": "pointer",
                "barMinHeight": 0,
                "barCategoryGap": "20%",
                "barGap": "30%",
                "large": false,
                "largeThreshold": 400,
                "seriesLayoutBy": "column",
                "datasetIndex": 0,
                "clip": true,
                "zlevel": 0,
                "z": 2,
                "label": {
                    "show": true,
                    "margin": 189
                }
            }
        ],
        "timeline": {
            "axisType": "category",
            "currentIndex": 0,
            "orient": "horizontal",
            "autoPlay": false,
            "controlPosition": "left",
            "loop": true,
            "rewind": false,
            "show": true,
            "inverse": false,
            "left": "15px",
            "right": "15px",
            "bottom": "-5px",
            "progress": {},
            "data": [
                "12-07 00",
                "12-07 01",
                "12-07 02",
                "12-07 03",
                "12-07 04",
                "12-07 05",
                "12-07 06",
                "12-07 07",
                "12-07 08",
                "12-07 09",
                "12-07 10",
                "12-07 11",
                "12-07 12",
                "12-07 13",
                "12-07 14",
                "12-07 15",
                "12-07 16",
                "12-07 17",
                "12-07 18",
                "12-07 19",
                "12-07 20",
                "12-07 21",
                "12-07 22",
                "12-07 23",
                "12-08 00",
                "12-08 01",
                "12-08 02",
                "12-08 03",
                "12-08 04",
                "12-08 05",
                "12-08 06",
                "12-08 07",
                "12-08 08",
                "12-08 09",
                "12-08 10",
                "12-08 11",
                "12-08 12",
                "12-08 13",
                "12-08 14",
                "12-08 15",
                "12-08 16",
                "12-08 17",
                "12-08 18",
                "12-08 19",
                "12-08 20",
                "12-08 21",
                "12-08 22",
                "12-08 23",
                "12-09 00",
                "12-09 01",
                "12-09 02",
                "12-09 03",
                "12-09 04",
                "12-09 05",
                "12-09 06",
                "12-09 07",
                "12-09 08",
                "12-09 09",
                "12-09 10",
                "12-09 11",
                "12-09 12",
                "12-09 13",
                "12-09 14",
                "12-09 15",
                "12-09 16",
                "12-09 17",
                "12-09 18",
                "12-09 19",
                "12-09 20",
                "12-09 21",
                "12-09 22",
                "12-09 23"
            ]
        },
        "xAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "axisLabel": {
                    "font_size": 56,
                    "interval": "0",
                    "rotate": "333"
                },
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "data": [
                    "Banan",
                    "Beibei",
                    "Bishan",
                    "Chengkou",
                    "Dadukou",
                    "Dazu",
                    "Dianjiang",
                    "Fengdu",
                    "Fengjie",
                    "Fuling",
                    "Hechuan",
                    "Jiangjin",
                    "Jiulongpo",
                    "Kaizhou",
                    "Liangping",
                    "Nanan",
                    "Nanchuan",
                    "Pengshui",
                    "Qijiang",
                    "Qianjiang",
                    "Rongchang",
                    "Shapingba",
                    "Shizhu",
                    "Tongliang",
                    "Tongnan",
                    "Wanzhou",
                    "Wushan",
                    "Wuxi",
                    "Wulong",
                    "Xiushan",
                    "Yongchuan",
                    "Youyang",
                    "Yubei",
                    "Yuzhong",
                    "Yunyang",
                    "Changshou",
                    "Zhongxian",
                    "Jiangbei"
                ]
            }
        ],
        "yAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                }
            }
        ],
        "legend": [
            {
                "data": [
                    "chongqing: Fire Radiative Energy (MJ)"
                ],
                "selected": {},
                "show": true,
                "padding": 5,
                "itemGap": 10,
                "itemWidth": 25,
                "itemHeight": 14,
                "backgroundColor": "transparent",
                "borderColor": "#ccc",
                "borderWidth": 1,
                "borderRadius": 0,
                "pageButtonItemGap": 5,
                "pageButtonPosition": "end",
                "pageFormatter": "{current}/{total}",
                "pageIconColor": "#2f4554",
                "pageIconInactiveColor": "#aaa",
                "pageIconSize": 15,
                "animationDurationUpdate": 800,
                "selector": false,
                "selectorPosition": "auto",
                "selectorItemGap": 7,
                "selectorButtonGap": 10
            }
        ]
    },
    "options": [
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshui",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushan",
                        "Yongchuan",
                        "Youyang",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        },
        {
            "series": [
                {
                    "type": "bar",
                    "name": "chongqing: Fire Radiative Energy (MJ)",
                    "legendHoverLink": true,
                    "data": [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "margin": 8
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "font_size": 56,
                        "interval": "0",
                        "rotate": "333"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "Banan",
                        "Beibei",
                        "Bishan",
                        "Chengkou",
                        "Dadukou",
                        "Dazu",
                        "Dianjiang",
                        "Fengdu",
                        "Fengjie",
                        "Fuling",
                        "Hechuan",
                        "Jiangjin",
                        "Jiulongpo",
                        "Kaizhou",
                        "Liangping",
                        "Nanan",
                        "Nanchuan",
                        "Pengshuimiaozuandtujiazu",
                        "Qijiang",
                        "Qianjiang",
                        "Rongchang",
                        "Shapingba",
                        "Shizhutujiazu",
                        "Tongliang",
                        "Tongnan",
                        "Wanzhou",
                        "Wushan",
                        "Wuxi",
                        "Wulong",
                        "Xiushantujiazuandmiaozu",
                        "Yongchuan",
                        "Youyangtujiazuandmiaozu",
                        "Yubei",
                        "Yuzhong",
                        "Yunyang",
                        "Changshou",
                        "Zhongxian",
                        "Jiangbei"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ]
        }
    ]
};
        chart_Chongqing.setOption(option_Chongqing);
    
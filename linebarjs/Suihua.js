
            document.getElementById('Suihua').style.width = document.getElementById('Suihua').parentNode.clientWidth + 'px';
        var chart_Suihua = echarts.init(
            document.getElementById('Suihua'), 'white', {renderer: 'canvas'});
        var option_Suihua = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
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
    ],
    "series": [
        {
            "type": "line",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "2023-04-05 00",
                    98868.0
                ],
                [
                    "2023-04-05 01",
                    36690.0
                ],
                [
                    "2023-04-05 02",
                    15408.0
                ],
                [
                    "2023-04-05 03",
                    17772.0
                ],
                [
                    "2023-04-05 04",
                    0.0
                ],
                [
                    "2023-04-05 05",
                    0.0
                ],
                [
                    "2023-04-05 06",
                    0.0
                ],
                [
                    "2023-04-05 07",
                    0.0
                ],
                [
                    "2023-04-05 08",
                    0.0
                ],
                [
                    "2023-04-05 09",
                    0.0
                ],
                [
                    "2023-04-05 10",
                    0.0
                ],
                [
                    "2023-04-05 11",
                    13074.0
                ],
                [
                    "2023-04-05 12",
                    0.0
                ],
                [
                    "2023-04-05 13",
                    24714.0
                ],
                [
                    "2023-04-05 14",
                    213714.0
                ],
                [
                    "2023-04-05 15",
                    1489002.0
                ],
                [
                    "2023-04-05 16",
                    3152022.0
                ],
                [
                    "2023-04-05 17",
                    2735868.0
                ],
                [
                    "2023-04-05 18",
                    2343720.0
                ],
                [
                    "2023-04-05 19",
                    363342.0
                ],
                [
                    "2023-04-05 20",
                    166110.0
                ],
                [
                    "2023-04-05 21",
                    12156.0
                ],
                [
                    "2023-04-05 22",
                    0.0
                ],
                [
                    "2023-04-05 23",
                    0.0
                ],
                [
                    "2023-04-06 00",
                    0.0
                ],
                [
                    "2023-04-06 01",
                    0.0
                ],
                [
                    "2023-04-06 02",
                    0.0
                ],
                [
                    "2023-04-06 03",
                    0.0
                ],
                [
                    "2023-04-06 04",
                    0.0
                ],
                [
                    "2023-04-06 05",
                    0.0
                ],
                [
                    "2023-04-06 06",
                    0.0
                ],
                [
                    "2023-04-06 07",
                    0.0
                ],
                [
                    "2023-04-06 08",
                    0.0
                ],
                [
                    "2023-04-06 09",
                    0.0
                ],
                [
                    "2023-04-06 10",
                    0.0
                ],
                [
                    "2023-04-06 11",
                    0.0
                ],
                [
                    "2023-04-06 12",
                    0.0
                ],
                [
                    "2023-04-06 13",
                    0.0
                ],
                [
                    "2023-04-06 14",
                    0.0
                ],
                [
                    "2023-04-06 15",
                    0.0
                ],
                [
                    "2023-04-06 16",
                    0.0
                ],
                [
                    "2023-04-06 17",
                    0.0
                ],
                [
                    "2023-04-06 18",
                    0.0
                ],
                [
                    "2023-04-06 19",
                    0.0
                ],
                [
                    "2023-04-06 20",
                    0.0
                ],
                [
                    "2023-04-06 21",
                    21204.0
                ],
                [
                    "2023-04-06 22",
                    77550.0
                ],
                [
                    "2023-04-06 23",
                    138792.0
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "margin": 8
            },
            "logBase": 10,
            "seriesLayoutBy": "column",
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {}
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
    "xAxis": [
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
            },
            "data": [
                "2023-04-05 00",
                "2023-04-05 01",
                "2023-04-05 02",
                "2023-04-05 03",
                "2023-04-05 04",
                "2023-04-05 05",
                "2023-04-05 06",
                "2023-04-05 07",
                "2023-04-05 08",
                "2023-04-05 09",
                "2023-04-05 10",
                "2023-04-05 11",
                "2023-04-05 12",
                "2023-04-05 13",
                "2023-04-05 14",
                "2023-04-05 15",
                "2023-04-05 16",
                "2023-04-05 17",
                "2023-04-05 18",
                "2023-04-05 19",
                "2023-04-05 20",
                "2023-04-05 21",
                "2023-04-05 22",
                "2023-04-05 23",
                "2023-04-06 00",
                "2023-04-06 01",
                "2023-04-06 02",
                "2023-04-06 03",
                "2023-04-06 04",
                "2023-04-06 05",
                "2023-04-06 06",
                "2023-04-06 07",
                "2023-04-06 08",
                "2023-04-06 09",
                "2023-04-06 10",
                "2023-04-06 11",
                "2023-04-06 12",
                "2023-04-06 13",
                "2023-04-06 14",
                "2023-04-06 15",
                "2023-04-06 16",
                "2023-04-06 17",
                "2023-04-06 18",
                "2023-04-06 19",
                "2023-04-06 20",
                "2023-04-06 21",
                "2023-04-06 22",
                "2023-04-06 23"
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
    ]
};
        chart_Suihua.setOption(option_Suihua);
    
// box2 老龄人口数量变化--------------------------------------------------------------------------------------------
//初始化实例对象 echarts.init(dom容器)
var myChart2 = echarts.init(document.getElementById("box2"));
//指定配置项和数据
var option2 = {
    title: {
        text: '图2. 2012年—2021年全国65周岁及以上老年人口数量及占全国总人口比重',
        left: 'center',
        top: '1',
        textStyle: {
            color: '#e2ddde',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            // saveAsImage: { show: true }
        }
    },
    legend: {
        bottom: "6%",
        data: ['60周岁及以上人口数量', '占全国人口比重'],
        textStyle: {
            color: '#e2ddde'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '2012年',
                '2013年',
                '2014年',
                '2015年',
                '2016年',
                '2017年',
                '2018年',
                '2019年',
                '2020年',
                '2021年'
            ],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                color: '#e2ddde'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '人口/万人',
            min: 0,
            max: 25000,
            interval: 5000,
            axisLabel: {
                formatter: '{value}',
                color: '#e2ddde'
            },
            nameTextStyle: {
                color: '#e2ddde'
            }
        },
        {
            type: 'value',
            name: '比重/%',
            min: 5,
            max: 30.0,
            interval: 5,
            axisLabel: {
                formatter: '{value}',
                color: '#e2ddde'
            },
            nameTextStyle: {
                color: '#e2ddde'
            }
        }
    ],
    series: [
        {
            name: '60周岁及以上人口数量',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 万人';
                }
            },
            data: [
                12777, 13262, 13902, 14524, 15037, 15961, 16724, 17767, 19064, 20056
            ]
        },
        {
            name: '占全国人口比重',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            data: [9.4, 9.7, 10.1, 10.5, 10.8, 11.4, 11.9, 12.6, 13.5, 14.2]
        }
    ]
};
// 将配置项设置给echarts实例对象，使用刚指定的配置项和数据显示图表。
option2 && myChart2.setOption(option2);

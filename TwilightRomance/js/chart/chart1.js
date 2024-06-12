// box1 老龄人口数量变化--------------------------------------------------------------------------------------------
//初始化实例对象 echarts.init(dom容器)
var myChart1 = echarts.init(document.getElementById("box1"));
//指定配置项和数据
var option1 = {
    title: {
        text: '图1. 2012年—2021年全国60周岁及以上老年人口数量及占全国总人口比重',
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
            saveAsImage: { show: true }
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
            max: 32000,
            interval: 4000,
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
            min: 0,
            max: 40.0,
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
                19473, 20372, 21335, 22340, 23252, 24222, 25087, 25570, 26402, 26736
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
            data: [14.3, 14.9, 15.5, 16.1, 16.7, 17.3, 17.9, 18.1, 18.7, 18.9]
        }
    ]
};
// 将配置项设置给echarts实例对象，使用刚指定的配置项和数据显示图表。
option1 && myChart1.setOption(option1);

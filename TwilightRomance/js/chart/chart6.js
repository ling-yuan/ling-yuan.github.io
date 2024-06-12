// box6 2015-2021全国老人享受补贴人数及增速--------------------------------------------------------------------------------------------
var myChart6 = echarts.init(document.getElementById("box6"));
var option6 = {
    title: {
        text: '图6. 2015-2021全国老人享受补贴人数及增速',
        left: 'center',
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
        bottom: '5%',
        data: ['增速', '老年人享受补贴人数'],
        textStyle: {
            color: '#e2ddde'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [
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
            name: '增速/%',
            min: 0.0,
            max: 18.0,
            interval: 2.0,
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
            name: '老年人享受补贴人数/万人',
            min: 0,
            max: 4500.0,
            interval: 500,
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
            name: '增速',
            type: 'line',
            tooltip: {
                valueFormatter: function (value) {
                    return (value ? value : '-') + ' %';
                }
            },
            data: ['', 9.8, 15.6, 15.3, 0.2, 7.7, 3.7],
            itemStyle: {
                normal: {
                    color: '#1100ff'
                }
            }
        },
        {
            name: '老年人享受补贴人数',
            type: 'bar',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 万人';
                }
            },
            data: [2439.5, 2678.8, 3097.9, 3571.8, 3579.1, 3853.7, 3994.7],
            itemStyle: {
                normal: {
                    color: '#f0a800'
                }
            }
        }
    ]
};



option6 && myChart6.setOption(option6);

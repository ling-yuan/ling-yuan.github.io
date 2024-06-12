// box12 我国50岁以上HIV/AIDS构成比--------------------------------------------------------------------------------------------
var option12 = {
    title: {
        left: 'center',
        text: '图13. 我国50岁以上HIV/AIDS构成比',
        textStyle: {
            color: '#e2ddde',
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        bottom: '3%',
        data: ['本年报告HIV/AIDS', '存活HIV/AIDS'],
        textStyle: {
            color: '#e2ddde'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: [
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020'
        ],
        axisLabel: {
            formatter: '{value}年',
            color: '#e2ddde'
        }
    },
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 50,
            interval: 5,
            axisLabel: {
                formatter: ' {value}.0 %',
                color: '#e2ddde'
            }
        }
    ],
    series: [
        {
            name: '本年报告HIV/AIDS',
            type: 'line',
            data: [22, 24, 25.5, 26.4, 28.3, 31, 34.8, 37.5, 43.3, 44],
            itemStyle: {
                normal: {
                    color: '#6b9cb6', //改变折线点的颜色
                    lineStyle: {
                        color: '#6b9cb6' //改变折线颜色
                    }
                }
            }
        },
        {
            name: '存活HIV/AIDS',
            type: 'line',
            data: [14, 15.5, 17.4, 20, 25, 26, 28.5, 31.1, 34.5, 36.2],
            itemStyle: {
                normal: {
                    color: '#ca8a5b', //改变折线点的颜色
                    lineStyle: {
                        color: '#ca8a5b' //改变折线颜色
                    }
                }
            }
        }
    ]
};

var myChart12 = echarts.init(document.getElementById("box12"));
option12 && myChart12.setOption(option12);

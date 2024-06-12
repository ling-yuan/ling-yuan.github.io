// box3 2012年—2021年全国65周岁及以上老年人口抚养比 --------------------------------------------------------------------------------------------
var myChart3 = echarts.init(document.getElementById("box3"));
var option3 = {
    tooltip: {
        trigger: 'axis',
        formatter: ''
    },
    // Make gradient line here
    visualMap: [
        {
            show: false,
            type: 'continuous',
            min: 10,
            max: 22
        }
    ],
    title: [
        {
            left: 'center',
            text: '图3. 2012年—2021年全国65周岁及以上老年人口抚养比',
            textStyle: {
                color: '#e2ddde'
            }
        }
    ],
    xAxis: [
        {
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
            axisLabel: {
                color: '#e2ddde'
            }
        }
    ],
    yAxis: {
        type: 'value',
        name: '比率/%',
        min: 5,
        max: 23,
        interval: 2,
        axisLabel: {
            formatter: '{value}',
            color: '#e2ddde'
        },
        nameTextStyle: {
            color: '#e2ddde'
        }
    },
    series: [
        {
            type: 'line',
            showSymbol: true,
            data: [12.7, 13.1, 13.7, 14.3, 15.0, 15.9, 16.8, 17.8, 19.7, 20.8]
        }
    ]
};

option3 && myChart3.setOption(option3);
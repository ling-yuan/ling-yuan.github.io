// box13 2019-2050年全国城镇企业职工基本养老保险金累计结余预测--------------------------------------------------------------------------------------------
var myChart13 = echarts.init(document.getElementById("box13"));
var option13 = {
    title: {
        left: 'center',
        top: '2%',
        text: '图17. 2019-2050年全国城镇企业职工基本养老保险金累计结余预测',
        textStyle: {
            color: '#e2ddde',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: {
        type: 'category',
        data: [
            2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
            2031, 2032, 2033, 2034, 2035, 2035, 2036, 2037, 2038, 2039, 2040, 2041,
            2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050
        ],
        axisLabel: {
            interval: 1,
            formatter: '{value}年',
            color: '#e2ddde'
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [
        {
            name: '累计结余/亿元',
            type: 'value',
            min: 0,
            max: 80000,
            splitNumber: 7,
            axisLabel: {
                color: '#e2ddde'
            },
            nameTextStyle: {
                color: '#e2ddde'
            }
        },
        {
            name: '占GDP比例/%',
            type: 'value',
            min: 0,
            max: 8,
            splitNumber: 7,
            axisLabel: {
                color: '#e2ddde'
            },
            nameTextStyle: {
                color: '#e2ddde'
            }
        }
    ],
    series: [
        {
            name: '累计结余',
            data: [
                42566.0,
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                69874.6,
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                0
            ],
            type: 'line',
            smooth: true,
            yAxisIndex: 0,
            connectNulls: true,
            markPoint: {
                symbol: 'path://m 0,0 h 48 v 20 h -34 l -6,10 l -6,-10 h -2 z',
                symbolOffset: ['34%', '-45%'],
                symbolKeepAspect: true,
                label: {
                    position: 'insideTop',
                    distance: 6
                },
                data: [
                    {
                        value: 69874.6,
                        xAxis: 8,
                        yAxis: 69874.6
                    }
                ]
            }
        },
        {
            name: '占GDP比例',
            data: [
                4.4,
                '',
                '',
                '',
                '',
                4.9,
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                0
            ],
            type: 'line',
            smooth: true,
            yAxisIndex: 1, //在单个图表实例中存在多个y轴的时候有用
            connectNulls: true,
            markPoint: {
                symbol: 'path://m 0,0 h 48 v 20 h -34 l -6,10 l -6,-10 h -2 z',
                symbolOffset: ['34%', '-45%'],
                symbolKeepAspect: true,
                label: {
                    position: 'insideTop',
                    distance: 6
                },
                data: [
                    {
                        value: 4.9,
                        xAxis: 5,
                        yAxis: 4.9
                    }
                ]
            }
        }
    ]
};

option13 && myChart13.setOption(option13);
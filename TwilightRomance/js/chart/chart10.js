// box10 不再婚的原因及占比--------------------------------------------------------------------------------------------
function dataProcess(data10) {
    const len = data10.length;
    const placeholder = {
        value: 0,
        itemStyle: {
            opacity: 0
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    };
    let i = 0;
    while (i < len) {
        data10.push(placeholder);
        i++;
    }
    return data10;
}

const data10 = [
    {
        name: '对婚姻失去信心',
        value: 17.02
    },
    {
        name: '健康问题',
        value: 31.91
    },
    {
        name: '经济独立',
        value: 42.55
    },
    {
        name: '孤独感不强烈',
        value: 53.19
    },
    {
        name: '其他',
        value: 23.4
    }
];

console.log(dataProcess(data10));

const seriesForData = {
    roseType: 'area',
    type: 'pie',
    z: 5,
    data: data10,
    center: ['10%', '70%'],
    radius: ['10%', '50%'],
    label: {
        normal: {
            color: '#e2ddde',
            formatter: '{b|{b}} {c|{c}} %',
            rich: {
                b: {
                    color: '#e2ddde',
                },
                c: {
                    fontWeight: 'bold'
                }
            }
        }
    },
    labelLine: {
        normal: {
            length: 0,
            length2: 350,
            lineStyle: {
                color: '#e2ddde',
            }
        }
    }
};

const seriesForBg = {
    type: 'pie',
    z: 2,
    center: ['10%', '70%'],
    radius: ['5%', '60%'],
    silent: true,
    data: [
        {
            value: 1,
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0,
                        y: 0.5,
                        r: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(0,0,0,1)'
                            },
                            {
                                offset: 0.4,
                                color: 'rgb(0,0,0,0)'
                            }
                        ]
                    }
                }
            }
        },
        {
            value: 1,
            itemStyle: {
                emphasis: {
                    opacity: 0
                },
                normal: {
                    opacity: 0
                }
            }
        }
    ]
};

var option10 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"
    },
    title: {
        text: '图10. 不再婚的原因及占比',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#e2ddde'
        }
    },
    animation: false,
    // backgroundColor: '#010105',
    color: ['#FE0404', '#FBA200', '#00CEFF', '#00DC58', '#3F59E0'],
    series: [seriesForData, seriesForBg]
};
var myChart10 = echarts.init(document.getElementById("box10"));
option10 && myChart10.setOption(option10);

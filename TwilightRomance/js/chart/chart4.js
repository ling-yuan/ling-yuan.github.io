// box4 全国60岁以上老年人口主要生活来源占比--------------------------------------------------------------------------------------------
var myChart4 = echarts.init(document.getElementById("box4"));
var option4 = {
    title: {
        top: "3%",
        left: 'center',
        text: '图4. 全国60岁及以上老年人口主要生活来源占比',
        textStyle: {
            color: '#e2ddde',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{c}%'
    },
    legend: {
        bottom: '1%',
        width: 550,//给整个图例组件这只宽度,如果不设置,图例将根据容器大小自适应
        left: 'center',
        data: ['劳动收入', '离退休养老金', '最低生活保障金', '财产性收入', '家庭其他成员供养', '其他'],
        formatter: [
            '{a|{name}}'
        ].join('\n'),
        textStyle: {
            color: '#e2ddde',
            rich: {
                a: {
                    width: 115,
                    fontSize: 13,
                    lineHeight: 12,
                    color: '#e2ddde',
                }
            },
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '75%'], // 半径，内圈和外圈
            center: ['50%', '50%'], // 圆心坐标
            data: [
                { value: 29.07, name: '劳动收入' },
                { value: 24.12, name: '离退休养老金' },
                { value: 3.89, name: '最低生活保障金' },
                { value: 0.37, name: '财产性收入' },
                { value: 40.72, name: '家庭其他成员供养' },
                { value: 1.83, name: '其他' }
            ],

            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 30,
                    fontWeight: 'bold'
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            labelLine: {
                show: false
            }
        }
    ]
};

option4 && myChart4.setOption(option4);
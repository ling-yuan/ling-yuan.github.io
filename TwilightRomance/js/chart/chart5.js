// box5 全国60岁及以上独身老年人口主要生活来源占比--------------------------------------------------------------------------------------------
var myChart5 = echarts.init(document.getElementById("box5"));
var option5 = {
    title: {
        top: '3%',
        text: '图5. 全国60岁及以上独身老年人口主要生活来源占比', //主标题文本
        subtext: '（内层到外层依次为丧偶老年人口、离婚老年人人口、未婚老年人口、总老年人人口）',//副标题文本
        left: "center",
        textStyle: {
            color: '#e2ddde',
        },
        subtextStyle: {
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
            name: 'Access From',
            type: 'pie',
            radius: ['69%', '75%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderWidth: 3
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 15.98, name: '劳动收入' },
                { value: 16.33, name: '离退休养老金' },
                { value: 7.28, name: '最低生活保障金' },
                { value: 0.27, name: '财产性收入' },
                { value: 57.78, name: '家庭其他成员供养' },
                { value: 2.36, name: '其他' }
            ]
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['63%', '69%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 35.92, name: '劳动收入' },
                { value: 5.28, name: '离退休养老金' },
                { value: 34.08, name: '最低生活保障金' },
                { value: 0.29, name: '财产性收入' },
                { value: 17.55, name: '家庭其他成员供养' },
                { value: 6.87, name: '其他' }
            ]
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['57%', '63%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 26.83, name: '劳动收入' },
                { value: 34.51, name: '离退休养老金' },
                { value: 8.11, name: '最低生活保障金' },
                { value: 0.52, name: '财产性收入' },
                { value: 27.39, name: '家庭其他成员供养' },
                { value: 2.64, name: '其他' }
            ]
        },
        {
            name: 'Access From',
            type: 'pie',
            radius: ['51%', '57%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 14.35, name: '劳动收入' },
                { value: 16.53, name: '离退休养老金' },
                { value: 5.48, name: '最低生活保障金' },
                { value: 0.26, name: '财产性收入' },
                { value: 61.32, name: '家庭其他成员供养' },
                { value: 2.06, name: '其他' }
            ]
        }
    ]
};

option5 && myChart5.setOption(option5
);
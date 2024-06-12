// box8 老年人想要再婚的原因--------------------------------------------------------------------------------------------
var myChart8 = echarts.init(document.getElementById("box8"));
var option7 = {
    title: [
        {
            text: '图8. 老年人想要再婚的原因',
            left: 'center',
            textStyle: {
                color: '#e2ddde',
            }
        }
    ],
    polar: {
        radius: [40, '80%']
    },
    angleAxis: {
        max: 100,
        startAngle: 75
    },
    radiusAxis: {
        type: 'category',
        data: ['D.性需求', 'C.生活照料', 'B.经济支持', 'A.情感需要']
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c}%"
    },
    series: {
        type: 'bar',
        data: [21.05, 15.79, 73.68, 94.74],
        coordinateSystem: 'polar',
        label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}%'
        }
    }
};

option7 && myChart8.setOption(option7);
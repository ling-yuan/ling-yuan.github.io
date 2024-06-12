// box9 老年人择偶的因素及占比--------------------------------------------------------------------------------------------
var myChart9 = echarts.init(document.getElementById("box9"));
var option9 = {
    title: {
        text: '图9. 老年人择偶的因素及占比',
        left: 'center',
        top: 25,
        textStyle: {
            color: '#e2ddde',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{d}%"
    },
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '老年人择偶的因素及占比',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
                { value: 73.68, name: 'A.人品和品德' },
                { value: 36.84, name: 'B.经济状况' },
                { value: 15.79, name: 'C.外貌和形象' },
                { value: 42.11, name: 'D.共同兴趣爱好' },
                { value: 57.89, name: 'E.互相支持和理解' }
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                color: '#e2ddde',
            },
            labelLine: {
                lineStyle: {
                    color: '#e2ddde',
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.35)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
option9 && myChart9.setOption(option9);

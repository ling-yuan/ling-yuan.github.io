// box11 中老年人被骗类型占比--------------------------------------------------------------------------------------------
var myChart11 = echarts.init(document.getElementById("box11"));
const 中老年人被骗类型占比 = {
    all: 45,
    charts: {
        金融信用诈骗: 6.5,
        仿冒诈骗: 7.8,
        兼职诈骗: 8.0,
        交友诈骗: 11.2,
        返利诈骗: 15.1,
        交易诈骗: 38.1
    }
};
var option11 = {
    tooltip: {
        trigger: 'axis',
        formatter: '{b}:{c}%',
        axisPointer: {
            type: 'shadow'
        }
    },
    title: [
        {
            text: '图11. 中老年人被骗类型TOP6',
            color: '#ff0000',
            left: '50%',
            top: '5%',
            textAlign: 'center',
            textStyle: {
                color: '#e2ddde',
            }
        }
    ],
    grid: [
        {
            top: '15%',
            bottom: '10%',
            containLabel: true
        }
    ],
    xAxis: [
        {
            type: 'value',
            max: 中老年人被骗类型占比.all,
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#e2ddde'
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            data: Object.keys(中老年人被骗类型占比.charts),
            axisLabel: {
                interval: 0,
                rotate: 30,
                color: '#e2ddde'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
                position: 'right',
                show: true,
                formatter: ' {c}%'
            },
            data: Object.keys(中老年人被骗类型占比.charts).map(function (key) {
                return 中老年人被骗类型占比.charts[key];
            })
        },
        {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
                color: '#eee'
            },
            data: Object.keys(中老年人被骗类型占比.charts).map(function (key) {
                return 中老年人被骗类型占比.all - 中老年人被骗类型占比.charts[key];
            })
        }
    ]
};
option11 && myChart11.setOption(option11);
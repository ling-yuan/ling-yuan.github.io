// box7 2021全国老人享受补贴人数占比--------------------------------------------------------------------------------------------
var myChart7 = echarts.init(document.getElementById("box7"));
var option7 = {
    tooltip: {
        //提示框组件
        trigger: 'item',
        formatter: "{c}%"
    },
    title: {
        text: '图7. 2021年全国老年人享受补贴人数占比',
        top: '2%',
        left: 'center',
        textStyle: {
            color: '#e2ddde',
        }
    },
    series: [
        {
            type: 'treemap',
            breadcrumb: { show: true },
            data: [
                {
                    name: '享受高额补贴',
                    value: 81.27
                },
                {
                    name: '享受护理补贴',
                    value: 2.26
                },
                {
                    name: '享受养老服务补贴',
                    value: 14.36
                },
                {
                    name: '享受综合补贴',
                    value: 2.11
                }
            ]
        }
    ]
};



option7 && myChart7.setOption(option7);

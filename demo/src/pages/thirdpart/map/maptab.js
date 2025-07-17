loader.define(function(requires, exports, module, global) {


    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {

        var map = new AMap.Map('container', {
            resizeEnable: true,
            zoom: 11,
            center: [116.397428, 39.90923]
        });

        map.setStatus({
            dragEnable: false,
            keyboardEnable: false,
            doubleClickZoom: false,
            zoomEnable: false,
            rotateEnable: false
        });

        var marker = new AMap.Marker({
            position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '北京'
        });

        // 将创建的点标记添加到已有的地图实例：
        map.add(marker);


    }


    // 选项卡 js 初始化:
    var uiTab = bui.tab({
        id: "#uiTab"
    });

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            map: null,
        },
        methods: {},
        watch: {},
        computed: {},
        templates: {
            tplMap(data) {

                return `
                <div class="">${data}</div>
                <div id='container'></div>`
            }
        },
        mounted: function() {
            // 数据解析后执行
            this.map = 123;

            // // 动态加载地图资源,再初始化,高德的这些路径需要在index首页引入才不会报错
            loader.import([
                    "http://cache.amap.com/lbs/static/main1119.css",
                    "http://cache.amap.com/lbs/static/es5.min.js",
                    "http://webapi.amap.com/maps?v=1.4.5&key=c7c60f79d6b323835ee696ef855f10ca"
                ],
                function() {
                    // 高度的地图初始化在这个工具里面
                    loader.import(["http://cache.amap.com/lbs/static/addToolbar.js"], function() {
                        // 初始化
                        pageview.init();

                    });
                });
        }
    })

    // return pageview;
})
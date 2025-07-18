loader.define(function(require, exports, module) {


    // 多级联动
    levelSelect();

    // bui.select 的多级联动
    function levelSelect() {
        var uiMask = bui.mask();
        /* 一, 初始化控件 */

        // 城市的数据
        var chineseCities = {};
        var uiLoading = bui.loading();

        // 省份
        var provinceSelect = bui.select({
            trigger: "#provinceSelect",
            title: "请选择省份",
            type: "radio",
            height: 300,
            autoClose: true,
            field: {
                value: "name"
            },
            data: []
        });

        // 城市
        var citySelect = bui.select({
            trigger: "#citySelect",
            title: "请选择地市",
            type: "radio",
            height: 300,
            autoClose: true,
            field: {
                value: "name"
            },
            data: []
        });

        // 地区
        var areaSelect = bui.select({
            trigger: "#areaSelect",
            title: "请选择区域",
            type: "radio",
            height: 300,
            autoClose: true,
            field: {
                value: "name"
            },
            data: []
        });

        /* 二, 监听控件的事件变化 */

        // 选择省份以后
        provinceSelect.on("change", function() {
            var index = provinceSelect.index() || 0;

            provinceSelect.hide();

            // 激活第一个城市
            chineseCities.city = chineseCities.province[index]["city"];
            citySelect.option("data", chineseCities.city);

            citySelect.show();
        })

        // 选择城市以后
        citySelect.on("change", function() {

            var index = citySelect.index() || 0;

            citySelect.hide();

            //设置选择的区域数据
            chineseCities.area = chineseCities.city[index]["area"] || [];
            areaSelect.option("data", chineseCities.area);


            areaSelect.show();

        });
        // 选择地区以后
        areaSelect.on("change", function() {

            areaSelect.hide();

            var province = provinceSelect.text(),
                city = citySelect.text(),
                area = areaSelect.text(),
                address = "";

            if (province == city) {
                address = province + area;
            } else {
                address = province + city + area;
            }

            // 输出地址
            console.log(address);

        })

        /* 三, 填充省份的第一个列表 */

        uiLoading.show();

        // 获取中国省份的数据
        bui.ajax({
            url: "http://easybui.com/demo/json/chineseCities.json"
        }).then(function(datas) {
            //省份数据
            chineseCities.province = datas.data;
            //初始化省份的select
            provinceSelect.option("data", datas.data);

            // 初始化省的第一个数据,触发change事件,再设置城市初始值
            // provinceSelect.active(0);

            uiLoading.hide();
        })

    }
})
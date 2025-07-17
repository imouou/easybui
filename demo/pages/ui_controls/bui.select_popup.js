loader.define(function(require, exports, module) {

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            select: "广东",
        },
        methods: {},
        mounted: function() {
            // 数据解析后执行
        }
    })
    //动态绑定
    var selectStore2 = bui.select({
        trigger: "#selectStore",
        title: "请选择区域",
        type: "checkbox",
        data: [{
            "name": "广东",
            "value": "11"
        }, {
            "name": "广西",
            "value": "22"
        }, {
            "name": "上海",
            "value": "33"
        }, {
            "name": "北京",
            "value": "44"
        }, {
            "name": "深圳",
            "value": "55"
        }, {
            "name": "南京",
            "value": "66"
        }, {
            "name": "江苏",
            "value": "77"
        }, {
            "name": "云南",
            "value": "88"
        }],
        needSearch: true,
        // value: ["广东", "上海"],
        //如果需要点击再进行操作,增加按钮
        buttons: [{
            name: "重置",
            className: ""
        }, {
            name: "确定",
            className: "primary-reverse"
        }],
        onChange(e) {
            console.log("change")
        },
        callback: function(e) {

            var text = $(e.target).text();

            if (text == "重置") {
                this.selectNone();
            } else {
                this.hide();
            }
        }
    })
    //动态绑定
    var uiSelect = bui.select({
        trigger: "#select",
        title: "请选择区域",
        type: "checkbox",
        needSearch: true,
        // height: 300,
        data: [{
            "name": "广东",
            "value": "11"
        }, {
            "name": "广西",
            "value": "22"
        }, {
            "name": "上海",
            "value": "33"
        }, {
            "name": "北京",
            "value": "44"
        }, {
            "name": "深圳",
            "value": "55"
        }, {
            "name": "南京",
            "value": "66"
        }, {
            "name": "江苏",
            "value": "77"
        }, {
            "name": "云南",
            "value": "88"
        }],
        // value: ["广东", "上海"],
        //如果需要点击再进行操作,增加按钮
        buttons: [{
            name: "重置",
            className: ""
        }, {
            name: "确定",
            className: "primary-reverse"
        }],
        callback: function(e) {

            var text = $(e.target).text();
            if (text == "重置") {
                this.selectNone();
            } else {
                this.clearSearch();
                this.hide();
            }

        },
        onChange: function(e, item) {
            // console.log(e)
            // 1.9.21 新增参数

            console.log(this.value())
            console.log(item)
        }
    })

    // 清空数据
    // uiSelect.option("data", [])

    //静态自定义绑定
    var uiSelect2 = bui.select({
        id: "#select-dialog",
        trigger: "#select2",
        type: "checkbox",
        effect: "fadeInRight",
        position: "right",
        fullscreen: true,
        mask: false,
        buttons: []
    });

    // 自定义确定按钮事件
    router.$("#makeSure").on("click", function() {
        console.log(uiSelect2.value())
        uiSelect2.hide();
    });

})
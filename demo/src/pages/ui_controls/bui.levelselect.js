loader.define(function(require, exports, module) {

    var citySelect = null,
        citySelect2 = null;

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            selectCity: ["广东", "广州市", "天河区"],
        },
        methods: {},
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行
        }
    })
    // 绑定数据
    loader.import("js/plugins/citys.js", function() {

        // 普通初始化
        citySelect = bui.levelselect({
            data: citys,
            title: "所在地区",
            trigger: "#chooseCity",
            field: {
                name: "n",
                // value: "n",
                data: ["c", "a"],
            },
            onClose(e) {
                console.log("onclose")
            },
            onChange: function(e, val, nextVal) {
                // console.log(val)
                if (this.value()[2]?.name == "城区") {
                    this.reset();
                }
            },
            // onLastChange: function (e, val, nextVal) {

            //     if( this.value()[2].name == "城区"){
            //         this.reset();
            //     }
            // },
        })

        // citySelect.on("lastchange", function (e, val, nextVal) {
        //     // console.log(e.target)
        //     console.log(val,"lastchange")

        // })

        // 设置值
        citySelect2 = bui.levelselect({
            data: citys,
            title: "所在地区",
            trigger: ".bui-input-text",
            level: 3,
            field: {
                name: "n",
                // value: "n",
                data: ["c", "a"],
            },
            value: ["广东", "广州市", "天河区"]
        })

    })

    $("#chooseCity").on("click", function() {
        citySelect.show();
    })
    $("#getValue").on("click", function() {

        console.dir(citySelect2.value())

    })
    $("#chooseCity2").on("click", function() {
        citySelect2.show();
    })

})
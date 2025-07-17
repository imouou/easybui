loader.define(function(require, exports, module, global) {

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            dropdown: "广东",
        },
        methods: {},
        mounted: function() {
            // 数据解析后执行

            //动态渲染
            var uiDoropdownCity = bui.dropdown({
                id: "#dropdownCity",
                data: [{
                    name: "广州",
                    value: "gz"
                }, {
                    name: "深圳",
                    value: "sz"
                }],
                //设置relative为false,二级菜单继承父层宽度
                relative: false,
                onChange: function(e) {
                    // console.log(this.value(), "change")
                    var gz = [{
                        name: "天河区",
                        value: "天河区"
                    }, {
                        name: "越秀区",
                        value: "越秀区"
                    }];
                    var sz = [{
                        name: "宝安区",
                        value: "宝安区"
                    }, {
                        name: "龙岗区",
                        value: "龙岗区"
                    }];

                    switch (this.value()) {
                        case "gz":
                            uiDoropdownArea.option("data", gz);
                            uiDoropdownArea.active(0);
                            break;
                        case "sz":
                            uiDoropdownArea.option("data", sz);
                            uiDoropdownArea.active(0);
                            break;
                    }
                },
            })

            //动态渲染
            var uiDoropdownArea = bui.dropdown({
                id: "#dropdownArea",
                data: [],
                //设置relative为false,二级菜单继承父层宽度
                relative: false,
                onChange: function(e) {

                    // console.log(this.value(), "change")
                },
            })
        }
    })

    return bs;
})
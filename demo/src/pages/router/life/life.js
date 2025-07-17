loader.define({
    beforeCreate: function() {
        // 只创建一次
        console.log(this.moduleName + " before create")
        // return false;
    },
    created: function() {
        // 只创建一次
        console.log(this.moduleName + " created")
    },
    beforeLoad: function() {
        console.log(this.moduleName + " before load")
    },
    loaded: function(require, exports, module, global) {

        console.log(this.moduleName + " loaded")
        // 合并接收默认参数
        let props = $.extend(true, {}, module.props);

        // 初始化数据行为存储
        this.bs = bui.store({
            el: `#${module.id}`,
            scope: "page",
            data: {},
            methods: {},
            watch: {},
            computed: {},
            templates: {},
            mounted: function() {
                // 数据解析后执行
            }
        })

        this.save = false;
    },
    show: function(e) {
        // console.log(e.type)
        // 页面每次跳转后退都会执行当前模块的触发
        console.log(this.moduleName + " show")

        console.log(e, 111)

        // 后退才触发刷新操作
        // if (e.type == "back") {
        //     bui.refresh();
        // }
    },
    hide: function(e) {
        // 页面每次跳转后退都会执行当前模块的触发
        console.log(this.moduleName + " hide")

    },
    beforeDestroy: function() {
        console.log(this.moduleName + " before destroy");
        let mod = this;
        if (!mod.save) {

            bui.confirm("您还没有保存，点击确定才能后退", function(e) {

                var text = $(e.target).text();
                if (text == "确定") {
                    // 修改保存状态
                    mod.save = true;
                    //do something
                    bui.back();
                }
                this.close();
            });

            // 拦截手势
            return false;
        } else {
            return true;
        }
    },
    destroyed: function() {
        console.log(this.moduleName + " destroyed")
    }
})
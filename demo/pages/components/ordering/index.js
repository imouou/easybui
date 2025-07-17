loader.define(function(require, exports, module, global) {

    // 初始化数据行为存储
    var bs = bui.store({
        el: ".bui-page",
        scope: "ordering",
        data: {
            title: "测试标题"
        },
        // mixins: [form, article, attach],
        methods: {
            floor(opt) {
                // 楼层初始化
                // 初始化
                var uiFloor = bui.floor(opt)

                return uiFloor;
            },
            numberInit() {
                // 数字条 js 初始化:
                var uiNumber = bui.number({
                    id: `#${module.id} .bui-number`,
                    value: 0,
                    min: 0,
                    onChange(e) {
                        console.log(this.values())
                    }
                })

                return uiNumber;
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            var that = this;

            // 数据解析后执行
            var floor = this.floor({
                id: `#${module.id} .bui-floor`,
                menu: `#${module.id} .bui-nav-side`,
            })

            // 初始化组件
            this.numberInit();
        }
    })

    return bs;
})
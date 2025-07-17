loader.define(function(require, exports, module, global) {

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "layout",
        data: {
            showSidebar: true,
            showSidebarRight: true,
        },
        methods: {
            toggleSidebar() {
                // 点击切换隐藏
                if (this.showSidebar) {
                    this.showSidebar = false;
                    return;
                }
                this.showSidebar = true;
            }
        },
        watch: {},
        computed: {},
        templates: {},
        beforeMount: function() {
            // 数据解析前执行, 修改data的数据示例
            // this.$data.a = 2
        },
        mounted: function() {
            // 数据解析后执行
        }
    })
})
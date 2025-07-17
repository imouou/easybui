loader.define(function(require, exports, module, global) {
    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {},
        methods: {},
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行

            var uiAccordion = bui.accordion({
                id: `#${module.id} .bui-accordion`
            });

            uiAccordion.showAll();
        }
    })
})
loader.define(function(require, exports, module) {

    // 可以在路由init以后,作为整个应用的联动数据处理
    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {

        },
        methods: {
            attrs: {
                "title": "这是动态标题", // 渲染一次
                changeTitle() {
                    // this.attrs.title = "新标题";
                    console.log(this.attrs.title)
                }
            },
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {}
    })

})
loader.define(function(require, exports, module) {

    // 可以在路由init以后,作为整个应用的联动数据处理
    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            attrs: {
                "title": "这是动态标题",
            },
            style: {
                color: "green",
                border: "1px solid #ddd"
            },
            color: "red",
            height: "300px",
        },
        methods: {},
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {}
    })

})
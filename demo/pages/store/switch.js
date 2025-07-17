loader.define(function(require, exports, module) {

    // 可以在路由init以后,作为整个应用的联动数据处理
    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            role: 1
        },
        methods: {
            add() {
                ++this.role
            },
            reset() {
                this.role = 1;
            }
        },
        templates: {},
        mounted: function() {

        }
    })

})
loader.define(function(require, exports, module) {


    // 可以在路由init以后,作为整个应用的联动数据处理
    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            role: 1,
            roles: ["1", "2"],
        },
        methods: {
            add() {
                ++this.role
            },
            reset() {
                this.role = 1;
            }
        },
        templates: {
            tplRole: function(data) {
                // 模板更建议直接用原生的判断
                if (this.role == 1) {
                    return `role=1`
                } else if (this.role == 2) {
                    return `role=2`
                } else if (this.role == 3) {
                    return `role=3`
                } else {
                    return `role>3`
                }
            }
        },
        mounted: function() {

        }
    })

})
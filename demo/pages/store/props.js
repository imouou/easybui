loader.define(function(require, exports, module) {


    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            search: {
                placeholder: "请选择",
                value: ""
            },
            placeholder: "请输入关键字"
        },
        methods: {},
        watch: {},
        computed: {},
        templates: {

        },
        mounted() {

        }
    })

})
loader.define(function(require, exports, module) {


    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            show: true
        },
        methods: {

        },
        watch: {},
        computed: {},
        templates: {

        },
        mounted() {
            console.log("mounted")
            loader.load({
                id: "#searchbar",
                url: "pages/components/searchbar/index.html",
                param: {}
            });
        }
    })

})
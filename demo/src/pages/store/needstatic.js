loader.define(function(require, exports, module) {


    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            name: "测试"
        },
        needStatic: true,
        beforeMount: async function() {
            let result = await bui.ajax({
                url: "json/shop.json"
            });

            this.$data.name = result.info;
            console.log("before")
        },
        mounted() {
            console.log("after")
        }
    })

})
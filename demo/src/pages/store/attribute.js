loader.define(function(require, exports, module) {

    // 可以在路由init以后,作为整个应用的联动数据处理
    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            title: "自动绑定标题2",
            attrs: {
                "test": "123",
                "title": "这是动态标题",
                "data-title": "自定义标题",
                "obj": {
                    "test": 123
                },

                image: "images/face.png",
            },
            prop: {
                checked: true,
                disabled: true,
            },
            hidden: true,
            width: "100px",
            // image: "images/face.png",
            images: "https://uam.bingolink.biz/uam/ui/upload?action=download&filepath=2022/04/13/11/2224855083",
            disabled: true,
            border: "1px solid red",
            color: "red"
        },
        needStatic: true, // 渲染 {{}}
        methods: {},
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {}
    })

})
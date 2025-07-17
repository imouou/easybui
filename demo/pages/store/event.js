loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            a: 1,
            b: {
                id: 123
            },
            c: [{
                id: 222
            }]
        },
        methods: {
            test: {
                getMessage: function(a, b, c, d) {
                    // 参数的最后一个为上下文关系
                    // console.log(this.$methods.test.title)
                    // console.log(this.$data.b.id)
                    console.log(a)
                    console.log(b)
                    console.log(c)
                    console.log(d)

                    // 1.5.4新增，获取到想操作的对象
                    // console.log(this.$refs["tit"])
                    // 阻止冒泡
                    // event.stopPropagation();

                    // 阻止默认事件
                    // event.preventDefault();
                    // 事件参数
                    // console.log(event)

                    router.$(".result").html(c)

                },
            },
            getMessage: function(a, b, c, d) {
                // console.log(this)
                // 参数的最后一个为上下文关系
                // console.log(event)
                console.log(a)
                console.log(b, "111")
                console.log(c)
                console.log(d)

                // 1.5.4新增，获取到想操作的对象
                console.log(this.$refs["tit"])
                // 阻止冒泡
                // event.stopPropagation();

                // 阻止默认事件
                // event.preventDefault();
                // 事件参数
                // console.log(event)

                router.$(".result").html(c)

            },
            changeA: function(argument) {
                this.a++;

            },
            customEvent: function(e) {

                // 触发自定义事件,参数可以自定义
                this.trigger("custom", "自定义参数", 456, {
                    "test": "112"
                })
            },
            select: function(a, b, e) {
                console.log(a, b, e)
                // 拿不到e，未处理
            },
            focus(e) {
                console.log(e)
            },
            keydown(e) {
                console.log(e.code)
                console.log(e.keyCode)
            }

        },
        watch: {
            // watch的改变
            a: function(newVal, oldVal) {
                console.log(newVal);
                console.log(oldVal);
            }
        },
        computed: {},
        templates: {},
        beforeMount() {
            // console.log(this.test.getMessage())
            // console.log(this.getMessage())

        },
        mounted: function() {
            // 自定义事件监听
            this.on("custom", function(e, b, c) {
                console.log(e)
                console.log(b)
                console.log(c)
            })


        }
    })

})
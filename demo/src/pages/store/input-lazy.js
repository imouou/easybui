loader.define(function(require, exports, module, global) {
    // 合并接收默认参数
    let props = $.extend(true, {}, module.props);

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            message: "Hello bui.js",
            num: 80,
        },
        // log: true,
        methods: {
            reverseMessage: function(e) {
                var a = this.message.split(' ').reverse().join(' ')
                this.message = a;
            },
            changeMessage(e) {
                console.log(this.message, e.target.value, "change")

            },
            triggerChange(e) {
                console.log(this.message, e.target.value, "trigger")
            }
        },
        watch: {
            message: function(val) {
                console.log(val, "watch")
            }
        },
        computed: {},
        templates: {},
        mounted: function() {
            // 加载后执行
        }
    })

})
loader.define(function(require, exports, module) {
    // // 测试 input与store的相互作用，避免死循环
    var allinput = bui.input({
        id: ".bui-input",
        callback: function(e) {
            // 清空数据
            // 加上e，按需清空
            this.empty(e);
        }
    })
    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            phone: 1203,
            username: "12",
            comment: "333"
        },
        methods: {
            bind() {
                var that = this;

            }
        },
        mounted: function() {
            // 数据解析后执行
            this.bind();
            var that = this;
            // 手机号,帐号是同个样式名, 获取值的时候,取的是最后一个focus的值
            // var phoneinput = bui.input({
            //     id: ".user-input",
            //     value: that.phone,
            //     callback: function (e) {
            //         // 清空数据
            //         this.empty();
            //     }
            // })
        }
    })

})
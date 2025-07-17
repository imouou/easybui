loader.define(function(require, exports, module) {


    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "method",
        data: {},
        methods: {
            tel(num) {
                bui.unit.tel(num);
            },
            mailto(email, title) {
                bui.unit.mailto({
                    email: email,
                    subject: title
                });
            },
            sms(num, content) {
                bui.unit.sms(num, content);
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行
            // 初始化折叠菜单
            var uiAccordion = bui.accordion({
                id: `#${module.id} .bui-accordion`,
                single: true,
                callback: function(e) {}
            });

            uiAccordion.showFirst()
        }
    })

})
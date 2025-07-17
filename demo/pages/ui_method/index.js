loader.define(function(require, exports, module) {
    bui.accordion().showFirst();

    // 检测版本更新
    // bui.checkVersion({
    //     id: "#checkVersion",
    //     url: "http://www.easybui.com/demo/json/versionUpdate.json",
    //     currentVersion: "1.4.8",
    //     currentVersionCode: "201800901"
    // });

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
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
        }
    })

})
loader.define(function(require, exports, module, global) {

    // 如果报错，检查页面是否有引入这个文件 index.html 引入的语言配置文件 js/plugins/bui.i18n.js
    console.log(global.language)
    // 初始化数据行为存储
    window.bs = bui.store({
        scope: "page",
        data: {
            local: bui.storage().get("language", 0) || "cn",
        },
        methods: {
            /**
             * 
             * @param {*} str 
             * @returns 
             * @example
             * 
             * 1. html的使用  <div b-text="page.lang(home)"></div>
             * 2. js的使用 this.lang()
             */
            lang: function(str) {
                // 修改页面的语言
                return global.language[this.local][str];
            },
            changeLanguage: function(str) {
                this.local = str || "cn";
            }
        },
        // log: true,
        watch: {
            local: function(newVal) {
                // 手动执行lang方法
                this.trigger("lang", {
                    value: this.lang
                });
                // 缓存语言配置
                bui.storage().set("language", newVal);

            }
        },
        computed: {},
        templates: {},
        beforeMount: function() {},
        mounted: function() {
            // 数据解析后执行
            // console.log(global.language[this.local].home)
        }
    })


})
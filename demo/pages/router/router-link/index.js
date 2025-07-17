loader.define(function(requires, exports, module, global) {

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            nav: [{
                title: "首页",
                url: "main"
            }, {
                title: "路由激活",
                url: "pages/router/router-link/index.html"
            }],
        },
        methods: {},
        watch: {},
        computed: {},
        templates: {
            tplNav(data) {
                let html = "";
                data.forEach(el => {
                    html += `<li class="bui-btn" router-link href="${el.url}">${el.title}</li>`
                });

                return html
            }
        },
        mounted: function() {
            // 数据解析后执行
            // 激活当前页面含有 router-link 的链接
            router.active();
        }
    })
})
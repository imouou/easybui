var badges = 9;
// 默认已经定义了main模块
loader.define(function(require, exports, module) {

    console.log(module.props)
    var pageview = {};
    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("pages/router/index.js was loaded");

        // 绑定事件
        this.bind();
    }
    // 事件绑定
    pageview.bind = function() {
        $(".btn-iframe").on("click", function() {
            bui.load({
                url: "http://www.easybui.com",
                param: {
                    "file": ""
                },
                iframe: true
            });
        })
        $(".btn-go").on("click", function() {
            window.location.href = "http://www.easybui.com"
        })
    }

    // 演示更新badges
    pageview.setBadges = function(badges) {

        console.log(router.$("#badges").text());

        $("#badges").text(badges);
    }

    // 初始化
    pageview.init();


    return pageview;
})
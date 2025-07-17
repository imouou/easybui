// 控件初始化都需要在define里面
loader.define(function(require, exports, module, ) {
    var pageview = {};
    var uiAccordion = null;
    pageview.init = function(argument) {
        // 初始化折叠菜单
        uiAccordion = bui.accordion({
            id: `#${module.id} .bui-accordion`,
            effect: "slide",
            // single: true,
            callback: function(e) {}
        });

        uiAccordion.showAll()
    }

    bui.ajax({
        url: "https://vue.ruoyi.vip/prod-api/captchaImage",
        data: {}, //接口请求的参数
        // 可选参数
        method: "GET"
    }).then(function(result) {

        console.log(result)
        // 成功
    }, function(result, status) {
        // 失败 console.log(status)
    });

    pageview.init();

    return pageview;

})
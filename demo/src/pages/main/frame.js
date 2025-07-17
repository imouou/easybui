// 控件初始化都需要在define里面
loader.define(function(require, exports, module) {

    var pageview = {};
    var uiAccordion = null;

    pageview.init = function(argument) {
        // 初始化折叠菜单
        uiAccordion = bui.accordion({
            id: `#${module.id} .bui-accordion`,
            // single: true,
            callback: function(e) {}
        });

        // uiAccordion.showFirst()
        uiAccordion.showAll()
    }

    pageview.init()

    return pageview;

})
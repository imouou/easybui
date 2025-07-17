loader.define(function(require, exports, module) {

    var pageview = {};
    var uiAccordion = null;
    pageview.init = function(argument) {
        // 初始化折叠菜单
        uiAccordion = bui.accordion({
            id: `#${module.id} .bui-accordion`,
            single: true,
            callback: function(e) {}
        });

        uiAccordion.showFirst()
    }

    pageview.init();

    return pageview;
})
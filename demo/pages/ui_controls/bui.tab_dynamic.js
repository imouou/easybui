loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            // html:
            // <div id="uiTab" class="bui-tab"></div>
            var uiTab = bui.tab({
                id: "#uiTab",
                position: "bottom",
                width: "100%", // 1.9.0 新增
                height: "100%",
                // relative: true,
                iconPosition: "top",
                data: [{
                    id: "uiTab0",
                    icon: "icon-home",
                    title: "首页",
                    name: "pages/ui_controls/bui.tab_dynamic_page1",
                    param: {
                        classify: "news"
                    }
                }, {
                    id: "uiTab1",
                    icon: "icon-edit",
                    title: "订单",
                    name: "pages/ui_controls/bui.tab_dynamic_page2",
                    param: {
                        classify: "photo"
                    },
                }, {
                    id: "uiTab2",
                    icon: "icon-chat",
                    title: "消息",
                    name: "pages/ui_controls/bui.tab_dynamic_page1",
                    param: {
                        classify: "photo"
                    },
                }, {
                    id: "uiTab3",
                    icon: "icon-setting",
                    title: "我的",
                    name: "pages/ui_controls/bui.tab_dynamic_page2",
                    param: {
                        classify: "photo"
                    },
                }]
            })
        }
    }

    pageview.init();

})
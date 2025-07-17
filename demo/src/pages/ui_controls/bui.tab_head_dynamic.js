loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            // html:
            // <div id="uiTabHead" class="bui-tab"></div>
            var uiTabHead = bui.tab({
                id: "#uiTabHead",
                position: "top",
                iconPosition: "left",
                width: "100%", // 1.9.0 新增
                data: [{
                    id: "uiTabHead0",
                    icon: "icon-menu",
                    title: "课程",
                    name: "pages/ui_controls/bui.tab_dynamic_page1",
                    param: {
                        classify: "news"
                    }
                }, {
                    id: "uiTabHead1",
                    icon: "icon-menu",
                    title: "观点",
                    name: "pages/ui_controls/bui.tab_dynamic_page2",
                    param: {
                        classify: "photo"
                    },
                }, {
                    id: "uiTabHead2",
                    icon: "icon-menu",
                    title: "专访",
                    name: "pages/ui_controls/bui.tab_dynamic_page1",
                    param: {
                        classify: "photo"
                    },
                }, {
                    id: "uiTabHead3",
                    icon: "icon-menu",
                    title: "公开课",
                    name: "pages/ui_controls/bui.tab_dynamic_page2",
                    param: {
                        classify: "photo"
                    },
                }]
            })

            uiTabHead.addBadge(1, 5)
            uiTabHead.addBadge(1, 3)
            // uiTabHead.removeBadge()

        }
    }
    pageview.init();
    return pageview;
})
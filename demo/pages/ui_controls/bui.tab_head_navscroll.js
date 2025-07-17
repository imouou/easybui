loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            // html:
            // <div id="uiTabHead" class="bui-tab"></div>
            var uiTabHead = bui.tab({
                id: "#uiTabHead",
                position: "top",
                iconPosition: "left",
                navscroll: true,
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
                }, {
                    id: "uiTabHead4",
                    icon: "icon-menu",
                    title: "专访",
                    name: "pages/ui_controls/bui.tab_dynamic_page1",
                    param: {
                        classify: "photo"
                    },
                }, {
                    id: "uiTabHead5",
                    icon: "icon-menu",
                    title: "公开课",
                    name: "pages/ui_controls/bui.tab_dynamic_page2",
                    param: {
                        classify: "photo"
                    },
                }]
            })

            // 如果需要点击的时候改变
            uiTabHead.on('to', function(index) {
                let $item = bui.$("#uiTabHead .bui-nav li").eq(index);
                let scrollLeft = $item[0].offsetLeft

                bui.$("#uiTabHead .bui-navbar")[0].scrollLeft = scrollLeft
            })

        }
    }
    pageview.init();
    return pageview;
})
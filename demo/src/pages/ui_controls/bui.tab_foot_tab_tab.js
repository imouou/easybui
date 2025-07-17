loader.define(function(require, exports, module) {

    var uiTab = bui.tab({
        id: "#tabHead",
        data: [{
            id: "tabHead0",
            title: "指派型任务",
            name: "pages/ui_controls/bui.tab_foot_tab_tab_tab",
            param: {
                classify: "news"
            }
        }, {
            id: "tabHead1",
            title: "月度任务",
            name: "pages/components/list/index",
            param: {
                classify: "order"
            },
        }, {
            id: "tabHead2",
            title: "季度任务",
            name: "pages/components/list/index",
            param: {
                classify: "message"
            },
        }, {
            id: "tabHead3",
            title: "年度任务",
            name: "pages/components/list/index",
            param: {
                classify: "my"
            },
        }]
    })


})
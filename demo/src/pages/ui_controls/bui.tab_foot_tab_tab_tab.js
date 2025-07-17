loader.define(function(require, exports, module) {

    var uiTab = bui.tab({
        id: "#tabMiddle",
        data: [{
            id: "tabMiddle0-0",
            title: "消息类",
            name: "pages/components/list/index",
            param: {
                classify: "news"
            }
        }, {
            id: "tabMiddle0-1",
            title: "指标类",
            name: "pages/components/list/index",
            param: {
                classify: "order"
            },
        }, {
            id: "tabMiddle0-2",
            title: "任务类",
            name: "pages/components/list/index",
            param: {
                classify: "message"
            },
        }]
    })


})
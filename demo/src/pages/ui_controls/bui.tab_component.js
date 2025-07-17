loader.define(function(require, exports, module) {

    // html:
    // <div id="uiTabHead" class="bui-tab"></div>
    var uiTabHead = bui.tab({
        id: "#uiTabHead",
        position: "top",
        iconPosition: "left",
        // animate: false,
        data: [{
            id: "uiTabHead0",
            icon: "",
            title: "新闻",
            name: "pages/components/list/index",
            param: {
                classify: "news"
            }
        }, {
            id: "uiTabHead1",
            icon: "",
            title: "图片",
            name: "pages/components/list/index",
            param: {
                classify: "photo"
            },
        }, {
            id: "uiTabHead2",
            icon: "",
            title: "视频",
            name: "pages/components/list/index",
            param: {
                classify: "photo"
            },
        }, {
            id: "uiTabHead3",
            icon: "",
            title: "教程",
            name: "pages/components/list/index",
            param: {
                classify: "photo"
            },
        }],
        onTo(e) {

        }
    })
})
loader.define(function(require, exports, module) {

    var uiTab = bui.tab({
        id: "#uiTab",
        // position: "left",
        // iconPosition: "right",
        // sideWidth: 80,
        data: [{
                id: "tab0",
                icon: "icon-home",
                title: "新闻",
                name: "pages/components/list/index",
                param: {
                    classify: "news"
                }
            }, {
                id: "tab1",
                icon: "icon-home",
                // image: "images/applogo.png",
                title: "图片",
                name: "pages/components/list/index",
                param: {
                    classify: "photo"
                },
                everytime: true
            },
            {
                id: "tab2",
                icon: "icon-home",
                title: "视频",
                name: "pages/components/list/index",
                param: {
                    classify: "video"
                }
            }, {
                id: "tab3",
                icon: "icon-home",
                title: "课程",
                name: "pages/components/list/index",
                param: {
                    classify: "class"
                }
            }
        ]
    })


})
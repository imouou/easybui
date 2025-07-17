/**
 * 导航TAB模板
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module, global) {

    // html:
    // <div id="uiTab" class="bui-tab"></div>
    var uiTab = bui.tab({
        id: "#tabDynamic",
        position: "bottom",
        iconPosition: "top",
        // animate: false,
        width: "100%",
        // index: 1,
        data: [{
            id: "tabDynamic0",
            icon: "&#xe617;",
            title: "组件",
            name: "pages/main/controls",
            param: {},
        }, {
            id: "tabDynamic1",
            icon: "&#xe665;",
            title: "模板",
            name: "pages/main/frame",
            param: {}
        }, {
            id: "tabDynamic2",
            icon: "icon-share",
            title: "数据驱动",
            name: "pages/store/index",
            param: {},
        }, {
            id: "tabDynamic3",
            icon: "&#xe62f;",
            title: "更多",
            name: "pages/main/method",
            param: {},
        }]
    })

    return uiTab;
})
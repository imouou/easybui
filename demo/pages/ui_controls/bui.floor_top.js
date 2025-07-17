/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {
        // 焦点图 js 初始化:
        var uiSlide = bui.slide({
            id: "#uiSlide",
            height: 380,
            autopage: true,
            loop: true,
            data: [{
                image: "images/banner01.png",
                url: "pages/ui_controls/bui.slide_title.html",
            }, {
                image: "images/banner02.png",
                url: "pages/ui_controls/bui.slide_title.html",
            }]
        })

        /* toggle动画示例 */
        var uiToggleNav = bui.toggle({
            id: "#floorNav",
            effect: "fadeIn"
        });

        // 初始化
        var uiFloor = bui.floor({
            id: "#floor",
            menu: ".bui-nav", // id两个单词必须驼峰氏写法,不能中横杠
            floorItem: ".bui-floor-item", // 默认,可不填
            onScroll(e) {
                let scrollTop = bui.$("#uiSlide").height();
                let isShow = uiToggleNav.isShow();
                if (e.target.scrollTop > scrollTop) {
                    !isShow && uiToggleNav.show();
                    bui.$("#floorNav2").hide();
                } else {
                    isShow && uiToggleNav.hide("none");
                    isShow && bui.$("#floorNav2").show();
                }
            }
        })

    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
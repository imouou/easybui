
// 路由挂载
window.router = bui.router();

bui.ready(function () {

    // 初始化路由
    router.init({
        id: "#bui-router",
        progress: true,
        width:"100%",
        height:"100%",
        firstAnimate: true,
        backEffect: bui.platform.isIos() ? "none" : "push",
    })

    // 绑定事件
    bind();
})

/**
 * [bind 绑定页面事件]
 * @return {[type]} [description]
 */
function bind() {
    // 绑定应用的所有按钮有href跳转, 增加多个按钮监听则在hangle加逗号分开.
    bui.btn({
        id: "#bui-router",
        handle: ".bui-btn"
    }).load();

    // 统一绑定应用所有的后退按钮
    $("#bui-router").on("click", ".btn-back", function (e) {
        // 支持后退多层,支持回调
        bui.back();
    })

    // demo生成源码
    router.on("complete", function (e) {
        var historyLength = router.history.get().length;
        // 针对微信ios跳转以后,底部增加了原生导航,导致高度不对的处理,只在跳转到第2个页面的时候重新计算
        if (bui.platform.isIos() && bui.platform.isWeiXin() && historyLength > 1 && historyLength < 3) {
            // 让控件计算的时候拿新的高度
            window.viewport = bui.viewport();
            // 重新计算路由
            router.resize();
            // 重新计算页面
            bui.init()
        }
        $("#" + e.target.id).find(".bui-page .bui-bar-right").append('<a class="bui-btn preview-source">源码</a>')
    })


    $("#bui-router").on("click", ".preview-source", function (e) {
        var hash = window.location.hash,
            rule = /^#.+\?/ig,
            wenhaoIndex = hash.indexOf("?"),
            url = wenhaoIndex > -1 ? hash.substring(1, wenhaoIndex) : hash.substr(1);
        window.open('https://www.easybui.com/demo/source.html?url=src/' + url + '&code=html,js,result')
    })

}
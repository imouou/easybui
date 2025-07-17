// 默认已经定义了main模块
loader.define(function(requires, exports, module, global) {
    // 1.7.x
    // 合并接收默认参数
    let props = $.extend(true, {}, module.props);

    console.log(props, "1.7.x")

    // 1.6.x:
    var props2 = bui.history.getParams();;
    console.log(props2, "1.6.x")

    // 1.5.x
    var getParams = bui.getPageParams();
    getParams.done(function(res) {
        console.log(res, "1.5.x")
    })
})
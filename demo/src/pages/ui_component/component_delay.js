loader.define(function(require, exports, module, global) {
    var pageview = {
        init: function() {
            // 延迟加载有delay属性的列表,跳到tab才加载
            loader.delay({
                id: "#complist",
                param: {
                    // url:""
                }
            })
        }
    };

    pageview.init();

    return pageview;
})
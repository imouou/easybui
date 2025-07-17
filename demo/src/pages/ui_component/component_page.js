loader.define(function(require, exports, module, global) {

    var pageList = null;

    var pageview = {
        init: function() {
            this.bind();
        },
        bind() {
            bui.$("#btnPage").click(function(e) {
                if (pageList) {
                    pageList.open();
                    return;
                }
                // 延迟加载有delay属性的列表,跳到tab才加载
                pageList = bui.page({
                    url: "pages/components/list/index.html",
                    param: {
                        // url:""
                    },
                    // position: "bottom",
                    effect: "fadeInUp",
                    close: true,
                    // 参数去掉可以全屏
                    style: {
                        top: ".9rem"
                    }
                })
            })
        }
    };

    pageview.init();

    return pageview;
})
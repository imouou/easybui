loader.define(function(require, exports, module, global) {
    // 同步加载示例

    var compSearchbar = null;
    var compList = null;
    var pageview = {
        init: async function() {
            // 延迟加载有delay属性的列表,跳到tab才加载
            compList = await loader.syncLoad({
                id: "#complist",
                url: "pages/components/list/index.html",
                param: {
                    // url:""
                }
            })
            // 延迟加载有delay属性的列表,跳到tab才加载
            compSearchbar = await loader.syncLoad({
                id: "#compsearchbar",
                url: "pages/components/searchbar/index.html",
                param: {
                    placeholder: "请输入搜索词",
                    change: function(val) {
                        // 输入的时候，修改列表的参数

                        compList && compList.replace({
                            data: {
                                keyword: val
                            }
                        });
                    }
                }
            })

        }
    };

    pageview.init();

    return pageview;
})
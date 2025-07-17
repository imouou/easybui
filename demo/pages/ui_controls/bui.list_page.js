loader.define(function(require, exports, module, global) {

    // 合并接收默认参数
    let props = $.extend(true, {
        page: 1,
        pageSize: 5
    }, module.props);


    window.uiList = bui.list({
        id: `#${module.id} #scrollList`,
        url: "json/shop.json",
        pageSize: props.pageSize, // 当pageSize 小于返回的数据大小的时候,则认为是最后一页,接口返回的数据最好能返回空数组,而不是null
        page: props.page,
        data: {},
        //如果分页的字段名不一样,通过field重新定义
        field: {
            page: "page",
            size: "pageSize",
            data: "data"
        },
        commandRefresh: "prepend",
        template: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li class="bui-btn bui-box" href="pages/ui/article.html?id=${index}&title=${el.name}">
                    <div class="bui-thumbnail" ><img src="${el.image}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.name}</h3>
                        <p class="item-text">${el.address}</p>
                        <p class="item-text">${el.distance}公里</p>
                    </div>
                    <span class="price"><i>￥</i>${el.price}</span>
                </li>`
            });

            return html;
        },
        onBeforeRefresh: function() {
            console.log("brefore refresh")

            // this.modify({ "page": parseInt(props.page) - 1 });
        },
        onBeforeLoad: function() {
            console.log("brefore load")
        },
        onRefresh: function() {
            // 刷新以后执行
            console.log("refreshed")
        },
        onLoad: function() {
            // 刷新以后执行
            console.log("loaded")
        }
    })

    module.$("header").click(function() {
        console.log(112)
        // 修改数据
        uiList.replace({
            page: 1,
            "data": {
                test: "111"
            }
        })
    })

    return uiList;
})
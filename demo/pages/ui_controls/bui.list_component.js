loader.define(function(require, exports, module) {

    var uiList = bui.list({
        id: "#scrollList",
        url: "json/shop.json",
        pageSize: 6, // 当pageSize 小于返回的数据大小的时候,则认为是最后一页,接口返回的数据最好能返回空数组,而不是null
        data: {},
        //如果分页的字段名不一样,通过field重新定义
        field: {
            page: "page",
            size: "pageSize",
            data: "data"
        },
        callback: function(e) {
            // e.target 为你当前点击的元素
            // e.currentTarget 为你当前点击的handle 整行
        },
        template: function(data) {
            var html = `<component id="delay" name="pages/components/searchbar/index" delay="true"></component>`;
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
        onRefresh: function() {
            // 刷新以后执行
            console.log("refreshed")
        },
        onLoad: function() {
            // 刷新以后执行
            console.log("loaded")

            loader.delay({
                id: "#delay"
            })
        }
    })

    router.$("header").click(function() {
        // 清空
        uiList.empty();
        // 修改数据
        uiList.init({
            page: 1,
            "data": {
                test: "111"
            }
        })
    })

    return uiList;
})
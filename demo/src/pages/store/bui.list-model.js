loader.define(function(require, exports, module, global) {

    var uiList = null;

    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            lists: [], // 默认是数组时,只能通过 bui.array 之类的操作触发, 如果是Null,则可以通过 等于赋值的操作
            selectVals: []
        },
        log: true,
        methods: {
            selectAll() {
                let vals = uiList.getData();

                // 全选
                this.selectVals = vals.map(el => {
                    return el.gid
                })

                console.log(this.selectVals)

            }
        },
        templates: {
            tplList: function(data) {
                var html = "";
                if (data && data.length) {
                    data.forEach(function(el, index) {
                        let gid = bui.guid();
                        el.gid = gid;

                        html += `<li class="bui-btn bui-box">
                            <div class="bui-thumbnail" ><img src="${el.image}" alt=""></div>

                            <div class="span1">
                                <h3 class="item-title">${el.name}</h3>
                                <p class="item-text">${el.address}</p>
                                <p class="item-text">${el.distance}公里</p>
                                <label><input type="checkbox" name="city" value="${gid}" b-model="page.selectVals">${el.name}</label>
                            </div>
                            <span class="price"><i>￥</i>${el.price}</span>
                        </li>`
                    })
                }

                return html;
            }
        },
        mounted: function(argument) {
            var _self = this;

            uiList = bui.list({
                id: "#listStore",
                url: "http://www.easybui.com/demo/json/shop.json",
                page: 1,
                pageSize: 6,
                height: 0,
                //如果分页的字段名不一样,通过field重新定义
                field: {
                    page: "page",
                    size: "pageSize",
                    data: "data"
                },
                template: this.tplList,
                onRefresh: function(scroll, datas) {
                    // 合并新的数据
                },
                onLoad: function(scroll, datas) {

                    // 模板上异步的，需要手动建立关联
                    _self.compile("#listStore")
                }
            });

        }
    })

})
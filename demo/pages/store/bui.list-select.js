loader.define(function(require, exports, module) {

    var uiList = null;
    var uiSelect = null;
    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            selectVals: []
        },
        methods: {
            selectAll() {
                uiSelect.selectAll();

                this.selectVals = uiSelect.values();
            },
            reset() {
                uiSelect.reset();
            },
            selectInit() {
                var _bs = this;
                // 选择列表 js 初始化:
                var select = bui.select({
                    id: "#listSelect",
                    title: "请选择区域",
                    handle: ".bui-btn",
                    popup: false,
                    dynamic: true,
                    type: "checkbox",
                    onChange(e) {
                        // console.log(this.values())

                        _bs.selectVals = this.values();
                    },
                    buttons: [{
                        name: "重置",
                        className: ""
                    }, {
                        name: "确定",
                        className: "primary-reverse"
                    }],
                })

                return select;
            },
            listInit() {
                var list = bui.list({
                    id: "#listStore",
                    url: "http://www.easybui.com/demo/json/shop.json",
                    page: 1,
                    pageSize: 5,
                    height: 0,
                    //如果分页的字段名不一样,通过field重新定义
                    field: {
                        page: "page",
                        size: "pageSize",
                        data: "data"
                    },
                    template: this.tplList,
                    onRefresh: function(scroll, datas) {

                    },
                    onLoad: function(scroll, datas) {

                    }
                });

                return list;

            }
        },
        templates: {
            tplList: function(data) {
                var html = "";
                if (data && data.length) {
                    data.forEach(function(el, index) {
                        var uid = bui.guid();

                        html += `<li class="bui-btn bui-box" >
                            <input type="checkbox" class="bui-choose" name="city" value="${uid}">

                            <div class="bui-thumbnail" ><img src="${el.image}" alt=""></div>

                            <div class="span1">
                                <h3 class="item-title">${el.name}</h3>
                                <p class="item-text">${el.address}</p>
                                <p class="item-text">${el.distance}公里</p>

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

            uiList = this.listInit();

            uiSelect = this.selectInit();
        }
    })

})
loader.define(function(require, exports, module, global) {

    var uiList = null;
    var uiSearch = null;
    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            filter: {
                type: "社会招聘",
                location: "北京",
                keyword: ""
            },
        },
        methods: {
            listInit() {
                var _bs = this;
                var ui = bui.list({
                    id: "#scrollSearch",
                    url: `${module.path}bui.filter.json`,
                    field: {
                        data: "data"
                    },
                    data: _bs.$data.filter,
                    page: 1,
                    pageSize: 5,
                    template: function(data) {
                        var html = "";
                        data.forEach(function(el, index) {

                            // 处理角标状态
                            var sub = '',
                                subClass = '';
                            switch (el.status) {
                                case 1:
                                    sub = '新品';
                                    subClass = 'bui-sub';
                                    break;
                                case 2:
                                    sub = '热门';
                                    subClass = 'bui-sub danger';
                                    break;
                                default:
                                    sub = '';
                                    subClass = '';
                                    break;
                            }

                            html += `<li class="bui-btn bui-box">
                                    <div class="bui-thumbnail ${subClass}" data-sub="${sub}"><img src="${el.image}" alt=""></div>
                                    <div class="span1">
                                        <h3 class="item-title">${el.name}</h3>
                                        <p class="item-text">${el.address}</p>
                                        <p class="item-text">${el.distance}公里</p>
                                    </div>
                                    <span class="price"><i>￥</i>${el.price}</span>
                                </li>`
                        });

                        return html;
                    }
                });

                return ui;

            },
            searchInit() {
                var _bs = this;
                // var n = 0;
                //搜索条的初始化
                var ui = bui.searchbar({
                    id: "#searchbar",
                    onInput: function(e, keyword) {
                        //实时搜索
                        // console.log(++n)
                    },
                    onRemove: function(e, keyword) {
                        //删除关键词需要做什么其它处理
                        // console.log(keyword);

                        this.filter = {
                            type: "社会招聘",
                            location: "北京",
                            keyword: ""
                        }
                    },
                    callback: function(e, keyword) {

                        if (uiList) {

                            // 重新初始化数据
                            uiList.replace({
                                page: 1,
                                data: _bs.$data.filter
                            });

                        }
                    }

                });

                return ui;
            },
            filterInit() {

                var _bs = this;
                var uiDropdown1 = bui.dropdown({
                    id: "#filter1",
                    data: [{
                        name: "社会招聘",
                        value: "社会招聘"
                    }, {
                        name: "校招",
                        value: "校招"
                    }],
                    value: _bs.filter.type,
                    //设置relative为false,二级菜单继承父层宽度
                    relative: false,
                    onChange: function(e) {
                        _bs.filter.type = this.value();

                        if (uiList) {

                            // 重新初始化数据
                            uiList.replace({
                                page: 1,
                                data: _bs.$data.filter
                            });

                        }
                    }
                });
                var uiDropdown2 = bui.dropdown({
                    id: "#filter2",
                    data: [{
                        name: "北京",
                        value: "北京"
                    }, {
                        name: "广州",
                        value: "广州"
                    }],
                    //设置relative为false,二级菜单继承父层宽度
                    relative: false,
                    value: _bs.filter.location,
                    onChange: function(e) {


                        _bs.filter.location = this.value();


                        if (uiList) {

                            // 重新初始化数据
                            uiList.replace({
                                page: 1,
                                data: _bs.$data.filter
                            });

                        }

                    }
                });
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行
            uiList = this.listInit();
            // 初始化搜索
            uiSearch = this.searchInit();
            // 初始化过滤
            this.filterInit();
        }
    })

})
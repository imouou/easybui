loader.define(function(requires, exports, module, global) {

    // 合并接收默认参数
    let props = $.extend(true, {

    }, module.props);
    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            shoppingcart: [],
        },
        methods: {
            onChange(e) {
                let that = this;
                let val = e.target.value;
                let price = e.target.dataset.price;
                let id = e.target.id;

                let item = {
                    id: id,
                    price: price,
                    num: val
                }

                // // 获取数据
                let items = bui.array.get(that.$data.shoppingcart, item.id, "id");

                // 判断购物车是否有相同id数据，有则修改，没有则增加
                if (items) {
                    items.num = val;
                } else {
                    that.shoppingcart.push(item);
                }
                // 最终取的数据
                console.log(that.$data.shoppingcart)
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行
            let that = this;

            loader.load({
                id: "#categoryComp",
                url: "pages/components/category/index.html",
                param: {
                    // 传给组件的一级分类数据
                    data: [{
                        id: "category0",
                        title: "🔥推荐菜品",
                        name: "pages/components/category/list",
                        param: {
                            onChange: that.onChange
                        }
                    }, {
                        id: "category1",
                        title: "炒菜",
                        name: "pages/components/category/list",
                        param: {
                            onChange: that.onChange
                        },
                    }, {
                        id: "category2",
                        title: "汤类",
                        name: "pages/components/category/list",
                        param: {
                            onChange: that.onChange
                        },
                    }, {
                        id: "category3",
                        title: "小吃",
                        name: "pages/components/category/list",
                        param: {
                            onChange: that.onChange
                        },
                    }, {
                        id: "category4",
                        title: "饮料",
                        name: "pages/components/category/list",
                        param: {
                            onChange: that.onChange
                        },
                    }, {
                        id: "category5",
                        title: "配料",
                        name: "pages/components/category/list",
                        param: {
                            onChange: that.onChange
                        },
                    }], // 替换一级分类数据

                }
            })
        }
    })
})
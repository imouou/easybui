loader.define(function(requires, exports, module, global) {

    // 合并接收默认参数
    let props = $.extend(true, {}, module.props);

    // 缓存mid
    let mid = module.id;

    // 获取父级tab，
    let catetab = bui.cmd("categorytab");
    // 获取父级tab 索引
    let tabIndex = catetab.index();

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "categorylist",
        data: {
            list: [],
        },
        methods: {
            floorInit() {

                var uiFloor = bui.floor({
                    id: `#${mid} .bui-floor`,
                    menu: `#${mid} .bui-nav`,
                    floorItem: ".bui-floor-item",
                    area: 0.3
                })

                uiFloor.off("scrollto").on("scrollto", function(e) {

                    let $navabr = $(`#${mid} .bui-navbar`);
                    if (e.index > 2) {
                        let offsetLeft = $navabr.find(".active")[0]?.offsetLeft || $navabr.find(".bui-btn:last-child")[0]?.offsetLeft;
                        $navabr[0].scrollLeft = offsetLeft;

                    }
                    if (e.index <= 1) {
                        $navabr[0].scrollLeft = 0;
                    }

                    if (e.target.scrollTop == 0) {

                        $navabr.find(".bui-btn").removeClass("active");
                        $navabr.find(".bui-btn").eq(0).addClass("active");
                    }

                })

                // 滑动到最底部的时候，释放判断是否在底部，是才进行下一个跳转
                $(`#${mid} .bui-floor`).on("touchend", function(e) {
                    let target = e.currentTarget;
                    // 到底部跳转下一个分类
                    if ((target.scrollTop + target.clientHeight) >= target.scrollHeight - 1) {
                        // 跳转不要动画
                        bui.cmd("categorytab:to", tabIndex + 1, "none");
                    }
                })
            },
            numberInit() {

                // 数字条 js 初始化:
                var uiNumber = bui.number({
                    id: `#${module.id} .bui-number`,
                    min: 0,
                    value: 0,
                    render: false,
                    onChange(e) {
                        // 商品信息放在 input 属性里，可以通过这种方式，触发外部onChange 
                        let $input = $(e.target);
                        let val = $input.val();
                        let $numberbar = $input.parent();
                        // 显示隐藏右边的按钮
                        if (val == 0) {
                            $numberbar.addClass("bui-number-onlyplus");
                        } else {
                            $numberbar.removeClass("bui-number-onlyplus");
                        }
                        // 改变的时候触发
                        props.onChange && props.onChange(e);
                    }
                })

                return uiNumber;
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行
            this.floorInit();

            this.numberInit();

        }
    })

})
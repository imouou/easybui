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


            },
            floorTouchInit() {
                // 绑定拖拽类的
                var $floor = $(`#${mid} .bui-floor`);
                var $floorHead = $(`#${mid} .bui-floor-head`);
                var $floorFoot = $(`#${mid} .bui-floor-foot`);

                var uiTouch = bui.touch({
                    id: `#${mid} .bui-floor-main`,
                    dragable: true,
                    dragleft: false,
                    dragright: false,
                    direction: "y",
                    moveType: "transform",
                    onDragmove: function(e, touch) {

                        if (touch.direction == "swipedown") {

                            $floorHead.css({
                                "transition": "none",
                                "transform": `translateY(${touch.distanceY}px)`
                            })
                        } else if (touch.direction == "swipeup") {

                            $floorFoot.css({
                                "transition": "none",
                                "transform": `translateY(${touch.distanceY}px)`
                            })
                        }

                    },
                    onDragend: function(e, touch) {
                        let target = $floor[0];
                        let isTop = target.scrollTop == 0;
                        let isBottom = (target.scrollTop + target.clientHeight) >= target.scrollHeight - 1;
                        // 跳转下一大类
                        if (touch.direction === "swipeup" && Math.abs(touch.distanceY) > 50 && isBottom) {
                            bui.cmd("categorytab:to", tabIndex + 1, "none");
                        }
                        // 跳转上一大类
                        if (touch.direction === "swipedown" && Math.abs(touch.distanceY) > 50 && isTop) {
                            bui.cmd("categorytab:to", tabIndex - 1, "none");
                        }
                        // 返回原位
                        $floorHead.css({
                            "transition": "transform .3s",
                            "transform": `translateY(0)`
                        })
                        $floorFoot.css({
                            "transition": "transform .3s",
                            "transform": `translateY(0)`
                        })
                        // 移动后触发
                        this.reset();
                    }
                })

            },
            numberInit() {

                // 数字条 js 初始化:
                var uiNumber = bui.number({
                    id: `#${module.id} .bui-number`,
                    uid: "hotcate", // 以一级分类作为id，外部购物车增减才可以拿到这个进行修改，一个分类下只有一个number组件。
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

                // 自定义一个设置方法用于双向修改
                // 例如 bui.cmd("hotcate:setValues",[{id:"cate1goods1",value:"2"}])
                uiNumber.setValues = function(opt) {

                    if (typeof opt === "undefined") {

                        return this.values();
                    }

                    let val = opt && bui.typeof(opt) === "array" ? opt : [opt];

                    let $id = $(`#${module.id} .bui-number`);

                    let ids = Array.prototype.slice.call($id);

                    val.forEach((itemval, index) => {

                        for (let i = 0; i < ids.length; i++) {
                            let item = ids[i];

                            var name = item?.id || item.getAttribute("name") || "";
                            var $numInput = item.querySelector("input");

                            if (name == itemval?.id) {

                                // 用于渲染的时候赋值
                                $numInput.value = itemval["value"];
                                $numInput.min = itemval["min"] || -1;
                                $numInput.max = itemval["max"] || 1000;
                                $numInput.step = itemval["step"] || 1;


                                // 改变的时候触发
                                this.config.onChange && this.config.onChange.call(this, {
                                    target: $numInput,
                                    value: itemval["value"]
                                });

                                break;
                            }
                        }

                    })

                    return this;
                }

                return uiNumber;
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行
            this.floorInit();
            this.floorTouchInit();

            this.numberInit();

        }
    })

})
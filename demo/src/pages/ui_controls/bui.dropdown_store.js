loader.define(function(require, exports, module) {


    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            dropdown: "广东",
            menuData: ["全部", "兑换券", "代金券"]
        },
        methods: {
            addItem(index) {
                this.menuData.push("新增菜单" + index);
            }
        },
        templates: {
            tplMenu(data) {
                let html = ""
                data.forEach((item) => {
                    html += `<li class="bui-btn" value="${item}">${item}</li>`
                })

                return html;
            }
        },
        mounted: function() {
            // 数据解析后执行

            //静态渲染, 选中激活在列表的active样式
            var uiDoropdown2 = bui.dropdown({
                id: "#uiDoropdownClass",
                //设置relative为false,二级菜单继承父层宽度
                relative: true,
                value: "",
                callback: function(e) {
                    console.log(this.value());

                }
            })

        }
    })



})
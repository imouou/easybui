loader.define(function(require, exports, module) {
    // 引入第三方模板, 里面部分用到,作为示例,并非所有数据都要引入
    loader.import(["js/plugins/template-web.js"], function() {

        window.bs = bui.store({
            scope: "page", // 用于区分公共数据及当前数据的唯一值
            data: {
                obj: {
                    title: "我的对象的标题",
                    content: "<p>我是内容,支持html</p><p>我是内容,支持html</p>"
                }
            },
            // log: true,
            watch: {
                citys: function(a) {
                    var html = this.tplTable(a, "watch");
                }
            },
            templates: {

                tplObject: function(data) {
                    // console.log(data)
                    var html = `<div id="uiSelect" class="bui-select bui-box">
                    <div class="span1">请选择</div>
                    <i class="icon-listright"></i>
                </div>`;

                    return html;
                },
            },
            methods: {

            },
            mounted: function() {

                // 选择列表 js 初始化:
                var uiSelect = bui.select({
                    trigger: "#uiSelect",
                    title: "请选择区域",
                    type: "checkbox",
                    data: [{
                        "name": "广东",
                        "value": "gd"
                    }],
                    buttons: [{
                        name: "重置",
                        className: ""
                    }, {
                        name: "确定",
                        className: "primary-reverse"
                    }],
                    callback: function(e) {

                        var text = $(e.target).text();
                        if (text == "重置") {
                            uiSelect.selectNone();
                        } else {
                            uiSelect.hide();
                        }
                    }
                })
            }
        })


    });



})
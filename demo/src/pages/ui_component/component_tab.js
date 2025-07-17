loader.define(function(require, exports, module, global) {
    var pageview = {

        init: function() {

            var uiTabList = bui.tab({
                id: "#tabList",
                position: "top",
                iconPosition: "left",
                data: [{
                    id: "uiTabHead0",
                    icon: "",
                    title: "待办",
                    name: "pages/components/list/index",
                    param: {
                        template: this.templateTodo
                    }
                }, {
                    id: "uiTabHead1",
                    icon: "",
                    title: "已办",
                    name: "pages/components/list/index",
                    param: {
                        template: this.templateDone
                    },
                }]
            })
        },
        templateTodo: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li class="bui-btn bui-box">
                    <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.title}</h3>
                        <p class="item-text">${el.desc}</p>
                    </div>
                    <span class="bui-tag ring danger">待处理</span>
                </li>`
            });
            return html;
        },
        templateDone: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li class="bui-btn bui-box">
                    <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.title}</h3>
                        <p class="item-text">${el.desc}</p>
                    </div>
                    <span class="bui-tag ring success">已完成</span>
                </li>`
            });
            return html;
        }
    };

    pageview.init();

    return pageview;
})
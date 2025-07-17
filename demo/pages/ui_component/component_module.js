loader.define(["pages/ui_component/component_module_template"], function(template, require, exports, module, global) {

    // 把复杂业务或者复用模板分出去管理
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
                        template: template.templateTodo
                    }
                }, {
                    id: "uiTabHead1",
                    icon: "",
                    title: "已办",
                    name: "pages/components/list/index",
                    param: {
                        template: template.templateDone
                    },
                }]
            })
        }
    };

    pageview.init();

    return pageview;
})
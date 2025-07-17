// 使用日历组件特别注意，单页开发不能每次调用生成一个日历。
// 通过在全局按需加载日历组件，实现共享， global.openCalendar() 要回显，则传value，value有2种格式，取决于当前日历type是click 还是 select ，还有一个 onSelect 回调
// 具体查看 预订选项卡，里面有几种日历的用法 
loader.define(function(requires, exports, module, global) {

    async function init() {

        // 加载依赖插件
        await loader.syncImport("pages/components/calendar/bui.calendar.css");
        await loader.syncImport("pages/components/calendar/bui.calendar.min.js");

        // 合并接收默认参数 
        let props = $.extend(true, {
            type: "click",
            formateValue: "yyyy-MM-dd",
            popup: false,
            needSelect: false,
            needSelectLess: false,
            value: "",
            selectedText: ["入住", "离开"],
            display: "after"
        }, module.props);

        // module.id 为模块内部的id
        var dialog = bui.history.getPageDialog(module.id);
        var calendar = bui.calendar({
            ...props,
            id: `#${module.id} .calendar`,
            uid: "calendarui",
            onChange: function(e) {
                // var value = this.value();
                props.onChange && props.onChange.call(this, e);

                // 非多选状态则关闭
                this.getType() === "click" && dialog && dialog.close();
            }
        });

        return calendar;
    }

    // 初始化
    var uiCalendar = init();


    return uiCalendar;
})
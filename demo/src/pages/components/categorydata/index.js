loader.define(function(requires, exports, module, global) {

    let propsOnChange = module.props.onChange;
    // 合并接收默认参数
    let props = $.extend(false, {}, {
        data: [{
            id: "category0",
            title: "🔥推荐菜品",
            name: "pages/components/category/list",
            param: {
                onChange: propsOnChange
            }
        }],
        toTop: true, // 每次点击是否返回顶部
        onChange: null
    }, module.props);

    let itemHeight = $(`#${module.id}`).parent().height();

    // html:
    // <div id="uiTabLeft" class="bui-tab"></div>
    var uiTabLeft = bui.tab({
        id: `#${module.id} .bui-tab`,
        uid: "categorytab",
        position: "left",
        iconPosition: "left",
        sideWidth: 90,
        animate: false,
        scroll: false,
        swipe: false,
        relative: true,
        height: itemHeight,
        onTo() {
            // 每跳转一个返回到顶部，重新滚动
            if (props.toTop) {

                let index = this.index();
                let item = props.data[index];
                let $floor = $(`#${item.id} .bui-floor`);
                // 返回顶部
                $floor[0] && ($floor[0].scrollTop = 0);
            }
        },
        data: props.data
    })

    return uiTabLeft;
})
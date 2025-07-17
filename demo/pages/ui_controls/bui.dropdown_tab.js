loader.define(function(require, exports, module) {


    var tabSide = null;

    //下拉菜单在底部相对父层宽度
    var uiDoropdown = bui.dropdown({
        id: "#uiDoropdown",
        autoClose: false,
        target: ".dropdownmenu",
        targetHandle: "li",
        // stopPropagation: true,
        //设置relative为false,二级菜单继承父层宽度
        // relative: false,
        callback: function(e) {
            // 控制多个分类只能选择一个

            $(".bui-dropdown .bui-tab-main .bui-list li").removeClass("active");
            $(e.target).addClass("active");
            uiDoropdown.hide();
        }
    })

    uiDoropdown.on("show", function(argument) {

        if (tabSide) {
            return;
        }
        var tabWidth = $(window).width() - bui.$("#tabSideNav").width();

        //按钮在tab外层,需要传id
        tabSide = bui.tab({
            id: "#tabSide",
            menu: "#tabSideNav",
            // width: tabWidth,
            width: "100%",
            animate: false,
            swipe: false,
            zoom: false,
            height: 200
        })
    })


})
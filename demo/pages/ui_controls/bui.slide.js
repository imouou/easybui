loader.define(function(require, exports, module) {

    // 快速初始化 1.5.2 新增 data参数 动态渲染

    var uiSlide = bui.slide({
        id: "#slide",
        height: 380,
        autopage: true,
        // direction:"y",
        // zoom: false,
        // width: 300,
        // relative: true,
        width: "100%",
        loop: true,
        data: [{
            background: "images/banner01.png",
            url: "pages/ui_controls/bui.slide_title.html",
        }, {
            background: "images/banner02.png",
            url: "pages/ui_controls/bui.slide_title.html",
        }, {
            background: "images/banner03.png",
            url: "pages/ui_controls/bui.slide_title.html",
        }],
        onTo(index) {
            // console.log(index)
            console.log(this.index())
        }
    })

    // 异步请求后, 利用 uiSlide.option "data" 的值
    // 自定义模板可以查看 bui.slide_note.html 的例子

    router.$("#prev").on("click", function() {
        uiSlide.prev();
    })
    router.$("#next").on("click", function() {
        uiSlide.next();
    })
    router.$("#autoplay").on("change", function() {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            uiSlide.start();
        } else {
            uiSlide.stop();
        }
    })
    router.$("#unlock").on("change", function() {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            uiSlide.unlock();
        } else {
            uiSlide.lock();
        }
    })


})
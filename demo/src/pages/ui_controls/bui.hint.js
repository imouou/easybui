loader.define(function(require, exports, module) {

    var uiHint = bui.hint({
        autoTrigger: false,
        appendTo: "#main",
        content: "<i class='icon-infofill'></i>欢迎使用BUI",
        position: "top",
        skin: 'warning',
        showClose: true,
        autoClose: false
    });
    //默认在底部
    $('#btnBottom').on("click", function() {
        bui.hint("欢迎使用BUI");
    })
    //在顶部且手动关闭
    $('#btnTop').on("click", function() {
        uiHint.text("修改了文本").show();

    })
    //在中间,内容自定义
    $('#btnCenter').on("click", function() {
        bui.hint({
            content: "<i class='icon-check'></i><br />欢迎使用BUI",
            position: "center",
            effect: "fadeInDown"
        });
    })

})
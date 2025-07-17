loader.define(function(require, exports, module) {

    // 自定义居中弹出框
    var uiDialog = bui.dialog({
        id: "#dialogCenter",
        height: 300,
        dragable: true,
        // mask: false,
        touch: {
            onDragend() {
                // 移动后还原位置
                this.reset();
            }
        },
        callback: function(e) {
            console.log(e.target)
        }
    });

    router.$('#btnOpen').on("click", function() {
        uiDialog.open();
    })


    // 右边出来对话框
    var uiDialogRight = bui.dialog({
        id: "#dialogRight",
        effect: "fadeInRight",
        position: "right",
        width: 300,
        fullscreen: false,
        dragable: true,
        dragback: true,
        // touch: {
        //     direction: "x",
        //     dragleft: false,
        //     onDragend(e, touch) {
        //         var that = this;
        //         if (touch.direction !== "swiperight") {
        //             return;
        //         }
        //         // 移动后还原位置
        //         uiDialogRight.close(function () {
        //             // 重置避免打开还是拖拽后的值
        //             that.reset();
        //         });
        //     }
        // },
        style: {
            left: "auto"
        },
        buttons: []
    });

    // 自定义确定按钮事件
    router.$("#makeSure").on("click", function() {
        uiDialogRight.close();
    });

    router.$('#btnOpenFilter').on("click", function() {
        uiDialogRight.open();
    })


    // 左边出来对话框
    var uiDialogLeft = bui.dialog({
        id: "#dialogLeft",
        effect: "fadeInLeft",
        position: "left",
        fullscreen: true,
        dragable: true,
        dragback: true,
        // touch: {
        //     direction: "x",
        //     dragright: false,
        //     onDragend(e, touch) {
        //         var that = this;
        //         if (touch.direction !== "swipeleft") {
        //             return;
        //         }
        //         // 移动后还原位置
        //         uiDialogLeft.close(function () {
        //             // 重置避免打开还是拖拽后的值
        //             that.reset();
        //         });
        //     }
        // },
        buttons: []
    });

    router.$('#btnOpenLeft').on("click", function() {
        uiDialogLeft.open();
    })
    router.$("#makeSure2").on("click", function() {
        uiDialogLeft.close();
    });


    // 底部出来对话框
    var uiDialogDown = bui.dialog({
        id: "#dialogDown",
        effect: "fadeInUp",
        position: "bottom",
        width: "100%",
        height: 300,
        fullscreen: false,
        dragable: true,
        dragback: true,
        buttons: []
    });

    router.$('#btnOpenDown').on("click", function() {
        uiDialogDown.open();
    })


    // 自定义
    var uiDialogCustom = bui.dialog({
        id: "#dialogCustom",
        position: "bottom",
        width: "100%",
        height: 300,
        fullscreen: false,
        dragable: true,
        mask: false,
        // 默认展开
        style: {
            transform: "translateY(200px)"
        },
        effect: "none",
        touch: {
            direction: "y",
            // handle: ".bui-dialog-head",
            onBeforeTouchmove(e, touch) {

                var lastxy = this.getxy();

                if (lastxy.y <= 0 && touch.direction === "swipeup") {
                    return false;
                }
            },
            onDragend(e, touch) {
                var that = this;
                var lastxy = this.getxy();

                if (lastxy.y < 0) {
                    this.move({
                        y: 0
                    })
                }

                if (lastxy.y > 200) {
                    this.move({
                        y: 200
                    })
                }

                if (touch.direction === "swipeup" && touch.distanceY < 0) {
                    this.move({
                        y: 0
                    })
                } else if (touch.direction === "swipedown" && touch.distanceY > 0) {
                    this.move({
                        y: 200
                    })
                }
            }
        },
        buttons: []
    });



    router.$('#btnOpenCustom').on("click", function() {
        uiDialogCustom.open();
    })
    // 全屏
    var uiDialogFull = bui.dialog({
        id: "#dialogFull",
        position: "top",
        fullscreen: true,
        useBox: true,
        buttons: []
    });

    router.$('#btnOpenFull').on("click", function() {
        uiDialogFull.open();
    })

})
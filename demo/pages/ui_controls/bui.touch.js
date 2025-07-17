loader.define(function(require, exports, module) {

    var uiDrag = bui.touch({
        id: "#drag",
        // moveType: "transform",
        // scopeEl:"main",
        dragable: true, // true 拖拽事件生效后，swipe事件不生效
        // direction: "x",
        // minX: -10,
        // maxX: 200,
        onLongtap(e) {
            // 长按不会触发其它回调
            bui.hint("longtap")

        },
        // dragup: false,
        // swipeup: true,
        onSwipeup: function(e, touch) {
            bui.hint("swipeup")
        },
        onSwipedown: function(e, touch) {
            bui.hint("swipedown")

        },
        onSwipeleft: function(e, touch) {
            bui.hint("swipeleft")
        },
        onSwiperight: function(e, touch) {
            bui.hint("swiperight")
        },
        onDragstart(e, touch) {
            console.log("dragstart", touch)
        },
        onDragmove(e, touch) {
            // console.log("dragmove",touch)
        },
        onDragend(e, touch) {
            bui.hint("dragend")

            console.log(this.value(), touch)

        },
        onTouchcancel(e, touch) {
            bui.hint("cancel")

        }
    })


})
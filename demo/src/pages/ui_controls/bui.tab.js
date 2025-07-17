loader.define(function(require, exports, module) {

    var uiTab = bui.tab({
        id: "#uiTab",
        width: "100%",
        onTo(index) {
            console.log(index)
        }
    });

})
loader.define(function(require, exports, module) {


    //折叠菜单示例
    var uiAccordion = bui.accordion({
        id: ".bui-page #accordion",
        // stopHandle:"",
        callback: function() {

        }
    })

    // uiAccordion.show()


    uiAccordion.showFirst();
})
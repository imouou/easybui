loader.define(async function(requires, exports, module, global) {

    var comp = null;
    async function init() {

        comp = await loader.syncLoad({
            id: "#child",
            url: "pages/ui_loader/child/child2/index.html",
            param: {}
        })

        return comp;
    }

    comp = await init();

    comp.init3()

    console.log(comp, 11)

    return comp;

})
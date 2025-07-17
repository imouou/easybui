loader.define(async function(requires, exports, module, global) {



    var comp = null;
    async function init() {

        comp = await loader.syncLoad({
            id: "#child2",
            url: "pages/ui_loader/child/child2/child3/index.html",
            param: {}
        })

        return comp;
    }

    comp = await init();

    console.log(comp, 22)

    return comp;

})
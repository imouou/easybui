loader.define(function(require, exports, module) {
    var pageview = {
        init: function() {
            loader.load({
                id: "#searchbar",
                url: "pages/components/searchbar/index.html"
            })

        }
    };

    pageview.init();

    return pageview;
})
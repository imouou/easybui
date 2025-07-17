// 应用的配置
loader.global(function (global) {

    var sitePath = "https://www.easybui.com",
        siteDir = sitePath + "/demo/json/";

    return {
        sitePath,
        siteDir
    }
})
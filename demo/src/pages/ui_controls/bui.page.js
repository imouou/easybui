loader.define(function(require, exports, module) {

    window.listHistoryPage = null;
    var listFulllPage = null;
    let listBottomlist = null;
    let listPage = null;
    let listCenterlist = null;

    let framePage = null;

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            a: 1,
        },
        methods: {
            openFulllist() {
                // 全屏
                if (listFulllPage) {
                    listFulllPage.open();
                    return;
                }
                listFulllPage = bui.page({
                    url: "pages/components/list/index",
                    param: {
                        url: "pages/components/list/index.json", // 空地址会使用组件的默认地址
                    },
                    title: "弹窗列表",
                    close: true
                })
            },
            openHistory() {
                // 全屏
                if (listHistoryPage) {
                    listHistoryPage.open();
                    return;
                }
                listHistoryPage = bui.page({
                    url: "pages/components/list/index",
                    param: {
                        url: "pages/components/list/index.json", // 空地址会使用组件的默认地址
                    },
                    title: "弹窗列表",
                    syncHistory: true,
                    // effect: "fadeInRight",
                    // dragable: true,
                    // dragback: true,
                    close: true
                })
            },
            openFrame() {
                // 加载外部页面
                if (framePage) {
                    framePage.open();
                    return;
                }
                framePage = bui.page({
                    url: "index.html#pages/ui_controls/bui.page-frame.html",
                    uid: "framepage",
                    iframe: true,
                })
            },
            openToplist() {
                // 全屏
                if (listPage) {
                    listPage.open();
                    return;
                }
                listPage = bui.page({
                    url: "pages/components/list/index",
                    param: {
                        // 传参给列表组件
                        url: "pages/components/list/index.json", // 空地址会使用组件的默认地址
                    },
                    title: "弹窗列表",
                    close: true,
                    style: {
                        top: ".9rem"
                    }
                })
            },
            openBottomlist() {
                // 全屏
                if (listBottomlist) {
                    listBottomlist.open();
                    return;
                }
                listBottomlist = bui.page({
                    url: "pages/components/list/index",
                    param: {
                        url: "pages/components/list/index.json", // 空地址会使用组件的默认地址
                    },
                    title: "弹窗列表",
                    close: true,
                    effect: "fadeInUp",
                    mask: true,
                    style: {
                        top: "2rem"
                    }
                })
            },
            openCenterlist() {
                // 全屏
                if (listCenterlist) {
                    listCenterlist.open();
                    return;
                }
                listCenterlist = bui.page({
                    url: "pages/components/list/index",
                    param: {
                        url: "pages/components/list/index.json", // 空地址会使用组件的默认地址
                    },
                    title: "弹窗列表",
                    close: true,
                    // width: 200,
                    fullscreen: false,
                    height: "7rem",
                    effect: "fadeInDown",
                    mask: true,
                    style: {
                        top: "2rem"
                    }
                })
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行
        }
    })


})
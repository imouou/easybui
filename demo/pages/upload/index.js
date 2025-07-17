loader.define(function(requires, exports, module, global) {

    // 合并接收默认参数
    let props = $.extend(true, {}, module.props);

    var uiUpload = bui.upload();

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "upload",
        data: {
            a: 1,
        },
        methods: {},
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 数据解析后执行

            // 拍照上传
            var photos = $("#buiPhoto");

            // 上拉菜单 js 初始化: 
            var uiActionsheet = bui.actionsheet({
                trigger: "#btnUpload",
                buttons: [{
                    name: "拍照上传",
                    value: "camera"
                }, {
                    name: "从相册选取",
                    value: "photo"
                }],
                callback: function(e) {
                    var ui = this;
                    var val = $(e.target).attr("value");
                    switch (val) {
                        case "camera":
                            ui.hide();
                            uiUpload.add({
                                "from": "camera",
                                "onSuccess": function(val, data) {
                                    // 展示本地图片

                                    this.start({
                                        url: "http://10.7.4.188:7001/epalmtop/servlet/UploadServlet",
                                        data: {
                                            JSESSIONID: "86A0D1333A60713E520A2D0161583F00",
                                            appType: ""
                                        }
                                    })
                                    this.toBase64({
                                        onSuccess: function(url) {
                                            photos.prepend(templatePhoto(url))

                                        }
                                    });

                                    // 也可以直接调用start上传图片
                                }
                            })

                            break;
                        case "photo":
                            ui.hide();
                            uiUpload.add({
                                "from": "",
                                "onSuccess": function(val, data) {
                                    // 展示本地图片
                                    this.toBase64({
                                        onSuccess: function(url) {
                                            photos.prepend(templatePhoto(url))
                                        }
                                    });
                                    // 也可以直接调用start上传图片
                                }
                            })

                            break;
                        case "cancel":
                            ui.hide();
                            break;
                    }
                }
            })

            function templatePhoto(url) {
                return `<div class="span1">
                        <div class="bui-upload-thumbnail"><img src="url" alt="" /></div>
                    </div>`
            }

        }
    })
})
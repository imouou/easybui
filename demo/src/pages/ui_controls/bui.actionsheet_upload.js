loader.define(function(require, exports, module) {

    // 示例
    var uiActionsheet = bui.actionsheet({
        trigger: "#btnOpen",
        buttons: [{
            name: "拍照上传",
            value: "camera"
        }, {
            name: "从相册上传",
            value: "photo"
        }],
        callback: function(e) {
            var val = $(e.target).attr("value");

            this.hide();

            if (val == "camera") {
                navigator.camera.getPicture(uploadPhoto,
                    function(message) {}, {
                        //maximumImagesCount: 9,
                        //mediaType: 0,
                        quality: 50, // 相片质量
                        //allowEdit: false,
                        destinationType: navigator.camera.DestinationType.FILE_URI
                    }
                );
            } else if (val === "photo") {
                navigator.camera.getPicture(uploadPhoto,
                    function(message) {}, {
                        //maximumImagesCount: 9,
                        //mediaType: 0,
                        quality: 50, // 相片质量
                        //allowEdit: false,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY //去掉就是直接拍照功能
                    }
                );
            }


        }
    })


    var uploadUrl = "http://"; //

    // 原生上传
    function uploadPhoto(imageURI) {
        app.progress.start("温馨提示", "文件上传中...");
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = imageURI;
        options.mimeType = "image/jpeg";

        var params = {};
        options.params = params;

        var ft = new FileTransfer();

        ft.upload(imageURI, uploadUrl, function(res) {
            console.log("上传成功")

            app.progress.stop();
        }, function(res) {
            console.log("上传失败")

            app.progress.stop();

        }, options);

    }



})
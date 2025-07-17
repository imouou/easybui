loader.define(function(require, exports, module, global) {


    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "page",
        data: {
            photos: []
        },
        methods: {
            webchange(e) {
                console.log(e.target.files[0])
                // 创建一个 FormData 对象
                var formData = new FormData();

                // 添加文件到 FormData 对象中
                formData.append("file", e.target.files[0]);

                // 使用 app.ajax 发送文件上传请求
                $.ajax({
                    url: "https://tcms.bingosoft.net/BingoErp/api/FileService/UploadFile",
                    type: "POST",
                    headers: {
                        Authorization: "Bearer eyJraWQiOiJvbWFiQXYiLCJhbGciOiJSUzI1NiJ9.eyJ0ZW5hbnRfaWQiOiJkZWZhdWx0Iiwic3ViIjoiOTM0ZjNkY2QtMzc5ZC00NzdiLTlhYTAtNzg5OTM3MDdlOTgxIiwiaXNzIjoiaHR0cHM6Ly91YXQuYmluZ29zb2Z0Lm5ldC9pYW1zc28iLCJjbGllbnRfaWQiOiJsaW5rX2NsaWVudCIsIlQiOiJBVCIsImdyYW50X3R5cGUiOiJyZWZyZXNoX3Rva2VuIiwidXNlcl9pZCI6IjkzNGYzZGNkLTM3OWQtNDc3Yi05YWEwLTc4OTkzNzA3ZTk4MSIsIm5hbWUiOiLojqvnu7TlrrYiLCJleHAiOjE3MDYwOTc5NTUsImZhY3RvciI6InB3ZCIsImlhdCI6MTcwNjA2MTk1NSwiZUNvZGUiOiJvbWFiQXYiLCJqdGkiOiI4YjNXaktwQ1lSYnE5M3BhbmpVVXRiIiwidXNlcm5hbWUiOiJtb3dqIn0.N1Iqmfcmo311zLyJlz50xsiirhsb_8dUFOazQPFaHOI2EPOvLURpTquigQoI-4sq_ZV6LtwEdkeV1tMgR_SgdEEixmo-hRPn9UgJxOCKKYbHngBQk7qV0Ltv6yB13OF2BapZE2Wxhc1jBGMu6EByZBwzWixmffbnkvK3p_-t5APG2SDJnFlLJPpC1skEPfxm7tZjkVSflYW5g0cxV1ugdqq4F79XIp8ukQNUxvPQFSi0y12BLUwpLqZzCYWCJYuEdEsEytWes7BJPzyZTPETywgDZFVZ0QZv3HG9ZVaRrqhfqlux5kx9E5AbFSqgk7d9ZqJI39jW9eUcIKiKYiqZRw"
                    },
                    data: formData,
                    processData: false, // 不处理数据
                    contentType: false, // 不设置内容类型
                    success(res) {
                        // 上传成功的处理逻辑
                        bui.alert(res);
                    },
                    error(res) {
                        // 上传失败的处理逻辑
                        bui.alert("error");
                    }
                });
            },
            webchangeother(e) {
                console.log(e.target.files[0])
                // 创建一个 FormData 对象
                var formData = new FormData();

                // 添加文件到 FormData 对象中
                formData.append("type", "file");
                formData.append("action", "upload");
                formData.append("source", e.target.files[0]);

                // 使用 app.ajax 发送文件上传请求
                $.ajax({
                    url: "https://zh-cn.imgbb.com/json",
                    type: "POST",
                    data: formData,
                    processData: false, // 不处理数据
                    contentType: false, // 不设置内容类型
                    success(res) {
                        // 上传成功的处理逻辑
                        bui.alert(res);
                    },
                    error(res) {
                        // 上传失败的处理逻辑
                        bui.alert("error");
                    }
                });
            },
            nativechange(e) {
                // app.ajax 不支持formdata
                console.log(e.target)

                // 创建一个 FormData 对象
                var formData = new FormData();

                // 添加文件到 FormData 对象中
                formData.append("file", e.target.files[0]);

                // 使用 app.ajax 发送文件上传请求
                app.ajax({
                    url: "https://tcms.bingosoft.net/BingoErp/api/FileService/UploadFile",
                    method: "POST",
                    data: formData,
                    processData: false, // 不处理数据
                    contentType: false, // 不设置内容类型
                    success(res) {
                        // 上传成功的处理逻辑
                        bui.alert(res);
                    },
                    error(res) {
                        // 上传失败的处理逻辑
                        bui.alert("error");
                    }
                });
            },
        },
        watch: {},
        computed: {},
        templates: {

        },
        mounted: function() {
            // 数据解析后执行
        }
    })



})
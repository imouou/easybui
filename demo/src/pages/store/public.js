loader.define(function(require, exports, module) {


    // 可以在路由init以后,作为整个应用的联动数据处理
    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        isPublic: false, // 在模块里面默认是false, 在index.js 需要改为true
        // log: true,
        data: {
            message: "Hello bui.js",
            showName: true,
            firstName: "wang",
            lastName: "wei",
            aa: [{
                test: "321"
            }],
            sources: [11, 22],
            attrs: {
                title: "这是动态标题",
            },
            objSource: {
                title: "我的对象的标题",
                datas: {
                    aa: [1312]
                },
                data: [11]
            },
            tabClass: {
                active: true,
                hasActive: true,
            },
            title: "<h1>支持html</h1>",
            styles: {
                color: "red"
            }
        },
        // needStatic:true,
        methods: {
            getMessage: function(a, b, e) {
                console.log(a)
                console.log(b)
                console.log(e)
            }
        },
        watch: {
            message: function(e) {
                console.log(e)
            }
        },
        computed: {
            fullName: function() {
                // 会被触发4次
                // 属性上还要绑定 linked 属性, 这样才能实现联动
                return this.firstName + ' ' + this.lastName;
            }
            // fullName: {
            //     // getter
            //     get: function () {
            //       return this.firstName + ' ' + this.lastName
            //     },
            //     // setter
            //     set: function (newValue) {
            //       var names = newValue.split(' ')
            //       this.firstName = names[0]
            //       this.lastName = names[names.length - 1]
            //     }
            // }
        },
        templates: {
            tplList: function(data, e) {
                // 会被触发2次
                var html = "";
                data.map(function(item, i) {
                    html += `<li b-text="page.attrs.title">${item}</li>`;
                })
                return html;
            },
            tplList2: function(data, e) {

                var html = template("tpl-list", {
                    listData: data
                });

                return html;
            },
            tplObject: function(data, e) {

                // console.log(data)
                var html = `<h1 b-text="page.objSource.title"></h1>`;
                data.data.map(function(item, i) {
                    html += `<li>${item}</li>`;
                })
                return html;
            },
            tplObjectArray: function(data, e) {
                var html = "";
                data.map(function(item, i) {
                    html += `<li>${item}</li>`;
                })
                return html;
            }
        },
        mounted: function(argument) {
            //store.compile(".bui-page")
        }
    })

    // 调用方法,方法可以拿到实例的数据
    // bs.getMessage();

    // 数组的分离订阅
    // bs.on("sources", function(e) {
    // console.log(1321)
    // console.log(e.value, "sources")
    // if (e.action === "push") {
    //     console.log("push")
    //         //router.$(".result").append(e.data.sources.join(","));
    // }
    // })
    // bs.$data.sources.push("#21321");
    // console.log(bs.sources)

    router.$(".btn-reverse").on("click", function(e) {

        var a = store.message.split(' ').reverse().join(' ')
        store.message = a;

    })



})
loader.define(function(require, exports, module) {
    // 引入第三方模板, 里面部分用到,作为示例,并非所有数据都要引入
    loader.import(["js/plugins/template-web.js"], function() {

        window.bs = bui.store({
            scope: "page", // 用于区分公共数据及当前数据的唯一值
            data: {
                test: "我是测试文本",
                list: ["我是列表1", "我是列表2", "我是列表3"],
                active: ["active", "", ""],
                citysCheck: [],
                citys: [],
                // citysCheck: ["广州","深圳"],
                // citys: ["广州","深圳","上海","北京"],
                obj: {
                    title: "我的对象的标题",
                    content: "<p>我是内容,支持html</p><p>我是内容,支持html</p>"
                },
                objList: {
                    title: "我是标题",
                    data: ["我是复杂数据列表1"]
                },
                objList2: [{
                    title: "我是标题",
                    data: ["我是复杂数据列表1"]
                }]
            },
            // log: true,
            watch: {
                citys: function(a) {
                    var html = this.tplTable(a, "watch");
                }
            },
            templates: {
                tplList: function(data, dd) {
                    console.log(dd)
                    var html = "";
                    if (data.length) {
                        data.forEach(function(item, i) {
                            html += `<li id="li${i}" class="bui-btn"><div class="bui-btn test" b-class="page.active.$itemIndex" b-click='page.getClick($itemIndex,$itemText,$itemHtml,$itemId,$item)'>${item}</div>
                            </li>`;
                        })
                    } else {
                        html = `<li class="bui-btn">暂无数据</li>`;
                    }

                    return html;
                },
                tplListCheck: function(data) {
                    var _self = this;
                    var html = "";
                    data.forEach(function(item, i) {
                        var hasCheck = bui.array.compare(item, _self.citysCheck);
                        var checked = hasCheck ? "checked" : "";

                        html += `<li class="bui-btn"><label><input type="checkbox" name="city" value="${item}" b-model="page.citysCheck" ${checked}>${item}</label></li>`;
                    })
                    return html;
                },
                artTplList: function(data) {

                    var html = template("tpl-list", {
                        listData: data
                    });

                    return html;
                },
                tplObject: function(data) {
                    // console.log(data)
                    var html = "";
                    for (var key in data) {
                        // 如果对象需要动态改变, 则使用 b-text="page.obj.${key}" 这样改变会一起联动
                        html += `<div class="bui-btn" >${data[key]}<span b-text="page.obj.title"></span></div>`;
                    }
                    return html;
                },
                tplObjectList: function(data) {
                    console.log(data)
                    var html = "";
                    data.forEach(function(item, i) {
                        html += `<li class="bui-btn">${item}</li>`;
                    })
                    return html;
                },
                tplTable: function(data, dd) {
                    console.log(dd)
                    var html = "";
                    data.forEach(function(item, i) {
                        html += `<tr><td>${item}</td></tr>`;
                    })
                    return html;
                }
            },
            methods: {
                getClick: function(index, text, html, id, item) {

                    console.log(index, text, html, id, item)
                    var activeindex = bui.array.index(this.$data.active, "active");

                    // 由于是数组，这种方式设置无效
                    // this.active[activeindex] = "";
                    // this.active[index] = "active";


                    // 数组操作触发的是 active， 这种设置方式也无效的
                    // this.active.$set(activeindex,"");
                    // this.active.$set(index,"active");

                    // 操作数组的某个值需要使用这种方式
                    this.set(`active.${activeindex}`, "")
                    this.set(`active.${index}`, "active")

                }
            },
            mounted: function() {

                // this.oneTick("citys", function(e) {
                //     console.log("只监听一次,数据更新一次,执行一次")
                // })

                // this.nextTick(function(e) {
                //     console.log(e)
                //     console.log("只监听一次title,数据更新一次,执行一次")
                // })

                // 第二次的回调不会有
                // this.oneTick("citys", function() {
                //     console.log(222)
                // })

                // 模拟数据动态改变
                setTimeout(() => {
                    this.citys.push("广州", "深圳", "上海", "北京");
                    this.citysCheck.push("广州", "深圳")

                    // bui.array.merge(this.citysCheck,["广州","深圳"])
                    // bui.array.merge(this.citys,["广州","深圳","上海","北京"])

                }, 500)


            }
        })


    });



})
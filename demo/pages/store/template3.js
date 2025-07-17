loader.define(function(require, exports, module) {

    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            list: ["我是列表1", "我是列表2", "我是列表3"],
            citys: ["广州"],
            title: "test",
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
            tplTable: function(data, dd, title) {
                console.log(dd)
                console.log(title)
                var html = "";
                data.forEach(function(item, i) {
                    html += `<tr><td>${item}</td></tr>`;
                })
                return html;
            }
        },
        methods: {

        },
        mounted: function() {



        }
    })

})
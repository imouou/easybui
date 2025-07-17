loader.define(function(require, exports, module, global) {

    window.bs = bui.store({
        scope: "page",
        data: {
            list: ["我是列表-0", "我是列表-1", "我是列表-2"],
        },
        templates: {
            test: {
                tplList(data) {
                    var html = "";
                    if (data.length) {
                        data.forEach(function(item, i) {
                            html += `<li id="li${i}" class="bui-btn bui-box">
                                            <b b-text="page.list.$key1"></b>
                                            <div class="span1">${item}</div>
                                            <i class="icon-remove large" b-click="page.remove($itemIndex)"></i>
                                        </li>`;
                        })
                    } else {
                        html = `<li class="bui-btn">暂无数据</li>`;
                    }
                    return html;
                },
            }
        },
        methods: {
            add() {
                let text = `我是新增列表${this.$data.list.length}`;
                this.list.push(text)
            },
            remove(index) {
                console.log(index)
                this.list.splice(index, 1)
            }
        },
        mounted: function() {

        }
    })

    return bs;

})
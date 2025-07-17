loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            users: [{
                name: "bui",
                id: "bui",

            }],
        },
        methods: {
            submitForm: function(e) {
                console.log(this.users)
                // return true 会刷新表单,提交到另外一个页面
                return false;
            },
            add: function() {
                this.users.push({
                    name: "",
                    id: "",
                })
            },
            remove: function(index) {
                console.log(index)
                this.users.splice(index, 1);
            }
        },
        watch: {},
        computed: {},
        templates: {
            tplUser: function(data) {
                var html = ``;
                var that = this;
                data.forEach(function(item, index) {
                    html += `<ul class="bui-list">
                        <li class="bui-btn-title bui-box clearactive">表单<b b-text="page.users.$key1"></b><div class="span1"></div><div class="bui-btn" b-click="page.remove($itemIndex)"><i class="icon-remove"></i></div></li><li class="bui-btn bui-box clearactive">
                            <label class="bui-label">姓名</label>
                            <div class="span1">
                                <div class="bui-value"><input type="text" name="fname" b-model="page.users.$itemIndex.name"/></div>
                            </div>
                        </li>
                        <li class="bui-btn bui-box clearactive">
                            <label class="bui-label">身份证</label>
                            <div class="span1">
                                <div class="bui-value"><input type="text" name="fname" b-model="page.users.$itemIndex.id"/></div>
                            </div>
                        </li>
                    </ul>
                `
                })
                html += ``

                return html;
            },
        },
        mounted: function() {
            // 加载后执行
        }
    })

})
loader.define(function(require, exports, module, global) {


    var bs = bui.store({
        // el: `#${module.id}`, 没有则是默认 el:"".bui-page"
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            todo: [{
                id: 1,
                title: "参加项目会议"
            }, {
                id: 2,
                title: "项目启动会"
            }, {
                id: 3,
                title: "看电影"
            }],
            todoText: "",
            nextTodoId: 4
        },
        methods: {
            addTodo: function(e) {

                if (this.todoText) {
                    this.todo.push({
                        id: this.nextTodoId++,
                        title: this.todoText
                    })
                    this.todoText = "";
                } else {
                    bui.hint("请填写待办事项")
                }

            },
            removeTodo: function(index) {
                // 方法1: 通过索引删除

                // 数组附带的方法，删除索引
                this.todo.splice(index, 1);
                this.todoText = "";
            }
        },
        templates: {
            tplTodo: function(data, e) {
                var _self = this;
                var html = "";

                data.forEach(function(item, i) {
                    // $itemIndex: 当前子级动态索引 li ， $index 为当前索引
                    // $key：0开头； $key1：1开头； $key01：01开头 代表3种不同的索引值
                    html += `<li id="${item.id}" class="bui-btn bui-box">
                                <b b-text="page.todo.$key1"></b>
                                <div class="span1">${item.title}</div>
                                <i b-click="page.removeTodo($itemIndex)" class="icon-remove large"></i>
                            </li>`;
                })
                return html;
            }
        },
        mounted: function() {
            // 加载后执行
        }
    })
})
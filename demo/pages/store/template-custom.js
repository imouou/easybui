loader.define(function(require, exports, module, global) {

    window.bs = bui.store({
        scope: "page",
        data: {
            list: ["我是列表-0", "我是列表-1", "我是列表-2"],
        },
        templates: {
            tplList(data, e) {
                var html = "";

                var $target = $(e.target);

                // 做法1
                $target.empty();

                this.$data.list.forEach((item, i) => {
                    html = `<li id="li${i}" class="bui-btn bui-box">
                                    <div class="span1">${item}</div>
                                    <i class="icon-remove large" b-click="page.remove($itemIndex)"></i>
                                </li>`;
                    $target.append(html);

                })

                // 做法2
                //     if( e.action == "init" || e.action == "sort"){
                //         $target.empty();
                //     }

                //     switch( e.action ){
                //         case "init":
                //         case "sort":
                //         case "push":
                //             data.forEach(function(item, i) {
                //                 html = `<li id="li${i}" class="bui-btn bui-box">
                //                             <div class="span1">${item}</div>
                //                             <i class="icon-remove large" b-click="page.remove($itemIndex)"></i>
                //                         </li>`;
                //                 $target.append(html);
                //             })
                //             break;
                //         case "unshift":
                //             data.forEach(function(item, i) {
                //                 html = `<li id="li${i}" class="bui-btn bui-box">
                //                             <div class="span1">${item}</div>
                //                             <i class="icon-remove large" b-click="page.remove($itemIndex)"></i>
                //                         </li>`;
                //                 $target.prepend(html);
                //             })
                //             break;
                //         case "splice":
                //             let $children = $target.children();
                //             this.$data.list.forEach(function(item, i) {
                //                 if( i == e.param[0] && i < e.param[1] ){
                //                     $children.eq(i).remove();
                //                 }
                //             })


                //             break;
                //     }
            },
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
        watch: {},
        mounted: function() {

        }
    })

    return bs;

})
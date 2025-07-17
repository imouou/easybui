loader.define(function(require, exports, module, global) {
    // 作为依赖管理模板
    var pageview = {

        templateTodo: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li class="bui-btn bui-box">
                    <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.title}</h3>
                        <p class="item-text">${el.desc}</p>
                    </div>
                    <span class="bui-tag ring danger">待处理</span>
                </li>`
            });
            return html;
        },
        templateDone: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li class="bui-btn bui-box">
                    <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.title}</h3>
                        <p class="item-text">${el.desc}</p>
                    </div>
                    <span class="bui-tag ring success">已完成</span>
                </li>`
            });
            return html;
        }
    };

    return pageview;
})
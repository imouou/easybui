loader.define(function(require, exports, module) {


    var pickerInline = bui.pickerdate({
        handle: '#datepicker_input',
        value: '2023/12/01 00:00:00',
        bindValue: true,
        formatValue: 'yyyy-MM',
        popup: true,
        mask: true,
        cols: {
            date: 'none',
            hour: 'none',
            minute: 'none',
            second: 'none',
        },
        callback: function(e) {
            console.log(this.value());
        },
    });
})
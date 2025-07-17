loader.define(function(require, exports, module) {


    var pickerInline = bui.picker({
        container: '#picker-container',
        value: ["03", "04"],
        onChange: function(picker, values, displayValues) {
            // console.log(values, picker.cols[2])
            // 
            // picker.cols[2].setValue("02");
        },
        cols: [{
                values: (function() {
                    var arr = [];
                    for (var i = 1; i <= 5; i++) {
                        arr.push("0" + i);
                    }
                    return arr;
                })(), //["01", "02", "03", "04", "05"],
                displayValues: ["一", "二", "三", "四", "五"],
                onChange(a, value, displayValue) {

                    switch (value) {
                        case "01":
                            pickerInline.cols[2].replaceValues(["01", "02", "03", "04", "05"], ["一", "二", "三", "四", "五"], "01");
                            break;
                        case "02":
                            pickerInline.cols[2].replaceValues(["02", "03", "04", "05"], ["二", "三", "四", "五"], "02");
                            break;
                        case "03":
                            pickerInline.cols[2].replaceValues(["03", "04", "05"], ["三", "四", "五"], "03");
                            break;
                        case "04":
                            pickerInline.cols[2].replaceValues(["04", "05"], ["四", "五"], "04");
                            break;
                        case "05":
                            pickerInline.cols[2].replaceValues(["05"], ["五"], "05");
                            break;
                    }
                }
            },
            {
                divider: true,
                content: ':'
            },
            {
                values: ["01", "02", "03", "04", "05"],
                displayValues: ["一", "二", "三", "四", "五"],
            }
        ]
    });

    // 设置值
    // pickerInline.setValue(["04", "02"])

    // pickerInline.cols[2].replaceValues(["02", "03", "04", "05"],["二", "三", "四", "五"],"04");
    // console.log(pickerInline.value)
})
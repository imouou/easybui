loader.define(function(requires, exports, module, global) {


    // chatgpt 的请求模板
    $.ajax({
        url: 'https://api.openai.com/v1/chat/completions',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-xxxx'
        },
        data: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                    role: 'system',
                    content: 'You are a helpful assistant.'
                },
                {
                    role: 'user',
                    content: 'Who won the world series in 2020?'
                }
            ]
        }),
        success: function(response) {
            console.log(response.choices[0].message.content);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
})
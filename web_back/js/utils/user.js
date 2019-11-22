var baseUrl = 'http://localhost:8000/'
    // 用户登录
var user = {
    login: function(userName, userPassword, callback) {
        // 发送请求
        $.post(APIURLS.user_login, {
            user_name: userName,
            password: userPassword
        }, function(res) {
            callback(res)
        })

    },
    logout: function(callback) {
        // 发送请求
        $.post(APIURLS.user_logout, function(res) {
            callback(res)
        })
    },
    getInfo: function(callback) {
        $.get(APIURLS.user_getInfo, function(res) {
            callback(res)
        })

    }
}
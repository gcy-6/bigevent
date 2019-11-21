var baseUrl = 'http://localhost:8000/'
    // 用户登录
var user = {
    login: function(userName, userPassword, callback) {
        // 发送请求
        $.post(baseUrl + 'admin/login', {
            user_name: userName,
            password: userPassword
        }, function(res) {
            callback(res)
        })

    },
    logout: function(callback) {
        // 发送请求
        $.post(baseUrl + 'admin/logout', function(res) {
            callback(res)
        })
    },
    getInfo: function(callback) {
        $.get(baseUrl + 'admin/getuser', function(res) {
            callback(res)
        })

    }
}
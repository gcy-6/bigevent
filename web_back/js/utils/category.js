// var baseUrl = 'http://localhost:8000/';
var category = {
    show: function(callback) {
        $.get(APIURLS.user_category_show, function(res) {
            callback(res)
        })
    },
    del: function(id, callback) {
        $.post(APIURLS.user_category_del, { id: id }, function(res) {
            callback(res)
        })
    },
    add: function(name, slug, callback) {
        $.post(APIURLS.user_category_add, {
            name: name,
            slug: slug
        }, function(res) {
            callback(res)
        })
    },
    edit: function(id, name, slug, callback) {
        $.post(APIURLS.user_category_edit, {
            id: id,
            name: name,
            slug: slug
        }, function(res) {
            callback(res)
        })
    }
}
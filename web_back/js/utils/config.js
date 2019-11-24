var baseUrl = 'http://localhost:8000/'

var APIURLS = {
    user_login: baseUrl + 'admin/login',
    user_logout: baseUrl + 'admin/logout',
    user_getInfo: baseUrl + 'admin/getuser',
    user_category_show: baseUrl + 'admin/category_search',
    user_category_del: baseUrl + 'admin/category_delete',
    user_category_add: baseUrl + 'admin/category_add',
    user_category_edit: baseUrl + 'admin/category_edit',

    article_show: baseUrl + 'admin/search',

    article_del: baseUrl + 'admin/article_delete',
}
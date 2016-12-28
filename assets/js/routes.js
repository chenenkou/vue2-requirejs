define(function (require) {
    return [
        {path: '/', component: require("pages/index/index")},
        {path: '/index', component: require("pages/index/index")},
        {path: '/add', component: require("pages/add/index")},
        {path: '/edit/:id', component: require("pages/edit/index"), name: 'edit'},
        {path: '*', component: require("pages/404/index")}
    ];
});
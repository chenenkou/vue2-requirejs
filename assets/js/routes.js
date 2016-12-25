define(
    [
        "pages/index/index",
        "pages/add/index",
        "pages/edit/index",
        "pages/404/index"
    ],
    function (
        Index,
        Add,
        Edit,
        Page404
    ) {
        return [
            {path: '/', component: Index},
            {path: '/index', component: Index},
            {path: '/add', component: Add},
            {path: '/edit/:id', component: Edit, name: 'edit'},
            { path: '*', component: Page404}
        ];
    }
);
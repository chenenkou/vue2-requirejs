require(
    [
        'vue',
        'vueRouter',
        'routes',
        'vuex',
        'store/index'
    ],
    function (
        Vue,
        VueRouter,
        routes,
        Vuex,
        store
    ) {
        Vue.use(VueRouter);
        Vue.use(Vuex);

        var router = new VueRouter({
            routes: routes,
            mode: 'hash'
        });

        new Vue({
            el: "#app",
            router: router,
            store: store
        });
    }
);
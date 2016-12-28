require.config(requireConfig);

define(function (require) {
    require("style!css/style");
    var Vue = require("vue");
    var VueRouter = require("vueRouter");
    var routes = require("routes");
    var Vuex = require("vuex");
    var store = require("store/index");

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
});
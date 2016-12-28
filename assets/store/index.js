define(function (require) {
    var Vue = require("vue");
    var Vuex = require("vuex");
    var user = require("store/modules/user");

    Vue.use(Vuex);

    return new Vuex.Store({
        // 组合各个模块
        modules: {
            user: user
        }
    });
});
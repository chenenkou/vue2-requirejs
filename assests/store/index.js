define(
    [
        'vue',
        'vuex',
        'store/modules/user'
    ],
    function (
        Vue,
        Vuex,
        user
    ) {
        Vue.use(Vuex);
        return new Vuex.Store({
            // 组合各个模块
            modules: {
                user: user
            }
        });
});
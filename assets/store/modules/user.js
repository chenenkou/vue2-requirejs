define(['store/mutation-types', 'lodash'], function (types, _) {
    // 该模块的初始状态
    var state = {
        users: [
            {id: 1482593785656, username: '小明', phone: 123456, email: 'xiaoming@email.com'}
        ]
    };

    // 相关的 getters
    var getters = {};
    getters[types.USER_COUNT] = function (state) {
        return state.users.length;
    };

    // 相关的 mutations
    var  mutations = {};
    mutations[types.USER_ADD] = function(state, user) {
        state.users.push(user);
    };
    mutations[types.USER_EDIT] = function(state, user) {
        var u = _.find(state.users, function (u) {
            return u.id == user.id;
        });
        u = _.merge(u, user);
    };
    mutations[types.USER_DEL] = function(state, user) {
        var index = state.users.indexOf(user);
        state.users.splice(index, 1);
    };

    // 相关的 actions
    var actions = {};
    actions[types.USER_ADD] = function (context, user) {
        user.id = new Date().getTime();
        context.commit(types.USER_ADD, user);
    };

    return {
        state: state,
        getters: getters,
        mutations: mutations,
        actions: actions
    }
});
define(function (require) {
    var template = require("text!./template.html");
    var Footer = require("components/footer/index");
    var types = require("store/mutation-types");

    return {
        name: 'index',
        template: template,
        data: function () {
            return {};
        },
        computed: {
            list: function () {
                return this.$store.state.user.users;
            },
            count: function () {
                return this.$store.getters[types.USER_COUNT];
            }
        },
        methods: {
            delUser: function (user) {
                this.$store.commit(types.USER_DEL, user);
            }
        },
        components: {
            'v-footer': Footer
        }
    }
});
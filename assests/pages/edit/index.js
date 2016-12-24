define(
    [
        "text!./template.html",
        "store/mutation-types",
        "components/footer/index",
        "lodash"
    ], function (
        template,
        types,
        Footer,
        _
    ) {
    return {
        name: 'edit',
        template: template,
        data: function () {
            return {
                error: '',
                user: {
                    username: '',
                    phone: '',
                    email: ''
                }
            }
        },
        created: function () {
            var id = this.$route.params.id;
            var users = this.$store.state.user.users;
            var user = _.find(users, function (user) {
                return user.id == id;
            });
            if (user) {
                this.user = _.clone(user);
            } else {
                this.$router.push('/404');
            }

        },
        methods: {
            closeError: function () {
                this.error = '';
            },
            submitUser: function (e) {
                e.preventDefault();
                this.error = '';
                if (!this.user.username) {
                    this.error = '姓名必填';
                    return false;
                }
                if (!this.user.phone) {
                    this.error = '电话必填';
                    return false;
                }
                if (!this.user.email) {
                    this.error = '邮箱必填';
                    return false;
                }

                this.$store.commit(types.USER_EDIT, this.user);
                this.$router.push('/');
            }
        },
        components: {
            'v-footer': Footer
        }
    }
});
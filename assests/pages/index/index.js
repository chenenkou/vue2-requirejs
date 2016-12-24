define(["vuex", "text!./template.html", "store/mutation-types"], function (Vuex, template, types) {
   return {
       name: 'index',
       template: template,
       data: function () {
           return {
           };
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
               console.log(user);
               this.$store.commit(types.USER_DEL, user);
           }
       }
   }
});
<template>
  <div class="home">
    <input type="text" v-model="login.publicKey" v-if="!_login"/>
    <input type="text" v-model="login.privateKey" v-if="!_login"/>
    <button @click="postLogin" v-if="!_login">로그인</button>
    <button @click="signout" v-if="_login">로그아웃</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  computed: {
    _login () { return this.$store.state.isLogin }
  },
  name: "Home",
  components: {},
  data() {
    return {
      login: {
        publicKey: "110001",
        privateKey: "1234!@",
        provider: "credential",
        deviceInfo: {
          os: "win",
          token: "",
          appName: "chrome"
        }
      }
    };
  },
  created() {
    console.log(this.$store.state.isLogin)
  },
  methods: {
    postLogin() {
      const apiURL = `${this.ENV_CRM}/auth/login`;
      const data = this.login;
      this.$http({
        method: "post",
        url: apiURL,
        data: data,
        withCredentials: true
      })
        .then(result => {
          const expires = new Date(result.data.accessToken.expiresIn);
          this.$cookie.set("mrkim_header", result.data.accessToken.header, {
            expires
          });
          this.$store.commit('setLogin');
        })
        .catch(e => {
          console.log(e);
        });
    },
    signout () {
      // test
      const apiURL = `${this.ENV_CRM}/auth/logout`
      const data = {}
      this.$http({
        method: 'delete',
        url: apiURL,
        withCredentials: true,
        data
      }).then(result => {
        console.log(result)
        this.$http.defaults.headers.common[this.$cookie.get('mrkim_header')] = ''
        this.$store.commit('setLogout');
      }).catch(error => {
        console.error(new Error(error))
      })
    }
  }
};
</script>

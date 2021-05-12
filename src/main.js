import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ENV_AUTH, ENV_CRM, ENV_RPA, ENV_ROBO, ENV_SSO, ENV_CALLSOCKET } from '../mrkim'
import VModal from 'vue-js-modal'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import { Editor } from '@toast-ui/vue-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
Vue.component('ToastVueEditor', Editor)


Vue.use(VueCookie)
Vue.use(VModal)
Vue.config.productionTip = false
Vue.prototype.ENV_AUTH = ENV_AUTH
Vue.prototype.ENV_CRM = ENV_CRM
Vue.prototype.ENV_RPA = ENV_RPA
Vue.prototype.ENV_ROBO = ENV_ROBO
Vue.prototype.ENV_SSO = ENV_SSO
Vue.prototype.ENV_CALLSOCKET = ENV_CALLSOCKET
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

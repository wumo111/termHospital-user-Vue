import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import myaxios from "@/api";
import qs from 'qs'
import {setSessionStorage,getSessionStorage} from '@/components/common'
import {getLocalStorage, removeSessionStorage, setLocalStorage} from "@/components/common";
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = myaxios
Vue.prototype.$qs = qs
axios.defaults.baseURL = 'http://localhost:10001/'
Vue.prototype.$setSessionStorage =setSessionStorage;
Vue.prototype.$getSessionStorage =getSessionStorage;
Vue.prototype.$setLocalStorage =setLocalStorage;
Vue.prototype.$getLocalStorage =getLocalStorage;
Vue.prototype.$removeSessionStorage =removeSessionStorage;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

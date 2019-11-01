import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 优先查找文件，如果文件找不到则找目录
// 找到目录,优先加载目录中的index.js
import './styles/common.css'
Vue.use(ElementUI)

// axios.defaults.baseURL = 'http://toutiao.course.itcast.cn/mp/v1_0/'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// http://ttapi.research.itcast.cn/mp/
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

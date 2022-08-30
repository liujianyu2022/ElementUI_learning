import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"
import router from "@/router/router"
import store from "@/store/store"

import elements from "./elements"
Vue.use(elements)



// import ElementUI from "element-ui"    // 这样是全局引入了elementUI组件库

// Vue.use(ElementUI)
// import { 
//   Menu,
//   Button
//  } from "element-ui"
// Vue.use( Menu )
// Vue.use( Button )

Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')




// import elements from "@/elements"
// Vue.use(elements)
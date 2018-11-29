// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Menu from './menu-ui.cofing'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Menu)
Vue.use(VueAxios,axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next)=>{
  if(to.name === 'publish'){
    store.commit('ADD_BROAD_SHOW',true)
  }else {
    store.commit('ADD_BROAD_SHOW',false)
  }
    next()
})
router.replace('/bookShelf')
store.dispatch('upShelf',axios)
store.dispatch('upAdmisSion',axios)




import Vue from 'vue'
import Router from 'vue-router'
import bookShelf from '../components/content/bookShelf.vue'
import publish from '../components/content/publish.vue'
import readClass from '../components/content/readClass.vue'
import admission from '../components/content/admission.vue'
import rankings from '../components/content/rankings.vue'

Vue.use(Router)

export default new Router({
 routes:[
   {
     path:'/bookShelf',
     name:'bookShelf',
     component:bookShelf
   },
   {
     path:'/publish',
     name:'publish',
     component:publish
   },
   {
     path:'/readClass',
     name:'readClass',
     component:readClass
   },
   {
     path:'/admission',
     name:'admission',
     component:admission
   },
   {
     path:'/rankings',
     name:'rankings',
     component:rankings
   }
 ]
})

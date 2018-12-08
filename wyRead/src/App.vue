<template>
  <div id="app">
    <indexNav></indexNav>
    <div class="classNav" >
      <router-link class="item" to="/bookShelf" @click.native="upManDatas">男频</router-link>
      <router-link class="item" to="/bookShelf"  @click.native='upWomenDatas'>女频</router-link>
      <router-link class="item" to="/publish" >出版</router-link>
      <router-link class="item" to="/readClass">分类</router-link>
      <router-link class="item" to="/admission">免费</router-link>
      <router-link class="item" to="/rankings">排行</router-link>
    </div>
    <router-view ></router-view>
    <moreBook class="admisShow" v-if="moreShow"></moreBook>
    <bookDetails v-if="detailsShow"></bookDetails>
    <inps v-show="inpShow"></inps>
    <bookRead v-show="readShow"></bookRead>
  </div>
</template>

<script>
  import {mapActions ,mapState} from 'vuex'
  import indexNav from './components/IndexNav/indexNav.vue'
  import moreBook from './components/moreBook/moreBook.vue'
  import bookDetails from './components/bookDetails/bookDetails.vue'
  import inps from './components/IndexNav/inp.vue'
  import bookRead from './components/IndexNav/bookRead.vue'
export default {
  name: 'App',
  data(){
      return{
          index:0,
          tim:null,
          tap:'bookShelf'
      }
  },
  computed:mapState(["brodShow",'time','moreShow','detailsShow','inpShow',"readShow"]),
  components: {
    indexNav,
    moreBook,
    bookDetails,
    inps,
    bookRead
  },
  methods: {
    ...mapActions({upManData: 'upManData',show:'show'}),
    upManDatas(){
      this.axios.get('/api/man')
        .then(res => {
            let data = res.data.data
        /*  let topData = res.data.data.top
          let bottomData = res.data.data.bottom*/
         /* this.upManData({topData,bottomData})*/
          this.upManData(data)
        })
    },
    upWomenDatas(){
        this.axios.get('/api/women')
          .then(res => {
            /*let topData = res.data.data.top
            let bottomData = res.data.data.bottom*/
            let data = res.data.data
            /*this.upManData({topData,bottomData})*/
            this.upManData(data)
          })
    }
  },
  mounted(){
      this.upManDatas()
  }
}
</script>

<style scoped>
#app {
  background: #fff;
  color: #333;
  padding: 0 15px;
}
 .classNav{
   padding: 4px 0px;
   width: 100%;
   height: 40px;
   display: flex;
   background: #fff;
 }
  .classNav .item{
    color: #333;
    font-size: 16px;
    text-align: center;
    flex: 1;
  }
</style>

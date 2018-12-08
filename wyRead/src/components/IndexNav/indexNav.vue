<template>
  <div class="nav">
    <mu-appbar style="width: 100%;" class="nav-top" z-depth="0">
      <span class="img"><img src="../../../static/img/ic_launcher_yuedu.png" ></span>
      <span class="title">网易云阅读</span>
      <mu-button flat slot="right" class="icon" @click="show(true)">
        <mu-icon value="search" size="30"></mu-icon>
      </mu-button>
      <mu-button flat slot="right" class="icon">
        <mu-icon value="perm_identity" size="30"></mu-icon>
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name:'indexNav',
       methods:{
         ...mapActions({inpSHow:'inpSHow'}),
         show(s){
             this.inpSHow(s)
         }
       }
    }
</script>

<style scoped>
  .nav-top{
    vertical-align: top;
    height: 40px;
    max-height: 40px;
    background: #fff;
  }
  .nav-top .img{
  }
  .nav-top .img img{
     width: 15px;
     height: 15px;
}
  .nav-top .title{
    font-weight: bold;
    font-size: 16px;
  }
  .nav-top .icon{
    width:30px;
    margin-right: 10px;
  }
</style>

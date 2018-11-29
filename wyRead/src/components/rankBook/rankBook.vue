<template>
<div class="rankBook" ref="rankBook">
  <div>
  <div class="nav">
    <mu-icon value="keyboard_arrow_left" class="navLeft" @click="closeRank"></mu-icon>
    <span class="title">小说排行榜</span>
    <span class="navRight" @click="toIndex">首页</span>
  </div>
  <div>
    <ol>
      <div class="bookNav" v-for="(item,index) in rankBookData " :key="item.sourceUrl" @click="upData(item)">
        <div class="bookImg">
          <img :src="item.iconUrl" class="img">
        </div>
        <div class="bookText">
          <li class="title"><span>{{index+1}}.</span>{{item.title}}</li>
          <p class="name">{{item.author}}</p>
          <p class="text">{{item.description}}</p>
        </div>
      </div>
    </ol>
  </div>
  </div>
</div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
        name:'rankBook',
        computed: {
          ...mapState(['rankBookData'])
        },
        methods:{
          ...mapActions({rankShow:'rankShow',detailsShow:'detailsShow',upDetailsData:'upDetailsData'}),
          closeRank(){
             this.rankShow(false)
         },
          toIndex(){
            this. closeRank()
            this.$router.replace('/bookShelf')
           },
          upData(item){
            this.detailsShow(true)
            this.upDetailsData(item)
          }
       },
      mounted(){
        this.$nextTick(() => {
          let msgScroll = new BScroll(this.$refs.rankBook,{
            scrollY: true,
            click: true,
            bounce: false
          })
        })
      }
    }
</script>

<style scoped>
 .rankBook{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: #fff;
 }
 .nav{
   width: 100%;
   height: 44px;
   background: #E64D2E;
   text-align: center;
   line-height: 44px;
   color: #fff;
 }
 .nav .navLeft{
   float: left;
   font-size: 36px;
   height: 44px;
   line-height: 44px;
 }
 .nav .title{
   font-size: 18px;
 }
 .nav .navRight{
   float: right;
   padding: 0 15px;
 }
 .bookNav{
   padding: 10px 12px;
   width: 100%;
   height: 30%;
   border-bottom: 1px solid #d6d6d6;
   display: flex;
 }
 .bookNav .bookImg{
   width: 20%;
   height: 100%;
   margin-right:15px;
   display: inline-block;
 }
 .bookNav .bookImg .img{
   width: 100%;
   height: 100%;
   /*border-radius: 5px;
   box-shadow: -3px 4px 7px #ccc;
   margin-bottom:5px;*/
 }
 .bookNav .bookText{
   display: inline-block;
   flex: 1;
   height: 100%;
 }
 .bookNav .bookText .title{
   list-style-type:decimal;
   color: #1d2c33;
   font-size: 16px;
   height: 27px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
 }
 .bookNav .bookText p{
   margin-bottom:3%;
   color: #aaa;
   font-size: 12px;
 }
 .bookNav .bookText .name{
   height:16px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
 }
 .bookNav .bookText .text{
   height: 39px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
 }
  ol li{
    list-style-type:decimal;
  }
</style>

<template>
<div class="bookRead" ref="bookRead">
  <div>
  <div class="nav">
    <mu-icon value="keyboard_arrow_left" class="navLeft" @click="close"></mu-icon>
    <span class="title">我的书架</span>
    <span class="navRight" @click="toIndex">首页</span>
  </div>
  <div class="number">
    <span>共<em>{{bookReads.length}}</em>本</span>
    <a :class="{row:item}" ref="item" @click="change">{{gl}}</a>
  </div>
  <div class="show" v-show="row">
  <div class="img"></div>
  <p>您还没有添加任何书籍到书架</p>
</div>
  <ul class="imgNav">
    <li class="img" v-for="item in bookReads" :key="item.sourceUrl" @click="upData(item)">
      <img :src="item.iconUrl">
      <h3 class="imgText">{{item.title}}</h3>
      <span class="name">{{item.author}}</span>
      <span class="delete" v-show="deletes" @click.stop="dele(item)">X</span>
    </li>
  </ul>
  </div>
</div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
        name:'bookRead',
      data(){
           return{
             item:false,
             gl:'管理',
             wc:'完成',
             row: true,
             deletes:false
           }
      },
        computed:{
          ...mapState(['bookReads'])
        },
        methods:{
          ...mapActions({readShow:'readShow',upDetailsData:'upDetailsData',detailsShow:'detailsShow',deleteBook:'deleteBook'}),
          close(){
              this.readShow(false)
          },
          toIndex(){
            this.close()
            this.$router.replace('/bookShelf')
          },
          change(){
            if(!this.item){
               this.item = true
               this.deletes=true
               this.$refs.item.innerHTML = this.wc
            }else{
              this.item = false
              this.deletes=false
              this.$refs.item.innerHTML = this.gl
            }
          },
          upData(item){
            this.detailsShow(true)
            this.upDetailsData(item)
          },
          dele(item){
              this.deleteBook(item)
          }
        },
      mounted(){
        this.$nextTick(() => {
          let msgScroll = new BScroll(this.$refs.bookRead,{
            scrollY: true,
            click: true,
            bounce: false
          })
        })
      },
      updated(){
          if(this.bookReads.length > 0){
              this.row = false
          }else{
              this.row = true
          }
      }
    }
</script>

<style scoped>
.bookRead{
  position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  right: 0;
  width: 100%;
  background: #f5f5f5;
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
  .number{
    height: 46px;
    box-sizing: border-box;
    padding: 8px 10px;
    position: relative;
    line-height: 29px;
    border-bottom: #dcdcdc solid 1px;
    background-color: #fff;
    color: #333;
    font-size: 12px;
  }
.number span{
   float: left;
}
.number span em{
  color: red;
}
.number a{
  display: inline-block;
  width: 64px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  border-radius: 2px;
  color: #333;
  border: 1px solid #ccc;
  float: right;
  background: linear-gradient(
    to bottom ,
    #FFF 0% ,
    #e9e9e9 100%
  );
}
.number .row{
  background: #64a148;
  color: #fff;
}
  .show{
   /* padding: 15px 0;*/
  }
  .show .img{
    margin: 15px;
    width: 100%;
    height: 96px;
    background: url("../../../static/img/result.png") no-repeat center;
    background-size: 120px 100px;
  }
.show p{
     text-align: center;
     font-size: 15px;
     line-height: 18px;
     color: #ccc;
   }
.imgNav{
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}
.imgNav .img{
  width: 23%;
  height: 30%;
  margin-bottom: 10px;
  margin-left:6%;
  float: left;
  position: relative;
}
.imgNav .img img{
  display: inline-block;
  width: 100%;
  height: 50%;
  max-height: 120px;
  min-height: 120px;
  border-radius: 5px;
  box-shadow: -3px 4px 7px #ccc;
  margin-bottom:5px;
}
.imgNav .img .imgText{
  padding: 1px;
  font-weight: bold;
  font-size: 15px;
  color: #222;
  height: 45px;
  margin-bottom:2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.imgNav .img .name{
  font-size: 10px;
  color: #AEAEAE;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.imgNav .img .delete{
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height:20px;
  background:rgba(255,255,255,0.5);
  border-radius: 50%;
  color: red;
  z-index: 1000;
}
</style>

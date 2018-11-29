<template>
<div class="details" ref="details">
  <div class="chlid">
  <div class="nav">
    <mu-icon value="keyboard_arrow_left" class="navLeft" @click="close"></mu-icon>
    <span class="title">书籍详情</span>
    <span class="navRight" @click="toIndex">首页</span>
  </div>
  <div class="content">
  <div class="bookNav">
    <div class="img">
      <img :src="detailsData.iconUrl" >
    </div>
    <div class="text">
      <h3>{{detailsData.title}}</h3>
      <p>作者：{{detailsData.author}}</p>
      <p>分类：{{detailsData.category}}</p>
      <p>字数：{{detailsData.readCount}}</p>
      <p>点击：{{detailsData.showTotalCount}}</p>
    </div>
  </div>
  <div class="but">
    <span class="butLeft">立即阅读</span>
    <span class="butRight">下载整本</span>
  </div>
    <div class="upShelf">
      <mu-icon value="import_contacts" class="bookIcon"></mu-icon>
      <span class="span">放入书架</span>
    </div>
  </div>
  <div class="brief" ref="brief">
    <h3>内容简介</h3>
    <p class="con" ref="con">{{detailsData.description}}</p>
    <p class="up" @click="up" ref="up"><span>展开</span><mu-icon value="keyboard_arrow_down" class="upIcon"></mu-icon></p>
  </div>
  </div>
</div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      name:'bookDetails',
      computed:mapState(['detailsData']),
      methods:{
        ...mapActions({detailsShow:'detailsShow'}),
        close(){
            this.detailsShow(false)
        },
        toIndex(){
          this.close()
          this.$router.push('/bookShelf')
        },
        up(){
            this.$refs.con.style.height="auto";
            this.$refs.con.style.overflow="visible";
            this.$refs.up.style.display="none";
        }
      },
      mounted(){
        this.$nextTick(() => {
          let msgScroll = new BScroll(this.$refs.details,{
            scrollY: true,
            click: true,
            bounce: false
          })
        })
      }
    }
</script>

<style scoped>
  .details{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1000;
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
  .content{
    width: 100%;
    padding: 15px;
  }
  .bookNav{
    width: 100%;
    height: 22%;
    display: flex;
  }
  .bookNav .img{
    display: inline-block;
    width: 28%;
    height: 100%;
  }
  .bookNav .img img{
    width: 100%;
    height: 100%;
  }
  .bookNav .text{
    display: inline-block;
    flex: 1;
    height: 100%;
    margin-left: 5%;
  }
  .bookNav .text h3{
    font-size: 16px;
    font-weight: bold;
    margin-bottom:3%;
  }
  .bookNav .text p{
    font-size: 14px;
    height: 20%;
    margin-bottom: 3%;
  }
  .but{
    width: 100%;
    height: 9% ;
    padding: 5% 0;
  }
  .but span{
    display: inline-block;
    border: 1px solid #3C98C9;
    width: 45%;
    padding: 1.5% 0;
    border-radius: 5px;
    text-align: center;
  }
  .but .butLeft{
    background: #3C98C9;
    color: #fff;
  }
  .but .butRight{
   margin-left: 8%;
    color: #3C98C9;
  }
  .upShelf{
    width: 100%;
    height: 5%;
    border-radius: 3px;
    border: 1px solid #ccc;
    background: #E8E7E6;
    text-align: center;
  }
  .upShelf span{
    display: inline-block;
    color: #959595;
    vertical-align: super;
  }
  .brief{
    width: 100%;
    background: #faf7f5;
    padding: 15px 15px 20px;
  }
  .brief h3{
    color: #1D2C33;
    font-size: 16px;
    font-weight: bold;
  }
  .brief .con{
    padding: 15px 0 15px 0;
    text-indent:2em;
    height: 95px;
    overflow: hidden;
  }
  .brief .up{
    padding: 5px;
    text-align: right;
    color: #3998C9;
  }
  .brief .upIcon{
    vertical-align: bottom;
  }
</style>

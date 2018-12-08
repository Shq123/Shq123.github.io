<template>
<div class="input">
  <div class="nav">
    <mu-icon value="keyboard_arrow_left" class="navLeft" @click="close"></mu-icon>
    <div class="inp">
      <input type="text" placeholder="情商系列（全6册）">
      <span><mu-icon value="search" size="20"></mu-icon></span>
    </div>
    <span class="navRight" @click="toIndex">首页</span>
  </div>
  <div class="ours">大家都在搜</div>
  <div class="class">
    <span v-for="(item,index) in inpClass" :key="index">{{item}}</span>
  </div>
  <div class="near">最近搜索</div>
</div>
</template>

<script>
  import {mapActions,mapState} from 'vuex'
    export default {
      name:"inp",
      computed:mapState(["inpClass"]),
      methods:{
        ...mapActions({inpSHow:'inpSHow'}),
        close(){
            this.inpSHow(false)
        },
        toIndex(){
            this.close()
            this.$router.replace('/bookShelf')
        }
      }
    }
</script>

<style scoped>
    .input{
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
      background: #e65825;
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
    .nav .inp{
      display: inline-block;
      position: relative;
      width: 76%;
      height: 70%;
      border-radius: 50px;
      vertical-align: middle;
      overflow: hidden;
    }
    .nav .inp span{
      position: absolute;
      width: 50px;
      top: 0;
      right: 0;
      bottom: 0;
      display: inline-block;
      text-align: center;
      background: #f4f4f4;
      z-index: 10;
      color: #ff4d46;
    }
    .nav .inp input{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      border: 0px;
      outline:none;
      text-indent: 5%;
      font-size: 13px;
    }

    .nav .navRight{
      float: right;
      padding: 0 15px;
    }
  .ours,.near{
    width: 100% ;
    height: 38px;
    background: #f4f4f4;
    line-height: 38px;
    padding: 0 15px;
    color: #807a73;
  }
  .class{
    padding: 15px;
  }
  .class span{
    display: inline-block;
    padding: 5px 10px;
    margin-right: 15px;
    margin-bottom:15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #807a73;
  }
</style>

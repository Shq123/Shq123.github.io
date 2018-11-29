<template>
<div class="redClass">
  <div v-for="item in nav" class="item">
    <h3 class="title">{{item.name}}</h3>
    <div class="text">
      <a href="#" v-for="a in item.self">{{a}}</a>
    </div>
    <p class="row"></p>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name:'readClass',
      computed:mapState(["nav"])
    }
</script>

<style scoped>
.item{}
.item .title{
  font-size: 18px;
  margin-bottom: 3%;
  color: #ED6460;
  font-weight: bold;
}
.item .text{}
.item .text a{
  display: inline-block;
  margin-bottom: 6%;
  width: 85px;
  height: 30px;
  margin-left: 6.5%;
  text-align: center;
  line-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: #f5f5f5;
  color: #3b352d;
  border-radius: 4px;
}
  .row{
    width: 100%;
    height: 10px;
    background:  #f5f5f5;
  }
</style>

<template>
  <div class="navPublish">
    <span>还没有最近阅读的书籍哦</span>
    <a >书架></a>
  </div>
</template>

<script>
    export default {
        name:'shelf'
    }
</script>

<style scoped>
  .navPublish{
    width: 100%;
    height: 56px;
    line-height: 56px;
    position: relative;
    border-bottom: 1px solid #C1C1C1;
    margin-bottom:20px;
    margin-top: 10px;
  }
  .navPublish span{
    color: #999;
    font-size: 16px;
    display: inline-block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 15px;
  }
  .navPublish a{
    color: #333;
    margin-right: 0;
    position: absolute;
    right: 15px;
    top: 0;
  }
</style>

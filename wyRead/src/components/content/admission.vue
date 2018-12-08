<template>
<div class="admission">
  <navImg></navImg>
  <div class="admisBook">
  <div class="manBook">
    <h3 class="title">
      <span class="textLeft">男生限时免费</span>
      <span class="textRight" @click="mans">更多</span>
    </h3>
    <div class="bookNav" v-for="item in man" :key="item.sourceUrl" @click="upData(item)">
      <div class="bookImg">
        <img :src="item.iconUrl" class="img">
        <img src="../../../static/img/admission.png" class="admissionImg">
      </div>
      <div class="bookText">
        <h3>{{item.title}}</h3>
        <p class="name">{{item.author}}</p>
        <p class="text">{{item.description}}</p>
        <p class="read"><span>免费</span> <del>{{item.read}}</del></p>
      </div>
    </div>
  </div>
    <div class="girlBook">
      <h3 class="title">
        <span class="textLeft">女生限时免费</span>
        <span class="textRight" @click="girls">更多</span>
      </h3>
      <div class="bookNav" v-for="item in girl" :key="item.sourceUrl" @click="upData(item)">
          <div class="bookImg">
            <img :src="item.iconUrl" class="img">
            <img src="../../../static/img/admission.png" class="admissionImg">
          </div>
          <div class="bookText">
            <h3>{{item.title}}</h3>
          <p class="name">{{item.author}}</p>
          <p class="text">{{item.description}}</p>
          <p class="read"><span>免费</span> <del>{{item.read}}</del></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import navImg from '../IndexNav/navImg.vue'
    export default {
      name:'admission',
      computed:mapState({
        man:state => state.admisSion.man,
        girl:state => state.admisSion.girl
      }),
      methods:{
        ...mapActions({upMoreData:'upMoreData',moreShow:'moreShow',detailsShow:'detailsShow',upDetailsData:'upDetailsData'}),
          mans(){
            this.moreShow(true)
            this.axios.get('/api/adMan')
                .then(res => {
                  let data = res.data.data.data
                  this.upMoreData(data)
                })
          },
        girls(){
          this.moreShow(true)
          this.axios.get('/api/adGirl')
            .then(res => {
              let data = res.data.data.data
              this.upMoreData(data)
            })
        },
        upData(item){
          this.detailsShow(true)
          this.upDetailsData(item)
        }
      },
      components:{
        navImg
      }
    }
</script>

<style scoped>
  .admission{
    width: 100%;
    height: 100%;
  }
  .admisBook .manBook{
   padding-top: 15px;
    border-bottom: 1px solid #c1c1c1;
  }
  .admisBook .girlBook{
    padding-top: 15px;
  }
  .title{
    position: relative;
    height: 28px;
    line-height: 28px;
    margin-bottom: 15px;
  }
  .title .textLeft{
    display: inline-block;
    font-size: 20px;
    color: #1a1a1a;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
  }
  .title .textRight{
    display: inline-block;
    border: 1px solid #ccc;
    padding: 0 15px;
    border-radius: 50px;
    position: absolute;
    right: 0px;
    top: 0;
    color: #A4A4A4;
  }

  .bookNav{
    width: 100%;
    height: 30%;
    margin-bottom:20px;
    display: flex;
  }
  .bookNav .bookImg{
    width: 26%;
    height: 100%;
    margin-right:15px;
    display: inline-block;
    position: relative;
  }
  .bookNav .bookImg .img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: -3px 4px 7px #ccc;
    margin-bottom:5px;
  }
  .bookNav .bookImg .admissionImg{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 15px;
  }
  .bookNav .bookText{
    display: inline-block;
    height: 100%;
    flex: 1;
    /*position: relative;*/
  }
  .bookNav .bookText h3{
    font-size: 17px;
    color: #222;
    height: 25%;
    font-weight: bold;
    /*line-height: 20px;*/
    margin-bottom: 3%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 1;
  }
  .bookNav .bookText {
    color: #c1c1c1;
    font-size: 12px;
    text-align: left;
  }
  .bookNav .bookText .name{
    line-height: 14px;
    height:25%;
    margin-bottom: 5%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .bookNav .bookText .text{
    width: 100%;
    height: 34px;
    margin-bottom:5%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bookNav .bookText .read span{
    color: red;
  }
</style>

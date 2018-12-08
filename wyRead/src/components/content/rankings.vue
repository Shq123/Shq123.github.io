<template>
<div class="ranking">
  <navImg></navImg>
  <div class="rankingBook">
    <div class="Book">
      <h3 class="title">
        <span class="textLeft">男生排行</span>
        <span class="textRight" @click="man()">更多</span>
      </h3>
      <ol>
        <li @click="upData(manTop)">
          <div class="bookImg">
            <img :src="manTop.iconUrl" class="img">
            <img src="../../../static/img/top1.png" class="topIcon">
          </div>
          <div class="bookText">
            <h3>{{manTop.title}}</h3>
            <p class="name">{{manTop.author}}</p>
            <p class="text">{{manTop.description}}</p>
          </div>
        </li>
        <li v-for="item in rankingMan.slice(1,5)" :key="item.sourceUrl" @click="upData(item)">
          <span></span>{{item.title}}
        </li>
      </ol>
    </div>
    <div class="Book">
      <h3 class="title">
        <span class="textLeft">女生排行</span>
        <span class="textRight" @click="girl">更多</span>
      </h3>
      <ol>
        <li @click="upData(girlTop)">
          <div class="bookImg">
            <img :src="girlTop.iconUrl" class="img">
            <img src="../../../static/img/top1.png" class="topIcon">
          </div>
          <div class="bookText">
            <h3>{{girlTop.title}}</h3>
            <p class="name">{{girlTop.author}}</p>
            <p class="text">{{girlTop.description}}</p>
          </div>
        </li>
        <li v-for="item in rankingGirl.slice(1,5)" :key="item.sourceUrl" @click="upData(item)">
          {{item.title}}
        </li>
      </ol>
    </div>
    <div class="Book">
      <h3 class="title">
        <span class="textLeft">经典排行</span>
        <span class="textRight" @click="classic">更多</span>
      </h3>
      <ol>
        <li @click="upData(classicTop)">
          <div class="bookImg">
            <img :src="classicTop.iconUrl" class="img">
            <img src="../../../static/img/top1.png" class="topIcon">
          </div>
          <div class="bookText">
            <h3>{{classicTop.title}}</h3>
            <p class="name">{{classicTop.author}}</p>
            <p class="text">{{classicTop.description}}</p>
          </div>
        </li>
        <li  v-for="item in rankingClassic.slice(1,5)" :key="item.sourceUrl" @click="upData(item)">
          <span></span>{{item.title}}
        </li>
      </ol>
    </div>
  </div>
  <rankBook v-show="rankBookShow"></rankBook>
</div>
</template>

<script>
  import navImg from '../IndexNav/navImg.vue'
  import {mapState,mapActions} from 'vuex'
  import rankBook from '../rankBook/rankBook.vue'
    export default {
      name:'rankings',
      data(){
          return{
              index:0
          }
      },
      computed:{
        ...mapState(['rankingMan','rankingGirl','rankingClassic','manTop','girlTop','classicTop','rankBookShow'])
      },
      methods:{
        ...mapActions({
          rankingsMan:'rankingMan',
          rankingsGirl:'rankingGirl',
          rankingsClassic:'rankingClassic',
          mansTop:'manTop',
          girlsTop:'girlTop',
          classicsTop:'classicTop',
          detailsShow:'detailsShow',
          upDetailsData:'upDetailsData',
          rankShow:'rankShow',
          rankBookData:'rankBookData'
        }),
        upData(item){
            this.detailsShow(true)
            this.upDetailsData(item)
        },
        man(){
          this.rankBookData(this.rankingMan)
          this.rankShow(true)
        },
        girl(){
          this.rankBookData(this.rankingGirl)
          this.rankShow(true)
        },
        classic(){
          this.rankBookData(this.rankingClassic)
          this.rankShow(true)
        }
      },
      components:{
        navImg,
        rankBook
      },
      created(){
          this.axios.get('/api/rankingMan')
            .then(res => {
              let data = res.data.data.data
              let top = res.data.data.data[0]
              this.mansTop(top)
              this.rankingsMan(data)
            })
        this.axios.get('/api/rankingGirl')
          .then(res => {
            let data = res.data.data.data
            let top = res.data.data.data[0]
            this.girlsTop(top)
            this.rankingsGirl(data)
          })
        this.axios.get('/api/rankingClassic')
          .then(res => {
            let data = res.data.data.data
            let top = res.data.data.data[0]
            this.classicsTop(top)
            this.rankingsClassic(data)
          })
      }
    }
</script>

<style scoped>
  .ranking{
    width: 100%;
    height: 100%;
  }
  .ranking rankingBook{}
  .Book{
    padding-top: 15px;
    border-bottom: 1px solid #c1c1c1;
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
  ol{
    width: 100%;
    padding: 0 15px;
  }
  ol li{
    width: 100%;
    list-style-type:decimal;
    margin-bottom:3%;
    font-size: 16px;
  }
  ol li:nth-child(1){
    list-style: none;
  }
  ol li:nth-child(1) .bookImg{
    display: inline-block;
    width: 28%;
    height: 100%;
    margin-right:2%;
    position: relative;
  }
  ol li:nth-child(1) .bookImg .img{
    width: 100%;
    height: 100%;
  }
  ol li:nth-child(1) .bookImg .topIcon{
    width: 25%;
    height: 25%;
    position: absolute;
    top: 0;
    left: 4%;
  }
  ol li:nth-child(1) .bookText{
    display: inline-block;
    width: 68%;
    vertical-align: top;
  }
  ol li:nth-child(1) .bookText h3{
    margin-bottom:2%;
    font-size: 17px;
    color: #222;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 1;
  }
  ol li:nth-child(1) .bookText p{
    font-size: 12px;
  }
  ol li:nth-child(1) .bookText .name{
    color: #aaa;
    margin-bottom:3%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 1;
  }
  ol li:nth-child(1) .bookText .text{
    font-size: 14px;
    height: 65px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>

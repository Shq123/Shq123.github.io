<template>
<div class="box">
  <navImg></navImg>
  <shelf></shelf>
<h3 class="title">
  <span class="textLeft">重版推荐</span>
  <span class="textRight" @click="heavy()">更多</span>
</h3>
  <div class="imgNav">
    <div v-for="item in data.top" :key="item.sourceUrl" class="img" @click="upData(item)">
      <img :src="item.iconUrl" >
      <h4 class="imgText">{{item.title}}</h4>
      <span>{{item.author}}</span>
    </div>
  </div>
  <div class="bookWarper" >
  <div class="bookNav" v-for="test in data.bottom" :key="test.sourceUrl" @click="upData(test)">
    <div class="bookImg">
      <img :src="test.iconUrl" >
    </div>
    <div class="bookText">
      <h3>{{test.title}}</h3>
      <p class="name">{{test.author}}</p>
      <p class="description">{{test.description}}</p>
      <p class="Record">
        <span>{{test.Serialization ? '已完结': '连载中..'}}</span>
        <span>{{test.category}}</span>
        <span>{{test.showTotalCount}}字</span>
      </p>
    </div>
  </div>
  </div>
</div>
</template>

<script>
  import navImg from '../IndexNav/navImg.vue'
  import shelf from '../IndexNav/shelfText.vue'
  import {mapState,mapActions} from 'vuex'
    export default {
        name:'bookShelf',
        data(){
          return{
              id:this.data
          }
        },
        computed:{
          ...mapState(/*{
            topData:state => state.data.topData,
            bottomData: state =>state.data.bottomData
          }*/["data"])
        },
      components:{
        navImg,
        shelf
      },
      methods:{
        ...mapActions({upDetailsData:'upDetailsData',detailsShow:'detailsShow',moreShow:'moreShow',upMoreData:'upMoreData'}),
        upData(item){
            this.detailsShow(true)
            this.upDetailsData(item)
        },
        heavyMan(){
            this.moreShow(true)
          this.axios.get('api/heavyMan')
            .then(res => {
              let data = res.data.data.data
              this.upMoreData(data)
            })
        },
        heavyGirl(){
          this.moreShow(true)
          this.axios.get('api/heavyGirl')
            .then(res => {
              let data = res.data.data.data
              this.upMoreData(data)
            })
        },
        heavy(){
            if(this.data.id == "man"){
              this.heavyMan()
            }else{
              this.heavyGirl()
            }
        }
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    padding-top:15px;
  }
  .title{
  position: relative;
    height: 28px;
    line-height: 28px;
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
  .imgNav{
    margin-top: 15px;
    height: 40%;
    display: flex;
    margin-bottom: 20px;
  }
  .imgNav .img{
    width: 26%;
    height: 30%;
    float: left;
    margin-right: 8%;
    border-radius: 5px;
    flex: 1;
  }
  .imgNav .img:nth-child(3){
    margin-right: 0;
  }
 img{
    width: 100%;
    height: 100%;
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
  .imgNav .img span{
    font-size: 10px;
    color: #AEAEAE;
  }
  .bookWarper{
    overflow: hidden;
  }
  .bookNav{
    width: 100%;
    height: 30%;
    margin-bottom:20px;
    display: flex;
  }
  .bookNav .bookImg{
    width: 28%;
    height: 100%;
    margin-right:15px;
    display: inline-block;
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
    /*line-height: 20px;*/
    margin-bottom: 5%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 2;
  }
  .bookNav .bookText p{
    color: #c1c1c1;
  }
  .bookNav .bookText .name{
    line-height: 14px;
    height:25%;
    margin-bottom: 5%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .bookNav .bookText .description{
    margin-bottom:3%;
    line-height: 18px;
    height: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bookNav .bookText .Record{
  /*  position: absolute;
    bottom: 0;*/
  }
  .bookNav .bookText .Record span{
    display: inline-block;
    padding: 0px 10px;
    font-size: 10px;
    color: #999;
    background-image: linear-gradient(3deg,#F9F9F9 0,#F0F0F0 100%);
    border-radius: 22px;
  }
</style>

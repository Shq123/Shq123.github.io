<template>
<div class="publish">
  <navImg></navImg>
  <div class="broadcast" ref="lis">
    <ul ref="ul">
      <li ref="li"><img src="../../../static/img/No1.jpg"></li>
      <li ref="li"><img src="../../../static/img/No1.jpg"></li>
    </ul>
  </div>
  <shelf></shelf>
    <div class="shelf" v-for="item in shelf" :key="item.sourceUrl" >
      <h3 class="title">
        <span class="textLeft">{{item.text}}</span>
        <span class="textRight" @click="more(item)">更多</span>
      </h3>
      <ul class="imgNav">
        <li class="img" v-for="book in item.books" :key="book.sourceUrl" @click="upData(book)">
          <img :src="book.iconUrl">
          <h3 class="imgText">{{book.title}}</h3>
          <span>{{book.author}}</span>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import navImg from '../IndexNav/navImg.vue'
  import shelf from '../IndexNav/shelfText.vue'
    export default {
      name:'publish',
      data(){
          return{
              index:0,
              tim:null
          }
      },
      computed:mapState(["shelf"]),
      methods:{
        ...mapActions({upShelf:'upShelf',upDetailsData:'upDetailsData',detailsShow:'detailsShow',moreShow:"moreShow",upMoreData:'upMoreData'}),
        broadcast(){
          this.index++

          let width = this.$refs.li.offsetWidth
          let offsetX = -this.index * width
          console.log(this.$refs.lis.offsetWidth);

          this.$refs.ul.style.transition = "all 0.5s linear"
          this.$refs.ul.style.transform = `translateX(${offsetX}px)`
        },
        lastPage() {
          if (this.index >= 1) {
            this.$refs.ul.style.transition = 'none'
            this.$refs.ul.style.transform = `translateX(0px)`
            this.index = 0
          }
        },
        stars(){
          clearInterval(this.tim)
          this.tim  = setInterval(this.broadcast,2000)
          this.$refs.ul.addEventListener('transitionend', this.lastPage)
        },
        upData(item){
            this.detailsShow(true)
            this.upDetailsData(item)
        },
        editor(){
          this.moreShow(true)
          this.axios.get('api/editor')
            .then(res => {
              let data = res.data.data.data
              this.upMoreData(data)
            })
        },
        newBook(){
          this.moreShow(true)
          this.axios.get('api/newBook')
            .then(res => {
              let data = res.data.data.data
              this.upMoreData(data)
            })
        },
        classic(){
          this.moreShow(true)
          this.axios.get('api/classic')
            .then(res => {
              let data = res.data.data.data
              this.upMoreData(data)
            })
        },
        more(item){
            if(item.text == "主編推荐"){
                this.editor()
            }else if(item.text == "新书上线"){
                this.newBook()
            }else{
                this.classic()
            }
        }
      },
      components:{
        navImg,
        shelf
      },
      created(){
        this.axios.get('/api/publish')
          .then(res => {
            this.upShelf(res.data.data.data)
            console.log(res.data.data);
          })
      },
      mounted(){
        this.$nextTick(() => {
            this.stars()
          })
      }
    }
</script>

<style scoped>
  .publish{
    width: 100%;
    height: 100%;
  }
  .broadcast{
    width: 100%;
    height: 97px;
    overflow: hidden;
    position: relative;
  }
  .broadcast ul{
    width: 200%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .broadcast ul li{
    width: 50%;
    height: 100%;
    float: left;
  }
  .broadcast li img{
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .shelf{
    width: 100%;
    padding-bottom: 20px;
    margin:15px 0;
    border-bottom: 1px solid #ccc;
  }
  .title{
    position: relative;
    height: 28px;
    line-height: 28px;
    margin-bottom:20px;
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
   width: 100%;
   overflow: hidden;
 }
 .imgNav .img{
   width: 26%;
   height: 30%;
   margin-bottom: 10px;
   margin-left:6%;
   float: left;
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
  clesrfix:after{
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    clear: both;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>

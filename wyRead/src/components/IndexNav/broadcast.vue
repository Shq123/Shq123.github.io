<template>
  <div class="broadcast" ref="list" >
    <ul ref="ul">
      <li ref="li"><img src="../../../static/img/No1.jpg"></li>
      <li ref="li"><img src="../../../static/img/No1.jpg"></li>
    </ul>
  </div>
</template>
<script>
    export default {
        name:'broadcast',
      data(){
            return{
                index:0,
                tim:''
            }
      },
        methods:{
          broadcast(){
            this.index++
            let width = this.$refs.list.offsetWidth
            console.log(this.$refs.list);
            let offsetX = -this.index * width
            this.$refs.ul.style.transition = "all 0.5s linear"
            this.$refs.ul.style.transform = `translateX(${offsetX}px)`
          },
          lastPage() {
            if (this.index === 1) {
              this.$refs.ul.style.transition = 'none'
              this.$refs.ul.style.transform = `translateX(0px)`
              this.index = 0
            }
          },
          stars(){
            clearInterval(this.tim)
            this.tim  = setInterval(this.broadcast,2000)
            this.$refs.ul.addEventListener('transitionend', this.lastPage)
          }
        },
      mounted(){
            this.stars()
      }
    }
</script>

<style scoped>
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
  }
</style>

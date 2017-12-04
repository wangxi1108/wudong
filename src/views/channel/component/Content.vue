<template>
  <div class="content">
    <!--<div class="videoContent" v-for="item in videoCon" :key="item.id">-->
    <div class="videoContent" v-for="(item,index) in videoCon" :key="index">
      <p class="time hui20_aaa">{{item.createTime}}</p>
      <div class="imgbox" >
        <p class="playTime bai20">{{item.onSaleTime}}</p>
        <img :src="item.fullCoverImage" alt="">
      </div>
      <div class="dis">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'content',
        props:['videoCon'],
        data() {
            return {
//                msg: 'Welcome to Your Vue.js App',
                time:this.item.onSaleTime

            }
        },
        created(){
            this.formatTime(time);
        },
        methods:{
          formatTime(){

            function xundate(time) {
              var diffSeconds = Math.ceil(time / 1000);
              second = diffSeconds % 60,
                minute = Math.floor(diffSeconds / 60) % 60,
                hour = Math.floor(diffSeconds / 3600) % 24,
                day = Math.floor(diffSeconds / (24 * 60 * 60));
              var str = geshi(hour) + ":" + geshi(minute) + ":" + geshi(second);
              return str;
            }
            function geshi(m) {
              return m > 9 ? m : '0' + m;
            }

          }
       }
    }
</script>

<style scoped lang="scss">
  .content{
    width: 100%;
    min-height: 10px;
    overflow: hidden;

    .videoContent{
      width:6.9rem;
      height:6rem;
      margin:0 auto;
      border-bottom: 1px solid #ccc;

      .time{
        width:100%;
        padding: 0.2rem 0;
      }
      .imgbox{
        width:100%;
        height:4rem;
        position: relative;

        .playTime{
          position: absolute;
          right: 0.2rem;
          top: 0.2rem;
        }
        img{
          width:100%;
          height:auto;
          border-radius: 0.1rem;
        }
      }
      .dis{
        width:100%;
        padding: 0.2rem;
      }

    }
  }
</style>

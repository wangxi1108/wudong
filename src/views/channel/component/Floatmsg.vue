<template>
  <div class="floatmsg">
    <div class="cover"></div>
    <div class="msgbox">
      <div class="title bai50">{{banner.title}}</div>
      <p class="msgCon">{{banner.videos}}/{{banner.subs}}</p>
      <p class="msgCon">{{banner.msg}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Floatmsg',
        props:['banner'],
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>


<style scoped lang="scss">
  .floatmsg{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    z-index:20;
    .cover{
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.3;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
    }
    .msgbox{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 20;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .title{

    },
  .msgCon{
    font-size: 0.24rem;
    color: #fff;
  }
  }


</style>

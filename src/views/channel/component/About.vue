<template>
  <div id="about">
    <div class="photoContainer">
      <p class="photoTil hei30_000">相册</p>
      <div class="photoBox">
        <ul class="photoUl">
          <li><img src="/static/images/hua1.jpg" alt=""></li>
          <li><img src="/static/images/hua1.jpg" alt=""></li>
          <li><img src="/static/images/hua1.jpg" alt=""></li>
          <li><img src="/static/images/hua1.jpg" alt=""></li>

        </ul>
      </div>
    </div>
    <div class="introduction">
      <p class="para hui20_aaa">关于我们：guajishf </p>
      <p class="para hui20_aaa">We tend to forget that happiness doesn't come as a result of getting sth. we don't have,
        but rather of recognizing and appreciating what we do have. </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped lang="scss">
 #about{
   /*width: 6.67rem;*/
   /*overflow: hidden;*/
   padding: 0.2rem;

   .photoContainer{
     width: 100%;
     overflow: hidden;

     .photoTil{
       padding: 0.2rem 0;
     }
     .photoBox{
       height: 2.8rem;
       width: 100%;
       border-bottom: 1px solid #ccc;
       position: relative;

       .photoUl{
         position: absolute;
         left: 0;
         top: 0;
         height: 2rem;
         margin: 0.2rem 0;
         /*overflow: hidden;*/
         width:20rem;
         background-color: pink;
         clear: both;
         z-index: 30;

         li{
           width: 2rem;
           height: 2rem;
           float: left;
           margin-left: 0.16rem;

           img{
             width: 100%;
             height: 100%;
             border-radius: 0.1rem;
           }
         }
       }
     }
   }
   .introduction{
     width: 100%;
     min-height: 0.2rem;

     .para{
       margin: 0.2rem 0;
     }
   }
 }
</style>

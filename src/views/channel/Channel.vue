<template>
  <div class="channel">
    <div class="banner">
      <div class="bannerImg">
        <img :src="banner.fullCover" alt="">
        <floatmsg :banner="banner"></floatmsg>
      </div>

        <div class="bannerbottom">
          <p class="videoBtn bai30_bold">videos</p>
          <p class="aboutBtn bai30_bold">about</p>
        </div>
    </div>

    <mycontent :videoCon="videoCon"></mycontent>
    <about></about>

  </div>

</template>

<script>
  import Floatmsg from './component/Floatmsg'
  import Content from './component/Content'
  import About from './component/About'
  import common from '../../sass/common.scss'

    export default {
        name: 'Channel',
        data() {
            return {
              id:this.$route.params.id,
              banner:{
                title:'',
                videos:'',
                subs:'',
                msg:'',
                fullCover:''
              },
              videoCon:[]
            }
        },
      created(){
          this.getChannelInfo();
          this.getvideo();
      },
      components:{
        Floatmsg,
        "mycontent":Content,
        About
      },
      methods:{
        getChannelInfo(){
          this.$ajax.get(`/channel/${this.id}`).then((res)=>{
            console.log(res);
            if(res.data.code === 0){
              this.banner.title = res.data.data.name;
              this.banner.msg = res.data.data.singleIntroduction;
              this.banner.subs = res.data.data.subscriptCount;
              this.banner.fullCover = res.data.data.fullCover;
//              console.log(res.data.data.singleIntroduction);
            }

          })

        },
        getvideo(){

          this.$ajax.get(`/channel/${this.id}/videos`).then((res)=>{
            console.log(res);
            if(res.data.code === 0){
              this.banner.videos= res.data.data.count;
//              console.log(res.data.data.singleIntroduction);
              this.videoCon= res.data.data.list;
              //console.log(this.videoCon);

            }

          })

        }



      }
    }
</script>


<style scoped lang="scss">
  /*@import "../../sass/common.scss";*/

  .channel{

    .banner{
      width: 100%;
      height:6.4rem;

      .bannerImg{
        position: relative;
        width:100%;
        height:5.4rem;

        img{
          width:100%;
          height:auto;
        }
      }

      .bannerbottom{
        width:100%;
        height:1rem;
        background: #000000;
        color: #fff;
        font-size:0.3rem;

        .videoBtn,.aboutBtn{
          width: 50%;
          height: 100%;
          line-height: 1rem;
          text-align: center;
          float: left;
        }
      }
    }

  }


</style>

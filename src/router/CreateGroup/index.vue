<template>
  <main class="create-group">
      <el-carousel indicator-position="outside" trigger="click">
          <el-carousel-item  class="group-1">
                <div>
                    <label>让工作更轻松</label>
                    <p>专为工作场景打造，Windows PC、Android、IOS三平台互动的沟通协作平台</p>
                </div>
                <img src="../../images/groups/5.png">
          </el-carousel-item>
          <el-carousel-item  class="group-1">
              <div>
                  <label>让工作更轻松</label>
                  <p>专为工作场景打造，Windows PC、Android、IOS三平台互动的沟通协作平台</p>
              </div>
              <img src="../../images/groups/5.png">
          </el-carousel-item>
      </el-carousel>
  </main>
</template>

<script>
  import { Carousel, CarouselItem } from 'element-ui';
  import Button from '../../components/Button.vue';

  export default {

    data () {
      document.title = '创建组织';
      return {

      };
    },
    components: {
      ElCarousel: Carousel,
      ElCarouselItem: CarouselItem,
      SButton: Button
    },
    methods: {

    }
  };
</script>
<style lang="scss">
    .create-group{
        >div{
            >div{
                height: 384px;
                >div{
                    text-align: center;
                    >div{
                        cursor: default;
                        margin: 40px 0 46px 0;
                        >label{
                            font-size: 20px;
                        }
                        >p{
                            color: rgb(153, 153, 153);
                            margin-top: 2px;
                        }
                    }
                }
                >.group-1{
                    >img{
                        animation-name:group1;
                        animation-duration: 1.2s;
                        animation-timing-function: ease;
                        animation-delay: 0s;
                        animation-iteration-count: 1;
                        animation-direction: normal;
                        animation-play-state: running;
                    }
                }
                >.group-2{
                    >img{
                        animation-name:group2;
                        animation-duration: 1.2s;
                        animation-timing-function: ease;
                        animation-delay: 0s;
                        animation-iteration-count: 1;
                        animation-direction: normal;
                        animation-play-state: running;
                    }
                }
            }
        }
    }
    /*动画效果1*/
    @keyframes group1 {
        0% {
            opacity: 0;
            transform:scale(0);
        }

        50%{
            opacity: 1;
            transform:scale(1.1);
        }

        100% {
            opacity: 1;
            transform:scale(1.0);
        }
    }
    /*动画效果2*/
    @keyframes group2 {
        0% {
            opacity: 0;
            transform:scale(0);
        }

        50%{
            opacity: 1;
            transform:scale(1.1);
        }

        100% {
            opacity: 1;
            transform:scale(1.0);
        }
    }
</style>

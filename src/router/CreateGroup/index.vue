<template>
  <main class="create-group">
      <div>
          <div  class="group-1" v-if="shows[0]">
                <div>
                    <label>让工作更轻松</label>
                    <p>专为工作场景打造，Windows PC、Android、IOS三平台互动的沟通协作平台</p>
                </div>
                <img src="../../images/groups/group1.png">
          </div>
          <div  class="group-2" v-if="shows[1]">
              <div>
                  <label>可管、可控、多级组织架构</label>
                  <p>满足集团型多层组织架构，结合组织架构可视化权限，迎合互联网时代，打造扁平化管理模式</p>
              </div>
              <section>
                  <div class="bgp"></div>
                  <div class="star-1"></div>
                  <div class="star-2"></div>
                  <div class="star-3"></div>
                  <div class="bgp-1"></div>
                  <div class="bgp-2"></div>
                  <div class="head-1"></div>
                  <div class="head-2"></div>
                  <div class="head-3"></div>
                  <div class="head-4"></div>
                  <div class="head-5"></div>
                  <div class="head-6"></div>
                  <div class="head-7"></div>
                  <div class="head-8"></div>
                  <div class="head-9"></div>
              </section>
          </div>
          <div  class="group-3" v-if="shows[2]">
              <div>
                  <label>企业信息化统一入口</label>
                  <p>无缝集成外部信息化系统，以工作协作为核心,提供及时通信，知识管理，任务管理，工作流等功能，可覆盖90%的办公场景</p>
              </div>
              <section>
                  <s class="news">信息化<br>系统</s>
                  <div class="crm">CRM</div>
                  <div class="bpm">BPM</div>
                  <div class="email">email</div>
                  <div class="people">人事</div>
                  <div class="out">外勤</div>
                  <div class="oa">OA</div>
              </section>
          </div>
          <div  class="group-4" v-if="shows[3]">
              <div>
                  <label>1080P 30FPS全清音视频通话</label>
                  <p>结合专用音视频配件，百闻不如一见，流畅的高清视频通话可瞬间拉近沟通距离</p>
              </div>
              <section>
                  <div class="bgp1"></div>
                  <div class="bgp2"></div>
                  <div class="star-1"></div>
                  <div class="star-2"></div>
                  <div class="star-3"></div>
                  <div class="star-4"></div>
                  <div class="star-5"></div>
                  <div class="point point-1"></div>
                  <div class="point point-2"></div>
                  <div class="point point-3"></div>
              </section>
          </div>
          <div  class="group-5" v-if="shows[4]">
              <div>
                  <label>应用市场</label>
                  <p>拥有类似微信企业号的开放式接入平台服务，期待更多的应用厂家接入</p>
              </div>
              <section>
                  <img src="../../images/groups/group5-1.png" class="img-1">
                  <img src="../../images/groups/group5-2.png" class="img-2">
                  <img src="../../images/groups/group5-3.png" class="img-3">
                  <img src="../../images/groups/group5-4.png" class="img-4">
                  <img src="../../images/groups/group5-5.png" class="img-5">
              </section>
          </div>
          <div  class="group-6" v-if="shows[5]">
              <div>
                  <label>App工厂</label>
                  <p>零代码、零研发、零运维，打造专属你品牌的APP，满足Windows PC、Android、iOS三大平台</p>
              </div>
              <section>
                  <img src="../../images/groups/group6-1.png" class="img-1">
                  <img src="../../images/groups/group6-2.png" class="img-2">
                  <img src="../../images/groups/group6-3.png" class="img-3">
              </section>
          </div>
      </div>
      <ul>
         <li v-for="(item , index) in 6" :class="shows[index]?'active':''" @click="selectPic(index);">
             <button></button>
         </li>
      </ul>
      <footer>
          <div class="button-1">
              <s-button :disabled="button1.disabled" :label="button1.label"></s-button>
              <s></s>
          </div>
          <div class="button-2">
              <s-button :disabled="button2.disabled" :label="button2.label" class="button-2"></s-button>
              <s></s>
          </div>
      </footer>
  </main>
</template>

<script>
  import Button from '../../components/Button.vue';

  export default {

    data () {
      document.title = '创建组织';
      return {
        interval: {},
        timeout: {},
        show_index: 1,
        shows: [true, false, false, false, false, false],
        button1: {
          label: '创建我的组织'
        },
        button2: {
          label: '申请加入组织'
        }
      };
    },
    components: {
      SButton: Button
    },
    methods: {
      start () {
        this.interval = setInterval(() => {
          this.shows = [false, false, false, false, false, false];
          this.shows[this.show_index % 6] = true;
          this.show_index++;
        }, 3000);
      },
      selectPic (index) {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        this.shows = [false, false, false, false, false, false];
        this.shows[index] = true;
        this.timeout = setTimeout(() => {
          this.show_index = index++;
          this.start();
        }, 3000);
      }
    },
    mounted () {
      this.start();
    }
  };
</script>
<style lang="scss">
    .create-group{
        >div{
            height: 384px;
            position: relative;
            text-align: center;
            >div{
                text-align: center;
                >div{
                    cursor: default;
                    margin: 0 0 46px 0;
                    padding-top: 40px;
                    >label{
                        font-size: 20px;
                    }
                    >p{
                        color: rgb(153, 153, 153);
                        margin-top: 2px;
                        font-size: 14px;
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
                >section{
                    position: relative;
                    width: 514px;
                    display: inline-block;
                    >.bgp{
                         height: 200px;
                         width: 200px;
                         background-color: #47a3ed;
                         border-radius: 50%;
                         display: inline-block;
                    }
                    >.star-1{
                         z-index: -1;
                         background: url(../../images/groups/group2-12.png) no-repeat;
                         height: 49px;
                         width: 58px;
                         position: absolute;
                         left: 143px;
                         top: -25px;
                         animation-name: group2-1;
                         animation-duration: 8s;
                         animation-timing-function: linear;
                         animation-delay: 0s;
                         animation-iteration-count: infinite;
                         animation-direction: alternate;
                         animation-play-state: running;
                     }
                    >.star-2{
                         z-index: -1;
                         background: url(../../images/groups/group2-13.png) no-repeat;
                         height: 79px;
                         width: 70px;
                         position: absolute;
                         left: 114px;
                         top: 126px;
                         animation-name: group2-2;
                         animation-duration: 9s;
                         animation-timing-function: linear;
                         animation-delay: 0.5s;
                         animation-iteration-count: infinite;
                         animation-direction: alternate;
                         animation-play-state: running;
                     }
                    >.star-3{
                         z-index: -1;
                         background: url(../../images/groups/group2-14.png) no-repeat;
                         height: 70px;
                         width: 76px;
                         position: absolute;
                         left: 333px;
                         top: 128px;
                         animation-name: group2-3;
                         animation-duration: 10s;
                         animation-timing-function: linear;
                         animation-delay: 1s;
                         animation-iteration-count: infinite;
                         animation-direction: alternate;
                         animation-play-state: running;
                     }
                    >.bgp-1{
                         background: url(../../images/groups/group2-1.png) no-repeat;
                         width: 121px;
                         height: 35px;
                         left: 191px;
                         top: 17px;
                         position: absolute;
                         animation-name: group2-4;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.bgp-2{
                         background: url(../../images/groups/group2-2.png) no-repeat;
                         width: 159px;
                         height: 35px;
                         left: 172px;
                         top: 89px;
                         position: absolute;
                         animation-name: group2-5;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-1{
                         background: url(../../images/groups/group2-3.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 238px;
                         top: -15px;
                         animation-name: group2-6;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-2{
                         background: url(../../images/groups/group2-4.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 178px;
                         top: 55px;
                         animation-name: group2-7;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-3{
                         background: url(../../images/groups/group2-5.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 237px;
                         top: 55px;
                         animation-name: group2-8;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-4{
                         background: url(../../images/groups/group2-6.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 293px;
                         top: 55px;
                         animation-name: group2-9;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-5{
                         background: url(../../images/groups/group2-7.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 160px;
                         top: 129px;
                         animation-name: group2-10;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-6{
                         background: url(../../images/groups/group2-8.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 198px;
                         top: 129px;
                         animation-name: group2-11;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-7{
                         background: url(../../images/groups/group2-9.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 237px;
                         top: 129px;
                         animation-name: group2-12;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-8{
                         background: url(../../images/groups/group2-10.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 276px;
                         top: 129px;
                         animation-name: group2-13;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }
                    >.head-9{
                         background: url(../../images/groups/group2-11.png) no-repeat;
                         height: 30px;
                         width: 30px;
                         position: absolute;
                         left: 314px;
                         top: 129px;
                         animation-name: group2-14;
                         animation-duration: 1.1s;
                         animation-timing-function: ease;
                         animation-delay: 0s;
                         animation-iteration-count: 1;
                         animation-direction: normal;
                         animation-play-state: running;
                     }

                }
            }
            >.group-3{
                >section{
                     height: 200px;
                     width: 200px;
                     border-style: dotted;
                     border-radius: 50%;
                     border-width: 2px;
                     border-color: #C6C6C6;
                     display: inline-block;
                     position: relative;
                     >s{
                          background: url(../../images/groups/group3-1.png) no-repeat;
                          height: 116px;
                          width: 116px;
                          display: inline-block;
                          color: white;
                          font-size: 14px;
                          padding-top: 36px;
                          text-decoration: none;
                          margin-top: 44px;
                      }
                     >div{
                          height: 40px;
                          width: 40px;
                          position: absolute;
                          border-radius: 50%;
                          color: #FFF;
                          line-height: 40px;
                          &.crm{
                               background-color: #2BC7A0;
                               top: 0px;
                               left: 136px;
                               animation: 1.2s ease 0s 1 normal running group3-1;
                           }
                          &.bpm{
                               background-color: #2ECC71;
                               top: 80px;
                               left: 180px;
                               animation: 1.3s ease 0s 1 normal running group3-2;
                          }
                          &.email{
                               background-color: #47A3ED;
                               top: 162px;
                               left: 136px;
                               animation: 1.4s ease 0s 1 normal running group3-3;
                          }
                          &.people{
                               background-color: #2BC7A0;
                               top: 162px;
                               left: 20px;
                               animation: 1.5s ease 0s 1 normal running group3-4;
                          }
                          &.out{
                               background-color: #FFA339;
                               top: 80px;
                               left: -20px;
                               animation: 1.6s ease 0s 1 normal running group3-5;
                          }
                          &.oa{
                               background-color: #47A3ED;
                               top: 0px;
                               left: 18px;
                               animation: 1.7s ease 0s 1 normal running group3-6;
                          }

                      }
                 }
             }
            >.group-4{
                >section{
                     height: 201px;
                     width: 207px;
                     display: inline-block;
                     position: relative;
                     background: url(../../images/groups/group4-1.png) no-repeat;
                     >.bgp1{
                          background: url(../../images/groups/group4-2.png) no-repeat;
                          height: 32px;
                          width: 32px;
                          position: absolute;
                          z-index: 2;
                          top: 97px;
                          left: 8px;
                          animation: 1.2s ease 0s 1 normal running group4-1;
                     }
                     >.bgp2{
                          background: url(../../images/groups/group4-3.png) no-repeat;
                          height: 107px;
                          width: 190px;
                          position: absolute;
                          top: 22px;
                          left: 8px;
                          animation: 1.2s ease 0s 1 normal running group4-2;
                      }
                     >.star-1{
                          background: url(../../images/groups/group4-4.png) no-repeat;
                          height: 17px;
                          width: 12px;
                          position: absolute;
                          top: 24px;
                          left: 233px;
                          animation: 1s ease 0s infinite alternate running group4-3;
                      }
                     >.star-2{
                          background: url(../../images/groups/group4-5.png) no-repeat;
                          height: 16px;
                          width: 11px;
                          position: absolute;
                          top: 97px;
                          left: -24px;
                          animation: 1s ease 0s infinite alternate running group4-3;
                      }
                     >.star-3{
                          background: url(../../images/groups/group4-6.png) no-repeat;
                          height: 17px;
                          width: 12px;
                          top: 123px;
                          left: 214px;
                          position: absolute;
                          animation: 1s ease 0s infinite alternate running group4-3;
                     }
                     >.star-4{
                          background: url(../../images/groups/group4-7.png) no-repeat;
                          height: 35px;
                          width: 24px;
                          position: absolute;
                          top: 1px;
                          left: 210px;
                          animation: 1s ease 0s infinite alternate running group4-3;
                      }
                     >.star-5{
                          background: url(../../images/groups/group4-8.png) no-repeat;
                          height: 16px;
                          width: 11px;
                          position: absolute;
                          top: 141px;
                          left: 187px;
                          animation: 1s ease 0s infinite alternate running group4-3;
                     }
                     >.point{
                          opacity: 0;
                          height: 3px;
                          width: 3px;
                          position: absolute;
                          background-color: #999;
                          border-radius: 50%;
                          top: 99px;
                          &.point-1{
                               left: 89px;
                               animation: 1s ease 0s 1 alternate running group4-4;
                          }
                          &.point-2{
                               left: 101px;
                               animation: 1s ease 0s 1 alternate running group4-5;
                          }
                          &.point-3{
                               left: 113px;
                               animation: 1s ease 0s 1 alternate running group4-6;
                          }
                     }
                }
            }
            >.group-5{
                >section{
                     height: 205px;
                     width: 205px;
                     border-radius: 50%;
                     background-color: #6E7DD8;
                     display: inline-block;
                     position: relative;
                     >img{
                       position: absolute;
                       &.img-1{
                            top: -2px;
                            left: 35px;
                            animation: 0.5s ease 0s 1 normal running group5-1;
                       }
                       &.img-2{
                            top: 106px;
                            left: 140px;
                            animation: 0.5s ease 0.2s 1 normal running group5-2;
                       }
                       &.img-3{
                            top: -8px;
                            left: -8px;
                            animation: 0.5s ease 0.4s 1 normal running group5-3;
                       }
                       &.img-4{
                            top: -13px;
                            left: 140px;
                            animation: 0.5s ease 0.1s 1 normal running group5-4;
                       }
                       &.img-5{
                            top: 132px;
                            left: -18px;
                            animation: 0.5s ease 0.3s 1 normal running group5-5;
                       }
                     }
                }
             }
            >.group-6{
                >section{
                    height: 207px;
                    width: 207px;
                    display: inline-block;
                    position: relative;
                    background: url(../../images/groups/group6-4.png) no-repeat;
                    >img{
                        position: absolute;
                        &.img-1{
                            top: 68px;
                            left: 63px;
                        }
                        &.img-2{
                            top: 128px;
                            left: 110px;
                            animation: 5s linear 0s infinite normal running group6-2;
                        }
                        &.img-3{
                            top: 129px;
                            left: 63px;
                            animation: 6.875s linear 0s infinite normal running group6-1;
                        }
                    }
                }
            }
        }
        >ul{
            bottom: 26px;
            text-align: center;
            position: static;
            transform: none;
            list-style: none;
            left: 50%;
            margin: 0;
            padding: 0;
            z-index: 2;
            >li{
                display: inline-block;
                background-color: transparent;
                padding: 12px 4px;
                cursor: pointer;
                >button{
                    border: none;
                    padding: 0;
                    width: 30px;
                    height: 2px;
                    display: block;
                    background-color: #8391a5;
                    opacity: .24;
                    outline: 0;
                    margin: 0;
                    cursor: pointer;
                    transition: .3s;
                }
                &:hover{
                    >button{
                        opacity: .7;
                    }
                }
                &.active{
                    >button{
                        opacity: 1;
                    }
                }
            }
        }
        >footer{
            display: flex;
            text-align: center;
            margin: auto;
            width: 440px;
            margin-top: 65px;
            >div{
                width: 200px;
                position: relative;
                >s{
                    display: inline-block;
                    background: url(../../images/bgp-group.png) no-repeat;
                    height: 20px;
                    width: 20px;
                    position: absolute;
                }
            }
            >.button-1{
                margin-right: 40px;
                >s{
                    background-position: -84px -28px;
                    top: 7px;
                    left: 26px;
                }
            }
            >.button-2{
                >s{
                    background-position: -27px -28px;
                    top: 7px;
                    left: 26px;
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
    @keyframes group2-1 {
        0% {
            transform:scale(0.8);
            transform:skew(0deg,0deg);
        }
        33%{
            transform:scale(1.2);
            transform:skew(20deg,20deg);
            left: 55px;
            top: 3px;
        }
        66%{
            transform:scale(1.0);
            transform:skew(-20deg,-20deg);
            left: 5px;
            top: 50px;
        }
        100% {
            transform:scale(0.8);
            left: 155px;
            top: 103px;
        }
    }
    @keyframes group2-2 {
        0% {
            transform:scale(0.8);
            transform:skew(0deg,0deg);
        }
        33%{
            transform:scale(1.2);
            transform:skew(20deg,20deg);
            left: 50px;
            top: 200px;
        }
        66%{
            transform:scale(1.0);
            transform:skew(-20deg,-20deg);
            left: 0px;
            top: 100px;
        }
        100% {
            transform:scale(0.8);
            left: 107px;
            top: 106px;
        }
    }
    @keyframes group2-3 {
        0% {
            transform:scale(0.8);
            transform:skew(0deg,0deg);
        }
        25%{
            transform:scale(1.0);
            transform:skew(-10deg,-10deg);
            left: 462px;
            top: -10px;
        }
        50%{
            transform:scale(1.2);
            transform:skew(20deg,20deg);
            left: 450px;
            top: 150px;
        }
        75%{
            transform:scale(1.0);
            transform:skew(-10deg,-10deg);
            left: 358px;
            top: 84px;
        }
        100% {
            transform:scale(0.8);
            transform:skew(0deg,0deg);
            left: 308px;
            top: 134px;
        }
    }
    @keyframes group2-4 {
        0% {
            height:0px;

        }
        9.09%{
            height:0px;
        }
        18.18%{
            height:35px;
        }
        100% {
            height:35px;
        }
    }
    @keyframes group2-5 {
        0% {
            height:0px;

        }
        45.45%{
            height:0px;
        }
        54.54%{
            height:35px;
        }
        100% {
            height:35px;
        }
    }
    @keyframes group2-6 {
        0% {
            height:0px;
        }
        9.09%{
            height:30px;
            transform:scale(1.1);
        }
        18.18%{
            transform:scale(1.0);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-7 {
        0% {
            height:0px;
        }
        18.18%{
            height:0px;
        }
        27.27%{
            height:30px;
            transform:scale(1.1);
        }
        36.36%{
            height:30px;
            transform:scale(1.0);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-8 {
        0% {
            height:0px;
        }

        27.27%{
            height:0px;
        }
        36.36%{
            height:30px;
            transform:scale(1.1);
        }
        45.45%{
            height:30px;
            transform:scale(1.0);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-9 {
        0% {
            height:0px;
        }
        36.36%{
            height:0px;
        }
        45.45%{
            height:30px;
            transform:scale(1.1);
        }
        54.54%{
            transform:scale(1.0);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-10 {
        0% {
            height:0px;
        }

        54.54%{
            height:0px;
        }
        63.63%{
            height:30px;
            transform:scale(1.1);
        }
        72.72%{
            height:30px;
            transform:scale(1.0);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-11 {
        0% {
            height:0px;
        }
        63.63%{
            height:0px;
        }
        72.72%{
            height:30px;
            transform:scale(1.1);
        }
        81.81%{
            height:30px;
            transform:scale(1.0);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-12 {
        0% {
            height:0px;
        }

        72.72%{
            height:0px;
        }
        81.81%{
            height:30px;
            transform:scale(1.1);
        }
        90.90%{
            height:30px;
            transform:scale(1.0);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-13 {
        0% {
            height:0px;
        }


        81.81%{
            height:0px;
        }
        90.90%{
            height:30px;
            transform:scale(1.1);
        }
        100% {
            height:30px;
            transform:scale(1.0);
        }
    }
    @keyframes group2-14 {
        0% {
            height:0px;
        }
        90.90%{
            height:0px;
        }
        100% {
            height:30px;
            transform:scale(1.1);
        }
    }
    /*动画效果3*/
    @keyframes group3-1 {
        0% {
            opacity: 0;

        }
        50%{
            opacity: 0;
            transform:scale(0);
        }
        75%{ transform:scale(1.2);}
        100% {
            opacity: 1;
            transform:scale(1);
        }
    }
    @keyframes group3-2 {
        0% {
            opacity: 0;

        }
        50%{
            opacity: 0;
            transform:scale(0);
        }
        75%{
            transform:scale(1.2);
        }
        100% {
            opacity: 1;
            transform:scale(1);
        }
    }
    @keyframes group3-3 {
        0% {
            opacity: 0;

        }
        66%{
            opacity: 0;
            transform:scale(0);
        }
        83%{
            transform:scale(1.2);
        }
        100% {
            transform:scale(1);
            opacity: 1;
        }
    }
    @keyframes group3-4 {
        0% {
            opacity: 0;

        }
        75%{
            opacity: 0;
            transform:scale(0);
        }
        87.5%{
            transform:scale(1.2);
        }
        100% {
            transform:scale(1);
            opacity: 1;
        }
    }
    @keyframes group3-5 {
        0% {
            opacity: 0;

        }
        80%{
            opacity: 0;
            transform:scale(0);
        }
        90%{
            transform:scale(1.2);
        }
        100% {
            transform:scale(1);
            opacity: 1;
        }
    }
    @keyframes group3-6 {
        0% {
            opacity: 0;

        }
        83%{
            opacity: 0;
            transform:scale(0);
        }
        91.75%{
            transform:scale(1.2);
        }
        100% {
            transform:scale(1);
            opacity: 1;
        }
    }
    /*动画效果4*/
    @keyframes group4-1 {
        0% {
            top: 50px;
            left: 88px;
        }
        83.33%{
            top: 97px;
            left: 8px;
            transform:scale(1.0);
        }
        90%{
            transform:scale(1.1);
        }
        98%{
            top: 101px;
            left: 4px;
            transform:scale(1.0);
        }
        100% {
            top: 97px;
            left: 8px;
            transform:scale(1.0);
        }
    }
    @keyframes group4-2 {
        0% {
            opacity: 0;
        }
        90%{
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
    @keyframes group4-3 {
        0% {
            opacity: 0;

        }
        50%{

            transform:scale(1.2);
        }

        100% {
            transform:scale(1);
            opacity: 1;
        }
    }
    @keyframes group4-4 {
        0%{
            opacity: 0;
        }
        16.665%{
            transform:scale(1.2);
            opacity: 1;
        }
        33.33%{
            transform:scale(1.0);
            opacity: 1;
        }
        66.67%{
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes group4-5 {
        0%{
            opacity: 0;
        }
        33.33%{
            opacity: 0;
        }
        50%{
            transform:scale(1.2);
            opacity: 1;
        }
        66.67%{
            transform:scale(1.0);
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes group4-6 {
        0%{
            opacity: 0;
        }
        33.33%{
            opacity: 0;
        }
        66.67%{
            opacity: 0;
        }
        83.33%{
            transform:scale(1.2);
            opacity: 1;
        }
        100%{
            transform:scale(1.0);
            opacity: 1;
        }
    }
    /*动画效果5*/
    @keyframes group5-1 {
        0% {
            opacity: 0;
            top: 206px;
            left: 35px;
        }
        100% {
            opacity: 1;
            top: -2px;
            left: 35px;
        }
    }
    @keyframes group5-2 {
        0% {
            opacity: 0;
            top: 146px;
            left: 180px;
        }
        75% {
            top: 106px;
            left: 140px;
            opacity: 1;
        }
        87.5% {
            transform:scale(1.2);
        }
        100%{
            transform:scale(1.0);
        }
    }
    @keyframes group5-3 {
        0% {
            opacity: 0;
            top: -48px;
            left: -48px;
        }
        75% {
            top: -8px;
            left: -8px;
            opacity: 1;
        }
        87.5% {
            transform:scale(1.2);
        }
        100%{
            transform:scale(1.0);
        }
    }
    @keyframes group5-4 {
        0% {
            top: -53px;
            left: 180px;
            opacity: 0;
        }
        75% {
            top: -13px;
            left: 140px;
            opacity: 1;
        }
        87.5%{
            transform:scale(1.2);
        }
        100% {
            transform:scale(1.0);
        }
    }
    @keyframes group5-5 {
        0% {
            top: 172px;
            left: -58px;
            opacity: 0;
        }
        75% {
            top: 132px;
            left: -18px;
            opacity: 1;
        }
        87.5%{
            transform:scale(1.2);
        }
        100% {
            transform:scale(1.0);
        }
    }
    /*动画效果6*/
    @keyframes group6-1 {
        0%   {transform:rotate(0deg);}
        25%  {transform:rotate(90deg);}
        50%  {transform:rotate(180deg);}
        75%  {transform:rotate(270deg);}
        100% {transform:rotate(360deg);}
    }
    @keyframes group6-2 {
        0%   {transform:rotate(0deg);}
        25%  {transform:rotate(-90deg);}
        50%  {transform:rotate(-180deg);}
        75%  {transform:rotate(-270deg);}
        100% {transform:rotate(-360deg);}
    }
</style>

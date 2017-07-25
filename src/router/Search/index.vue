<template>
  <main class="search">
    <header>
      <span :class="isOk?'active':''"><label @click="click">添加好友</label></span>
      <span :class="isOk?'':'active'"><label @click="click">申请入群</label></span>
    </header>
    <section >
      <div class="input">
        <input :placeholder="search.input.placeholder">
        <!--<s @mousehover=""></s>-->
        <button>查找</button>
      </div>
      <div class="content" v-show="search.show">
        <div>
          <img src="../../images/search/search-3.png">
          <ul>
            <li><label>姓名</label><span>：{{search.content.user.name}}</span></li>
            <li><label>UC号</label><span>：{{search.content.user.number}}</span></li>
            <li><label>签名</label><span>：{{search.content.user.sign}}</span></li>
          </ul>
        </div>
        <p>验证信息：{{search.content.user.verify}}</p>
        <footer>
          <button>邀请</button>
        </footer>
      </div>
      <div class="tips" v-show="search.show">
        <label>专注团队内部沟通</label>
        <p>请输入完整手机号/账号添加好友</p>
      </div>
      <ul v-show="!search.show">
        <li v-for="item in 10">
          <img src="../../images/search/search-1.png">
          <div>
            <label>测试111</label>
            <p>群公告：唱儿歌</p>
          </div>
          <button>加群</button>
        </li>
      </ul>
    </section>


  </main>
</template>

<script>
  import VueQRCodeComponent from 'vue-qrcode-component';
  export default {

    data () {
      document.title = '查找好友、群组';
      return {
        isOk: true,
        search: {
          show: false,
          input: {
            placeholder: '请输入手机号/ID',
            class: ''
          },
          content: {
            user: {
              name: '黄志萍',
              number: '66346234',
              sign: '这个家伙很懒，没有个性签名',
              verify: '我是张飞，请求添加您为好友。'
            }
          }
        }
      };
    },
    components: {
      QrCode: VueQRCodeComponent
    },
    methods: {
      click () {
        this.isOk = !this.isOk;
      }
    }
  };
</script>
<style lang="scss">
    .search{
      text-align: center;
      color: #333;
      font-size: 14px;
      >header{
        background-color: #f2f2f2;
        height: 35px;
        line-height: 35px;
        display: flex;
        >span{
          display: block;
          flex: 1;
          >label{
            display: inline-block;
            width: 50%;
            transition: 0.2s;
          }
          &.active{
            color: #3a95de;
            >label{
              border-bottom: solid 2px #3a95de;
            }
          }
        }
      }
      >section{
        >.input{
          display: flex;
          padding: 15px 20px;
          >input{
            flex: 1;
            height: 32px;
            padding: 0 10px;
            border: solid 1px #d6d6d6;
            border-right-width: 0;
            border-bottom-left-radius: 2px;
            border-top-left-radius: 2px;
            &:hover,&:focus{
              border: solid 1px #3a95de;
            }
          }
          >s{
            display: inline-block;
            background: url(../../images/search/search-bgp.png) no-repeat;
            width: 22px;
            height: 32px;
            background-position: -165px -82px;
            border: solid 1px #d6d6d6;
            border-left-width: 0;
            border-right-width: 0;
            &.hover,&:focus{
              background-position: -27px -82px;
            }
          }
          >button{
            width: 90px;
            height: 34px;
            border: 0;
            color: #ffffff;
            background-color: #3a95de;
            border-bottom-right-radius: 2px;
            border-top-right-radius: 2px;
          }
        }
        >.content{
          font-size: 12px;
          >div{
            display: flex;
            padding: 0 20px;
            >img{
              width: 100px;
              height: 100px;
            }
            >ul{
              list-style: none;
              flex: 1;
              padding: 10px 0 0 30px;
              >li{
                text-align: left;
                margin-bottom: 15px;
                >label{
                  text-align-last: justify;
                  width: 54px;
                  display: inline-block;
                }
                &:last-child{
                  margin-bottom: 0;
                }
              }
            }
          }
          >p{
            text-align: left;
            padding-left: 20px;
            padding-top: 20px;
          }
          >footer{
            position: absolute;
            bottom: 0;
            height: 54px;
            width: 100%;
            background-color: #f2f2f2;
            >button{
              position: absolute;
              right: 20px;
              height: 34px;
              width: 90px;
              border-width: 0;
              background-color: #3a95de;
              color: #fff;
              bottom: 10px;
              border-radius: 2px;
            }
          }
        }
        >.tips{
          color: #999;
          margin-top: 100px;
          >label{
            font-size: 17px;
          }
          >p{
            font-size: 12px;
            margin-top: 10px;
          }
        }
        >ul{
          >li{
            display: flex;
            padding: 10px 20px;
            height: 40px;
            border-bottom: solid 1px #e5e5e5;
            >img{
              width: 40px;
              height: 40px;
            }
            >div{
              flex: 1;
              text-align: left;
              padding-left: 10px;
              >label{
                display: inline-block;
                padding: 5px 0;
              }
              >p{
                color: #a2a7aa;
                font-size: 12px;
              }
            }
            >button{
              width: 50px;
              height: 20px;
              background-color: #3a95de;
              border-width: 0;
              color: #fff;
              border-radius: 2px;
              font-size: 12px;
              margin-top: 10px;
            }
          }
        }
      }
    }

</style>

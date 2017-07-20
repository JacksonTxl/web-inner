<template>
  <main class="search">
    <header>
      <span :class="isOk?'active':''"><label @click="click">添加好友</label></span>
      <span :class="isOk?'':'active'"><label @click="click">申请入群</label></span>
    </header>
    <section>
      <div>
        <input placeholder="请输入手机号/ID">
        <!--<img src="../../images/transfer/transfer-1.jpg">-->
        <button>查找</button>
      </div>
      <div>

      </div>

    </section>
    <footer>
      <button>邀请</button>
    </footer>
    <div class="tips">

    </div>
  </main>
</template>

<script>
  import VueQRCodeComponent from 'vue-qrcode-component';
  export default {

    data () {
      document.title = '查找好友、群组';
      return {
        isOk: true,
        value: 'https://www.baidu.com',
        size: 133
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

    }

</style>

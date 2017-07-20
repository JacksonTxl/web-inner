<template>
  <main class="transfer">
    <div class="head">
      <img src="../../images/transfer/transfer-1.jpg">
      <qr-code :text="value" :size="size"></qr-code>
    </div>
    <img src="../../images/transfer/transfer-2.png">
    <button>传送文件</button>
  </main>
</template>

<script>
  import VueQRCodeComponent from 'vue-qrcode-component';
  export default {

    data () {
      document.title = '传送文件';
      return {
        value: 'https://www.baidu.com',
        size: 133
      };
    },
    components: {
      QrCode: VueQRCodeComponent
    },
    methods: {

    }
  };
</script>
<style lang="scss">
    .transfer{
        text-align: center;
      >.head{
           position: relative;
           display: inline-block;
         >img{
              border-bottom: 1px solid #e5e5e5;
         }
         >div{
              width: 133px;
              height: 133px;
              position: absolute;
              top: 73px;
              right: 71px;
              padding: 3px;
              background: #fff;
         }

      }
      >img{
           margin-top: 30px;
      }
      >button{
           display: block;
           width: 218px;
           height: 38px;
           margin: auto;
           text-decoration: none;
           outline: none;
           cursor: pointer;
           border: 1px solid #bdbdbd;
           border-radius: 2px;
           background: #e9e9e9;
           font-size: 14px;
           line-height: 38px;
           text-align: center;
           color: #333;
           margin-top: 30px;
      }

    }

</style>

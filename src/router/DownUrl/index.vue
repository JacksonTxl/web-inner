<template>
  <main class="down-url">
      <qr-code :text="value" :size="size"></qr-code>
      <h4>扫一扫下载移动客户端</h4>
      <p>
          支持系统：<s class="ios"></s>IOS<s class="android"></s>Android
      </p>
      <s-button :disabled="button.disabled" :label="button.label"></s-button>
  </main>
</template>

<script>
  import VueQRCodeComponent from 'vue-qrcode-component';
  import Button from '../../components/Button.vue';

  export default {

    data () {
      document.title = '扫一扫下载客户端';
      return {
        value: 'https://www.baidu.com',
        size: 128,
        button: {
          label: '返回',
          disabled: {}
        }
      };
    },
    components: {
      QrCode: VueQRCodeComponent,
      SButton: Button
    },
    methods: {

    }
  };
</script>
<style lang="scss">
   .down-url{
       padding: 45px 0px 0px 0px;
       min-width: 294px;
       color: rgb(102,102,102);
       text-align: center;
       >div{
            border: 1px solid rgb(58,149,222);
            width: 128px;
            margin-left: calc(50% - 64px);
            padding:4px;
       }
       >h4{
             margin-top: 15px;
       }
       >p{
            margin-top: 5px;
            font-size: 14px;
            line-height: 36px;
            display: block;
            >s{
                 background: url(../../images/bg.png) no-repeat;
                 height: 32px;
                 width: 24px;
                 display: inline-block;
                 margin-bottom: -7px;
                 &.ios{
                      background-position: -249px -243px;
                 }
                 &.android{
                      margin-left: 25px;
                      background-position: -337px -242px;
                 }
   }
       }
       >.pro-button{
            width: 245px;
            display: inline-block;
            margin-top: 5px;
       }
   }
</style>

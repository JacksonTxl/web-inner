<template>
  <main>
    <e-success @click="hello" :tips="tips" :button="button1"></e-success>
    <e-button :label="button.label" :disabled="button.disabled" @click="hello"></e-button>
  </main>
</template>

<script>
  import Button from '../../components/Button.vue';
  import Success from '../../components/Success.vue';
  import { AES, enc } from 'crypto-js';

  export default {
    data () {
      return {
        button: {
          label: 'test1',
          disabled: {

          }
        },
        button1: {
          label: '马上登录',
          disabled: {

          }
        },
        tips: {
          label: '注册账号成功!',
          p: '您的登录账号：18201962479',
          show: true
        }
      };

    },
    components: {
      EButton: Button,
      ESuccess: Success
    },
    methods: {
      hello () {
        // Encrypt
        var ciphertext = AES.encrypt('my message', 'iwanli');

        // Decrypt
        var bytes = AES.decrypt(ciphertext.toString(), 'iwanli');
        var plaintext = bytes.toString(enc.Utf8);

        console.log(ciphertext.toString());
        console.log(plaintext);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .div1{
    background-color : red;
  }
</style>

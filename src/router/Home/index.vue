<template>
  <main>
    <e-success @click="hello" :tips="tips" :button="button1"></e-success>
    <e-button :label="button.label" :disabled="button.disabled" @click="hello"></e-button>
  </main>
</template>

<script>
  import Button from '../../components/Button.vue';
  import Success from '../../components/Success.vue';
  import CONSTANT from '../../util/constant';
  import CryptoJS from 'crypto-js';

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
        var JsonFormatter={
              stringify: function (cipherParams) {
                  // create json object with ciphertext
                  var jsonObj = {
                      ct: cipherParams.ciphertext.toString(CryptoJS.enc.Hex)
                  };
                  // optionally add iv and salt
                  if (cipherParams.iv) {
                      jsonObj.iv = cipherParams.iv.toString();
                  }
                  if (cipherParams.salt) {
                      jsonObj.s = cipherParams.salt.toString();
                  }

                  // stringify json object
                  return JSON.stringify(jsonObj);
              },
              parse: function (jsonStr) {
                  // parse json string
                  var jsonObj = JSON.parse(jsonStr);
                  // extract ciphertext from json object, and create cipher params object
                  var cipherParams = CryptoJS.lib.CipherParams.create({
                      ciphertext: CryptoJS.enc.Hex.parse(jsonObj.ct)
                  });
                  // optionally extract iv and salt
                  if (jsonObj.iv) {
                      cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
                  }
                  if (jsonObj.s) {
                      cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
                  }
                  return cipherParams;
              }
          }
        var pwd =  CryptoJS.enc.Hex.parse("CLrcoE0000000000");//密码必须用Hex或其他方式处理为byte数组，如果直接使用字符串，CryptoJS会用加盐的方法重新生成密码，而且加的盐是随机数，这样在java端就没法解秘了。
        var iv = CryptoJS.enc.Hex.parse('CLrcoE0000000000');//iv在java中必须为16byte长，所以js中也必须设置为相同的长度，否则加密后的结果在java中无法解密。
        var setting={
            iv:iv,
            //mode:CryptoJS.mode.CBC, //默认值，可以不设置
            //padding:CryptoJS.pad.Pkcs7,//同上
            format: JsonFormatter};
        var mi=CryptoJS.AES.encrypt('123456',pwd, setting);
          mi=JSON.parse(mi.toString());//mi本身是个对象，而且内部属性循环引用，所以不用直接用JSON处理，需要先toString()。因为我们设置过format，所以得到一个son字符串，这样可以获得密文和iv。
//          args.data=mi.ct;
          console.log(mi.ct);
          // Encrypt
//        var ciphertext = AES.encrypt('123456', 'CLrcoE0000000000', 'BC');
//
//        // Decrypt
//        var bytes = AES.decrypt(ciphertext.toString(), 'CLrcoE0000000000', 'BC');
//        var plaintext = bytes.toString(enc.Utf8);
//
//        console.log(ciphertext.toString());
//        console.log(plaintext);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .div1{
    background-color : red;
  }
</style>

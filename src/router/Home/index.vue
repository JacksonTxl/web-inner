<template>
  <main>
    <e-button :label="button.label" :disabled="button.disabled" :click="hello"></e-button>
  </main>
</template>

<script>
  import Button from '../../components/Button.vue';
  import { AES, enc } from 'crypto-js';

  export default {
    data () {
      return {
        button: {
          label: 'test1',
          disabled: {

          }
        }
      };

    },
    components: {
      EButton: Button
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

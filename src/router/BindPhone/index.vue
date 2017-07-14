<template>
  <main class="bind-phone">
      <s-input placeholder="手机号" type="text" :isCode="false" :maxlength="11" :params="phone_num"></s-input>
      <s-input placeholder="验证码" type="text" :isCode="true" :maxlength="4" :params="code"></s-input>
      <s-button :disabled="button.disabled" :label="button.label"></s-button>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';
  import Button from '../../components/Button.vue';

  export default {

    data () {
      document.title = '手机绑定';
      return {
        phone_num: {
          required: true,
          label: '你的手机',
          endpic: {
            show: true
          },
          input: {
            class: ''
          },
          tips: {
            label: '',
            class: ''
          },
          code: {
            label: '',
            class: 'disabled'
          },
          prepic: {
            show: false,
            class: ''
          }
        },
        code: {
          required: true,
          label: '验证码',
          endpic: {
            show: true
          },
          input: {
            class: ''
          },
          tips: {
            label: '',
            class: ''
          },
          code: {
            label: '获取验证码',
            class: 'disabled'
          },
          prepic: {
            show: false,
            class: ''
          }
        },
        button: {
          label: '确定',
          disabled: {
            disabled: 'disabled'
          }
        }
      };
    },
    components: {
      SInput: Input,
      SButton: Button
    },
    methods: {

    }
  };
</script>
<style lang="scss">
  .bind-phone{
      margin-top: 36px;
      width:324px;
      margin-left: calc((100% - 324px) / 2);
      >.pro-input{
          margin-bottom: 15px;
      }
      >.pro-button{
          margin-top: 40px;
      }
  }
</style>

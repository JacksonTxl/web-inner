<template>
  <main class="change-password">
      <s-input placeholder="输入当前登录密码" type="password" :isCode="false" :maxlength="16" :params="pre_password"></s-input>
      <s-input placeholder="密码由6-16个字符组成，区分大小写" type="password" :isCode="false" :maxlength="16" :params="new_password"></s-input>
      <s-input placeholder="再次输入新密码" type="password" :isCode="false" :maxlength="16" :params="confirm_password"></s-input>
      <s-button :disabled="button.disabled" :label="button.label"></s-button>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';
  import Button from '../../components/Button.vue';

  export default {

    data () {
      document.title = '修改密码';
      return {
        pre_password: {
          required: true,
          label: '当前密码',
          endpic: {
            show: true
          },
          input: {
            class: '',
            value: ''
          },
          tips: {
            label: '您输入的信息有误，不能为空,长度6~16',
            class: '',
            show: true
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
        new_password: {
          required: true,
          label: '新密码',
          endpic: {
            show: true
          },
          input: {
            class: '',
            value: ''
          },
          tips: {
            label: '密码6~16位字符组成，区分大小写，不能和旧密码一样',
            class: '',
            show: true
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
        confirm_password: {
          required: true,
          label: '确认新密码',
          endpic: {
            show: true
          },
          input: {
            class: '',
            value: ''
          },
          tips: {
            label: '再次输入新密码 ',
            class: '',
            show: true
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
  .change-password{
      width:324px;
      margin: auto;
      padding-top: 36px;

      >.pro-button{
          margin-top: 40px;
      }
  }
</style>

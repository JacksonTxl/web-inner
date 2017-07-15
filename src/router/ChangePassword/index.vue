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
        new_password: {
          required: true,
          label: '新密码',
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
        confirm_password: {
          required: true,
          label: '确认新密码',
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

<template>
  <main class="reset-password">
      <h3>重置密码</h3>
      <s-input placeholder="手机号" type="text" :isCode="false" :maxlength="11" :params="phone_num"></s-input>
      <s-input placeholder="验证码" type="text" :isCode="true" :maxlength="4" :params="code"></s-input>
      <s-input placeholder="新密码,6~16个字符,不含空格" type="password" :isCode="false" :maxlength="16" :params="password"></s-input>
      <s-button :disabled="button.disabled" :label="button.label"></s-button>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';
  import Button from '../../components/Button.vue';

  export default {

    data () {
      document.title = '重置密码';
      return {
        phone_num: {
          required: true,
          label: '',
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
            show: true,
            class: 'phone'
          }
        },
        code: {
          required: true,
          label: '',
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
            disabled: {
              disabled: 'disabled'
            },
            click: function () {
              console.log('点击了获取验证码');
            }
          },
          prepic: {
            show: true,
            class: 'phone-code'
          }
        },
        password: {
          required: true,
          label: '',
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
            show: true,
            class: 'password'
          }
        },
        button: {
          label: '提交',
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
  .reset-password{
      margin-top: 10px;
      width:245px;
      margin-left: calc((100% - 245px) / 2);
      >.pro-input{
          margin-bottom: 15px;
          >.s-input-code{
              >.input{
                  >input{
                      width: 65px;
                  }
              }
          }
      }
      >.pro-button{
          margin-top: 40px;
      }
      >h3{
          text-align: center;
          color: rgb(102,102,102);
          margin-bottom: 13px;
      }
  }
</style>

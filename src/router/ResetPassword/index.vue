<template>
  <main class="reset-password">
      <h3>重置密码</h3>
      <s-input placeholder="手机号" type="text" :isCode="false" :maxlength="11" :params="phone_num" @keyup="checkPhone(false,'phone')" v-model="phone_num.input.value" @focus="checkFocus('phone')" @blur="checkBlur('phone')"></s-input>
      <s-input placeholder="验证码" type="text" :isCode="true" :maxlength="4" :params="code" @keyup="checkPhone(false,'code')" v-model="code.input.value" @focus="checkFocus('code')" @blur="checkBlur('code')"></s-input>
      <s-input placeholder="新密码,6~16个字符,不含空格" type="password" :isCode="false" :maxlength="16" :params="password" @keyup="checkPhone(false,'password')" v-model="password.input.value" @focus="checkFocus('password')" @blur="checkBlur('password')"></s-input>
      <s-button :disabled="button.disabled" :label="button.label"></s-button>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';
  import Button from '../../components/Button.vue';
  import CONSTANT from '../../util/constant';

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
            class: '',
            value: ''
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
            class: '',
            value: ''
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
            class: '',
            value: ''
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
      checkFocus (param) {
        if (param === 'phone') {
          this.phone_num.input.class = 'focus';
        } else if (param === 'code') {
          this.code.input.class = 'focus';
        } else if (param === 'password') {
          this.password.input.class = 'focus';
        }
      },
      checkBlur (type) {
        this.checkPhone(true, type);
      },
      checkPhone (flag, type) {
        var isPhone = CONSTANT.methods.checkPhone(this.phone_num.input.value);
        var isCode = CONSTANT.methods.checkPhoneCode(this.code.input.value);
        var isPsw = CONSTANT.methods.checkPsw(this.password.input.value);

        if (isPhone && isCode && isPsw) {
          this.button.disabled = {};
        } else {
          this.button.disabled = {disabled: 'disabled'};
        }
        if (isPhone && type === 'phone') {
          this.phone_num.input.class = 'success';
          this.code.code.disabled = {};
        } else if (!isPhone && (this.phone_num.input.value.length === 11 || flag) && type === 'phone') {
          this.phone_num.input.class = 'error';
          this.code.code.disabled = {disabled: 'disabled'};
        } else if (type === 'phone') {
          this.phone_num.input.class = 'focus';
          this.code.code.disabled = {disabled: 'disabled'};
        }
        if (isCode && type === 'code') {
          this.code.input.class = 'success';
        } else if (!isCode && (this.code.input.value.length === 4 || flag) && type === 'code') {
          this.code.input.class = 'error';
        } else if (type === 'code') {
          this.code.input.class = 'focus';
        }
        if (isPsw && type === 'password') {
          this.password.input.class = 'success';
        } else if (!isPsw && type === 'password' && ((this.password.input.value.length >= 6 && this.password.input.value.length <= 16) || flag)) {
          this.password.input.class = 'error';
        } else if (type === 'password') {
          this.password.input.class = 'focus';
        }
      }
    }
  };
</script>
<style lang="scss">
  .reset-password{
      margin: auto;
      padding-top: 10px;
      width:245px;
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

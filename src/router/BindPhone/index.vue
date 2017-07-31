<template>
  <main class="bind-phone">
      <s-input placeholder="手机号" type="text" :isCode="false" :maxlength="11" :params="phone_num" @keyup="checkPhone" v-model="phone_num.input.value" @focus="checkPhoneFocus"></s-input>
      <s-input placeholder="验证码" type="text" :isCode="true" :maxlength="4" :params="code"></s-input>
      <s-button :disabled="button.disabled" :label="button.label"></s-button>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';
  import Button from '../../components/Button.vue';
  import CONSTANT from '../../util/constant';

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
            disabled: {
              disabled: 'disabled'
            },
            click: function () {
              console.log('点击了获取验证码');
            }
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
      checkPhoneFocus () {
        this.phone_num.input.class = 'focus';
      },
      checkPhone () {
        var isPhone = CONSTANT.methods.checkPhone(this.phone_num.input.value);

        if (isPhone) {
          this.phone_num.input.class = 'success';
        } else if (!isPhone && this.phone_num.input.value.length === 11) {
          this.phone_num.input.class = 'error';
        } else {
          this.phone_num.input.class = 'focus';
        }
      }
    }
  };
</script>
<style lang="scss">
  .bind-phone{
      padding-top: 36px;
      margin: auto;
      width:324px;
      >.pro-input{
          margin-bottom: 15px;
      }
      >.pro-button{
          margin-top: 40px;
      }
  }
</style>

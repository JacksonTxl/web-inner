<template>
  <main class="change-password">
      <div class="inputs" v-if="show=='input'">
          <s-input placeholder="输入当前登录密码" type="password" :isCode="false" :maxlength="16" :params="pre_password" @keyup="checkPsw(false,'pre_password')" v-model="pre_password.input.value" @focus="checkFocus('pre_password')" @blur="checkBlur('pre_password')"></s-input>
          <s-input placeholder="密码由6-16个字符组成，区分大小写" type="password" :isCode="false" :maxlength="16" :params="new_password" @keyup="checkPsw(false,'new_password')" v-model="new_password.input.value" @focus="checkFocus('new_password')" @blur="checkBlur('new_password')"></s-input>
          <s-input placeholder="再次输入新密码" type="password" :isCode="false" :maxlength="16" :params="confirm_password" @keyup="checkPsw(false,'confirm_password')" v-model="confirm_password.input.value" @focus="checkFocus('confirm_password')" @blur="checkBlur('confirm_password')"></s-input>
          <s-button :disabled="button.disabled" :label="button.label" @click="commit"></s-button>
      </div>
      <s-success v-if="show=='success'" :tips="success_tip.tips" :button="success_tip.button" @click="complete"></s-success>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';
  import Button from '../../components/Button.vue';
  import CONSTANT from '../../util/constant';
  import Success from '../../components/Success.vue';
  import { Message } from 'element-ui';
  import { AES } from 'crypto-js';

  export default {

    data () {
      document.title = '修改密码';


      return {
        show: 'input',
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
            label: '',
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
            label: '',
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
            label: '',
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
        },
        success_tip: {
          tips: {
            label: '修改密码成功!',
            p: '您的登录账号：18201962479',
            show: false
          },
          button: {
            label: '完成',
            disabled: {}
          }
        }
      };
    },
    components: {
      SInput: Input,
      SButton: Button,
      SSuccess: Success
    },
    methods: {
      checkFocus (param) {
        if (param === 'pre_password') {
          this.pre_password.input.class = 'focus';
        } else if (param === 'new_password') {
          this.new_password.input.class = 'focus';
        } else if (param === 'confirm_password') {
          this.confirm_password.input.class = 'focus';
        }
      },
      checkBlur (type) {
        this.checkPsw(true, type);
      },
      checkPsw (flag, type) {
        const TIP1 = '您输入的信息有误，不能为空,长度6~16';
        const TIP2 = '密码6~16位字符组成，区分大小写，不能和旧密码一样';
        const TIP3 = '再次输入新密码';
        var prePsw = CONSTANT.methods.checkPsw(this.pre_password.input.value);
        var newPsw = CONSTANT.methods.checkPsw(this.new_password.input.value) && !(this.pre_password.input.value === this.new_password.input.value);
        var conPsw = (this.confirm_password.input.value === this.new_password.input.value) && this.confirm_password.input.value.length >= 6;

        if (prePsw && newPsw && conPsw) {
          this.button.disabled = {};
        } else {
          this.button.disabled = {disabled: 'disabled'};
        }
        if (prePsw && type === 'pre_password') {
          this.pre_password.input.class = 'success';
          this.pre_password.tips.label = '';
        } else if (!prePsw && type === 'pre_password' && ((this.pre_password.input.value.length >= 6 && this.pre_password.input.value.length <= 16) || flag)) {
          this.pre_password.input.class = 'error';
          this.pre_password.tips.label = TIP1;
        } else if (type === 'pre_password') {
          this.pre_password.input.class = 'focus';
          this.pre_password.tips.label = '';
        }
        if (newPsw && type === 'new_password') {
          this.new_password.input.class = 'success';
          this.new_password.tips.label = '';
        } else if (!newPsw && type === 'new_password' && ((this.new_password.input.value.length >= 6 && this.new_password.input.value.length <= 16) || flag || this.new_password.input.value === this.pre_password.input.value)) {
          this.new_password.input.class = 'error';
          this.new_password.tips.label = TIP2;
        } else if (type === 'new_password') {
          this.new_password.input.class = 'focus';
          this.new_password.tips.label = '';
        }
        if (conPsw && type === 'confirm_password') {
          this.confirm_password.input.class = 'success';
          this.confirm_password.tips.label = '';
        } else if (!conPsw && type === 'confirm_password') {
          this.confirm_password.input.class = 'error';
          this.confirm_password.tips.label = TIP3;
        } else if (type === 'confirm_password') {
          this.confirm_password.input.class = 'focus';
          this.confirm_password.tips.label = '';
        }
      },
      commit () {
        var params = {
          originalpwd: AES.encrypt(this.pre_password.input.value, CONSTANT.methods.AesKey('1234')).toString(),
          newpwd: AES.encrypt(this.new_password.input.value, CONSTANT.methods.AesKey('1234')).toString()
        };
        var headers = {
          headers: {
            //  token + hashkey
            Authorization: '123456'
          }
        };

        this.$http.post(CONSTANT.basic.URL + '/register/execute', params, headers).then(response => {
          var data = JSON.parse(response.body);

          if (data.msgCode === 200) {
            this.show = 'success';
            this.success_tip.tips.p = '您的登录账号：' + data.result;
          } else {
            Message({showClose: true, message: data.msg, type: 'error'});
          }
        }, response => {
          this.show = 'success';
          Message({showClose: true, message: 'regist error!', type: 'error'});
        });
      },
      complete () {
        //   重置成功后关闭页面
        console.log('login now!');
      }
    }
  };
</script>
<style lang="scss">
  .change-password{
      width:324px;
      margin: auto;
      padding-top: 36px;
      >.inputs{
            >.pro-button{
               margin-top: 40px;
            }
      }

  }
</style>

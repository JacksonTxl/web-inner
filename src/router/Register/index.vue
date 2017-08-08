<template>
  <main class="register">
      <div class="inputs" v-if="show=='input'">
          <h3>注册账号</h3>
          <s-input placeholder="手机号" type="text" :isCode="false" :maxlength="11" :params="phone_num" @keyup="checkPhone(false,'phone')" v-model="phone_num.input.value" @focus="checkFocus('phone')" @blur="checkBlur('phone')"></s-input>
          <s-input placeholder="验证码" type="text" :isCode="true" :maxlength="6" :params="code" @keyup="checkPhone(false,'code')" v-model="code.input.value" @focus="checkFocus('code')" @blur="checkBlur('code')"></s-input>
          <s-input placeholder="新密码,6~16个字符,不含空格" type="password" :isCode="false" :maxlength="16" :params="password" @keyup="checkPhone(false,'password')" v-model="password.input.value" @focus="checkFocus('password')" @blur="checkBlur('password')"></s-input>
          <s-button :disabled="button.disabled" :label="button.label" @click="commit"></s-button>
          <p>已有账号？<label>返回登录</label></p>
      </div>
      <div class="img-code" v-if="show=='code'">
          <h3>输入图形验证码</h3>
          <label>验证成功后可收到短信验证码</label>
          <s-input placeholder="图形验证码" type="text" :isCode="false" :maxlength="6" :params="img_code" @keyup="checkImgCode(false)" v-model="img_code.input.value" @focus="checkFocus('img_code')" @blur="checkBlur('img_code')"></s-input>
          <div>
             <img :src="img_code.src" alt="图形验证码">
             <p>看不清？<label @click="getImgCode">换一张</label></p>
          </div>
          <s-button :disabled="button_code.disabled" :label="button_code.label" @click="sendPhoneCode"></s-button>
          <s @click="goBack">返回</s>
      </div>
      <s-success v-if="show=='success'" :tips="success_tip.tips" :button="success_tip.button" @click="goLogin"></s-success>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';
  import Button from '../../components/Button.vue';
  import Success from '../../components/Success.vue';
  import CONSTANT from '../../util/constant';
  import { Message } from 'element-ui';
  import { AES } from 'crypto-js';

  export default {

    data () {
      document.title = '注册账号';
      return {
        show: 'input',
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
            interval: '',
            label: '获取验证码',
            disabled: {
              disabled: 'disabled'
            },
            click: () => {
              this.show = 'code';
              var _this = this;
              var time = 60;

              _this.code.code.interval = setInterval(() => {
                time--;
                _this.code.code.label = time + 's后重试';
                _this.code.code.disabled = {disabled: 'disabled'};
                if (time <= 0) {
                  clearInterval(_this.code.code.interval);
                  _this.code.code.disabled = {};
                  _this.code.code.label = '获取验证码';
                }
              }, 1000);

              this.getImgCode();
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
        },
        img_code: {
          src: 'https://avatars2.githubusercontent.com/u/20331323?v=4&s=48',
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
            class: '',
            show: true
          },
          code: {
            label: '',
            class: 'disabled'
          },
          prepic: {
            show: true,
            class: 'phone-code'
          }
        },
        button_code: {
          label: '提交',
          disabled: {
            disabled: 'disabled'
          }
        },
        success_tip: {
          tips: {
            label: '注册账号成功!',
            p: '您的登录账号：18201962479',
            show: true
          },
          button: {
            label: '马上登录',
            disabled: {}
          }
        }
      };
    },
    components: {
      SInput: Input,
      SButton: Button,
      SSuccess: Success,
      ElMessage: Message
    },
    methods: {
      checkFocus (param) {
        if (param === 'phone') {
          this.phone_num.input.class = 'focus';
        } else if (param === 'code') {
          this.code.input.class = 'focus';
        } else if (param === 'password') {
          this.password.input.class = 'focus';
        } else if (param === 'img-code') {
          this.img_code.input.class = 'focus';
        }
      },
      checkBlur (type) {
        if (type === 'img_code') {
          this.checkImgCode(true);
        } else {
          this.checkPhone(true, type);
        }
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
        if (isPhone && type === 'phone' && !this.code.code.interval) {
          this.phone_num.input.class = 'success';
          this.code.code.disabled = {};
          if (flag) {
            this.checkPhoneIsRegister();
          }
        } else if (!isPhone && (this.phone_num.input.value.length === 11 || flag) && type === 'phone') {
          this.phone_num.input.class = 'error';
          this.code.code.disabled = {disabled: 'disabled'};
        } else if (type === 'phone') {
          this.phone_num.input.class = 'focus';
          this.code.code.disabled = {disabled: 'disabled'};
        }
        if (isCode && type === 'code') {
          this.code.input.class = 'success';
        } else if (!isCode && (this.code.input.value.length === 6 || flag) && type === 'code') {
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
      },
      checkImgCode (flag) {
        var isImgCode = CONSTANT.methods.checkImgCode(this.img_code.input.value);

        if (isImgCode) {
          this.button_code.disabled = {};
        } else {
          this.button_code.disabled = {disabled: 'disabled'};
        }
        if (isImgCode) {
          this.img_code.input.class = 'success';
        } else if (!isImgCode && (this.img_code.input.value.length === 6 || flag)) {
          this.img_code.input.class = 'error';
        } else {
          this.img_code.input.class = 'focus';
        }

      },
      //    失去焦点校验手机号是否注册
      checkPhoneIsRegister () {
        var params = {
          identificationNumber: this.phone_num.input.value
        };
        var headers = {
          headers: {
            Authorization: 'Windows^7.0^1.0.1^ABCDEFG^SIMBA',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        };

        this.$http.post(CONSTANT.basic.URL + '/register/verify', params, headers).then(response => {
          response.text().then(function (value) {
            var data = JSON.parse(value);

            if (data.msgCode === 200 && !data.result) {
              console.log('手机尚未被注册，可以使用!');
            } else if (data.msgCode === 200 && data.result) {
              Message({showClose: true, message: CONSTANT.tips.CHECKREGISTERPHONE_USED, type: 'error'});
            } else {
              Message({showClose: true, message: data.msg || CONSTANT.tips.CHECKREGISTERPHONE_USED, type: 'error'});
            }
          });
        }, response => {
          Message({showClose: true, message: CONSTANT.tips.CHECKREGISTERPHONE_FAIL, type: 'error'});
        });
      },
      //    获取图形验证码
      getImgCode () {
        var _this = this;
        var params = {};
        var headers = {
          headers: {
            Authorization: 'Windows^7.0^1.0.1^ABCDEFG^SIMBA'
          }
        };

        this.$http.post(CONSTANT.basic.URL + '/captcha/registcode', JSON.stringify(params), headers).then(response => {
          response.text().then(function (value) {
            var data = JSON.parse(value);

            if (data.msgCode === 200) {
              _this.img_code.src = data.result;
            } else {
              Message({showClose: true, message: data.msg || CONSTANT.tips.IMGCODE_FAIL, type: 'error'});
            }
          });
        }, response => {
          Message({showClose: true, message: CONSTANT.tips.IMGCODE_FAIL, type: 'error'});
        });
      },
      goBack () {
        this.show = 'input';
      },
      sendPhoneCode () {
        var _this = this;
        var params = {
          mobile: this.phone_num.input.value,
          captcha: this.img_code.input.value,
          sid: CONSTANT.basic.SID
        };
        var headers = {
          headers: {
            Authorization: 'Windows^7.0^1.0.1^ABCDEFG^SIMBA',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        };

        this.$http.post(CONSTANT.basic.URL + '/register/sendcode', params, headers).then(response => {
          response.text().then(function (value) {
            var data = JSON.parse(value);

            if (data.msgCode === 200) {
              _this.show = 'input';
              Message({showClose: true, message: CONSTANT.tips.SENDPHONECODE_SUCCESS, type: 'success'});
            } else {
              Message({showClose: true, message: data.msg || CONSTANT.tips.SENDPHONECODE_FAIL, type: 'error'});
            }
          });
        }, response => {
          Message({showClose: true, message: CONSTANT.tips.SENDPHONECODE_FAIL, type: 'error'});
        });
      },
      commit () {
        var _this = this;
        var params = {
          mobile: this.phone_num.input.value,
          password: AES.encrypt(this.password.input.value, CONSTANT.methods.AesKey('1234')).toString(),
          verificationCode: this.code.input.value,
          sid: CONSTANT.basic.SID
        };
        var headers = {
          headers: {
            Authorization: 'Windows^7.0^1.0.1^ABCDEFG^SIMBA',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        };

        this.$http.post(CONSTANT.basic.URL + '/register/execute', params, headers).then(response => {
          response.text().then(function (value) {
            var data = JSON.parse(value);

            if (data.msgCode === 200) {
              _this.show = 'success';
              _this.success_tip.tips.p = '您的登录账号：' + data.result;
            } else {
              Message({showClose: true, message: data.msg, type: 'error'});
            }
          });
        }, response => {
          Message({showClose: true, message: 'regist error!', type: 'error'});
        });
      },
      goLogin () {
        //   成功注册后马上登录
        console.log('login now!');
      }
    }
  };
</script>
<style lang="scss">
  .register{
      margin: auto;
      padding-top: 10px;
      width:245px;
      >.inputs{
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
          >p{
             font-size: 14px;
             margin-top: 24px;
             >label{
                  color: #3a95de;
                  cursor: pointer;
                  margin-left: 27px;
             }
             >label:hover{
                  text-decoration: underline;
             }
          }
      }
      >.img-code{
         color: #666;
         >h3{
            text-align: center;
            margin-bottom: 12px;
         }
         >label{
              font-size: 12px;
              margin-bottom: 23px;
              display: block;
              text-align: center;
         }
         >div{
              display: flex;
              >img{
                   height: 30px;
                   width: 90px;
                   font-size: 14px;
               }
              >p{
                   line-height: 30px;
                   color: #333;
                   font-size: 14px;
                   padding-left: 10px;
                   >label{
                       color: #3a95de;
                       cursor: pointer;
                   }
                   >label:hover{
                        text-decoration: underline;
                    }
               }
          }
         >.pro-button{
              margin-top: 20px;
          }
         >s{
              color: #3a95de;
              cursor: pointer;
              display: inline-block;
              font-size: 12px;
              text-decoration: none;
              margin-top:100px;
         }
         >s:hover{
              text-decoration: underline;
         }
      }

  }
</style>

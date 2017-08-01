/*
*   1.isCode true or false
*   2.params:{
*       required  true or false,
*       label  string,
*       prepic{ class show }  string,'write''password''phone''phone-code'
*       endpic{ class show }
*       input{ class } error success
*       tips{ label class}
*       code{ label class}  disabled
*   }
*/
<template>
  <main class="pro-input" >
      <div class="input-label" v-if="params.label">
        <span v-if="params.required">*</span>
        <label>{{params.label}}</label>
      </div>
      <div class="s" :class="isCode?'s-input-code':''">
          <div class="input" :class="params.input.class">
              <div class="pre-pic" :class="params.prepic.class" v-if="params.prepic.show"></div>
              <input
                      v-if="type === 'text'"
                      type="text"
                      class=""
                      v-bind="$props"
                      :autocomplete="autoComplete"
                      :value="currentValue"
                      :placeholder="placeholder"
                      :maxlength="maxlength"
                      :minlength="minlength"
                      ref="input"
                      @input="handleInput"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      v-on:keyup="handleKeyup"
              />
              <input
                      v-if="type === 'password'"
                      type="password"
                      class=""
                      v-bind="$props"
                      :autocomplete="autoComplete"
                      :value="currentValue"
                      :placeholder="placeholder"
                      :maxlength="maxlength"
                      :minlength="minlength"
                      ref="input"
                      @input="handleInput"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      v-on:keyup="handleKeyup"
              />
              <div class="end-pic" :class="params.endpic.class" v-if="params.endpic.show"></div>
          </div>
          <p class="tips" v-if="!isCode&&params.tips.show" :class="params.tips.class">
              {{params.tips.label}}
          </p>
          <button class="get-code" v-if="isCode" :class="params.code.class" @click="params.code.click" v-bind="params.code.disabled">{{params.code.label}}</button>
      </div>

  </main>
</template>

<script>
  export default {
    data () {
      return {
        currentValue: this.value,
        autoComplete: {
          type: String,
          default: 'off'
        }
      };
    },
    props: {
      isCode: {
        type: Boolean,
        default: false
      },
      params: {
        type: Object,
        default: {
          required: true,
          label: '请输入内容',
          prepic: {
            show: false,
            class: ''
          },
          endpic: {
            show: false,
            class: ''
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
            disabled: {},
            click: function () {
              console.log('点击了获取验证码的按钮!');
            }
          }
        }
      },
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      placeholder: [String, Number],
      maxlength: [String, Number],
      minlength: [String, Number],
      onKeyup: Function,
      onFocus: Function,
      onBlur: Function

    },
    watch: {
      'value' (val, oldValue) {
        this.setCurrentValue(val);
      }
    },
    methods: {
      handleBlur (event) {
        if (this.onBlur) {
          this.onBlur(event);
        }
        this.$emit('blur', event);

      },
      handleFocus (event) {
        if (this.onFocus) {
          this.onFocus(event);
        }
        this.$emit('focus', event);
      },
      handleInput (event) {
        const value = event.target.value;

        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return;
        this.currentValue = value;

      },
      handleKeyup (event) {
        if (this.onKeyup) {
          this.onKeyup(event);
        }
        this.$emit('keyup', event);
      }
    }


  };
</script>
<style lang="scss">
    .pro-input{
        font-size: 14px;
        color: #333;
        >.input-label{
            height: 20px;
            >span{
                color: #F00;
                font-weight: bold;
                line-height: 20px;
                display: inline-block;
            }
        }
        >.s{
            >.input{
                height: 32px;
                line-height: 32px;
                border: 1px solid #DADADA;
                margin-top: 4px;
                display: flex;
                background-color: #FFF;
                border-radius:2px;
                >.pre-pic{
                    background: url(../images/bg.png) no-repeat;
                    height: 32px;
                    width: 24px;
                    display: none;
                    &.write{
                        display: block;
                        background-position: -343px -187px;
                    }
                    &.password{
                        display: block;
                        background-position: -277px -187px;
                    }
                    &.phone{
                        display: block;
                        background-position: -140px -187px;
                    }
                    &.phone-code{
                        display: block;
                        background-position: -208px -187px;
                    }
                }
                >input{
                    height: 32px;
                    border-width: 0px;
                    padding: 0 5px;
                    flex: 1;
                    outline: 0;
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);

                }
                >.end-pic{
                    background: url(../images/bg.png) no-repeat;
                    height: 32px;
                    width: 25px;
                }

            }
            >.input:hover,.input:focus{
                border-color: rgb(32,160,255);
            }
            >.error{
                border-color: red;
                >.end-pic{
                    display: block;
                    background-position: -72px -243px;
                }
            }
            >.success{
                border-color: #DADADA;
                >.end-pic{
                    display: block;
                    background-position: -160px -243px;
                }
            }
            >.focus{
                 border-color: rgb(32,160,255);
             }
            >.tips{
                font-size: 12px;
                height: 15px;
                color: #F82617;
                &.show{
                    display: block;
                }
            }
        }
    }
    .s-input-code{
         display: flex;
        >.input{
             flex: 1;
        }
        >.get-code{
             flex: 1;
             height: 34px;
             margin-left: 12px;
             line-height: 34px;
             text-align: center;
             border-radius: 2px;
             background-color: rgb(58, 149, 222);
             color: white;
             cursor: default;
             margin-top: 4px;
             border-width: 0;

        }
        >button[disabled]{
             background-color: #cccccc;
        }
    }
</style>

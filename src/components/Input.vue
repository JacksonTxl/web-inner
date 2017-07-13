<template>
  <main class="pro-input">
      <div class="input-label">
        <span v-if="meta.required">*</span>
        <label>{{meta.label}}</label>
      </div>
      <div class="input">
          <div class="pre-pic"></div>
          <input
                  v-if="type === 'text'"
                  type="text"
                  class=""
                  v-bind="$props"
                  :autocomplete="autoComplete"
                  :value="currentValue"
                  ref="input"
                  @input="handleInput"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  v-on:keyup="handleKeyup"
          />
          <input
                  v-else="type === 'password'"
                  type="text"
                  class="el-input__inner"
                  v-bind="$props"
                  :autocomplete="autoComplete"
                  :value="currentValue"
                  ref="input"
                  @input="handleInput"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  v-on:keyup="handleKeyup"
          />
          <div class="end-pic"></div>
      </div>
      <p class="tips">
          这是测试提示
      </p>

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

      meta: {
        type: Object,
        default: {
          required: true,
          label: '请输入内容',
          params: {
            type: 'text',
            placeholder: '请输入内容',
            keyup: e => {
              console.log(e);
            }
          }
        }
      },
      value: [String, Number],
      type: {
        type: String,
        default: 'password'
      },
      onKeyup: Function

    },
    watch: {
      'value' (val, oldValue) {
        this.setCurrentValue(val);
      }
    },
    methods: {
      handleBlur (event) {
        this.$emit('blur', event);

      },
      handleFocus (event) {
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
        >.input{
            height: 32px;
            line-height: 32px;
            border: 1px solid #DADADA;
            margin-top: 4px;
            display: flex;
            background-color: #FFF;
            >input{
                height: 32px;
                border-width: 0px;
                padding: 0 10px;
                flex: 1;
                outline: 0;
                transition: border-color .2s cubic-bezier(.645,.045,.355,1);

            }
            >.end-pic{
                background: url(../images/bg.png) no-repeat;
                height: 32px;
                width: 25px;
                display: none;
            }

        }
        >.input:hover{
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
            &.tips{
                display: block;
            }
        }
        >.tips{
            font-size: 12px;
            color: #F82617;
            display: none;
        }
    }
</style>

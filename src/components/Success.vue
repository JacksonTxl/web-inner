<template>
  <main class="pro-success">
    <div></div>
    <h2>{{tips.label}}</h2>
    <p v-if="tips.show">{{tips.p}}</p>
    <s-button @click="handleClick" :disabled="button.disabled" :label="button.label"></s-button>

  </main>
</template>

<script>
  import Button from './Button.vue';
  export default {
    data () {
      return {
      };
    },
    props: {
      button: {
        type: Object,
        default: {
          label: '按钮',
          disabled: {}
        }
      },
      tips: {
        type: Object,
        default: {
          label: '设置成功',
          p: '您的登录账号：18201962479',
          show: true
        }
      }
    },
    components: {
      SButton: Button
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .pro-success{
    padding: 40px 20px 0px 20px;
    text-align: center;
    background-color: #fff;
    >div{
       margin: 0 auto;
       width: 103px;
       height: 103px;
       background: url(../images/bg.png) no-repeat;
       background-position: -76px -51px;

    }
    >h2{
       margin: 14px 0;
       font-size: 18px;
       color: #27af1a;
     }
    >p{
       line-height: 20px;
       font-size: 12px;
       color: #333;
    }
    >.pro-button{
       margin-top: 20px;
     }
  }
</style>

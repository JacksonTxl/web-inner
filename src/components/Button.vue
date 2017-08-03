<template>
  <main class="pro-button">
    <button v-bind="disabled" @click="click">{{label}}</button>
  </main>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    props: {
      label: {
        type: String,
        default: 'test1'
      },
      disabled: Object,
      click: Function
    }
  };
</script>
<style lang="scss" scoped>
  .pro-button{
    >button{
      cursor: default;
      text-align: center;
      line-height: 34px;
      background-color: rgb(58, 149, 222);
      color: white;
      border-radius: 2px;
      border-width: 0;
      padding: 0 5px;
      width: 100%;
      font-size: 14px;
    }
    >button[disabled]{
      background-color: #cccccc;
    }
  }
</style>

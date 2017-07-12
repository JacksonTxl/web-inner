<template>
  <main>
    <el-input :meta="meta" v-model="value" :value="value"></el-input>
    <div class="div1">{{value}}</div>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';

  export default {
    data () {
      return {
        value: 'adfasdf',
        meta: {
          required: true,
          label: '请输入内容1',
          params: {
            type: 'text',
            value: '',
            placeholder: '请输入内容1'

          }
        }
      };

    },
    components: {
      ElInput: Input
    },
    methods: {
      hello () {
        this.$message('Hello Vue');
      }
    }
  };
</script>
<style lang="scss" scoped>
  .div1{
    background-color : red;
  }
</style>

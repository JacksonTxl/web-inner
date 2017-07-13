<template>
  <main>
    <el-input :meta="meta" v-model="value" :value="value" type="text" :onKeyup="keyup(value)"></el-input>
    <div class="div1">{{value}}</div>
  </main>
</template>

<script>
  import Input from '../../components/Input.vue';

  export default {
    data () {
      return {
        value: '1234',
        meta: {
          required: true,
          label: '请输入内容1',
          params: {
            type: 'text',
            value: '',
            placeholder: '请输入内容1'

          }
        },
        keyup: function (value) {
          if (!/^[a-zA-Z0-9_.·() （）@!#-$%&*()+/<>;']+/.test(value)) {
            console.log(111);
            this.meta.required = false;
          } else {
            this.meta.required = true;
          }
        }
      };

    },
    components: {
      ElInput: Input
    },
    methods: {
      hello () {
        console.log('1221');
      }
    }
  };
</script>
<style lang="scss" scoped>
  .div1{
    background-color : red;
  }
</style>

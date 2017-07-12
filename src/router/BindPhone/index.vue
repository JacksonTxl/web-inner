<template>
  <main class="bind-phone">
    <div>
        <div><span>*</span></div>
        <el-input placeholder="手机号" icon="search" v-model="inputs.phone_value"></el-input>
    </div>

  </main>
</template>

<script>
  import { Input, Button } from 'element-ui';

  export default {
    data () {

      return {
        inputs: {
          phone_value: ''
        }
      };
    },
    components: {
      ElInput: Input,
      ElButton: Button
    },
    methods: {

    }
  };
</script>
<style lang="scss">
  .bind-phone{

  }
</style>

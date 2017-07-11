<template>
  <main>
    <el-button type="primary" @click.native="hello">primary</el-button>
    <hello message="sdfgsdfg"></hello>
    <div class="div1">adsfadsfa</div>
  </main>
</template>

<script>
  import Hello from '../../components/Hello.vue';

  export default {
    components: {
      Hello
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

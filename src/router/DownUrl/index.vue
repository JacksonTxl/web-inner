<template>
  <main class="down-url">
      <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>

  </main>
</template>

<script>
  import VueQArt from 'vue-qart';

  export default {

    data () {
      document.title = '扫一扫下载客户端';
      return {
        msg: 'Welcome to Your Vue.js App',
        config: {
          value: 'https://www.baidu.com',
          imagePath: '',
          filter: 'color'
        },
        downloadButton: false
      };
    },
    components: {
      VueQArt
    },
    methods: {

    }
  };
</script>
<style lang="scss">

</style>

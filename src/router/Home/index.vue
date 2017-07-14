<template>
  <main>
    <e-button :label="button.label" :disabled="button.disabled"></e-button>
  </main>
</template>

<script>
  import Button from '../../components/Button.vue';

  export default {
    data () {
      return {
        button: {
          label: 'test1',
          disabled: {
            disabled: 'disabled'
          }
        }
      };

    },
    components: {
      EButton: Button
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

<template>
  <main>
      <div>
        <span v-if="meta.required">*</span>
        {{meta.label}}
      </div>
      <input
              type="text"
              :value="value"
              :placeholder="meta.params.placeholder"
              @change=""
              @blur=""
              v-model="value"
      />
  </main>
</template>

<script>
  export default {
    data () {
      return {
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
      value: [String, Number]
    }


  };
</script>

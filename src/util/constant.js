export default {
  basic: {},
  regexp: {
    //校验手机号的正则
    PHONE: /^1[34578]\d{9}$/
  },
  methods: {
  //  校验手机号码返回结果
    checkPhone(value){
      if(!value&&value!=11)return;
      return /^1[34578]\d{9}$/.test(value);
    }
  }

};



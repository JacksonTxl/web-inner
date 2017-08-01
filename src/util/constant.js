export default {
  basic: {},
  regexp: {
    // 校验手机号的正则
    PHONE: /^1[34578]\d{9}$/
  },
  methods: {
    //  校验手机号码返回结果
    checkPhone (value) {
      if (!value && value.length != 11) return;
      return /^1[34578]\d{9}$/.test(value);
    },
    //  校验手机验证码返回结果
    checkPhoneCode (value) {
      if (!value && value.length != 4) return;
      return /^\d{4}$/.test(value);
    },
    //  检验输入密码6~16位，不包含空格
    checkPsw (value) {
      if (!value && (value.length >= 6 || value.length <= 16)) return;
      return /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){6,16}$/.test(value);
    }
  }

};



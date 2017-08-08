export default {
  basic: {
    URL: location.origin + '/api/test/',
    SID: 'SIMBA'
  },
  regexp: {
    // 校验手机号的正则
    PHONE: /^1[34578]\d{9}$/
  },
  url: {

  },
  methods: {
    //  校验手机号码返回结果
    checkPhone (value) {
      if (!value && value.length != 11) return;
      return /^1[34578]\d{9}$/.test(value);
    },
    //  校验验证码返回结果
    checkPhoneCode (value) {
      if (!value && value.length != 4) return;
      return /^\d{4}$/.test(value);
    },
    //  检验输入密码6~16位，不包含空格
    checkPsw (value) {
      if (!value && (value.length >= 6 || value.length <= 16)) return;
      return /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){6,16}$/.test(value);
    },
    //  检验输入图形验证码只能是数字和字母
    checkImgCode (value) {
      if (!value && value.length != 6) return;
      return /^([A-Za-z0-9]+){6}$/.test(value);
    },
    //  补齐校验的位数 返回16加密密文
    AesKey (value) {
      if (!value) return;
      if (value && value.length <= 16) {
        var num = 16 - value.length;
        var zero = '';

        for(var i = 0; i < num; i++){
          zero += '0';
        }
        return JSON.stringify(value) + zero;
      }
    }
  },
  JsonFormatter: {
      stringify: function (cipherParams) {
          // create json object with ciphertext
          var jsonObj = {
              ct: cipherParams.ciphertext.toString(CryptoJS.enc.Hex)
          };
          // optionally add iv and salt
          if (cipherParams.iv) {
              jsonObj.iv = cipherParams.iv.toString();
          }
          if (cipherParams.salt) {
              jsonObj.s = cipherParams.salt.toString();
          }

          // stringify json object
          return JSON.stringify(jsonObj);
      },
      parse: function (jsonStr) {
          // parse json string
          var jsonObj = JSON.parse(jsonStr);
          // extract ciphertext from json object, and create cipher params object
          var cipherParams = CryptoJS.lib.CipherParams.create({
              ciphertext: CryptoJS.enc.Hex.parse(jsonObj.ct)
          });
          // optionally extract iv and salt
          if (jsonObj.iv) {
              cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
          }
          if (jsonObj.s) {
              cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
          }
          return cipherParams;
      }
  }

};



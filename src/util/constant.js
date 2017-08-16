//  补齐校验的位数 返回16加密密文
function AesKey (value) {
    if (!value) return;
    if (value && value.length <= 16) {
        var num = 16 - value.length;
        var zero = '';

        for(var i = 0; i < num; i++){
            zero += '0';
        }
        return value + zero;
    }
}
function AesFun (data, key, iv, type){
    var CryptoJS = require('crypto-js');
    var key = CryptoJS.enc.Utf8.parse(AesKey(key));
    var iv = CryptoJS.enc.Utf8.parse(AesKey(iv));
    function Encrypt(word){
        var srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
        return encrypted.ciphertext.toString().toUpperCase();
    }
    function Decrypt(word){
        var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        var decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
        var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }

    // var mm = Encrypt('123456');
    // console.log(mm);
    // var jm = Decrypt(mm);
    // console.log(jm)
    if (type === 'encrypt') {
      return Encrypt(data);
    } else {
      return Decrypt(data)
    }
}
export default {
  basic: {
    URL: location.origin + '/api/inner/',
    SID: 'SIMBA'
  },
  regexp: {
    // 校验手机号的正则
    PHONE: /^1[34578]\d{9}$/
  },
  tips: {
    // 获取图形验证码出错
    IMGCODE_SUCCESS: '获取图形验证码成功！',
    IMGCODE_FAIL: '获取图形验证码失败！',
    SENDPHONECODE_SUCCESS: '手机验证码发送成功！',
    SENDPHONECODE_FAIL: '手机验证码发送失败！',
    RESTPASSWORD_SUCCESS: '重置密码成功！',
    RESTPASSWORD_FAIL: '重置密码失败！',
    CHANGEPASSWORD_FAIL: '修改密码失败！',
    CHECKREGISTERPHONE_USED: '手机号码已被注册！',
    CHECKREGISTERPHONE_FAIL: '注册失败！',
  },
  methods: {
    //  校验手机号码返回结果
    checkPhone (value) {
      if (!value && value.length != 11) return;
      return /^1[34578]\d{9}$/.test(value);
    },
    //  校验验证码返回结果
    checkPhoneCode (value) {
      if (!value && value.length != 6) return;
      return /^\d{6}$/.test(value);
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
    OutAes (data, key, iv, type) {
      return AesFun(data, key, iv, type);
    }
  },
  sdk: {
    getUserInfo (accNbr) {
      var data = accNbr ? {userId: accNbr} : '';
      return new Promise(function (resolve, reject) {
        sdk.getUserInfo({
          data: data,
          error: function (err) {
            console.log("error: " + JSON.stringify(err));
            reject(err);
          },
          success: function (data) {
            console.log("success: " + JSON.stringify(data));
            resolve(data);
          }
        });
      })
    },
    getClientInfo (accNbr) {
      var data = accNbr ? '' : {userId: accNbr};
      return new Promise(function (resolve, reject) {
        sdk.getClientInfo({
          data: data,
          error: function (err) {
            console.log("error: " + JSON.stringify(err));
            reject(err);
          },
          success: function (data) {
            console.log("success: " + JSON.stringify(data));
            resolve(data);
          }
        });
      })
    },
    closeWindow () {
      return new Promise(function (resolve, reject) {
        sdk.closeWindow({
          error: function (err) {
            console.log("error: " + JSON.stringify(err));
            reject(err);
          },
          success: function (data) {
            console.log("success: " + JSON.stringify(data));
            resolve(data);
          }
        });
      })
    }
  },
  psdk: {
    loginClient (data) {
      return new Promise(function (resolve, reject) {
        psdk.loginClient({
          data: data,
          error: function (err) {
            console.log("error: " + JSON.stringify(err));
            reject(err);
          },
          success: function (data) {
            console.log("success: " + JSON.stringify(data));
            resolve(data);
          }
        });
      })
    }
  }

};



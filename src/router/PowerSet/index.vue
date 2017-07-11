<template>
  <main class="power-set">
    <p>以下设置仅影响好友的阅读权限</p>
    <div v-for="alloption in alloptions" class="options">
        <label><span>{{alloption.textlable}}</span> : </label>
        <el-select v-model="alloption.value" placeholder="请选择">
          <el-option
                  v-for="item in alloption.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
          </el-option>
        </el-select>
    </div>
    <div class="footer">
       <el-button type="primary" :disabled="true">恢复默认</el-button>
       <el-button type="primary" class="confirm">保存</el-button>
    </div>
  </main>
</template>

<script>
  import { Button, Select, Option } from 'element-ui';

  export default {
    data () {
      var alloptions = [];
      var obj = {
        options: [{
          value: '选项1',
          label: '所有人可见'
        }, {
          value: '选项2',
          label: '仅好友可见'
        }, {
          value: '选项3',
          label: '紧自己可见'
        }],
        value: '选项2',
        textlable: '生日'
      };

      alloptions.push(obj);
      alloptions.push(obj);
      alloptions.push(obj);
      alloptions.push(obj);
      return {
        alloptions: alloptions
      };
    },
    components: {
      ElSelect: Select,
      ElOption: Option,
      ElButton: Button
    },
    methods: {

    }
  };
</script>
<style lang="scss" scoped>
  .power-set{
      text-align: center;
      font-size: 14px;
      >p{
          color: #8d9094;
          margin: 34px 0 30px 0 ;
          font-size: 12px;
      }
      >.options{
          margin-bottom: 20px;
          >label{
              >span{
                  letter-spacing: 10px;
              }
          }
      }
      >.footer{
          height: 35px;
          background-color: rgb(242, 242, 242);
          text-align: left;
          padding: 10px;
          >.confirm{
              float: right;
          }
      }
  }
</style>

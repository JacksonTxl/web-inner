<template>
  <main class="frame">
    <div class="head">
      <img src="../../images/frame/frame-2.png">
      <div>
        <label>张飞1</label>
        <p>当前组织人数：<span>1</span>人；部门：<span>9</span>个</p>
        <div>
          <button>管理组织</button>
          <button>创建我的组织</button>
          <button>发布公告</button>
        </div>
      </div>
    </div>
    <ul>
        <li v-for="item in items">
           <label>{{item.label}}：</label>
           <p :class="item.class" v-if="!item.isGroup">{{item.value}}</p>
           <p :class="item.class" v-else><el-switch v-model="value" on-text="" off-text="" off-color="rgb(204,204,204)"></el-switch>{{item.value}}</p>
        </li>
    </ul>
  </main>
</template>

<script>
  import { Switch } from 'element-ui';
  export default {

    data () {
      document.title = '组织';
      return {
        value: false,
        items: [{
          isGroup: true,
          class: 'tips',
          label: '默认组织',
          value: '这是默认组织'
        }, {
          class: 'blue',
          label: '关联的全员群',
          value: '张飞1'
        }, {
          label: '总机号码',
          value: '18201962479'
        }, {
          label: '传　　真',
          value: '张飞1'
        }, {
          label: '网　　址',
          value: '张飞1'
        }, {
          label: '地　　址',
          value: '张飞1'
        }]
      };
    },
    components: {
      ElSwitch: Switch
    },
    methods: {

    }
  };
</script>
<style lang="scss">
    .frame{
      width: 594px;
      padding: 20px 0;
      margin: auto;
      >.head{
         width: 594px;
         height: 200px;
         position: relative;
         display: flex;
         background: url(../../images/frame/frame-1.png) no-repeat;
         >img{
            width: 128px;
            height: 128px;
            margin-top: 36px;
            margin-left: 20px;
         }
         >div{
            flex: 1;
            color: rgb(51,51,51);
            font-size: 13px;
            padding-top: 50px;
            padding-left: 22px;
            >label{
               font-size: 23px;
               display: block;
            }
            >p{
               margin-top: 21px;
            }
            >div{
               margin-top: 16px;
              >button{
                 margin-right: 18px;
                 background-color: rgb(58,149,222);
                 border-width: 0;
                 width: 90px;
                 height: 25px;
                 color: white;
                 border-radius: 2px;
              }
            }
         }
      }
      >ul{
         list-style: none;
         width: 594px;
         margin-top: 20px;
         background: #f2f2f2;
         font-size: 12px;
         color: #333;
         >li{
            display: flex;
            border-bottom: 1px solid #e5e5e5;
            >label{
               min-width: 100px;
               text-indent: 10px;
               text-align-last: justify;
               padding-right: 10px;
               line-height: 34px;
               display: inline-block;
               text-align: justify;
            }
            >p{
               flex: 1;
               padding: 0 10px;
               line-height: 34px;
               display: inline-block;
               text-align: justify;
               >label{
                  margin-top: -3px;
                  margin-right: 15px;
                }
               &.tips{
                  color: rgb(153,153,153);
               }
               &.blue{
                  color: rgb(58,149,222);
               }
            }
             &:last-child{
                border-width:0 ;
             }
         }
      }
    }

</style>

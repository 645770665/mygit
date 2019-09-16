<template>
  <div class="box" @click='selet=false'>
    <!-- <input type="text" v-if="!selet" v-focus:a.b='[1,2,3]'> -->
    <!-- <input type="text" v-wwww> -->
    <input type="radio" value="111" name="test" :checked='niubi'>
    <input type="radio" value="222222" name="test" :checked='!niubi'>
    <button style="width:100px;height:30px" @click='banhua'>变化</button>
    <template v-if="demo1">
      <div>nimasilecaonimabi</div>
    </template>
    <cao :state='ceshi'></cao>
    <div class="less">
      <input type="text">
      <button @click="qqqqqqqq">demo</button>
      <button @click="www">去往牛逼</button>
      <router-link to="/demo">这是跳转#</router-link>
    </div>
    <br>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
    <button @click='changecomponent(1)'>切换组件1</button>
    <button @click='changecomponent(2)'>切换组件2</button>
    <br>
    ===========================================
    <div class="selector">
      <div class="content" :class="{sele:selet}" @click.stop="selectorbtn">
        <div v-if="!value" class="qxz">请选择</div>
        <div v-else>{{value}}</div>
      </div>
      <!-- 修改的地方，提示要移动到包装元素 -->
      <template v-if="selet">
        <div class="list" v-for="(item,index) in value2" :style="{left:160*index + 'px'}" @click.stop='zero' :key='index'>
          <div v-for="(val,index2) in item" @click.stop="first(item,index2,index)" class="lista" :key='index2'>
            <div :class="{xz:value3[index]==val.label}" class="listb">{{val.label}}
              <span v-if="val.children">+</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import cao from './cao.vue'
  import d1 from '@/components/de1.vue'
  import d2 from '@/components/de2.vue'
  export default {
    components: {
      cao,
      d1,
      d2
    },
    data() {
      // console.log(this,'1222121212');
      return {
        a:{
          b:true
        },
        currentTabComponent:d2,
        radio:'',
        radio2:'',
        niubi:false,
        show:false,
        demo1:true,
        ceshi:300,
        selet:false,
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航',
              children:[{
                value:"caonima",
                label:"caonima"
              }]
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: 'fake',
          children: [{
            value: 'axure',
            label: '砸锅'
          }, {
            value: 'sketch',
            label: '西内'
          }, {
            value: 'jiaohu',
            label: '杂修'
          }]
        }],
        value: '',//这个是渲染到选择器的
        value2: [],//这个是循环的外壳
        value3: [],//这个是你正在点击的记录
        value4: [],//这个是记录你最后一次完整选择的外壳数据
        value5: [],//这个是记录你最后一次完整选择的每个值
      };
    },
    methods: {
      changecomponent(val){
        console.log(val);
        if (val==1) {
          this.currentTabComponent=d1
        }else{
          this.currentTabComponent=d2
        }
      },
      banhua(){
        // this.radio='2'
        // console.log(this.radio);
        this.niubi = !this.niubi
        setTimeout(() => {
          console.log(document.querySelector('input[name=test]:checked').value);
        }, 0);
      },
      www(){
        this.$router.push('/niubi/'+'zhendeniubi')
        console.log(this.$router);
      },
      qqqqqqqq(){
        this.demo1=!this.demo1
        console.log(this.$router.addRoutes([{
          path: '/niubi/:id',
          name: 'niubi',
          component: () => import('@/components/cascader.vue')
        }]),'66');
        // return
        console.log(this.$router);
        this.$router.push('/niubi/'+12344444444444)
      },
      zero(){
        //这个是预防点击选择内容的空白地方会导致退出
      },
      selectorbtn(){
        this.selet=!this.selet
        if (this.value) {
          // console.log(this.value5);
          // console.log(this.value4.length,this.value2.length-this.value4.length);
          this.value2.splice(this.value4.length,this.value2.length-this.value4.length)
          this.value4.forEach((e,index)=> {
            this.value2[index]=this.value4[index]
          }, this);
          this.value5.forEach((e,index)=> {
            this.value3[index]=e
          }, this);
        }else{
          this.value3.splice(this.value5.length,this.value3.length-this.value5.length)
          this.value4.forEach((e,index)=> {
            this.value2[index]=this.value4[index]
          }, this);
          this.value2.splice(this.value4.length,this.value2.length-this.value4.length)
        }
      },
      first(item,val2,val){
        // val是外壳的index,val2是每个外壳的内容index，item是你点击的那个内容
        // this.value2是循环的外壳，val就是外壳的index
        console.log(item[val2],val2,val);
        let box = []
        if ((val+1)==this.value2.length) {
          this.value3.splice(val,1,item[val2].label)
          if (item[val2].children) {
            console.log(1);
            item[val2].children.forEach((element) =>{
              box.push(element)
            }, this);
            this.value2.push(box)
          }else{
            console.log(2);
            let zhi=''
            // this.value3.splice(val,this.value2.length,item[val2].label)
            this.value3.forEach((e,index) =>{
              this.value4[index]=this.value2[index]
              this.value5[index]=e
              zhi+=e+' / '
            }, this);
            this.value5.splice(this.value3.length,this.value5.length-this.value3.length)
            zhi = zhi.substring(0,zhi.length-3)
            this.value=zhi
            this.selet=!this.selet
            this.value4.splice(this.value3.length,this.value4.length-this.value3.length)
          }
        }else{
          if (item[val2].children) {
            console.log(3);
            // console.log(this.value2,this.value2.length);
            item[val2].children.forEach((element) =>{
              box.push(element)
            }, this);
            // console.log(box);
            // console.log(val);
            this.value2.splice(val+1,this.value2.length-(val+1),box)
            // console.log(this.value2);
          }else{
            console.log(4);
            this.value3.splice(val,this.value3.length,item[val2].label)
            this.value2.splice(val+1,this.value2.length-(val+1))
            let zhi=''
            this.value3.forEach((e,index) =>{
              this.value4[index]=this.value2[index]
              this.value5[index]=e
              zhi+=e+' / '
            }, this);
            this.value5.splice(this.value3.length,this.value5.length-this.value3.length)
            zhi = zhi.substring(0,zhi.length-3)
            this.selet=!this.selet
            this.value=zhi
            this.value4.splice(this.value3.length,this.value4.length-this.value3.length)
          }
          this.value3.splice(val,this.value3.length,item[val2].label)
        }
        
        // console.log('value',this.value);
        // console.log('value2',this.value2);
        // console.log('value3',this.value3);
        // console.log('value4',this.value4);
        console.log('value5',this.value5);
      }
    },
    computed: {
      
    },
    mounted() {
      // var a  =  this.$axios.get('/api/demo')
      // var aa  =  this.$axios.get('/nimabi/demo')
      // a.then(res=>{
      //   console.log(res);
      //   return 'nimasile'
      // }).then(res=>{
      //   console.log(res,'111');
      // })
      // aa.then(res=>{
      //   console.log(res,'http://localhost:3003/');
      // })

      let box = []
      this.options.forEach((element)=> {
        box.push(element)
      }, this);
      this.value2.push(box)
      this.value4.push(box)
    },
    created() {
      // console.log('created');
    },
    // beforeCreate: function () {
    //   console.log('beforeCreate 钩子执行...');
    //   // console.log(this.number);
    // },
    // // 第一次渲染页面之前
    // beforeMount: function () {
    //   console.log('beforeMount 钩子执行...');
    //   // console.log(this.number)
    // },
    // // 数据更新之前
    // beforeUpdate: function () {
    //   console.log('beforeUpdate 钩子执行...');
    //   // console.log(this.number)
    // },
    // // 数据更新好了
    // updated: function () {
    //   console.log('updated 钩子执行...');
    //   // console.log(this.number)
    // },
    // // vue对象销毁之前
    // beforeDestroy: function () {
    //   console.log('beforeDestroy 钩子执行...');
    //   // console.log(this.number)
    // },
    // // vue对象销毁了
    // destroyed: function () {
    //   console.log('destroyed 钩子执行...');
    //   // console.log(this.number)
    // },
  }
</script>

<style scoped lang="less">
  @import './less.less';
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* 用户不能选择文本 */
    user-select: none;
  }
  .box{
    padding: 300px;
    height: 3000px;
  }
  .selector .content{
    /*margin-top: 400px;*/
    width: 400px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #DCDFE6;
    cursor: pointer;
    line-height: 30px;
  }
  .selector .content div{
    margin-left: 10px;
    font-size: 14px;
  }
  .selector .content .qxz{
    color: #C0C4CC;
  }
  .selector .sele{
    border: 1px solid blue;
  }
  .selector{
    position: relative;
  }
  .selector .list{
    position: absolute;
    top: 40px;
    /*left: 0px;*/
    margin-right: 160px;
  }
  .list{
    float: left;
    padding: 7px 0px;
    background-color: white;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    min-width: 160px;
    height: 205px;
    border: 1px solid #E4E7ED;
    border-radius: 2px;
    overflow-y: auto;
  }
  .list .lista:hover{
    background-color: #F5F7FA;
  }
  .list .lista{
    cursor: pointer;
    padding-left: 14px;
    padding-right: 8px;
    height: 35px;
    line-height: 35px;
  }
  .list .lista .listb span{
    position: absolute;
    top: 0px;
    right: 10px;
  }
  .list .lista .listb{
    position: relative;
    font-size: 14px;
    color: #606266;
  }
  .xz{
    color: blue!important;
  }
  .go{
    position: relative;
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: red;
    position:absolute;
    right: 0px;
    top: 0px;
  }
  .ddd-enter-active{
    // 解释：过渡动画开始和过渡动画结束的时间
    // transition: 1.5s;
    animation: bounce-in 1.5s;
  }

  // .ddd-enter, .ddd-leave-active {
  //   // 解释：过渡动画最开始的样式，过渡动画结束最终的样式
  //   opacity: 0;
  // }
  @keyframes bounce-in{
    0%{
      // transform: translate3d(0,0,0)
    }
    50%{
      transform: translate3d(140px,-50px,0)
    }
    75%{
      transform: translate3d(160px,0px,0)
    }
    100%{
      transform: translate3d(140px,300px,0)
    }
  }
  .fade-enter-active, .fade-leave-active {  // 解释：进入时过渡动画的时间，离开时过渡动画的时间
    transition: 1.5s;
  }

  .fade-enter, .fade-leave-to {  // 解释：进入过渡动画开始的样式，离开过渡动画结束的样式
    opacity: 0;
  }
</style>
<style lang="">
  .el-input__inner{
    color: red;
  }
</style>
<template>
  <div>
    <!--<div v-for="(item,index) in state" :key="index">{{item.key}}</div>-->
    {{state}}
    <br>    
    ===========================================
  </div>
</template>
<script>
  export default {
    name:"cao",
    props:["state"],
    data(){
      return {

      }
    },
    mounted(){
      // console.log(this.state);
      // setTimeout(()=> {
      //   // 不可直接修改父组件传过来的变量
      //   this.state=100
      // }, 2000);
    },
    // watch: {
    //   state: {
    //     handler(val) {
    //       this.state = val
    //     }
    //   }
    // }
  }
</script>
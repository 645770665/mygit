<template>
  <div class="niubi">
    <div class="list" v-for="(item,index) in state">
      {{item.label}}
      <span v-if="item.children">+</span>
      <selects v-if="item.children" :state="item.children"></selects>
    </div>
  </div>
</template>
<script>
  export default {
    name:"selects",
    props:["state","value"],
    data(){
      return {

      }
    },
    mounted(){
      console.log(this.state);
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
<style scoped>
  .niubi{
    margin-right: 160px;
    padding-top: 6px;
    padding-bottom: 6px;
    /*position: absolute;
    top: 38px;
    left: 0px;*/
    /*margin-top: 30px;*/
    background-color: white;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    width: 160px;
    height: 205px;
    border: 1px solid #E4E7ED;
    border-radius: 2px;
  }
  .niubi .list{
    cursor: pointer;
    padding-left: 15px;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
  }
  .niubi div:hover{
    background-color: #F5F7FA;
  }
  .list .xuanzhong{
    color: blue;
  }
  .list div span{
    margin-left: 80px;
  }
</style>
<template>
  <div id="app">
    <transition name="slide">
    <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    
  },
  // watch:{
  //   $router:{
  //     handel(val){
  //       console.log('------------------------------');
  //       console.log(val);
  //       console.log('------------------------------');
  //     },deep:true
  //   }
  // }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #app{
    /*background-image: url('../static/73945794_p0.jpg');*/
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>

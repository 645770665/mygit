<template>
  <div>
    <h2>cas---{{msg||'nimalegebi'}}</h2>
    <button @click='$router.back()'>返回</button>
    <div>{{id||'没Id'}}</div>
    <router-view></router-view>
    <router-link to='/child'><button>跳转child页面</button></router-link>
  </div>
</template>

<script>
  export default {
    props:{
      id:{
        type:String,
        // default:'vue'
      }
    },
    components: {
      
    },
    data() {
      return {
        msg:'ceshi'
      };
    },
    methods: {
      nimade(){

      }
    },
    computed: {

    },
    mounted() {
      
    },
    created() {
      console.log('cassssssssss');
      console.log(this.id);
      console.log(this.$route.params.id);
      console.log(this.$route);
      this.msg = this.$route.params.id;
    }
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* 用户不能选择文本 */
    user-select: none;
  }
  
</style>

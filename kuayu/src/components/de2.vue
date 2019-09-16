<template>
  <div>
    {{mes}}
    <div>计数：{{count}}</div>
  </div>
</template>
<script>
export default {
  name:'',
  data(){
    return {
      mes:'这是组件222',
      count:0
    }
  },
  methods:{

  },
  mounted(){
    setInterval(() => {
      this.count++
    }, 50);
  }
}
</script>
<style lang="">
  
</style>
export const qqqq = {
  bind(el,binding){
    el.value='第一次绑定指令触发的函数bind()'
    el.onblur=function (params) {
      console.log(123);
    }
    console.log(binding);
  },
  // 自定义指令
  inserted: function (el,binding,vnode,oldVnode) {
    // 当被绑定的元素插入到 DOM 中时……
    console.log(binding);
    console.log(el);
    console.log(vnode);
    console.log(oldVnode);
    // 聚焦元素
    el.focus()
  },
  update(el,binding){
    // 页面所有dom元素发生改变时触发的函数
    console.log(el.value);
    console.log(binding);
  }
}
export const wwww = {
  bind(el){
    el.value='demodemo'
    console.log(el.value);
  },
  // 自定义指令
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    console.log(el);
    el.value=666666666666666
    console.log(el.value);
    // el.focus()
  }
}

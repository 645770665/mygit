import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cascader from '@/components/cascader'
import child from '@/components/child'
import draw from '@/components/draw'

Vue.use(Router)
let box = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    role:[1,3,7],
    alias: '/bbb',
  },
  {
    path: '/cascader',
    name: 'cascader',
    component: cascader,
    role:[11,22,33],
    children:[{
      path: '/child',
      name: 'child',
      component: child,
    }]
  },
  {
    path:'*',
    redirect: '/cascader'
  }
]
const qwe = new Router({
  mode: 'history', // hash
  routes: box
})
// console.log(qwe);
// qwe.addRoutes([{
//     path: '/cas/:id',
//     name: 'cas',
//     component: cas
//   }])
  // qwe.options.routes.push({
  //   path: '/cas',
  //   name: 'cas',
  //   component: cas
  // })
qwe.beforeEach((to, from, next) => {
  // console.log(this.a.options.routes[0].name);
  // this.a.options.routes.forEach((e) =>{
  //   if (to.name===e.name) {
  //     console.log(999);
  //     // return next('/')
  //   }
  // });
  // console.log(localStorage.getItem('role'),'权限想想想');
  // console.log(this,'this');
  // console.log(qwe.options.routes[1].role[2]==localStorage.getItem('role'),'qwe');
  
  // console.log(to);
  // console.log(from);
  next()
})
export default qwe

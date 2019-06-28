import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 路由的名字，和组件名没关系，说白了就是path的别名
      // 好处就是： 假如你的 path 是/x/x/x，我们跳转的时候就可以直接
      // @router.push('/x/x/x')
      // @router.push({ name: 'xxx' }),不仅仅如此，你就记住，给路由起个名字是一个好的做法
      name: 'home',
      path: '/',
      //  @表示 src 目录，无论你当前文件在哪，@ 都是src
      component: () => import('@/views/home')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})

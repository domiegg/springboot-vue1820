import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import zuopinleixing from '@/views/modules/zuopinleixing/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huashi from '@/views/modules/huashi/list'
    import yuegaoxinxi from '@/views/modules/yuegaoxinxi/list'
    import gaojianzuopin from '@/views/modules/gaojianzuopin/list'
    import config from '@/views/modules/config/list'
    import discusshuashizuopin from '@/views/modules/discusshuashizuopin/list'
    import huashizuopin from '@/views/modules/huashizuopin/list'
    import discusshuashi from '@/views/modules/discusshuashi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/zuopinleixing',
        name: '作品类型',
        component: zuopinleixing
      }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huashi',
        name: '画师',
        component: huashi
      }
      ,{
	path: '/yuegaoxinxi',
        name: '约稿信息',
        component: yuegaoxinxi
      }
      ,{
	path: '/gaojianzuopin',
        name: '稿件作品',
        component: gaojianzuopin
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discusshuashizuopin',
        name: '画师作品评论',
        component: discusshuashizuopin
      }
      ,{
	path: '/huashizuopin',
        name: '画师作品',
        component: huashizuopin
      }
      ,{
	path: '/discusshuashi',
        name: '画师评论',
        component: discusshuashi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;

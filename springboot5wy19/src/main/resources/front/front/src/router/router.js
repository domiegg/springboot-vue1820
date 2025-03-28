import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import zuopinleixingList from '../pages/zuopinleixing/list'
import zuopinleixingDetail from '../pages/zuopinleixing/detail'
import zuopinleixingAdd from '../pages/zuopinleixing/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import huashiList from '../pages/huashi/list'
import huashiDetail from '../pages/huashi/detail'
import huashiAdd from '../pages/huashi/add'
import huashizuopinList from '../pages/huashizuopin/list'
import huashizuopinDetail from '../pages/huashizuopin/detail'
import huashizuopinAdd from '../pages/huashizuopin/add'
import yuegaoxinxiList from '../pages/yuegaoxinxi/list'
import yuegaoxinxiDetail from '../pages/yuegaoxinxi/detail'
import yuegaoxinxiAdd from '../pages/yuegaoxinxi/add'
import gaojianzuopinList from '../pages/gaojianzuopin/list'
import gaojianzuopinDetail from '../pages/gaojianzuopin/detail'
import gaojianzuopinAdd from '../pages/gaojianzuopin/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'zuopinleixing',
					component: zuopinleixingList
				},
				{
					path: 'zuopinleixingDetail',
					component: zuopinleixingDetail
				},
				{
					path: 'zuopinleixingAdd',
					component: zuopinleixingAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'huashi',
					component: huashiList
				},
				{
					path: 'huashiDetail',
					component: huashiDetail
				},
				{
					path: 'huashiAdd',
					component: huashiAdd
				},
				{
					path: 'huashizuopin',
					component: huashizuopinList
				},
				{
					path: 'huashizuopinDetail',
					component: huashizuopinDetail
				},
				{
					path: 'huashizuopinAdd',
					component: huashizuopinAdd
				},
				{
					path: 'yuegaoxinxi',
					component: yuegaoxinxiList
				},
				{
					path: 'yuegaoxinxiDetail',
					component: yuegaoxinxiDetail
				},
				{
					path: 'yuegaoxinxiAdd',
					component: yuegaoxinxiAdd
				},
				{
					path: 'gaojianzuopin',
					component: gaojianzuopinList
				},
				{
					path: 'gaojianzuopinDetail',
					component: gaojianzuopinDetail
				},
				{
					path: 'gaojianzuopinAdd',
					component: gaojianzuopinAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import File from '../views/File.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path:'/register',
    name:'register',
    component: Register
  },
  //   健康档案
  {
    path:'/file',
    name:'file',
    component: File
  },
  //   个人信息
  {
    path:'/myinfo',
    name:'myinfo',
    component: ()=>import('../views/MyInfo.vue')
  },
  //     预约挂号
  {
    path:'/bookhome',
    name:'bookhome',
    component: ()=>import('../views/BookHome.vue')
  },
  //     挂号日期
  {
    path: '/bookdate',
    name: 'bookdate',
    component: ()=>import('../views/BookDate.vue')
  },
//     预约成功
  {
    path: '/booksuccess',
    name: 'booksuccess',
    component: ()=>import('../views/BookSuccess.vue')
  },
//     选择体检套餐
  {
    path: '/checkhome',
    name: 'checkhome',
    component: ()=>import('../views/CheckHome.vue')
  },
//     我的预约
  {
    path: '/mybook',
    name: 'mybook',
    component: ()=>import('../views/MyBook.vue')
  },
//     确认订单
  {
    path: '/confirmorder',
    name: 'confirmorder',
    component: ()=>import('../views/ConfirmOrder.vue')
  },
//    体检报告
  {
    path: '/report',
    name: 'report',
    component: ()=>import('../views/Report.vue')
  },
  {
    path: "/hospital",
    name: "hospital",
    component: ()=>import('../views/Hospital.vue')
  },
  {
    path: "/setMeal",
    name: "setMeal",
    component: ()=>import('../views/SetMeal.vue')
  },
  //日期选择
  {
    path:"/selectDate",
    name:"selectDate",
    component:()=>import('../views/SelectDate.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router

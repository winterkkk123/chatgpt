//创建路由器并进行暴露
import { createRouter,createWebHashHistory } from "vue-router"

//引入路由配置文件
import HomePage from "@/components/Chat/DialogBox/HomePage.vue"
import Demo from "@/components/Chat/DialogBox/Demo.vue"

// 创建路由实例
const router = createRouter({
  history:createWebHashHistory(),     //路由模式
  routes:[
    // 默认路由
    {
      path:'/',
      component:HomePage
    },
    // 其他路由
    {
      path:'/HomePage',
      component:HomePage
    }
    ,
    {
      path:'/Demo',
      component:Demo
    }
  ]
})

// 暴露路由
export default router
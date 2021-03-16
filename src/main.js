/*
 * @Author: wangshengxian
 * @Date: 2020-12-10 11:41:00
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-07 00:58:31
 * @Desc: main - 入口模块
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VantComponent from '@/utils/vant.config'
import { Button, List, Cell, Lazyload, Tab, Tabs } from 'vant'

import 'vant/lib/index.css' // 全局引入样式
// 全局样式
import '@/styles/index.less'
import '@/utils/routerGuard'

import '@/utils/importVant'

const app = createApp(App)

// console.log(VantComponent)

// app.use(VantComponent)

app.use(Button)
app.use(List)
app.use(Cell)
app.use(Lazyload)
app.use(Tab)
app.use(Tabs)

app.use(store)
app.use(router)
app.mount('#app')

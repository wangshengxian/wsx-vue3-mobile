/*
 * @Author: wangshengxian
 * @Date: 2020-12-10 11:41:00
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-11 00:13:30
 * @Desc:
 */
import { createRouter, createWebHistory } from 'vue-router'

import demoRouter from './modules/demo'
import apiRouter from './modules/api'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: 'index' */ '@/views/index'),
    meta: {
      title: '商城'
    }
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: 'my' */ '@/views/my'),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import(/* webpackChunkName: 'classify' */ '@/views/classify'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/classifyList',
    name: 'ClassifyList',
    component: () => import(/* webpackChunkName: 'classifyList' */ '@/views/classify/classifyList'),
    meta: {
      title: '分类商品'
    }
  },
  {
    path: '/goodsDetails',
    name: 'GoodsDetails',
    component: () => import(/* webpackChunkName: 'goodsDetails' */ '@/views/goodsDetails'),
    meta: {
      title: '商品详情'
    }
  },
  ...apiRouter,
  ...demoRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

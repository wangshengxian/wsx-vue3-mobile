/*
 * @Author: wangshengxian
 * @Date: 2020-12-31 00:06:29
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-31 00:10:00
 * @Desc:
 */
const demoRouter = [
  {
    path: '/demo',
    name: 'Demo',
    component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo'),
    meta: {
      title: 'demo'
    }
  },
  {
    path: '/demoTest',
    name: 'DemoTest',
    component: () => import(/* webpackChunkName: 'demoTest' */ '@/views/demo/demoTest'),
    meta: {
      title: 'demoTest'
    }
  },
  {
    path: '/dataTest',
    name: 'DataTest',
    component: () => import(/* webpackChunkName: 'dataTest' */ '@/views/demo/dataTest'),
    meta: {
      title: 'dataTest'
    }
  }
]

export default demoRouter

/*
 * @Author: wangshengxian
 * @Date: 2020-12-31 00:07:47
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-31 00:08:27
 * @Desc: vue3.0api - router
 */

const apiRouter = [
  {
    path: '/provide',
    name: 'Provide',
    component: () => import(/* webpackChunkName: 'provide' */ '@/views/demo/provide'),
    meta: {
      title: 'provide/inject'
    }
  }
]

export default apiRouter

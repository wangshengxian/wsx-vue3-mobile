/*
 * @Author: wangshengxian
 * @Date: 2020-12-11 15:24:11
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 15:51:58
 * @Desc: 全局路由守卫
 */

import router from '@/router'
import glg from './globalGuard'

router.beforeEach((to, from) => {
  console.log('-to-', to, '-from-', from)
  // 加载进度条
  // 设置标题
  glg.setDocumentTitle(to)
})

router.afterEach(() => {
  // console.log('路由加载完成')
})

/*
 * @Author: wangshengxian
 * @Date: 2020-12-30 23:53:49
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-30 23:58:15
 * @Desc: toast插件
 */

import { provide, inject } from 'vue'
import { Toast } from 'vant'

const ToastSymbol = Symbol() // 创建唯一标识

const _toast = {}

export function provideToast() {
  provide(ToastSymbol, _toast)
}

export function useToast() {
  const toast = inject(ToastSymbol)

  if (!toast) {
    throw new Error('error!')
  }
  return toast
}

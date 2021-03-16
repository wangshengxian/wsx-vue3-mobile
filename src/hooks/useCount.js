/*
 * @Author: wangshengxian
 * @Date: 2021-01-11 00:39:08
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-11 00:50:37
 * @Desc:
 */
import { ref, watch } from 'vue'

/**
 * @param {number} init 初始值
 * @param {object} range 范围对象 {min: 1,max: 10}
 */
export function useCount(init, range) {
  const current = ref(init)

  const add = num => {
    current.value += num
  }
  const sub = num => {
    current.value -= num
  }

  watch(current, (newVal, oldVal) => {
    console.log('-new-val-', newVal, '-old-val-', oldVal)
    if (newVal === oldVal) return
    if (newVal < +range.min) {
      current.value = range.min
    }
    if (newVal > +range.max) {
      current.value = range.max
    }
  })

  return { add, sub }
}

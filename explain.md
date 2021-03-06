<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 14:00:08
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-30 13:55:23
 * @Desc: vue3.0部分知识点解释说明
-->

### 开发依赖

cnpm i postcss-px-to-viewport -D

### 插件开发

```js
// vue2.x

var Toast = {}

Toast.install = function(Vue, options) {
  Vue.prototype.$toast = 'Hello World'
}

module.export = Toast

// vue3.0  ==> 技术文档 https://segmentfault.com/a/1190000022757326

import { provide, inject } from 'vue'

const ToastSymbol = Symbol() // 创建唯一标识，避免多个插件冲突

const _toast = () => {} // 插件主体方法

export function provideToast(config) {
  // 对外暴露方法，将 _toast 方法提供给后代组件
  provide(ToastSymbol, _toast)
}

export function useToast() {
  // 后代组件可以从该方法中拿到 toast方法
  const toast = inject(ToastSymbol)

  if (!toast) {
    throw new Error('error!')
  }
  return toast
}
```

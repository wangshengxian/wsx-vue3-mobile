/*
 * @Author: wangshengxian
 * @Date: 2020-12-10 11:41:00
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-31 00:50:56
 * @Desc:
 */
import { createStore } from 'vuex'

// TODO: 自动化导入模块文件
const modulesFiles = require.context('./modules', false, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // console.log(module, modulePath)
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // console.log(moduleName)
  const value = modulesFiles(modulePath)
  // console.log(value)
  modules[moduleName] = value.default
  return modules
}, {})

console.log(modules)

export default createStore({
  modules
})
// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// })

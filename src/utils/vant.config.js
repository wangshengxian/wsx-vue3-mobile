/*
 * @Author: wangshengxian
 * @Date: 2020-12-30 01:23:02
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-30 12:35:57
 * @Desc: vant按需引入
 */

import { Toast, Button, List, Cell } from 'vant'

const components = {
  Toast,
  Button,
  List,
  Cell
}

const componentHandle = {
  install(app) {
    const keyArr = Object.keys(components)
    console.log('-key-arr-', keyArr)
    keyArr.forEach(key => app.use(components[key]))
  }
}

export default componentHandle

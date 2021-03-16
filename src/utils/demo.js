/*
 * @Author: wangshengxian
 * @Date: 2021-01-05 00:47:36
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-05 00:58:50
 * @Desc:
 */

// 逻辑运算符简化代码  2020-01-05
// bad
if (flag) {
  someMethod()
}
// good
flag && someMethod()

// includes 处理多重条件 2020-01-05
// bad
if (code === '202' || code === '203' || code === '204') {
  someMethod()
}

// good
if (['202', '203', '204'].includes(code)) {
  someMethod()
}

<!--
 * @Author: wangshengxian
 * @Date: 2020-12-11 11:17:27
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 15:54:15
 * @Desc: 子组件
-->
<template>
  <div class="child">
    <div class="title">
      <p>子组件</p>
    </div>
    <div class="main">
      <p class="txt msg1">{{ msg1 }}</p>
      <p class="txt msg2">{{ msg2 }}</p>
      <p class="txt msg">{{ msg }}</p>
    </div>
    <grandson />
  </div>
</template>

<script>
import { inject } from 'vue'
import grandson from './grandson'
export default {
  components: { grandson },
  setup() {
    const msg1 = inject('msg1')
    const msg2 = inject('msg2')
    const msg = inject('msg')
    return {
      msg1,
      msg2,
      msg
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.title {
  font-weight: 700;
  font-size: 18px;
  color: #000;
  line-height: 42px;
}
.txt {
  line-height: 36px;
}
</style>

<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 15:28:46
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-10 15:29:31
 * @Desc: 我的 - page
-->
<template>
  <div class="my-page">
    我的
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('我的')
    })
    onUpdated(() => {})
    onUnmounted(() => {})
    return {}
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>

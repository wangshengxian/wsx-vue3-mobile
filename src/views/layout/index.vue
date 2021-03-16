<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 14:04:16
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 15:51:34
 * @Desc: layout - components
-->
<template>
  <div class="layout">
    <div class="layout-header">
      <!-- <headerBar /> -->
    </div>
    <div class="layout-main">
      <router-view></router-view>
    </div>
    <div class="layout-footer">
      <footerNav />
    </div>
  </div>
</template>

<script>
import footerNav from '@/components/footerNav'
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      // console.log('layout组件')
    })
    onUpdated(() => {})
    onUnmounted(() => {})
    return {}
  },
  components: { footerNav }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>

<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 11:41:00
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-31 01:08:08
 * @Desc: 根组件 - components
-->
<template>
  <layout />
</template>

<script>
import layout from '@/views/layout'
export default {
  components: { layout }
}
</script>

<style>
#app {
  height: 100%;
  font-size: 15px;
  background: #f9fafc;
  -webkit-overflow-scrolling: touch;
}
</style>

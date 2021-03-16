<!--
 * @Author: wangshengxian
 * @Date: 2020-12-11 17:21:59
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 18:30:15
 * @Desc: toast - components
-->
<template>
  <div class="toast-components" v-show="toastVis">
    <p class="txt">{{ message }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const toastVis = computed({
      get() {
        console.log('-props-', props)
        return props.visible
      },
      set(val) {
        console.log('-set-val-', val)
        emit('input', val)
      }
    })
    return { toastVis }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>

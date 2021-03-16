<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 17:49:21
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 18:29:26
 * @Desc: demoTest - page
-->
<template>
  <div class="demo-test-page">
    <headerBar />
    <div class="main">
      <p class="txt">{{ newCount }}</p>
      <xx-btn btnTxt="sub" @onClick="handleSub" />
      <xx-btn btnTxt="add" @onClick="handleAdd" />
      <xx-btn btnTxt="打开toast" @onClick="handleOpenToast" />
      <xx-btn btnTxt="关闭toast" @onClick="handleCloseToast" />
    </div>
    <toast message="toast提示信息" :visible="isToast" />
  </div>
</template>

<script>
import { ref, reactive, watch, computed } from 'vue'
import headerBar from '@/components/headerBar'
import xxBtn from '@/components/btn'
import toast from '@/components/toast'
export default {
  components: { headerBar, xxBtn, toast },
  setup() {
    const data = reactive({ count: 0 })
    const isToast = ref(true)
    // console.log(isToast)
    const newCount = computed(() => data.count + 1)
    const handleSub = () => {
      data.count--
    }
    const handleAdd = () => {
      data.count++
    }
    const handleOpenToast = () => {
      console.log('open')
      isToast.value = true
      // console.log(isToast)
    }
    const handleCloseToast = () => {
      isToast.value = false
    }
    // 监听单个属性
    watch(newCount, (newVal, oldVal) => {
      console.log(newVal, oldVal)
      console.log('The new newCount value is:' + newCount.value)
    })
    return { isToast, newCount, handleSub, handleAdd, handleOpenToast, handleCloseToast }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.txt {
  line-height: 36px;
}
</style>

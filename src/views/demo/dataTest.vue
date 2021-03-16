<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 16:06:38
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 16:04:46
 * @Desc: data-测试
-->
<template>
  <div class="data-page">
    <headerBar />
    <div class="main">
      <p class="dataRef">{{ count }}</p>
      <div class="dataReactive">
        <!-- <img src="@/assets/images/demo/yyxBg.jpg" alt="" class="img" /> -->
        <p class="name">姓名：{{ userInfo.name }}</p>
        <p class="introduce">介绍：{{ userInfo.introduce }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import headerBar from '@/components/headerBar'
export default {
  components: { headerBar },
  setup() {
    // ref 将定义的基础数据类型包装成一个响应式的数据对象。注意: js获取需要通过 .value来获取，html结构中则不需要
    const count = ref(1)
    console.log(count.value)
    // reactive 将复杂的数据类型(数组/对象)包装成一个响应式的数据对象。
    const userInfo = reactive({ name: '尤大大', introduce: '写了一个叫vue的前端框架' })
    console.log(userInfo.name)
    return {
      count,
      userInfo
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.main {
  p {
    line-height: 36px;
  }
}
</style>

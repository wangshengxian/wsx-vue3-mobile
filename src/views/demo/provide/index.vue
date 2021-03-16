<!--
 * @Author: wangshengxian
 * @Date: 2020-12-11 11:13:05
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 15:53:14
 * @Desc: provide/inject -- composition api (常用于高阶组件)
-->
<template>
  <div class="provide-inject">
    <headerBar />
    <div class="main">
      <child />
      <div class="btnBox">
        <button class="btn" @click="onChange">修改透传数据</button>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, reactive, toRef, toRefs } from 'vue'
import headerBar from '@/components/headerBar'
import child from './components/child'
export default {
  components: { headerBar, child },
  setup() {
    const msg = ref(0)
    const state = reactive({
      msg1: '测试往下透传一个数据',
      msg2: '透传一个静态'
    })
    const onChange = () => {
      state.msg1 = '修改了数据'
      state.msg2 = '修改了静态数据' // 静态数据修改无效
      msg.value++
    }
    provide('msg1', toRef(state, 'msg1'))
    provide('msg2', state.msg2)
    provide('msg', msg)
    return { ...toRefs(state), msg, onChange }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.btnBox {
  .btn {
    background: #1989fa;
    color: #fff;
    border: 1px solid #1989fa;
    border-radius: 4px;
    padding: 6px 16px;
    margin: 0 16px 10px 0;
  }
}
</style>

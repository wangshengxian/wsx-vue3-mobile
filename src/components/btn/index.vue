<!--
 * @Author: wangshengxian
 * @Date: 2020-12-11 16:13:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 17:14:44
 * @Desc: btn - components
-->
<template>
  <div class="btn-components">
    <button class="btn" @click="onBtnClick">{{ btnTxt }}</button>
  </div>
</template>

<script>
export default {
  props: {
    btnTxt: {
      type: String,
      default: '测试btn'
    }
  },
  setup(props, context) {
    // console.log(context)
    const onBtnClick = () => {
      context.emit('onClick')
    }
    return {
      onBtnClick
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.btn-components {
  display: inline-block;
}
.btn {
  background: #1989fa;
  color: #fff;
  border: 1px solid #1989fa;
  border-radius: 4px;
  padding: 6px 16px;
  margin: 0 16px 10px 0;
}
</style>

<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 14:02:29
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-11 15:51:00
 * @Desc: header - components
-->
<template>
  <div class="header-components">
    <div class="header-global">
      <div class="left" @click="goBack">
        <span class="leftIcon"></span>
      </div>
      <div class="center">
        <p class="title">{{ headerTitle || routeTitle }}</p>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
export default {
  props: {
    headerTitle: {
      type: String,
      default: ''
    }
  },
  setup() {
    // toRaw ==> 从reactive响应式对象中获取原始数据，（响应式对象转普通对象）
    const router = useRouter()
    // console.log('router:', router)
    const route = useRoute() // 获取路由对象信息
    // console.log('route:', route)
    const routeTitle = route.meta.title
    // console.log('-route-title-', routeTitle)
    const goBack = () => {
      // console.log('-route-path-', route.path)
      if (route.path === '/index') {
        console.log('当前为首页，不可再返回')
        return
      }
      router.go(-1)
    }
    onMounted(() => {
      // console.log('headerBar组件')
    })
    return { routeTitle, goBack }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
@imgComUrl: '~@/assets/images/com/';
@height: 54px;
.header-components {
  height: @height;
}
.header-global {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  line-height: @height;

  .left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: @height;
    height: @height;

    .leftIcon {
      width: 12px;
      height: 20px;
      background: url('@{imgComUrl}icon-left-arrow3.png') no-repeat center / cover;
    }
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>

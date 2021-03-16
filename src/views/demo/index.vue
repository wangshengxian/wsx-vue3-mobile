<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 15:06:59
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-31 00:04:35
 * @Desc: 首页 - page
-->
<template>
  <div class="index-page">
    <headerBar />
    <div class="main">
      <div class="btnBox">
        <van-button type="primary" size="small" round @click="onDemo">demo</van-button>
      </div>
      <div class="btnBox">
        <button class="btn" @click="onDemoTest">demoTest</button>
        <button class="btn btn-provide" @click="onProvideTest">provide</button>
        <button class="btn" @click="onDataTest">dataTest</button>
        <button class="btn">demo3</button>
        <button class="btn">demo4</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, onUpdated, onUnmounted } from 'vue'
import headerBar from '@/components/headerBar'
import { Toast } from 'vant'
export default {
  components: { headerBar },
  setup(props, context) {
    const onDemo = () => {
      Toast('设置一个toast')
    }
    const router = useRouter()
    const onDemoTest = () => {
      router.push('/demoTest')
    }
    const onProvideTest = () => {
      router.push('/provide')
    }
    const onDataTest = () => {
      router.push('/dataTest')
    }
    onMounted(() => {
      // console.log('首页组件')
    })
    onUpdated(() => {})
    onUnmounted(() => {})
    return {
      onDemo,
      onDemoTest,
      onProvideTest,
      onDataTest
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.index-page {
  .main {
    padding: 15px;
  }
}
.btnBox {
  margin-bottom: 10px;
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

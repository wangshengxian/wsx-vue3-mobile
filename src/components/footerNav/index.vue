<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 15:02:47
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-07 00:26:39
 * @Desc: footer - components
-->
<template>
  <div class="footer-components">
    <div class="navWrap">
      <router-link
        class="item fx-column-center"
        :class="{ isActive: footActIdx === index }"
        :to="item.path"
        v-for="(item, index) in list"
        :key="index"
      >
        <span class="icon" :class="'icon' + '_' + index"></span>
        <p class="title">{{ item.title }}</p>
      </router-link>
      <!-- <router-link
        class="item fx-column-center"
        :class="{ isActive: footActIdx === index }"
        :to="index === 0 ? item.path + '/' + code : item.path"
        v-for="(item, index) in list"
        :key="index"
      >
        <span class="icon" :class="'icon' + '_' + index"></span>
        <p class="title">{{ item.title }}</p>
      </router-link> -->
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  setup() {
    const list = [
      { path: '/index', title: '商城', actIcon: 'icon-footer-mall', noActIcon: 'icon-footer-mall' },
      { path: '/my', title: '我的', actIcon: 'icon-footer-my', noActIcon: 'icon-footer-no-my' }
    ]
    onMounted(() => {
      // console.log('footerNav组件')
    })
    onUpdated(() => {})
    onUnmounted(() => {})
    return { list }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
@imgUrl: '~@/assets/images/com/';
.footer-components {
  height: 70px;
}

.navWrap {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

  .item {
    width: 50%;
    color: #d2d4d9;

    .icon {
      width: 24px;
      height: 24px;

      &.icon_0 {
        background: url('@{imgUrl}icon-footer-no-mall.png') no-repeat center / cover;
      }
      &.icon_1 {
        background: url('@{imgUrl}icon-footer-no-my.png') no-repeat center / cover;
      }
    }
  }
  .isActive {
    color: #5fc0a3;

    .icon {
      &.icon_0 {
        background: url('@{imgUrl}icon-footer-mall.png') no-repeat center / cover;
      }
      &.icon_1 {
        background: url('@{imgUrl}icon-footer-my.png') no-repeat center / cover;
      }
    }
  }
}
</style>

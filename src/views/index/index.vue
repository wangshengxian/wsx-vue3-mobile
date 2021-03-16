<!--
 * @Author: wangshengxian
 * @Date: 2020-12-10 15:06:59
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-26 12:55:45
 * @Desc: 首页 - page
-->
<template>
  <div class="index-page">
    <headerBar />
    <div class="main">
      <div class="topBg"></div>

      <div class="content">
        <div class="navWrap">
          <div class="navContent">
            <ul class="navList">
              <li class="item" v-for="(item, index) in categoryList" :key="index" @click="onNav(item)">
                <span class="itemIcon" :class="'icon' + '_' + index"></span>
                <p>{{ item.name }}</p>
              </li>
            </ul>
            <div class="explainTabBox">
              <div class="tabItem" @click="onTab('1')">
                <span class="icon-1-1"></span>
                <p class="txt">关于我们</p>
                <span class="icon-arrow"></span>
              </div>
              <div class="tabItem" @click="onTab('2')">
                <span class="icon-2-1"></span>
                <p class="txt">购买须知</p>
                <span class="icon-arrow"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="listWrap">
          <div class="titleBox">
            <p class="title">为你推荐</p>
            <p class="btnTxt" @click="onOpenPage">查看全部<span class="icon"></span></p>
          </div>
          <div class="listBox">
            <van-list
              :loading="isMoreLoading"
              :finished="isMoreFinished"
              :error="isMoreError"
              error-text="请求失败，点击重新加载"
              finished-text="没有更多了"
              :offset="300"
              :immediate-check="false"
              @load="getMoreData"
            >
              <goodsList :list="recommendList" />
            </van-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import goodsList from './components/goodList'
import { useRouter } from 'vue-router'
import { toRefs, onMounted, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import api from '@/api'
import storage from '@/utils/storage'
export default {
  components: { headerBar, goodsList },
  setup(props, context) {
    const router = useRouter()
    const store = useStore()
    console.log('-store-', store, store.state.goods)
    const categoryList = computed(() => store.state.goods.categoryList)
    console.log('-category-list-', categoryList)
    const onNav = item => {
      console.log('-item-', item)
      if (storage.getItem('category_activeidx')) {
        storage.removeItem('category_activeidx')
      }
      router.push({ name: 'Classify', query: { classifyId: item.id } })
    }

    // 获取一级分类list
    const getCategoryData = () => {
      store.dispatch('goods/getCategoryList')
    }

    const infoData = reactive({
      pageNum: 1,
      pageSize: 6,
      isMoreLoading: false,
      isMoreFinished: false,
      isMoreError: false,
      recommendList: []
    })

    const getData = () => {
      infoData.isMoreLoading = true
      const params = { pageNum: infoData.pageNum, pageSize: infoData.pageSize }
      console.log('-init-params-', params)
      api
        .getRecommendList(params)
        .then(res => {
          infoData.isMoreLoading = false
          console.log('-res--', res)
          const { result, totalCount } = res.data
          infoData.recommendList = result
          infoData.pageNum++
          if (infoData.recommendList.length >= totalCount) {
            console.log('全部加载完成')
            infoData.isMoreFinished = true
          }
        })
        .catch(err => {
          console.log('-HOME-ERROR-', err)
          infoData.isMoreLoading = false
          infoData.isMoreError = true
        })
    }

    const getMoreData = () => {
      infoData.isMoreLoading = true
      const params = { pageNum: infoData.pageNum, pageSize: infoData.pageSize }
      console.log('-more-params-', params)
      api
        .getRecommendList(params)
        .then(res => {
          infoData.isMoreLoading = false
          console.log('-res--', res)
          const { result, totalCount } = res.data
          infoData.recommendList = [...infoData.recommendList, ...result]
          infoData.pageNum++
          if (infoData.recommendList.length >= totalCount) {
            console.log('全部加载完成')
            infoData.isMoreFinished = true
          }
        })
        .catch(err => {
          console.log('-HOME-ERROR-', err)
          infoData.isMoreError = true
        })
    }

    const onDemo = () => {
      router.push('/demo')
    }

    const onTab = data => {
      console.log('-tab-', data)
    }

    onMounted(() => {
      getCategoryData()
      getData()
    })

    return {
      categoryList,
      ...toRefs(infoData),
      getMoreData,
      onDemo,
      onNav,
      onTab
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
@imgUrl: '~@/assets/images/home/';
@imgComUrl: '~@/assets/images/com/';
.index-page {
  width: 100%;
  background: #f9fafc;

  .content {
    padding: 0 15px;
  }
}
.topBg {
  width: 100%;
  height: 293px;
  background: url('@{imgUrl}topBg.png') no-repeat center / cover;
}
.navWrap {
  position: relative;
  width: 100%;
  height: 114px;

  .navContent {
    position: absolute;
    bottom: 0;
    width: 100%;

    .navList {
      display: flex;
      background: #fff;
      // border-radius: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        padding-top: 31px;

        .itemIcon {
          width: 36px;
          height: 36px;

          &.icon_0 {
            background: url('@{imgUrl}icon-classify3.png') no-repeat center / cover;
          }
          &.icon_1 {
            background: url('@{imgUrl}icon-classify4.png') no-repeat center / cover;
          }
          &.icon_2 {
            background: url('@{imgUrl}icon-classify5.png') no-repeat center / cover;
          }
          &.icon_3 {
            background: url('@{imgUrl}icon-classify1.png') no-repeat center / cover;
          }
          &.icon_4 {
            background: url('@{imgUrl}icon-classify2.png') no-repeat center / cover;
          }
        }

        p {
          color: #b1b2b7;
          font-size: 15px;
          line-height: 21px;
          padding: 13px 0;
        }
      }
    }

    .explainTabBox {
      display: flex;
      overflow: hidden;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      .tabItem {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        background: #fff;
        line-height: 48px;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }

        .txt {
          font-size: 16px;
          color: #292929;
          padding: 0 16px 0 8px;
        }

        .icon-1-1 {
          width: 21px;
          height: 21px;
          background: url('@{imgUrl}icon-about-us.png') no-repeat center / cover;
        }

        .icon-2-1 {
          width: 18px;
          height: 22px;
          background: url('@{imgUrl}icon-buy-notes.png') no-repeat center / cover;
        }

        .icon-arrow {
          width: 12px;
          height: 9px;
          background: url('@{imgUrl}icon-right-arrow1.png') no-repeat center / cover;
        }
      }
    }
  }
}

.listWrap {
  .titleBox {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;

    p {
      display: flex;
      align-items: center;
    }

    .title {
      font-size: 18px;
      font-weight: 800;
      color: #292929;
    }

    .btnTxt {
      font-size: 14px;
      color: #d2d4d9;

      .icon {
        width: 7px;
        height: 12px;
        background: url('@{imgComUrl}icon-right-arrow.png') no-repeat center / cover;
        margin-left: 8px;
      }
    }
  }
  .listBox {
    padding-bottom: 24px;
  }
}

:deep(.van-list) {
  .van-list__finished-text {
    width: 100%;
  }
  .van-list__error-text {
    width: 100%;
  }
  .van-list__loading {
    width: 100%;
  }
}
</style>

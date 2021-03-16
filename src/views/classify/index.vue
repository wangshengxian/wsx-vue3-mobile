<!--
 * @Author: wangshengxian
 * @Date: 2020-12-31 01:33:34
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-11 13:17:18
 * @Desc: 商品分类页 - page
-->
<template>
  <div class="classify-page">
    <headerBar />
    <div class="main flex1">
      <div class="container">
        <van-tabs
          v-model="activeIdx"
          :swipe-threshold="4"
          sticky
          :offset-top="offsetTop"
          background="#fff"
          title-active-color="rgba(0,0,0,1)"
          title-inactive-color="rgba(0,0,0,0.6)"
          :line-width="30 / remBase + 'rem'"
          :line-height="3 / remBase + 'rem'"
          @change="onTabsChange"
        >
          <van-tab
            class="content"
            v-for="(itemOptions, index) in categoryList"
            :key="index"
            :title="itemOptions.name"
            :name="itemOptions.id"
          >
            <ul class="nextCategory">
              <li class="itemWrap" v-for="(item, idx) in infoData.secondCategoryList" :key="idx">
                <div class="item" @click="onJumpPage(item)">
                  <img class="backgroundImg" :src="item.backgroundImage" alt="" />
                  <div class="iconImgBox">
                    <img :src="item.icon" alt="" class="iconImg" />
                  </div>
                </div>
              </li>
            </ul>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import api from '@/api/index'
import storage from '@/utils/storage'
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: { headerBar },
  setup() {
    const offsetTop = ref('54')
    const remBase = ref('41.4')
    const activeIdx = ref(1) // 当前激活的tabIdx
    const categoryId = ref('') // 分类id
    const infoData = reactive({
      secondCategoryList: []
    })

    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    console.log('-store-', store, store.state.goods)
    const categoryList = computed(() => store.state.goods.categoryList)
    console.log('-category-list-', categoryList)

    const onTabsChange = id => {
      console.log('-id-', id)
      categoryId.value = id
      // getInitData()
    }

    const onJumpPage = item => {
      console.log('-item-', item)
      router.push({ name: 'ClassifyList', query: { id: item.id, title: item.name } })
    }

    const getInitData = () => {
      console.log('-category-id-', categoryId, categoryId.value)
      const params = { id: categoryId.value }
      console.log('-params-', params)
      api
        .getNextCategory(params)
        .then(res => {
          console.log('-res-', res)
          const data = res.data
          infoData.secondCategoryList = data
          console.log('-second-category-list-data-', infoData.secondCategoryList)
        })
        .catch(err => {
          console.log('-err-', err)
        })
    }

    onMounted(() => {
      console.log('-query-', route.query)
      categoryId.value = route.query.classifyId
      getInitData()
    })
    return {
      offsetTop,
      remBase,
      activeIdx,
      categoryId,
      categoryList,
      infoData,
      onTabsChange,
      onJumpPage
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
@imgComUrl: '~@/assets/images/com/';
/deep/ .header-global {
  .leftIcon {
    width: 12px;
    height: 20px;
    background: url('@{imgComUrl}icon-left-arrow3.png') no-repeat center / cover;
  }

  .icon {
    background: url('@{imgComUrl}icon-cart2.png') no-repeat center / cover;
  }
}

.classify-page {
  .main {
    /deep/ .van-tabs__wrap--scrollable {
      .van-tabs__nav--complete {
        padding: 0 0 15px;
      }
    }
  }

  .container {
    // height: 100%;
    // overflow-y: auto;
    // -webkit-overflow-scrolling: touch;
  }

  .content {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: #f9fafc;
  }
}

.nextCategory {
  padding: 16px 15px;

  .item {
    position: relative;
    margin-bottom: 16px;
    .backgroundImg {
      display: block;
      width: 100%;
      height: 146px;
      border-radius: 10px;
    }
    .iconImgBox {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: 60px;

      .iconImg {
        transform: scale(0.5);
        transform-origin: left center;
      }
    }
  }
}
</style>

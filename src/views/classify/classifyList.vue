<!--
 * @Author: wangshengxian
 * @Date: 2021-01-10 23:51:09
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-11 00:24:59
 * @Desc: 分类商品页 - page
-->
<template>
  <div class="classify-list-page">
    <headerBar :headerTitle="headerTitle" />
    <div class="main">
      <div class="content">
        <div class="listBox">
          <van-list
            class="goodsList"
            :loading="isMoreLoading"
            :finished="isMoreFinished"
            :error="isMoreError"
            error-text="请求失败，点击重新加载"
            finished-text="没有更多了"
            :offset="300"
            :immediate-check="false"
            @load="getMoreData"
          >
            <goodsList :list="goodsList" />
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import goodsList from './components/goodsList'
import api from '@/api'
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: { headerBar, goodsList },
  setup() {
    const route = useRoute()
    const classifyId = ref('')
    const headerTitle = ref('')
    const infoData = reactive({
      pageNum: 1,
      pageSize: 10,
      isMoreLoading: false,
      isMoreFinished: false,
      isMoreError: false,
      goodsList: []
    })
    const getData = () => {
      const params = { id: classifyId.value, pageNum: infoData.pageNum, pageSize: infoData.pageSize }
      console.log('-params-', params)
      infoData.isMoreLoading = true
      api
        .getCategoryGoods(params)
        .then(res => {
          console.log('-res--', res)
          infoData.isMoreLoading = false
          const { result, totalCount } = res.data
          infoData.goodsList = result
          infoData.pageNum++
          console.log('-list-', infoData.goodsList)
          if (infoData.goodsList.length >= totalCount) {
            console.log('全部加载完成')
            infoData.isMoreFinished = true
          }
        })
        .catch(err => {
          console.log('-HOME-ERROR-', err)
          infoData.isMoreError = true
        })
    }
    const getMoreData = () => {
      console.log('-加载更多-')
      infoData.isMoreLoading = true
      const params = { id: classifyId, pageNum: infoData.pageNum, pageSize: infoData.pageSize }
      console.log('-params-', params)
      api
        .getCategoryGoods(params)
        .then(res => {
          infoData.isMoreLoading = false
          console.log('-res--', res)
          const { result, totalCount } = res.data
          infoData.goodsList = [...infoData.goodsList, ...result]
          infoData.pageNum++
          if (infoData.goodsList.length >= totalCount) {
            console.log('全部加载完成')
            infoData.isMoreFinished = true
          }
        })
        .catch(err => {
          console.log('-ERROR-', err)
          infoData.isMoreError = true
        })
    }

    const setTitle = () => {
      document.title = headerTitle.value
    }

    onMounted(() => {
      const { id, title } = route.query
      console.log(title)
      classifyId.value = id
      headerTitle.value = title
      setTitle()
      getData()
    })
    return {
      headerTitle,
      ...toRefs(infoData),
      getMoreData
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

.classify-list-page {
  // height: 100%;
  // background: #ccc;

  .content {
    padding: 15px 15px 0;
  }
}
</style>

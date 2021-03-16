/*
 * @Author: wangshengxian
 * @Date: 2020-10-19 15:35:17
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-31 00:52:44
 * @Desc: 用户全局状态 - store
 */

import Cookie from 'js-cookie'

const state = {
  code: Cookie.get('code') || '', // 代理商渠道码
  key: Cookie.get('key') || '',
  userInfo: Cookie.get('userInfo') || {}
}

const getters = {
  code(state) {
    return state.code
  },
  userInfo(state) {
    // console.log(typeof state.userInfo)
    return typeof state.userInfo === 'object' ? state.userInfo : JSON.parse(state.userInfo)
  }
}

const mutations = {
  setCode(state, code) {
    state.code = code
  },
  setKey(state, key) {
    state.key = key
  },
  setUserInfo(state, userInfo) {
    console.log('-userInfo-', userInfo)
    state.userInfo = userInfo
  }
}

const actions = {}

export default {
  // 开启命名空间
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

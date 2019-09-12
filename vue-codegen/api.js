/* eslint-disable */
import * as api from './api'
//相关内容可参考 https://segmentfault.com/a/1190000015782272
const state = {
  bondBean: {}, //获取所有的可转债
  detailBean: {}, //获取即时比赛详细信息
  heroBean: {}, //获取英雄的简要信息
  heroDetailBean: {}, //获取英雄的网页介紹信息
  heroStatsBean: {}, //获取英雄的详细信息
  heroStatsSimpleBean: {}, //获取英雄的简要信息
  itemsBean: {}, //获取所有的装备列表
  jgdyBean: {}, //获取机构调研数据
  loftABean: {}, //获取所有的分级A基金
  loftBBean: {}, //获取所有的分级B基金
  mapBean: {}, //map
  matchesBean: {}, //根据match_id来获取历史比赛列表
  otherBean: {}, //获取所有的混合型基金
  publicMatchBean: {}, //根据match_id来获取公众历史比赛列表
  queryBean: {}, //query
  saveBean: {}, //save
  stockDetailBean: {}, //从sina获取
  stockFundBean: {}, //获取所有的股票型基金
  stockFxBean: {}, //昨天涨停，今天长上影线
  stockJhBean: {}, //前日涨停，昨天长上影线，今日暴跌
  stockVolHalfBean: {}, //今日量能是昨天的一半
  teamBean: {}, //获取队伍的详细信息
  topLiveBean: {}, //获取即时比赛列表
}
/**
 * getters
 */
const getters = {
  getBondBean(state, getters, rootState) => {
    return state.bondBean
  },
  getDetailBean(state, getters, rootState) => {
    return state.detailBean
  },
  getHeroBean(state, getters, rootState) => {
    return state.heroBean
  },
  getHerodetailBean(state, getters, rootState) => {
    return state.heroDetailBean
  },
  getHerostatsBean(state, getters, rootState) => {
    return state.heroStatsBean
  },
  getHerostatssimpleBean(state, getters, rootState) => {
    return state.heroStatsSimpleBean
  },
  getItemsBean(state, getters, rootState) => {
    return state.itemsBean
  },
  getJgdyBean(state, getters, rootState) => {
    return state.jgdyBean
  },
  getLoftaBean(state, getters, rootState) => {
    return state.loftABean
  },
  getLoftbBean(state, getters, rootState) => {
    return state.loftBBean
  },
  getMapBean(state, getters, rootState) => {
    return state.mapBean
  },
  getMatchesBean(state, getters, rootState) => {
    return state.matchesBean
  },
  getOtherBean(state, getters, rootState) => {
    return state.otherBean
  },
  getPublicmatchBean(state, getters, rootState) => {
    return state.publicMatchBean
  },
  getQueryBean(state, getters, rootState) => {
    return state.queryBean
  },
  getSaveBean(state, getters, rootState) => {
    return state.saveBean
  },
  getStockdetailBean(state, getters, rootState) => {
    return state.stockDetailBean
  },
  getStockfundBean(state, getters, rootState) => {
    return state.stockFundBean
  },
  getStockfxBean(state, getters, rootState) => {
    return state.stockFxBean
  },
  getStockjhBean(state, getters, rootState) => {
    return state.stockJhBean
  },
  getStockvolhalfBean(state, getters, rootState) => {
    return state.stockVolHalfBean
  },
  getTeamBean(state, getters, rootState) => {
    return state.teamBean
  },
  getTopliveBean(state, getters, rootState) => {
    return state.topLiveBean
  },
}
/**
 * actions 异步方法
 */
const actions = {
  /**
   * 获取所有的可转债
   */
  requestBond({
    dispatch,
    commit,
    state
  }, parameters) {
    .bondUsingGET(parameters).then((response) => {
      commit('setBondBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取即时比赛详细信息
   */
  requestDetail({
    dispatch,
    commit,
    state
  }, parameters) {
    .detailUsingGET(parameters).then((response) => {
      commit('setDetailBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取英雄的简要信息
   */
  requestHero({
    dispatch,
    commit,
    state
  }, parameters) {
    .heroUsingGET(parameters).then((response) => {
      commit('setHeroBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取英雄的网页介紹信息
   */
  requestHerodetail({
    dispatch,
    commit,
    state
  }, parameters) {
    .heroDetailUsingGET(parameters).then((response) => {
      commit('setHerodetailBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取英雄的详细信息
   */
  requestHerostats({
    dispatch,
    commit,
    state
  }, parameters) {
    .heroStatsUsingGET(parameters).then((response) => {
      commit('setHerostatsBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取英雄的简要信息
   */
  requestHerostatssimple({
    dispatch,
    commit,
    state
  }, parameters) {
    .heroStatsSimpleUsingGET(parameters).then((response) => {
      commit('setHerostatssimpleBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取所有的装备列表
   */
  requestItems({
    dispatch,
    commit,
    state
  }, parameters) {
    .itemsUsingGET(parameters).then((response) => {
      commit('setItemsBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取机构调研数据
   */
  requestJgdy({
    dispatch,
    commit,
    state
  }, parameters) {
    .jgdyUsingGET(parameters).then((response) => {
      commit('setJgdyBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取所有的分级A基金
   */
  requestLofta({
    dispatch,
    commit,
    state
  }, parameters) {
    .loftAUsingGET(parameters).then((response) => {
      commit('setLoftaBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取所有的分级B基金
   */
  requestLoftb({
    dispatch,
    commit,
    state
  }, parameters) {
    .loftBUsingGET(parameters).then((response) => {
      commit('setLoftbBean', {
        'data': response.data
      })
    })
  },
  /**
   * map
   */
  requestMap({
    dispatch,
    commit,
    state
  }, parameters) {
    .mapUsingGET(parameters).then((response) => {
      commit('setMapBean', {
        'data': response.data
      })
    })
  },
  /**
   * 根据match_id来获取历史比赛列表
   */
  requestMatches({
    dispatch,
    commit,
    state
  }, parameters) {
    .matchesUsingGET(parameters).then((response) => {
      commit('setMatchesBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取所有的混合型基金
   */
  requestOther({
    dispatch,
    commit,
    state
  }, parameters) {
    .otherFundUsingGET(parameters).then((response) => {
      commit('setOtherBean', {
        'data': response.data
      })
    })
  },
  /**
   * 根据match_id来获取公众历史比赛列表
   */
  requestPublicmatch({
    dispatch,
    commit,
    state
  }, parameters) {
    .publicMatchUsingGET(parameters).then((response) => {
      commit('setPublicmatchBean', {
        'data': response.data
      })
    })
  },
  /**
   * query
   */
  requestQuery({
    dispatch,
    commit,
    state
  }, parameters) {
    .queryUsingGET(parameters).then((response) => {
      commit('setQueryBean', {
        'data': response.data
      })
    })
  },
  /**
   * save
   */
  requestSave({
    dispatch,
    commit,
    state
  }, parameters) {
    .saveUsingPOST(parameters).then((response) => {
      commit('setSaveBean', {
        'data': response.data
      })
    })
  },
  /**
   * 从sina获取
   */
  requestStockdetail({
    dispatch,
    commit,
    state
  }, parameters) {
    .stockDetailUsingGET(parameters).then((response) => {
      commit('setStockdetailBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取所有的股票型基金
   */
  requestStockfund({
    dispatch,
    commit,
    state
  }, parameters) {
    .stockFundUsingGET(parameters).then((response) => {
      commit('setStockfundBean', {
        'data': response.data
      })
    })
  },
  /**
   * 昨天涨停，今天长上影线
   */
  requestStockfx({
    dispatch,
    commit,
    state
  }, parameters) {
    .stockFxUsingGET(parameters).then((response) => {
      commit('setStockfxBean', {
        'data': response.data
      })
    })
  },
  /**
   * 前日涨停，昨天长上影线，今日暴跌
   */
  requestStockjh({
    dispatch,
    commit,
    state
  }, parameters) {
    .stockJhUsingGET(parameters).then((response) => {
      commit('setStockjhBean', {
        'data': response.data
      })
    })
  },
  /**
   * 今日量能是昨天的一半
   */
  requestStockvolhalf({
    dispatch,
    commit,
    state
  }, parameters) {
    .stockVolHalfUsingGET(parameters).then((response) => {
      commit('setStockvolhalfBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取队伍的详细信息
   */
  requestTeam({
    dispatch,
    commit,
    state
  }, parameters) {
    .teamUsingGET(parameters).then((response) => {
      commit('setTeamBean', {
        'data': response.data
      })
    })
  },
  /**
   * 获取即时比赛列表
   */
  requestToplive({
    dispatch,
    commit,
    state
  }, parameters) {
    .topLiveUsingGET(parameters).then((response) => {
      commit('setTopliveBean', {
        'data': response.data
      })
    })
  },
}
/**
 * mutations 同步操作
 */
const mutations = {
  setBondBean(state, {
    data
  }) {
    state.bondBean = data
  },
  setDetailBean(state, {
    data
  }) {
    state.detailBean = data
  },
  setHeroBean(state, {
    data
  }) {
    state.heroBean = data
  },
  setHerodetailBean(state, {
    data
  }) {
    state.heroDetailBean = data
  },
  setHerostatsBean(state, {
    data
  }) {
    state.heroStatsBean = data
  },
  setHerostatssimpleBean(state, {
    data
  }) {
    state.heroStatsSimpleBean = data
  },
  setItemsBean(state, {
    data
  }) {
    state.itemsBean = data
  },
  setJgdyBean(state, {
    data
  }) {
    state.jgdyBean = data
  },
  setLoftaBean(state, {
    data
  }) {
    state.loftABean = data
  },
  setLoftbBean(state, {
    data
  }) {
    state.loftBBean = data
  },
  setMapBean(state, {
    data
  }) {
    state.mapBean = data
  },
  setMatchesBean(state, {
    data
  }) {
    state.matchesBean = data
  },
  setOtherBean(state, {
    data
  }) {
    state.otherBean = data
  },
  setPublicmatchBean(state, {
    data
  }) {
    state.publicMatchBean = data
  },
  setQueryBean(state, {
    data
  }) {
    state.queryBean = data
  },
  setSaveBean(state, {
    data
  }) {
    state.saveBean = data
  },
  setStockdetailBean(state, {
    data
  }) {
    state.stockDetailBean = data
  },
  setStockfundBean(state, {
    data
  }) {
    state.stockFundBean = data
  },
  setStockfxBean(state, {
    data
  }) {
    state.stockFxBean = data
  },
  setStockjhBean(state, {
    data
  }) {
    state.stockJhBean = data
  },
  setStockvolhalfBean(state, {
    data
  }) {
    state.stockVolHalfBean = data
  },
  setTeamBean(state, {
    data
  }) {
    state.teamBean = data
  },
  setTopliveBean(state, {
    data
  }) {
    state.topLiveBean = data
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
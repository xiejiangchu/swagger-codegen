/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
let axiosInstance = axios.create()
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const getAxiosInstance = () => {
  return axiosInstance
}
export const setAxiosInstance = ($axiosInstance) => {
  axiosInstance = $axiosInstance
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axiosInstance[method](queryUrl, body, config)
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  } else {
    return axiosInstance[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    比分实时在线
 ==========================================================*/
/**
 * 获取即时比赛详细信息
 * request: detailUsingGET
 * url: detailUsingGETURL
 * method: detailUsingGET_TYPE
 * raw_url: detailUsingGET_RAW_URL
 * @param serverSteamId - serverSteamId
 */
export const detailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/detail'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['serverSteamId'] !== undefined) {
    queryParameters['serverSteamId'] = parameters['serverSteamId']
  }
  if (parameters['serverSteamId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: serverSteamId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const detailUsingGET_RAW_URL = function() {
  return '/api/detail'
}
export const detailUsingGET_TYPE = function() {
  return 'get'
}
export const detailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/detail'
  if (parameters['serverSteamId'] !== undefined) {
    queryParameters['serverSteamId'] = parameters['serverSteamId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取英雄的简要信息
 * request: heroUsingGET
 * url: heroUsingGETURL
 * method: heroUsingGET_TYPE
 * raw_url: heroUsingGET_RAW_URL
 */
export const heroUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/hero'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const heroUsingGET_RAW_URL = function() {
  return '/api/hero'
}
export const heroUsingGET_TYPE = function() {
  return 'get'
}
export const heroUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/hero'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取英雄的详细信息
 * request: heroStatsUsingGET
 * url: heroStatsUsingGETURL
 * method: heroStatsUsingGET_TYPE
 * raw_url: heroStatsUsingGET_RAW_URL
 */
export const heroStatsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/heroStats'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const heroStatsUsingGET_RAW_URL = function() {
  return '/api/heroStats'
}
export const heroStatsUsingGET_TYPE = function() {
  return 'get'
}
export const heroStatsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/heroStats'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据match_id来获取历史比赛列表
 * request: matchesUsingGET
 * url: matchesUsingGETURL
 * method: matchesUsingGET_TYPE
 * raw_url: matchesUsingGET_RAW_URL
 * @param lessThanMatchId - less_than_match_id
 */
export const matchesUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/matches'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['lessThanMatchId'] !== undefined) {
    queryParameters['less_than_match_id'] = parameters['lessThanMatchId']
  }
  if (parameters['lessThanMatchId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: lessThanMatchId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const matchesUsingGET_RAW_URL = function() {
  return '/api/matches'
}
export const matchesUsingGET_TYPE = function() {
  return 'get'
}
export const matchesUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/matches'
  if (parameters['lessThanMatchId'] !== undefined) {
    queryParameters['less_than_match_id'] = parameters['lessThanMatchId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据match_id来获取公众历史比赛列表
 * request: publicMatchUsingGET
 * url: publicMatchUsingGETURL
 * method: publicMatchUsingGET_TYPE
 * raw_url: publicMatchUsingGET_RAW_URL
 * @param lessThanMatchId - less_than_match_id
 */
export const publicMatchUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/publicMatch'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['lessThanMatchId'] !== undefined) {
    queryParameters['less_than_match_id'] = parameters['lessThanMatchId']
  }
  if (parameters['lessThanMatchId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: lessThanMatchId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const publicMatchUsingGET_RAW_URL = function() {
  return '/api/publicMatch'
}
export const publicMatchUsingGET_TYPE = function() {
  return 'get'
}
export const publicMatchUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/publicMatch'
  if (parameters['lessThanMatchId'] !== undefined) {
    queryParameters['less_than_match_id'] = parameters['lessThanMatchId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 昨天涨停，今天长上影线
 * request: stockFxUsingGET
 * url: stockFxUsingGETURL
 * method: stockFxUsingGET_TYPE
 * raw_url: stockFxUsingGET_RAW_URL
 */
export const stockFxUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stockFx'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const stockFxUsingGET_RAW_URL = function() {
  return '/api/stockFx'
}
export const stockFxUsingGET_TYPE = function() {
  return 'get'
}
export const stockFxUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stockFx'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 前日涨停，昨天长上影线，今日暴跌
 * request: stockJhUsingGET
 * url: stockJhUsingGETURL
 * method: stockJhUsingGET_TYPE
 * raw_url: stockJhUsingGET_RAW_URL
 */
export const stockJhUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stockJh'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const stockJhUsingGET_RAW_URL = function() {
  return '/api/stockJh'
}
export const stockJhUsingGET_TYPE = function() {
  return 'get'
}
export const stockJhUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stockJh'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取队伍的详细信息
 * request: teamUsingGET
 * url: teamUsingGETURL
 * method: teamUsingGET_TYPE
 * raw_url: teamUsingGET_RAW_URL
 */
export const teamUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/team'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const teamUsingGET_RAW_URL = function() {
  return '/api/team'
}
export const teamUsingGET_TYPE = function() {
  return 'get'
}
export const teamUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/team'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取即时比赛列表
 * request: topLiveUsingGET
 * url: topLiveUsingGETURL
 * method: topLiveUsingGET_TYPE
 * raw_url: topLiveUsingGET_RAW_URL
 */
export const topLiveUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/topLive'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const topLiveUsingGET_RAW_URL = function() {
  return '/api/topLive'
}
export const topLiveUsingGET_TYPE = function() {
  return 'get'
}
export const topLiveUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/topLive'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
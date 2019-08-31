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
 * 获取所有的可转债
 * request: bondUsingGET
 * url: bondUsingGETURL
 * method: bondUsingGET_TYPE
 * raw_url: bondUsingGET_RAW_URL
 */
export const bondUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/bond'
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
export const bondUsingGET_RAW_URL = function() {
  return '/api/bond'
}
export const bondUsingGET_TYPE = function() {
  return 'get'
}
export const bondUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/bond'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
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
 * 获取英雄的网页介紹信息
 * request: heroDetailUsingGET
 * url: heroDetailUsingGETURL
 * method: heroDetailUsingGET_TYPE
 * raw_url: heroDetailUsingGET_RAW_URL
 */
export const heroDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/heroDetail'
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
export const heroDetailUsingGET_RAW_URL = function() {
  return '/api/heroDetail'
}
export const heroDetailUsingGET_TYPE = function() {
  return 'get'
}
export const heroDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/heroDetail'
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
 * 获取英雄的简要信息
 * request: heroStatsSimpleUsingGET
 * url: heroStatsSimpleUsingGETURL
 * method: heroStatsSimpleUsingGET_TYPE
 * raw_url: heroStatsSimpleUsingGET_RAW_URL
 */
export const heroStatsSimpleUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/heroStatsSimple'
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
export const heroStatsSimpleUsingGET_RAW_URL = function() {
  return '/api/heroStatsSimple'
}
export const heroStatsSimpleUsingGET_TYPE = function() {
  return 'get'
}
export const heroStatsSimpleUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/heroStatsSimple'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取所有的装备列表
 * request: itemsUsingGET
 * url: itemsUsingGETURL
 * method: itemsUsingGET_TYPE
 * raw_url: itemsUsingGET_RAW_URL
 */
export const itemsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/items'
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
export const itemsUsingGET_RAW_URL = function() {
  return '/api/items'
}
export const itemsUsingGET_TYPE = function() {
  return 'get'
}
export const itemsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/items'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取机构调研数据
 * request: jgdyUsingGET
 * url: jgdyUsingGETURL
 * method: jgdyUsingGET_TYPE
 * raw_url: jgdyUsingGET_RAW_URL
 */
export const jgdyUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/jgdy'
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
export const jgdyUsingGET_RAW_URL = function() {
  return '/api/jgdy'
}
export const jgdyUsingGET_TYPE = function() {
  return 'get'
}
export const jgdyUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/jgdy'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取所有的分级A基金
 * request: loftAUsingGET
 * url: loftAUsingGETURL
 * method: loftAUsingGET_TYPE
 * raw_url: loftAUsingGET_RAW_URL
 */
export const loftAUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/loftA'
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
export const loftAUsingGET_RAW_URL = function() {
  return '/api/loftA'
}
export const loftAUsingGET_TYPE = function() {
  return 'get'
}
export const loftAUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/loftA'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取所有的分级B基金
 * request: loftBUsingGET
 * url: loftBUsingGETURL
 * method: loftBUsingGET_TYPE
 * raw_url: loftBUsingGET_RAW_URL
 */
export const loftBUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/loftB'
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
export const loftBUsingGET_RAW_URL = function() {
  return '/api/loftB'
}
export const loftBUsingGET_TYPE = function() {
  return 'get'
}
export const loftBUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/loftB'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * map
 * request: mapUsingGET
 * url: mapUsingGETURL
 * method: mapUsingGET_TYPE
 * raw_url: mapUsingGET_RAW_URL
 */
export const mapUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/map'
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
export const mapUsingGET_RAW_URL = function() {
  return '/api/map'
}
export const mapUsingGET_TYPE = function() {
  return 'get'
}
export const mapUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/map'
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
 * 获取所有的混合型基金
 * request: otherFundUsingGET
 * url: otherFundUsingGETURL
 * method: otherFundUsingGET_TYPE
 * raw_url: otherFundUsingGET_RAW_URL
 */
export const otherFundUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/other'
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
export const otherFundUsingGET_RAW_URL = function() {
  return '/api/other'
}
export const otherFundUsingGET_TYPE = function() {
  return 'get'
}
export const otherFundUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/other'
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
 * query
 * request: queryUsingGET
 * url: queryUsingGETURL
 * method: queryUsingGET_TYPE
 * raw_url: queryUsingGET_RAW_URL
 * @param code - code
 */
export const queryUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/query'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const queryUsingGET_RAW_URL = function() {
  return '/api/query'
}
export const queryUsingGET_TYPE = function() {
  return 'get'
}
export const queryUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/query'
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
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
 * save
 * request: saveUsingPOST
 * url: saveUsingPOSTURL
 * method: saveUsingPOST_TYPE
 * raw_url: saveUsingPOST_RAW_URL
 * @param code - code
 * @param answer - answer
 * @param content - content
 * @param optionA - optionA
 * @param optionB - optionB
 * @param optionC - optionC
 * @param optionD - optionD
 */
export const saveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters['answer'] !== undefined) {
    queryParameters['answer'] = parameters['answer']
  }
  if (parameters['answer'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: answer'))
  }
  if (parameters['content'] !== undefined) {
    queryParameters['content'] = parameters['content']
  }
  if (parameters['content'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: content'))
  }
  if (parameters['optionA'] !== undefined) {
    queryParameters['optionA'] = parameters['optionA']
  }
  if (parameters['optionA'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: optionA'))
  }
  if (parameters['optionB'] !== undefined) {
    queryParameters['optionB'] = parameters['optionB']
  }
  if (parameters['optionB'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: optionB'))
  }
  if (parameters['optionC'] !== undefined) {
    queryParameters['optionC'] = parameters['optionC']
  }
  if (parameters['optionC'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: optionC'))
  }
  if (parameters['optionD'] !== undefined) {
    queryParameters['optionD'] = parameters['optionD']
  }
  if (parameters['optionD'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: optionD'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_RAW_URL = function() {
  return '/api/save'
}
export const saveUsingPOST_TYPE = function() {
  return 'post'
}
export const saveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/save'
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['answer'] !== undefined) {
    queryParameters['answer'] = parameters['answer']
  }
  if (parameters['content'] !== undefined) {
    queryParameters['content'] = parameters['content']
  }
  if (parameters['optionA'] !== undefined) {
    queryParameters['optionA'] = parameters['optionA']
  }
  if (parameters['optionB'] !== undefined) {
    queryParameters['optionB'] = parameters['optionB']
  }
  if (parameters['optionC'] !== undefined) {
    queryParameters['optionC'] = parameters['optionC']
  }
  if (parameters['optionD'] !== undefined) {
    queryParameters['optionD'] = parameters['optionD']
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
 * 从sina获取
 * request: stockDetailUsingGET
 * url: stockDetailUsingGETURL
 * method: stockDetailUsingGET_TYPE
 * raw_url: stockDetailUsingGET_RAW_URL
 * @param codes - codes
 */
export const stockDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stockDetail'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['codes'] !== undefined) {
    queryParameters['codes'] = parameters['codes']
  }
  if (parameters['codes'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: codes'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const stockDetailUsingGET_RAW_URL = function() {
  return '/api/stockDetail'
}
export const stockDetailUsingGET_TYPE = function() {
  return 'get'
}
export const stockDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stockDetail'
  if (parameters['codes'] !== undefined) {
    queryParameters['codes'] = parameters['codes']
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
 * 获取所有的股票型基金
 * request: stockFundUsingGET
 * url: stockFundUsingGETURL
 * method: stockFundUsingGET_TYPE
 * raw_url: stockFundUsingGET_RAW_URL
 */
export const stockFundUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stockFund'
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
export const stockFundUsingGET_RAW_URL = function() {
  return '/api/stockFund'
}
export const stockFundUsingGET_TYPE = function() {
  return 'get'
}
export const stockFundUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stockFund'
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
 * 今日量能是昨天的一半
 * request: stockVolHalfUsingGET
 * url: stockVolHalfUsingGETURL
 * method: stockVolHalfUsingGET_TYPE
 * raw_url: stockVolHalfUsingGET_RAW_URL
 */
export const stockVolHalfUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/stockVolHalf'
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
export const stockVolHalfUsingGET_RAW_URL = function() {
  return '/api/stockVolHalf'
}
export const stockVolHalfUsingGET_TYPE = function() {
  return 'get'
}
export const stockVolHalfUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/stockVolHalf'
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
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
   *                    更多内容联系移动团队
   ==========================================================*/
  -
  summary: 客户特征信息
request: getCustomerFeatureUsingGET
method: getCustomerFeatureUsingGET_TYPE
url: getCustomerFeatureUsingGETURL
raw_url: getCustomerFeatureUsingGET_RAW_URL
params:
  -
  name: id
description: 证件号码
required: true -
  name: idType
description: 证件类型[DICT]
required: true -
  name: mspId
description: 源子公司编码
required: true -
  name: name
description: 姓名
required: true -
  summary: 可分享隐私信息申请
request: getUsingGET
method: getUsingGET_TYPE
url: getUsingGETURL
raw_url: getUsingGET_RAW_URL
params:
  -
  name: fromMspId
description: 请求方mspId
required: true -
  name: id
description: 证件号码
required: true -
  name: idType
description: 证件类型[DICT]
required: true -
  name: queryKey
description: 查询操作的标识符（ 对应查询请求时的queryKey）
required: false -
  summary: 可分享隐私信息获取
request: getCustomerFeatureUsingGET_1
method: getCustomerFeatureUsingGET_1_TYPE
url: getCustomerFeatureUsingGET_1URL
raw_url: getCustomerFeatureUsingGET_1_RAW_URL
params:
  -
  name: id
description: 证件号码
required: true -
  name: idType
description: 证件类型[DICT]
required: true -
  name: infoType
description: 请求隐私数据类型
required: true -
  name: name
description: 姓名
required: true -
  summary: 可分享隐私信息查询
request: getUsingGET_1
method: getUsingGET_1_TYPE
url: getUsingGET_1URL
raw_url: getUsingGET_1_RAW_URL
params:
  -
  name: fromMspId
description: 请求方mspId
required: false -
  name: id
description: 证件号码
required: false -
  name: idType
description: 证件类型
required: false -
  name: queryKey
description: 查询操作的标识符（ 对应查询请求时的queryKey）
required: true
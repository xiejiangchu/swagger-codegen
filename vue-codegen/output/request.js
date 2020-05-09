/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
import store from '@/store/index';
let domain = 'http://127.0.0.1:8080/'
let axiosInstance = null
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const getAxiosInstance = () => {
  if (null == axiosInstance) {
    axiosInstance = axios.create()
    axiosInstance.interceptors.request.use(config => {
        config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
        config.timeout = 6000
        let token = JSON.parse(window.localStorage.getItem('oAuthToken'))
        if (token) {
          config.headers = {
            'Authorization': "Bearer " + token.access_token,
          }
        }
        if (config.url === 'refresh') {
          config.headers = {
            'refresh-token': token.refresh_token,
          }
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    //在 response 拦截器实现
    axiosInstance.interceptors.response.use(response => {
        // 定时刷新access-token
        if (!response.data && response.data.code === '401') {
          // 刷新token
          store.dispatch('refresh').then(response => {
            store.commit('setOAuthToken', {
              'data': response.data
            })
          }).catch(error => {
            throw new Error('token刷新' + error)
          })
        }
        return response
      },
      error => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              store.dispatch('logout');
              window.location.reload();
              break;
          }
        }
        return Promise.reject(error)
      }
    )
  }
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
    return getAxiosInstance()[method](queryUrl, config)
  } else {
    return getAxiosInstance()[method](queryUrl, qs.stringify(form), config)
  }
}
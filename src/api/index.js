import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: 'http://192.168.16.15:8012/api',
  timeout: 10000,
})

// request请求拦截器
api.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// respone拦截器
api.interceptors.response.use(response => {
  const data = response.data
  return data
}, error => {
  if (error.response.data.message) {
    alert(error.response.data.message[0])
  } else {
    alert(error.message)
  }
  return Promise.reject(error)
})

export default {
  get: (url, params) => api.get(url, { params }),
}

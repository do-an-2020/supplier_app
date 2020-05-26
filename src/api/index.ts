import axios from 'axios'
import { baseUrl, TIMEOUT } from './config'
// 'R37Lph8D_ARh9aTJ5m8r'
// eslint-disable-next-line prefer-destructuring
const CancelToken = axios.CancelToken
const source = CancelToken.source()

const request = (authenToken?: string) => {
  const defaultOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authenToken ? `bearer ${authenToken}` : '',
      'Accept-Language': 'vi',
    },
    // baseUrl,
    timeout: TIMEOUT,
    cancelToken: source.token,
  }

  return {
    get: (url: string, options = {}) => axios.get(baseUrl + url, { ...defaultOptions, ...options }),
    post: (url: string, data: any, options = {}) => {
      return axios.post(baseUrl + url, data, { ...defaultOptions, ...options })
    },
    put: (url: string, data: any, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url: string, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
  }
}

export * from './type'

export default request

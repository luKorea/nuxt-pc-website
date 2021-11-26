import { Loading } from 'element-ui'

let loading

function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '加载中',
    spinner: 'el-icon-loading',
    color: '#fff',
    background: 'hsla(0,0%,100%,.8)',
  })
}

function endLoading () {
  loading.close()
}

export default function ({ store, redirect, req, router, app: { $axios } }) {
  // request拦截器
  $axios.onRequest(config => {
    if (process.client) {
      // 客户端下，请求进度条开始
      startLoading()
    }
  });
  // response拦截器，数据返回后，可以先在这里进行一个简单的判断
  $axios.interceptors.response.use(
    response => {
      if (process.client) {
        endLoading()
      }
      return response.data;
    },
    error => {
      if (process.client) {
        endLoading()
      }
      return Promise.reject(error.response)   // 返回接口返回的错误信息
    })
}

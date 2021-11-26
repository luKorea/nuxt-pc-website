export const getArticleItem = (app) => {
  return new Promise((resolve, reject) => {
    app.$axios.$get('/article/getArticleMenu').then(res => {
      if (res.errorCode === 200) {
        console.log(res, 'test')
        resolve(res.data);
      } else {
        reject(res.errMsg)
      }
    })
  })
}

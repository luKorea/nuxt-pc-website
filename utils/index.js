import { nanoid } from 'nanoid'
import { Message } from 'element-ui'

/**
 * @description success tip
 * @method successTip
 * @param message {string}
 * @param duration {number}
 */
export const successTip = (message = '操作成功', duration= 3000) => {
  Message({
    message,
    type: 'success',
    duration: duration,
    center: true
  })
}

/**
 * @description errorTip
 * @method errorTip
 * @param message {string}
 * @param duration {number}
 */
export const errorTip = (message = '出错了', duration= 3000) => {
  Message({
    message,
    type: 'error',
    duration: duration,
    center: true
  })
}

export const companyInfo = {
  companyCopyright: 'Copyright © 恒德瑞科技（深圳）有限公司 粤ICP备19015919号-1',
  companyName: '恒德瑞科技（深圳）有限公司',
  companyPhone: '13510345290',
  companyEmail: 'support@careershe.com',
  companyAddress: '中国 广东 广州市 海珠区 昌岗街道,2022众创空间B01室',
  companyBOSS: '岑先生',
}

export const randomId = () => nanoid(8);

export const androidAndWindowDownload = () => {
  window.location.href="https://www.baidu.com"
}

export const iosDownload = () => {
  window.location.href="https://www.taobao.com"
}

import { nanoid } from 'nanoid'
import { Message } from 'element-ui'

export const IMG_BASE_URL = 'https://www.careershe.com/images'

export const companyInfo = {
  companyCopyright: 'Copyright © 恒德瑞科技（深圳）有限公司 粤ICP备19015919号-1',
  companyName: '恒德瑞科技（深圳）有限公司',
  companyPhone: '13510345290',
  companyEmail: 'support@careershe.com',
  companyAddress: '中国 广东 广州市 海珠区 昌岗街道,2022众创空间B01室',
  companyBOSS: '岑先生',
  companyDesc: '千职鹤Careershe是恒德瑞科技（深圳）有限公司旗下的生涯规划平台，致力于为高中学生、大学生以及已经步入职场的新人们解决在专业选择及职业规划方面的困难，用真实案例、生动有趣的视频、中立的声音、大数据比对及智能分析为用户提供职业教育和生涯规划的综合解决方案。 \n' +
    '恒德瑞科技（深圳）有限公司成立于2018年，由一群跨国集团企业的资深职场人士创立。2020年获得牛津大学科技创新公司入股，迎来新的技术增长点。',
  serviceQrcode: 'https://www.careershe.com/images/107df6a919ac9d642526115a48b9196.jpg',
  officialAccount: 'https://www.careershe.com/images/web-img/officialAccount.png',
}

/**
 * @description success tip
 * @method successTip
 * @param message {string}
 * @param duration {number}
 */
export const successTip = (message = '操作成功', duration = 3000) => {
  Message({
    message,
    type: 'success',
    duration: duration,
    center: true,
  })
}

/**
 * @description errorTip
 * @method errorTip
 * @param message {string}
 * @param duration {number}
 */
export const errorTip = (message = '出错了', duration = 3000) => {
  Message({
    message,
    type: 'error',
    duration: duration,
    center: true,
  })
}

export const randomId = () => nanoid(8);

export const androidAndWindowDownload = () => {
  window.location.href = "https://www.baidu.com"
}

export const iosDownload = () => {
  window.location.href = "https://www.taobao.com"
}

import { nanoid } from 'nanoid'

export default  [
  {
    id: nanoid(),
    href: '/',
    name: '首页',
  },
  {
    id: nanoid(),
    href: '/webService',
    name: '产品与服务',
    children: [
      { id: nanoid(), href: '/webService/careersheApp', name: '千职鹤APP' },
      { id: nanoid(), href: '/webService/schoolSystem', name: '学校生涯教育平台' },
      { id: nanoid(), href: '/webService/consultingPlanning', name: '生涯规划咨询' },
    ],
  },
  {
    id: nanoid(),
    href: '/webArticle?pageSize=10&pageNumber=0&index=0&category=""',
    name: '文章资讯',
  },
  {
    id: nanoid(),
    href: '/webAbout',
    name: '关于我们',
    children: [
      { id: nanoid(), href: '/webAbout/description', name: '企业简介' },
      { id: nanoid(), href: '/webAbout/dynamic?pageNumber=0&pageSize=9', name: '企业动态' },
      { id: nanoid(), href: '/webAbout/joinUs', name: '加入我们' },
      { id: nanoid(), href: '/webAbout/contact', name: '联系我们' },
    ],
  },
  {
    id: nanoid(),
    href: '/webDownload',
    name: '下载APP',
  },
  {
    id: nanoid(),
    href: '/webEnglish',
    name: 'English',
  },
]

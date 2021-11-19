# 项目目录 
--> 文件命名，除 nuxt 默认命名外，文件名统一使用 web 开头
1. assets	资源目录，用于存放需要编译的静态资源。例如：LESS、SASS等默认情况下，Nuxt使用Webpack若干加载器处理目录中的文件
2. components	vue组件目录，Nuxt.js 不会增强该目录，及不支持SSR
   1. homeComponents 首页组件拆分
   2. webPagination 分页器
   3. webFooter 脚注
   4. webHeader 头部
   5. webMap 高德地图组件
3. 
4. layouts	布局组件目录
5. pages	页面目录，所有的vue视图，nuxt根据目录结构自动生成对应的路由。
   1. index 首页
   2. webAbout 关于我们
      1. contact 联系我们
      2. joinUs 加入我们
      3. dynamic 企业动态
         1. index 首页
         2. _id 详情页
   3. webEnglish 英文网
   4. webDownload APP下载页面
   5. webArticle 文章咨询
      1. 二级...
   6. webService 产品服务
      1. 二级...
6. plugins	插件目录
7. static	静态文件目录，不需要编译的文件
8. store	vuex目录
9. nuxt.config.js	nuxt个性化配置文件，内容将覆盖默认
10. package.json	项目配置文件

---> 第三方插件
1. normalize 去除浏览器默认样式
2. element 按需引入，实现小部分功能
3. 高德地图

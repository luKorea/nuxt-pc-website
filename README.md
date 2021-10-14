# 项目目录 
--> 文件命名，除 nuxt 默认命名外，文件名统一使用 web 开头
1. assets	资源目录，用于存放需要编译的静态资源。例如：LESS、SASS等默认情况下，Nuxt使用Webpack若干加载器处理目录中的文件
2. components	vue组件目录，Nuxt.js 不会增强该目录，及不支持SSR
3. layouts	布局组件目录
4. pages	页面目录，所有的vue视图，nuxt根据目录结构自动生成对应的路由。
   1. index 首页
   2. webAbout 关于我们
   3. webEnglish 英文网
   4. webDownload APP下载页面
   5. webArticle 文章咨询
      1. 二级...
   6. webService 产品服务
      1. 二级...
5. plugins	插件目录
6. static	静态文件目录，不需要编译的文件
7. store	vuex目录
8. nuxt.config.js	nuxt个性化配置文件，内容将覆盖默认
9. package.json	项目配置文件

---> 第三方插件
1.  normalize 去除浏览器默认样式

<template>
  <div class="home-container">
    <website-header>
      <template #imgWrap>
        <div class="img-wrap">
          <img :src="bannerImg" alt="">
        </div>
      </template>
    </website-header>
    <!--APP模块-->
    <web-app/>
    <!--system模块-->
    <web-system/>
    <!--规划模块-->
    <web-service/>
    <!--企业动态-->
    <web-news/>
    <!--关于我们-->
    <web-about/>
  </div>
</template>

<script>
import websiteHeader from '~/components/webHeader'
import WebApp from '~/components/homeComponents/webApp'
import WebSystem from '~/components/homeComponents/webSystem'
import WebService from '~/components/homeComponents/webService'
import WebNews from '~/components/homeComponents/webNews'
import WebAbout from '~/components/homeComponents/webAbout'

export default {
  components: {
    WebAbout,
    WebNews,
    WebService,
    WebSystem,
    WebApp,
    websiteHeader,
  },
  data () {
    return {
      bannerImg: require('~/static/image/home/home-banner.png'),
    }
  },
}
</script>

<style scoped lang="less">
.home-container {
  .img-wrap {
    width: 100%;
    height: 900px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

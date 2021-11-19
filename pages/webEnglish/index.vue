<template>
  <div class="english-container">
    <web-header>
      <template #imgWrap>
        <div class="down-img-wrap"></div>
      </template>
    </web-header>
    <!--关于我们-->
    <web-about/>
    <!--APP模块-->
    <web-app/>
    <!--system模块-->
    <web-system/>
    <!--规划模块-->
    <web-service/>
    <web-contact />
  </div>
</template>

<script>
import WebHeader from '~/components/webHeader'
import WebApp from '~/components/pageComponents/englishComponents/webApp'
import WebSystem from '~/components/pageComponents/englishComponents/webSystem'
import WebService from '~/components/pageComponents/englishComponents/webService'
import WebContact from '~/components/pageComponents/englishComponents/webContact'
import WebAbout from '~/components/pageComponents/englishComponents/webAbout'

export default {
  name: "english",
  components: {
    WebHeader,
    WebSystem,
    WebApp,
    WebService,
    WebAbout,
    WebContact
  },
}
</script>

<style scoped lang="less">
.english-container {
    .down-img-wrap {
      height: 900px;
      width: 100%;
      background-image: url("static/image/english/english-banner.png");
      background-size: 100% 100%;
    }
}
</style>

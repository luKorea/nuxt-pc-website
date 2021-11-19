<template>
  <div class="about-container">
    <div class="common-title">{{ aboutInfo.title }}</div>
    <div class="common-desc about-desc">{{ aboutInfo.desc }}</div>
    <div class="about-img">
      <img :src="aboutInfo.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "webAbout",
  data () {
    return {
      aboutInfo: {
        title: '——— About Careershe ———',
        desc: 'Careershe is a startup focused on helping students between age 15-25 to learn about world of work and guide them in major life decisions – E.g. choosing university degree specialization. Bringing in from latest international research in of career development methodologies, Careershe hopes to help Chinese students find their desired careers.',
        img: require('~/static/image/english/english-about.png'),
      },
    }
  },
}
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  .about-desc {
    font-size: 16px;
    width: 1237px;
    text-align: center;
    line-height: 32px;
  }
  .about-img {
    width: 1237px;
    height: 656px;
    margin-bottom: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

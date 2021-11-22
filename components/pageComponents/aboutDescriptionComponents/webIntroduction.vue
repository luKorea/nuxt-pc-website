<template>
  <div class="company-introduction">
    <div class="common-title text-center">{{ companyIntroduction.title }}</div>
    <div class="common-tip text-center">{{ companyIntroduction.tip }}</div>
    <div class="introduction-wrap">
      <div class="introduction-desc">{{ companyIntroduction.desc }}</div>
      <div class="introduction-img">
        <img :src="companyIntroduction.logo" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "webIntroduction",
  props: {
    companyIntroduction: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="less">
.company-introduction {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 80px 0;

  .introduction-wrap {
    display: flex;
    align-items: center;
    margin-top: 150px;

    .introduction-desc {
      width: 520px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #323A50;
      line-height: 30px;
      margin-right: 120px;
    }

    .introduction-img {
      width: 600px;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<template>
  <div class="company-honor">
    <div class="common-title text-center">{{ companyHonor.title }}</div>
    <div class="common-tip text-center">{{ companyHonor.tip }}</div>
    <div class="introduction-wrap">
      <div class="introduction-img">
        <img :src="companyHonor.honorLogo" alt="">
      </div>
      <ul>
        <template v-for="(item, index) in companyHonor.desc">
          <li :key="index" class="item-li">{{ item }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "webHonor",
  props: {
    companyHonor: {
      type: Object,
      default: () => {},
    },
  },

}
</script>

<style scoped lang="less">
.company-honor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 80px 0;
  background-color: #F1F5F8;

  .introduction-wrap {
    display: flex;
    //align-items: center;
    margin-top: 150px;

    .introduction-img {
      width: 600px;
      height: 300px;
      margin-right: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .item-li {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #323A50;
      line-height: 30px;
    }
  }
}
</style>

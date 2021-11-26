<template>
  <div class="company-development">
    <div class="common-title text-center">{{ companyDevelopment.title }}</div>
    <div class="common-tip text-center">{{ companyDevelopment.tip }}</div>

    <div class="development-wrap">
      <div class="wrap-top">
        <template v-for="(item, index) in companyDevelopmentList">
          <div class="item" :key="index" v-if="index % 2 === 0">
            <div class="common-line-top"></div>
            <div class="title-wrap">
              <div class="time">{{ item.name }}</div>
              <div class="title">{{ item.description }}</div>
            </div>
          </div>
        </template>
      </div>
<!--      <div class="line"/>-->
      <div class="wrap-bottom">
        <template v-for="(item, index) in companyDevelopmentList">
          <div class="item" :key="index" v-if="index % 2 !== 0">
            <div class="common-line-bottom"></div>
            <div class="title-wrap">
              <div class="time">{{ item.name }}</div>
              <div class="title">{{ item.description }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "webDevelopment",
  props: {
    companyDevelopment: {
      type: Object,
      default: () => {},
    },
    companyDevelopmentList: {
      type: Array,
      default: () => []
    }
  },
}

</script>

<style scoped lang="less">
.company-development {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 80px 0;

  .development-wrap {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    overflow: hidden;
    overflow-x: auto;
    padding-bottom: 100px;
    //white-space: nowrap;
    .line {
      width: 100%;
      height: 1px;
      background-color: #CCCFD7;
    }

    .common-line-top {
      width: 1px;
      height: 100px;
      background-color: #CCCFD7;
      margin-right: 40px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 6px;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background-color: #007EFB;;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #A4D1FF;
        margin: 0 auto;
      }
    }

    .common-line-bottom {
      width: 1px;
      height: 100px;
      background-color: #CCCFD7;
      margin-right: 40px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -2px;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background-color: #007EFB;;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #A4D1FF;
        margin: 0 auto;
      }
    }

    .wrap-top {
      display: flex;
      min-width: 100%;
      //margin-left: 300px;
      border-bottom: 1px solid #CCCFD7;

      .item {
        width: 420px;
        display: flex;
        justify-content: center;
        flex-shrink: 0;
        .title-wrap {
          display: flex;
          flex-direction: column;

          .time {
            font-size: 36px;
            font-family: MicrosoftYaHeiHeavy;
            color: #007EFB;
            line-height: 48px;
          }

          .title {
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #989CA7;
            line-height: 19px;
          }
        }
      }
    }

    .wrap-bottom {
      display: flex;
      width: 100%;

      .item {
        width: 420px;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        .title-wrap {
          display: flex;
          flex-direction: column;

          .time {
            font-size: 36px;
            font-family: MicrosoftYaHeiHeavy;
            color: #007EFB;
            line-height: 48px;
          }

          .title {
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #989CA7;
            line-height: 19px;
          }
        }
      }
    }
  }
}
</style>

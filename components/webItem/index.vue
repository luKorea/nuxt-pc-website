<template>
  <div class="item-container" :style="{backgroundColor: bgColor}">
    <div class="common-title text-center">{{ info.title }}</div>
    <div class="common-tip text-center" v-if="info.tip">{{ info.tip }}</div>
    <div class="list">
      <template v-for="(item, index) in info.list">
        <div class="item" :key="item.id">
          <div class="img"><img :src="item.icon" alt=""></div>
          <div class="title">{{ item.title }}</div>
          <div class="number" v-if="!item.desc">0{{ index + 1 }}</div>
          <div class="desc" v-else>{{ item.desc }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    bgColor: {
      type: String,
      default: '#FFFFFF'
    },
    info: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="less">
.item-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 100px 0;
  box-sizing: border-box;

  .list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 100px;

      .img {
        width: 140px;
        height: 140px;
        margin-bottom: 60px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        font-size: 24px;
        font-family: MicrosoftYaHeiSemibold;
        color: #0B173A;
        line-height: 32px;
        margin-bottom: 20px;
      }

      .number {
        font-size: 48px;
        font-family: AlibabaPuHuiTiB;
        color: #007EFB;
        line-height: 65px;
      }

      .desc {
        width: 248px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #323A50;
        line-height: 21px;
        text-align: center;
      }
    }
  }
}
</style>

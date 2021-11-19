<template>
  <div class="system-process-container">
    <div class="common-title text-center">{{ info.title }}</div>
    <div class="common-desc text-center">{{ info.desc }}</div>
    <div class="process-list">
      <template v-for="(item, index) in info.list">
        <div class="item" :class="index % 2 !== 0 ? 'black' : 'blue'" :key="index">{{ item }}</div>
        <div class="process-arrow" v-if="index < info.list.length - 1">
          <img :src="arrowImg" alt="" style="transform:rotateY(180deg);">
        </div>
      </template>
    </div>
    <div class="btn-home" @click="clickFunction">
      <div class="btn-more">{{ info.btnText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "webProcess",
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {
      arrowImg: require('static/image/service/system/system-arrow.png'),
    }
  },
  methods: {
    clickFunction () {
      this.$emit('clickFunction')
    },
  },
}
</script>

<style scoped lang="less">
.system-process-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 80px 0;
  background-color: #F1F5F8;

  .process-list {
    display: flex;
    align-items: center;
    margin: 80px 0;

    .item {
      width: 120px;
      height: 120px;
      line-height: 120px;
      border-radius: 50%;
      text-align: center;
      font-size: 20px;
      font-family: MicrosoftYaHeiSemibold;
      color: #FFFFFF;
      margin: 0 20px;

      .process-arrow {
      }
    }

    .blue {
      background-color: #007EFB;
    }

    .black {
      background-color: #212121;
    }
  }
}
</style>

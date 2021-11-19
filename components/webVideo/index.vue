<template>
  <div class="video-container">
    <div class="common-title text-center">{{ info.title }}</div>
    <div class="video-content">
      <video :src="info.videoSrc" controls></video>
    </div>
    <div class="btn-home" @click="clickBtn">
      <div class="btn-more">{{ info.btnText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clickBtn () {
      this.$emit('clickFunction')
    },
  },
}
</script>

<style scoped lang="less">
.video-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 80px 0;

  .video-content {
    width: 1240px;
    height: 698px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    margin-bottom: 60px;

    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

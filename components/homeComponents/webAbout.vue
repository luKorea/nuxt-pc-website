<template>
  <div class="about-container">
    <div class="common-title">{{ aboutInfo.title }}</div>
    <div class="common-desc about-desc">{{ aboutInfo.desc }}</div>
    <div class="btn-home">
      <div class="btn-more">了解更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "webAbout",
  data () {
    return {
      aboutInfo: {
        title: '关于我们',
        desc: '千职鹤是一个提供全面及准确的各种职业选择信息，帮助学生实现职业梦想的平台。把国外先进职业教育专业知识引入中国，而这些知识正是中国学生在学校里无法学到的。',
      },
    }
  },
}
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 413px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .about-desc {
    width: 968px;
    text-align: center;
    line-height: 32px;
  }
}
</style>

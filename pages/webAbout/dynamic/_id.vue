<template>
  <div class="news-detail-container">
    <web-site-header></web-site-header>
    <div style="margin-top: 120px" class="news-wrap">
      <div class="common-title text-center">{{ info.title }}</div>
      <div class="common-tip text-center" style="padding-bottom: 20px">{{ info._updated_at }}</div>
      <div class="news-content" v-html="info.content"></div>
    </div>
  </div>
</template>

<script>
import webSiteHeader from '~/components/webHeader'

export default {
  head () {
    return {
      title: this.info.title,
      meta: [
        { hid: 'description', name: 'description', content: this.info.description },
      ],
    }
  },
  name: "detailId",
  components: {
    webSiteHeader,
  },
  async asyncData ({ params, app }) {
    let data = await app.$axios.$get(`/dynamicConsulting/getDynamicConsultingById?_id=${params.id}`)
    return {
      info: data,
    }
  },
}
</script>

<style scoped lang="less">
.news-detail-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 80px 0;

  .news-content {
    width: 1100px;
  }
}
</style>

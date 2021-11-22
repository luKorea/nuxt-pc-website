<template>
  <div class="news-detail-container">
    <web-site-header></web-site-header>
    <div style="margin-top: 120px">
      <div class="common-title text-center">{{ info.title }}</div>
      <div class="common-tip text-center">{{ info._updated_at }}</div>
      <div class="news-content" v-html="info.content"></div>
    </div>
  </div>
</template>

<script>
import webSiteHeader from '~/components/webHeader'
import { errorTip } from '~/utils'

export default {
  name: "detailId",
  components: {
    webSiteHeader,
  },
  data () {
    return {
      id: '',
      info: {},
    }
  },
  mounted () {
    this.id = this.$route.params.id;
    this.getDetailData(this.id)
  },
  methods: {
    getDetailData (_id) {
      this.$axios.get(`/dynamicConsulting/getDynamicConsultingById?_id=${_id}`).then(res => {
        if (res.errorCode === 200) {
          this.info = res.data;
        } else {
          errorTip(res.msg)
        }
      }).catch(err => {
        console.log(err)
      })
    },
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
}
</style>

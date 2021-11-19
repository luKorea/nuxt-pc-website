<template>
  <div class="home-container">
    <website-header>
      <template #imgWrap>
        <div class="img-wrap">
          <img :src="bannerImg" alt="">
        </div>
      </template>
    </website-header>
    <!--APP模块-->
    <web-app @goPage="goPage"/>
    <!--system模块-->
    <web-system @goPage="goPage" @changeVisible="changeVisible"/>
    <!--规划模块-->
    <web-service @goPage="goPage" @changeVisible="changeVisible"/>
    <!--企业动态-->
    <web-news :list="newsList"/>
    <!--关于我们-->
    <web-about/>

    <web-dialog :title="dialogTitle"
                :selectDiffType="dialogType"
                :dialog-visible.sync="dialogVisible" @sendData="sendData"></web-dialog>
  </div>
</template>

<script>
import websiteHeader from '~/components/webHeader'
import WebApp from '~/components/pageComponents/homeComponents/webApp'
import WebSystem from '~/components/pageComponents/homeComponents/webSystem'
import WebService from '~/components/pageComponents/homeComponents/webService'
import WebNews from '~/components/pageComponents/homeComponents/webNews'
import WebAbout from '~/components/pageComponents/homeComponents/webAbout'
import { errorTip, successTip } from '~/utils'
import WebDialog from '~/components/webDialog'

export default {
  components: {
    WebAbout,
    WebNews,
    WebService,
    WebSystem,
    WebApp,
    websiteHeader,
    WebDialog,
  },
  data () {
    return {
      newsList: [],
      dialogVisible: false,
      dialogTitle: '预约试用',
      dialogType: '',
      bannerImg: require('~/static/image/home/home-banner.png'),
    }
  },
  mounted () {
    this.getNews()
  },
  methods: {
    changeVisible (type) {
      this.dialogType = type;
      this.dialogTitle = type === 'service' ? '生涯规划咨询' : '预约使用';
      this.dialogVisible = true;
    },
    goPage (url) {
      this.$router.push({
        path: url === 'app' ? '/webService/careersheApp' : url === 'school'
            ? '/webService/schoolSystem'
            : '/webService/consultingPlanning',
      })
    },
    sendData (data) {
      this.$axios.post('/officialWebsiteFeedback/addOfficialWebsiteFeedback', data).then(res => {
        if (res.errorCode === 200) {
          successTip('咨询成功')
          this.dialogVisible = false;
        } else {
          errorTip(res.msg)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getNews () {
      this.$axios.get('dynamicConsulting/getDynamicConsultingList').then(res => {
        if (res.errorCode === 200) {
          this.newsList = res.data;
        } else {
          errorTip(res.msg)
        }
      })
    },
  },
}
</script>

<style scoped lang="less">
.home-container {
  .img-wrap {
    width: 100%;
    height: 900px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

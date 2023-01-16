<template>
  <div class="home-container">
    <website-header>
      <template #imgWrap>
        <div class="img-wrap">
          <el-carousel style="z-index: -99" height="56.25rem">
            <el-carousel-item v-for="(item, index) in swiperImage" :key="index">
              <img :src="item" alt="" style="width: 100%; height: 100%;">
            </el-carousel-item>
          </el-carousel>
          <!--          <img :src="bannerImg" alt="">-->
        </div>
      </template>
    </website-header>
    <!--APP模块-->
    <web-app @goPage="goPage" @download="downloadApp"/>
    <!--system模块-->
    <web-system @goPage="goPage" @changeVisible="changeVisible"/>
    <!--规划模块-->
    <web-service @goPage="goPage" @changeVisible="changeVisible"/>
    <!--企业动态-->
    <web-news :list="list" @goDetail="goNewsDetail"/>
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
import { androidAndWindowDownload, downVersionApp, errorTip, IMG_BASE_URL, successTip } from '~/utils'
import WebDialog from '~/components/webDialog'

export default {
  async asyncData ({ params, app }) {
    // 接口地址错误会导致项目启动失败, 请确保服务器地址填写正确
    let response = await app.$axios.$get('/dynamicConsulting/getDynamicConsultingList');
    console.log(response, 'response')
    return {
      list: response,
    }
  },
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
      swiperImage: [
        IMG_BASE_URL + '/web-img/banner1.png',
        IMG_BASE_URL + '/web-img/banner2.png',
        IMG_BASE_URL + '/web-img/banner3.png',
      ],
      dialogVisible: false,
      dialogTitle: '预约试用',
      dialogType: '',
      bannerImg: IMG_BASE_URL + '/web-img/home/home-banner.png',
    }
  },
  methods: {
    downloadApp () {
      downVersionApp()
    },
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
      if (data.type === '') data.type = '预约使用';
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
    goNewsDetail (_id, type, url) {
      if (type === "外链") {
        window.open(url, '_blank')
      } else {
        this.$router.push({
          path: `/webAbout/dynamic/${_id}`,
        })
      }
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

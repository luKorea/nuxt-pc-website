<template>
  <div class="service-plain-container">
    <web-header>
      <template #logo>
        <div class="logo" @click="goToHome">
          <img :src="logo" alt="">
        </div>
      </template>
      <template #imgWrap>
        <div class="content">
          <div class="info">
            <div class="common-title">{{ plainInfo.title }}</div>
            <div class="common-desc">{{ plainInfo.desc }}</div>
            <div class="btn-home" @click="changeVisible">
              <div class="btn-down">免费试用</div>
            </div>
          </div>
        </div>
      </template>
    </web-header>

    <web-platform @changeVisible="changeVisible"></web-platform>
    <web-tutor @changeVisible="changeVisible"></web-tutor>
    <web-customer></web-customer>
    <web-dialog :dialog-visible.sync="dialogVisible" @sendData="sendData"></web-dialog>
  </div>
</template>

<script>
import WebHeader from '~/components/webHeader'
import WebDialog from '~/components/webDialog'
import WebPlatform from '~/components/pageComponents/servicePlainComponents/webPlatform'
import WebCustomer from '~/components/pageComponents/servicePlainComponents/webCustomer'
import WebTutor from '~/components/pageComponents/servicePlainComponents/webTutor'
import { IMG_BASE_URL, successTip } from '~/utils'

export default {
  head() {
    return {
      title: '千职鹤-生涯资讯规划'
    }
  },
  name: "consultingPlanning",
  components: {
    WebHeader, WebCustomer, WebDialog, WebPlatform, WebTutor,
  },
  data () {
    return {
      dialogVisible: false,
      logo: IMG_BASE_URL + '/web-img/common/color-logo.png',
      plainInfo: {
        title: '生涯规划咨询',
        desc: '求职指导、高中生涯辅导、职业规划、私人定制',
      },
    }
  },
  methods: {
    changeVisible () {
      this.dialogVisible = true;
    },
    sendData (data) {
      this.$axios.post('/officialWebsiteFeedback/addOfficialWebsiteFeedback', data).then(res => {
        if (res.errorCode === 200) {
          successTip('咨询成功')
          this.dialogVisible = false;
        }
      }).catch(err => {
        console.log(err)
      })
    },
    goToHome () {
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

<style scoped lang="less">
.service-plain-container {
  .content {
    width: 100%;
    height: 900px;
    background-image: url("https://www.careershe.com/images/web-img/service/servie-plain-banner.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .info {
      padding-left: 340px;
    }
  }
}
</style>

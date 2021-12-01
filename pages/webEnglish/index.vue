<template>
  <div class="english-container">
    <web-header>
      <template #imgWrap>
        <div class="down-img-wrap"></div>
      </template>
    </web-header>
    <!--关于我们-->
    <web-about/>
    <!--APP模块-->
    <web-app @download="downLoad"/>
    <!--system模块-->
    <web-system @clickFunction="changeVisible"/>
    <!--规划模块-->
    <web-service @clickFunction="changeVisible"/>
    <web-contact  @sendData="sendData" />
    <web-dialog :title="dialogTitle"
                in18
                :selectDiffType="dialogType"
                :dialog-visible.sync="dialogVisible" @sendData="sendData"></web-dialog>
  </div>
</template>

<script>
import WebHeader from '~/components/webHeader'
import WebDialog from '~/components/webDialog'
import WebApp from '~/components/pageComponents/englishComponents/webApp'
import WebSystem from '~/components/pageComponents/englishComponents/webSystem'
import WebService from '~/components/pageComponents/englishComponents/webService'
import WebContact from '~/components/pageComponents/englishComponents/webContact'
import WebAbout from '~/components/pageComponents/englishComponents/webAbout'
import { downVersionApp, errorTip, successTip } from '~/utils'

export default {
  name: "english",
  components: {
    WebHeader,
    WebSystem,
    WebApp,
    WebService,
    WebAbout,
    WebContact,
    WebDialog
  },
  data () {
    return {
      dialogVisible: false,
      dialogTitle: '预约试用',
      dialogType: '',
    }
  },
  methods: {
    downLoad() {
      console.log(1)
      downVersionApp()
    },
    changeVisible (type) {
      this.dialogType = type;
      this.dialogTitle = 'Consulting';
      this.dialogVisible = true;
    },
    sendData (data) {
      if (data.type === '') data.type = '预约使用';
      this.$axios.post('/officialWebsiteFeedback/addOfficialWebsiteFeedback', data).then(res => {
        if (res.errorCode === 200) {
          successTip('success tip')
          this.dialogVisible = false;
        } else {
          errorTip(res.msg)
        }
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style scoped lang="less">
.english-container {
    .down-img-wrap {
      height: 900px;
      width: 100%;
      background-image: url("https://www.careershe.com/images/web-img/english/english-banner.png");
      background-size: 100% 100%;
    }
}
</style>

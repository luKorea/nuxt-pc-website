<template>
  <div class="careershe-app-container">
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
    <web-item :info="pointInfo"></web-item>
    <web-school @clickFunction="changeVisible"></web-school>
    <web-item :info="selectOurInfo"></web-item>
    <web-process :info="processInfo" @clickFunction="changeVisible"></web-process>
    <web-form @sendData="sendData"></web-form>
    <web-video :info="videoInfo" @clickFunction="changeVisible"></web-video>
    <web-dialog title="预约试用"
                selectDiffType="school"
                :dialog-visible.sync="dialogVisible" @sendData="sendData"></web-dialog>
  </div>
</template>

<script>
import WebHeader from '~/components/webHeader'
import WebVideo from '~/components/webVideo'
import WebDialog from '~/components/webDialog'
import WebItem from '~/components/webItem'
import WebSchool from '~/components/pageComponents/serviceSystemComponents/webSchool'
import WebProcess from '~/components/pageComponents/serviceSystemComponents/webProcess'
import WebForm from '~/components/pageComponents/serviceSystemComponents/webForm'
import { randomId, successTip, errorTip, IMG_BASE_URL } from '~/utils'

export default {
  head() {
    return {
      title: '千职鹤-校园生涯平台'
    }
  },
  name: "careersheApp",
  components: {
    WebHeader,
    WebVideo,
    WebDialog,
    WebItem,
    WebSchool,
    WebProcess,
    WebForm,
  },
  data () {
    return {
      dialogVisible: false,
      logo: IMG_BASE_URL + '/web-img/common/color-logo.png',
      selectOurInfo: {
        title: '为什么选择我们',
        list: [
          {
            id: randomId(),
            title: '权威',
            desc: '职业资讯源于真实调研，由专业人士进行指导',
            icon: IMG_BASE_URL + '/web-img/service/system/quanwei.png',
          },
          {
            id: randomId(),
            title: '全面',
            desc: '团队专家来源于英国、美国、新加坡，结合中国先进理论实现多元化',
            icon: IMG_BASE_URL + '/web-img/service/system/quanmian.png',
          }, {
            id: randomId(),
            title: '定制',
            desc: '为客户打造个性化服务方案，实现校园生涯定制化需求',
            icon: IMG_BASE_URL + '/web-img/service/system/dingzhi.png',
          },
        ],
      },
      pointInfo: {
        title: '学校痛点',
        list: [
          {
            id: randomId(),
            title: '学生选科征集信息难收集',
            icon: IMG_BASE_URL + '/web-img/service/system/nan.png',
          },
          {
            id: randomId(),
            title: '对学生信息了解太少',
            icon: IMG_BASE_URL + '/web-img/service/system/shao.png',
          }, {
            id: randomId(),
            title: '难以开展特色生涯规划课',
            icon: IMG_BASE_URL + '/web-img/service/system/ke.png',
          },
        ],
      },
      processInfo: {
        title: '学校申请流程',
        desc: '如果您是高中院校生涯教育相关负责人，欢迎您联系我们，我们将会与您预约时间进行产品演示',
        btnText: '免费试用',
        list: ['预约申请', '资质审核', '产品试用', '签署协议', '部署使用'],
      },
      plainInfo: {
        title: '校园生涯教育平台',
        desc: '千职鹤生涯教育平台致力于解决高中学校与学生们的生涯规划问题，帮助学校快速掌握学生信息，帮助学生认识自我，促使学生内驱力更好地自我成长。',
      },
      videoInfo: {
        title: '校园生涯教育平台介绍',
        btnText: '免费试用',
        videoSrc: 'https://v.careershe.com/product_intro.mp4',
      },
    }
  },
  methods: {
    changeVisible () {
      this.dialogVisible = true;
    },
    goToHome () {
      this.$router.push({
        path: '/',
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
  },
}
</script>


<style scoped lang="less">
.careershe-app-container {
  .content {
    width: 100%;
    height: 900px;
    background-image: url("https://www.careershe.com/images/web-img/service/system-banner.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .info {
      padding-left: 340px;
      width: 40%;
    }

    .btn-group {
      display: flex;
      //justify-content: space-between;
      align-items: center;

      .btn {
        width: 172px;
        height: 53px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000000;
        margin-right: 24px;
        cursor: pointer;

        .img {
          width: 17px;
          height: 20px;
          margin-right: 12px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .title {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
        }
      }
    }
  }
}
</style>

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
            <div class="btn-group">
              <div class="btn" @click="downAndroidApp">
                <div class="img"><img :src="androidIcon" alt=""></div>
                <span class="title">安卓 APP下载</span>
              </div>
              <div class="btn" @click="downIosApp">
                <div class="img"><img :src="iosIcon" alt=""></div>
                <span class="title">iOS APP下载</span>
              </div>
              <el-popover placement="bottom" width="150" trigger="hover">
                <img style="width: 150px; height: 150px"
                     src="https://www.careershe.com/images/mobile_download_url.png" alt=""/>
                <div class="btn" slot="reference">
                  <div class="img"><img :src="codeIcon" alt=""></div>
                  <span class="title">下载二维码</span>
                </div>
              </el-popover>
            </div>
          </div>
        </div>
      </template>
    </web-header>
    <web-item :info="schoolInfo"></web-item>
    <web-app-fun @clickFunction="downAndroidApp"></web-app-fun>
    <web-video :info="videoInfo" @clickFunction="downAndroidApp"></web-video>
  </div>
</template>

<script>
import WebHeader from '~/components/webHeader'
import WebAppFun from '~/components/pageComponents/serviceAppComponents/webAppFun'
import WebVideo from '~/components/webVideo'
import WebItem from '~/components/webItem'
import { androidAndWindowDownload, IMG_BASE_URL, iosDownload, randomId } from '~/utils'

export default {
  head() {
    return {
      title: '千职鹤-千职鹤APP',
      meta: [
        {
          name: 'description',
          content: this.plainInfo.desc,
          hid: 'description'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.plainInfo.title
        }
      ]
    }
  },
  name: "careersheApp",
  components: {
    WebAppFun,
    WebHeader,
    WebVideo,
    WebItem,
  },
  data () {
    return {
      dialogVisible: false,
      logo: IMG_BASE_URL + '/web-img/common/color-logo.png',
      androidIcon: IMG_BASE_URL + '/web-img/common/android-icon.png',
      iosIcon: IMG_BASE_URL + '/web-img/common/ios-icon.png',
      codeIcon: IMG_BASE_URL + '/web-img/common/code.png',
      schoolInfo: {
        title: '高中时期—生涯困惑',
        list: [
          {
            id: randomId(),
            title: '面对新高考如何选科',
            icon: IMG_BASE_URL + '/web-img/service/app/xuanke.png',
          },
          {
            id: randomId(),
            title: '该怎样选择高考志愿',
            icon: IMG_BASE_URL + '/web-img/service/app/zhiyuan.png',
          }, {
            id: randomId(),
            title: '未来要从事什么职业',
            icon: IMG_BASE_URL + '/web-img/service/app/zhiye.png',
          },
        ],
      },
      plainInfo: {
        title: '千职鹤—生涯规划APP',
        desc: '千职鹤是一个面向高中生的生涯规划平台，致力于解决高中生新高考选科、志愿填报以及更多生涯规划相关的需求',
      },
      videoInfo: {
        title: '千职鹤APP介绍',
        btnText: '立即下载',
        videoSrc: 'https://v.careershe.com/product_intro.mp4',
      },
    }
  },
  methods: {
    downAndroidApp () {
      androidAndWindowDownload();
    },
    downIosApp() {
      iosDownload();
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
.careershe-app-container {
  .content {
    width: 100%;
    height: 900px;
    background-image: url("https://www.careershe.com/images/web-img/service/app-banner.png");
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
        //width: 172px;
        height: 53px;
        padding: 6px 15px;
        //line-height: 53px;
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
            vertical-align: text-top;
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

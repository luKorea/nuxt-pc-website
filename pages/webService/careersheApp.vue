<template>
  <div class="careershe-app-container">
    <web-header>
      <template #logo>
        <div class="logo">
          <img :src="logo" alt="">
        </div>
      </template>
      <template #imgWrap>
        <div class="content">
          <div class="info">
            <div class="common-title">{{ plainInfo.title }}</div>
            <div class="common-desc" style="width: 693px">{{ plainInfo.desc }}</div>
            <div class="btn-group">
              <div class="btn">
                <span class="img"><img :src="androidIcon" alt=""></span>
                <span class="title">安卓 APP下载</span>
              </div>
              <div class="btn">
                <span class="img"><img :src="iosIcon" alt=""></span>
                <span class="title">iOS APP下载</span>
              </div>
              <el-popover placement="bottom" width="150" trigger="hover">
                <img style="width: 150px; height: 150px"
                     src="https://www.careershe.com/images/mobile_download_url.png" alt=""/>
                <div class="btn" slot="reference">
                  <span class="img"><img :src="codeIcon" alt=""></span>
                  <span class="title">下载二维码</span>
                </div>
              </el-popover>
            </div>
          </div>
        </div>
      </template>
    </web-header>
    <web-item :info="schoolInfo"></web-item>
    <web-app-fun @clickFunction="downApp"></web-app-fun>
    <web-video :info="videoInfo" @clickFunction="downApp"></web-video>
  </div>
</template>

<script>
import WebHeader from '~/components/webHeader'
import WebAppFun from '~/components/pageComponents/serviceAppComponents/webAppFun'
import WebVideo from '~/components/webVideo'
import WebItem from '~/components/webItem'
import { androidAndWindowDownload, randomId } from '~/utils'

export default {
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
      logo: require('~/static/image/common/color-logo.png'),
      androidIcon: require('static/image/common/android-icon.png'),
      iosIcon: require('static/image/common/ios-icon.png'),
      codeIcon: require('static/image/common/code.png'),
      schoolInfo: {
        title: '高中时期—生涯困惑',
        list: [
          {
            id: randomId(),
            title: '面对新高考如何选科',
            icon: require('static/image/service/app/xuanke.png'),
          },
          {
            id: randomId(),
            title: '该怎样选择高考志愿',
            icon: require('static/image/service/app/zhiyuan.png'),
          }, {
            id: randomId(),
            title: '未来要从事什么职业',
            icon: require('static/image/service/app/zhiye.png'),
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
    downApp () {
      androidAndWindowDownload();
    },
  },
}
</script>


<style scoped lang="less">
.careershe-app-container {
  .content {
    width: 100%;
    height: 900px;
    background-image: url("static/image/service/app-banner.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .info {
      padding-left: 340px;
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

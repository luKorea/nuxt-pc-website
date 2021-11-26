<template>
  <div class="download-container">
    <web-header>
      <template #imgWrap>
        <div class="content">
          <div class="down-img-wrap"></div>
          <div class="tip-wrap">
            <div class="top">
              <div class="title">千职鹤—生涯规划APP</div>
              <div class="desc">
                千职鹤是一个面向高中生的生涯规划平台，致力于解决高中生新高考选科、志愿填报以及更多生涯规划相关的需求
              </div>
            </div>
            <div class="bottom">
              <div class="qrcode-wrap">
                <div class="img"><img :src="qrcode" alt=""></div>
                <div class="down-btn">
                  <div class="btn" @click="downloadAndroid">
                    <div class="icon-img">
                      <img :src="androidIcon" alt=""/>
                    </div>
                    <span>安卓 APP下载</span>
                  </div>
                  <div class="btn" @click="iosDownloadFile">
                    <div class="icon-img">
                      <img :src="iosIcon" alt=""/>
                    </div>
                    <span>IOS APP下载</span>
                  </div>
                </div>
              </div>
              <div class="qrcode-link">
                <span> 安卓/IOS设备</span>
                <span>扫描二维码下载千职鹤APP</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </web-header>
  </div>
</template>

<script>
import WebHeader from '~/components/webHeader'
import { androidAndWindowDownload, IMG_BASE_URL, iosDownload } from '~/utils'

export default {
  name: "index",
  head() {
    return {
      title: '千职鹤-下载APP'
    }
  },
  components: { WebHeader },
  data () {
    return {
      qrcode: IMG_BASE_URL + '/mobile_download_url.png',
      androidIcon: IMG_BASE_URL + '/web-img/common/android-icon.png',
      iosIcon: IMG_BASE_URL + '/web-img/common/ios-icon.png',
    }
  },
  methods: {
    downloadAndroid() {
      androidAndWindowDownload()
    },
    iosDownloadFile() {
      iosDownload()
    }
  }
}
</script>

<style scoped lang="less">
.download-container {
  .content {
    height: 900px;
    width: 100%;
    background-image: url("https://www.careershe.com/images/web-img/download/donwload-banner.png");
    background-size: 100% 100%;

    .tip-wrap {
      position: absolute;
      top: 216px;
      left: 340px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      //align-items: center;
      .top {
        .title {
          font-size: 48px;
          font-family: MicrosoftYaHeiSemibold;
          color: #FFFFFF;
          line-height: 80px;
        }

        .desc {
          width: 459px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 30px;
        }

        margin-bottom: 98px;
      }

      .bottom {
        display: flex;
        flex-direction: column;

        .qrcode-wrap {
          display: flex;

          .img {
            width: 226px;
            height: 223px;
            margin-bottom: 27px;
            margin-right: 40px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .down-btn {
            display: flex;
            flex-direction: column;
            height: 223px;
            justify-content: space-evenly;

            .btn {
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 172px;
              height: 53px;
              //line-height: 53px;
              background: rgba(255, 255, 255, 0.2);
              font-size: 16px;
              font-family: MicrosoftYaHei;
              color: #FFFFFF;

              .icon-img {
                width: 17px;
                height: 20px;
                margin-right: 12px;

                img {
                  width: 100%;
                  height: 100%;
                  //vertical-align: top;
                }
              }
            }
          }
        }

        .qrcode-link {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 21px;
        }
      }
    }
  }
}
</style>

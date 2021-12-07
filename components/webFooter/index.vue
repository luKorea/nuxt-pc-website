<template>
  <div class="footer-container">
    <div class="footer-wrap">
      <!--info介绍-->
      <div class="footer-info">
        <div class="company-wrap">
          <div class="company-logo"><img :src="logo" alt="千职鹤"/></div>
          <div class="company-info">
            <div class="company-phone common-bottom">电话：{{ companyInfo.companyPhone }}</div>
            <div class="company-email common-bottom">邮箱：{{ companyInfo.companyEmail }}</div>
            <div class="company-address common-bottom">地址：{{ companyInfo.companyAddress }}</div>
          </div>
        </div>
        <div class="footer-third-party">
          <template v-if="linkToWebsite && linkToWebsite.length > 0">
            <div class="link-wrap">
              <span class="item"
                    v-for="item in linkToWebsite"
                    @click="goDetail(item.src)"
                    :key="item.id">{{ item.title }}</span>
            </div>
          </template>
        </div>

        <div class="footer-qrcode">
          <div class="qrcode-info" style="margin-right: 50px">
            <div class="img"><img :src="companyInfo.officialAccount" alt=""/></div>
            <div class="title">公众号</div>
          </div>
          <div class="qrcode-info">
            <div class="img"><img :src="companyInfo.serviceQrcode" alt=""/></div>
            <div class="title">客服</div>
          </div>
        </div>
      </div>
      <div class="line"/>
      <!--copyright-->
      <div class="footer-copyright">
        <div class="copyright">{{ companyInfo.companyCopyright }}</div>
        <div class="copyright" style="cursor: pointer" @click="showImg">联网备案信息</div>
        <div class="company">{{ companyInfo.companyName }}</div>
      </div>
    </div>
    <el-dialog
        :visible.sync="imgShow"
        top="10vh"
        width="70%">
      <div  class="beian">
        <img :src="beianImg" alt=""/>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { companyInfo, IMG_BASE_URL } from '~/utils'
import { nanoid } from 'nanoid'

export default {
  name: "webFooter",
  data () {
    return {
      logo: IMG_BASE_URL + '/web-img/common/logo.png',
      beianImg: IMG_BASE_URL + '/web-img/beian.png',
      companyInfo: companyInfo,
      imgShow: false,
      linkToWebsite: [
        {
          id: nanoid(12),
          src: '/webService/careersheApp',
          title: '千职鹤APP',
        },
        {
          id: nanoid(12),
          src: '/webArticle',
          title: '文章资讯',
        },
        {
          id: nanoid(12),
          src: '/webService/schoolSystem',
          title: '学校生涯教育平台',
        },
        {
          id: nanoid(12),
          src: '/webAbout/description',
          title: '关于我们',
        },
        {
          id: nanoid(12),
          src: '/webService/consultingPlanning',
          title: '生涯规划1对1咨询',
        },
      ],
    }
  },
  methods: {
    goDetail (url) {
      this.$router.push({
        path: url,
      })
    },
    showImg() {
      this.imgShow = !this.imgShow;
    }
  },
}
</script>

<style scoped lang="less">
.common-bottom {
  margin-bottom: 10px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: 367px;
  padding: 20px 0;
  //position: fixed;
  //bottom: 0;
  //left: 0;
  width: 100%;
  background: #1B1E2E;

  .footer-wrap {
    width: 80%;
    display: flex;
    flex-direction: column;

    .footer-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .company-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .company-logo {
          width: 177px;
          height: 68px;
          margin-bottom: 40px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .company-info {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
        }
      }
    }

    .footer-third-party {
      display: flex;

      .link-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 300px;

        .item {
          margin-right: 20px;
          margin-bottom: 54px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          cursor: pointer;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .footer-qrcode {
      display: flex;
      justify-content: space-between;

      .qrcode-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .img {
          width: 126px;
          height: 126px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .title {
          margin-top: 30px;
          font-size: 16px;
          color: #FFFFFF;
        }
      }
    }

    .line {
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 1px;
      margin: 40px 0;
    }

    .footer-copyright {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #FFFFFF;
      height: 19px;
      line-height: 19px;
    }
  }
  .beian {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    //padding-left: 20px;
    img {
      width: 95%;
      height: 100%;
    }
  }
}
</style>

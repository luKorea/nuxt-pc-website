<template>
  <div class="contact-container">
    <div style="position: relative">
      <website-header>
        <template #imgWrap>
          <div class="content">
            <div class="service-wrap">
              <div class="info-wrap">
                <div class="title-wrap">
                  <div class="title">联系我们</div>
                  <div class="title">CONTACT US</div>
                </div>
                <div class="company-info">
                  <div class="tip">联系人：{{ companyInfo.companyBOSS }}</div>
                  <div class="tip">联系电话：{{ companyInfo.companyPhone }}</div>
                  <div class="tip">公司邮箱：{{ companyInfo.companyEmail }}</div>
                  <div class="tip">地址：{{ companyInfo.companyAddress }}</div>
                </div>
              </div>

              <div class="contact-form">
                <div class="title">联系我们</div>
                <el-input v-model="sendData.name" placeholder="姓名"></el-input>
                <el-input v-model.number="sendData.phone" placeholder="联系电话"></el-input>
                <el-input type="textarea" :rows="4" v-model="sendData.message" placeholder="留言"></el-input>
                <div class="send-btn" @click="sendDataSubmit">提交</div>
              </div>
            </div>
          </div>
        </template>
      </website-header>
    </div>
  </div>
</template>

<script>
import websiteHeader from '~/components/webHeader'
import { companyInfo, errorTip, successTip } from '~/utils'

export default {
  head () {
    return {
      title: '千职鹤-联系我们',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.companyInfo.companyAddress + this.companyInfo.companyEmail,
        },
      ],
    }
  },
  name: "contact",
  components: {
    websiteHeader,
  },
  data () {
    return {
      companyInfo: companyInfo,
      sendData: {
        name: '',
        phone: '',
        message: '',
        type: '联系我们',
      },
    }
  },
  methods: {
    sendDataSubmit () {
      this.$axios.post('/officialWebsiteFeedback/addOfficialWebsiteFeedback', this.sendData).then(res => {
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
.contact-container {
  .content {
    background-image: url("https://www.careershe.com/images/web-img/about/about-banner.png");
    background-size: 100% 100%;
    width: 100%;
    height: 900px;

    .service-wrap {
      position: absolute;
      left: 340px;
      top: 180px;
      display: flex;
      justify-content: space-between;

      .info-wrap {
        display: flex;
        flex-direction: column;

        .title-wrap {
          display: flex;
          flex-direction: column;
          width: 689px;
          font-size: 48px;
          font-family: MicrosoftYaHeiSemibold;
          color: #FFFFFF;
          line-height: 80px;
          margin-bottom: 40px;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 30px;
        }
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        //justify-content: center;
        align-items: center;
        padding: 20px;
        width: 400px;
        box-sizing: border-box;
        //height: 400px;
        background: #FFFFFF;
        box-shadow: 0 6px 40px 0 rgba(18, 38, 65, 0.1);

        .title {
          font-size: 20px;
          font-family: MicrosoftYaHeiSemibold;
          color: #0B173A;
          line-height: 32px;
          margin-bottom: 40px;
        }

        .el-input {
          margin-bottom: 22px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="description-container">
    <website-header>
      <template #imgWrap>
        <div class="content">
          <div class="service-wrap">
            <div class="info-wrap">
              <div class="title-wrap">
                <div class="title">关于千职鹤</div>
                <div class="title">ABOUT CAREERSHE</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </website-header>
    <!--企业介绍-->
    <web-introduction :company-introduction="companyIntroduction"></web-introduction>
    <!--价值观-->
    <web-item :info="valuesInfo" bg-color="#F1F5F8"></web-item>
    <!--发展历程-->
    <web-development
        :company-development="companyDevelopment"
        :company-development-list="companyDevelopmentList"
    ></web-development>
    <!--企业荣誉-->
    <web-honor :company-honor="companyHonor"></web-honor>
  </div>
</template>

<script>
import WebsiteHeader from '~/components/webHeader'
import WebItem from '~/components/webItem'
import webIntroduction from '~/components/pageComponents/aboutDescriptionComponents/webIntroduction'
import webDevelopment from '~/components/pageComponents/aboutDescriptionComponents/webDevelopment'
import webHonor from '~/components/pageComponents/aboutDescriptionComponents/webHonor'
import { companyInfo, IMG_BASE_URL, randomId, errorTip } from '~/utils'
import { getArticleItem } from '~/api'

export default {
  head () {
    return {
      title: '千职鹤-企业描述',
      meta: [
        { hid: 'description', name: 'description', content: this.companyIntroduction.desc },
      ],
    }
  },
  name: "description",
  components: {
    WebsiteHeader,
    WebItem,
    webDevelopment,
    webHonor,
    webIntroduction,
  },
  data () {
    return {
      companyIntroduction: {
        title: '企业介绍',
        tip: 'Company Introduction',
        logo: IMG_BASE_URL + '/web-img/about/description-logo.png',
        desc: companyInfo.companyDesc,
      },
      valuesInfo: {
        title: '价值观',
        tip: 'Values',
        list: [
          {
            id: randomId(),
            title: '使命',
            desc: '让所有学生都能找到理想的职业',
            icon: IMG_BASE_URL + '/web-img/about/shiming.png',
          },
          {
            id: randomId(),
            title: '愿景',
            desc: '成为中国最受信任的职业规划指南',
            icon: IMG_BASE_URL + '/web-img/about/yuanjing.png',
          }, {
            id: randomId(),
            title: '价值观',
            desc: '坚持真实 平等服务团结奋斗 极致共赢',
            icon: IMG_BASE_URL + '/web-img/about/jianzhi.png',
          },
        ],
      },
      companyDevelopment: {
        title: '发展历程',
        tip: 'Development Course',
      },
      companyDevelopmentList: [],
      companyHonor: {
        title: '企业荣誉',
        tip: 'Enterprise Honor',
        honorLogo: IMG_BASE_URL + '/web-img/about/description-honor.png',
        desc: [
          '京津冀-粤港澳青年创业大赛全国总决赛银奖',
          '佛山市计算机协会最佳支持单位',
          '科大讯飞人工智能开发者大赛复赛入围资格',
          '越青杯创客新星大赛三等奖',
          '第五届亚洲ORIGN大会获奖者',
          '牛津大学科技创新公司在亚洲成立的首家公司',
        ],
      },
    }
  },
  async asyncData ({ params, app }) {
    let data = await app.$axios.$get('/officialWebsiteDevelopingCourse/getOfficialWebsiteDevelopingCourseList');
    return {
      companyDevelopmentList: data,
    }
  },
}
</script>

<style scoped lang="less">
.description-container {
  .content {
    background-image: url("https://www.careershe.com/images/web-img/about/description-banner.png");
    background-size: 100% 100%;
    width: 100%;
    height: 640px;

    .service-wrap {
      position: absolute;
      left: 340px;
      top: 300px;
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
        height: 400px;
        background: #FFFFFF;
        box-shadow: 0px 6px 40px 0px rgba(18, 38, 65, 0.1);

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

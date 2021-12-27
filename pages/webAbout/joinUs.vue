<template>
  <div class="join-container">
    <div style="position: relative">
      <website-header>
        <template #imgWrap>
          <div class="content">
            <div class="service-wrap">
              <div class="info-wrap">
                <div class="title-wrap">
                  <div class="title">加入我们</div>
                  <div class="title">JOIN US</div>
                </div>
                <div class="company-info">
                  如果您不甘心平淡的生活，想要找一份具有挑战性的工作，那就加入我们吧，这是一个能够充分展现你才华的舞台
                </div>
              </div>
            </div>
          </div>
        </template>
      </website-header>
    </div>

    <!--地图区域-->
    <div class="item-wrap">
      <web-map map-width="450px"></web-map>
      <div class="company-content">
        <span>办公地点：{{ companyInfo.companyAddress }}</span>
        <span>联系人：{{ companyInfo.companyBOSS }}</span>
        <span>联系电话：{{ companyInfo.companyPhone }}</span>
        <span>请将简历&邮件依据格式：【应聘岗位】+【姓名】+【联系方式】命名</span>
        <span>发送至邮箱：{{ companyInfo.companyEmail }}</span>
      </div>
    </div>
    <div class="list-wrap">
      <div class="common-title" style="text-align: center">招聘岗位</div>
      <div class="list-join" v-if="list && list.length > 0">
        <template v-for="(item, index) in list">
          <div class="list-item" :key="item.id">
            <div class="number-tip">{{ index + 1 }}</div>
            <div class="info-wrap">
              <div class="title">{{ item.name }}</div>
              <div class="tip">招聘要求</div>
              <div class="desc">{{ item.demand }}</div>
            </div>
          </div>
        </template>
      </div>
      <div class="no-join" v-else>
        <div class="join-img">
          <img :src="joinNothing" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import websiteHeader from '~/components/webHeader'
import webMap from '~/components/webMap'
import { nanoid } from 'nanoid'
import { companyInfo, IMG_BASE_URL, errorTip } from '~/utils'

export default {
  head () {
    return {
      title: '千职鹤-加入我们',
      meta: [
        { hid: 'description', name: 'description', content: this.companyInfo.companyAddress },
      ],
    }
  },
  name: "joinUs",
  components: {
    websiteHeader,
    webMap,
  },
  data () {
    return {
      companyInfo: companyInfo,
      joinNothing: IMG_BASE_URL + '/web-img/about/join-nothing.png',
    }
  },
  async asyncData ({ params, app }) {
    let data = await app.$axios.$get('/officialWebsiteHiring/getOfficialWebsiteHiringList')
    return {
      list: data,
    }
  },
  methods: {},
}
</script>

<style scoped lang="less">
.join-container {
  .content {
    background-image: url("https://www.careershe.com/images/web-img/about/join-banner.png");
    background-size: 100% 100%;
    width: 100%;
    height: 640px;

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
          width: 426px;
        }
      }
    }
  }

  .item-wrap {
    position: absolute;
    top: 680px;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 1260px;
    box-sizing: border-box;
    padding: 32px 40px;
    background: #FFFFFF;
    box-shadow: 0 6px 40px 0 rgba(18, 38, 65, 0.1);

    .company-content {
      display: flex;
      flex-direction: column;
      margin-left: 32px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #0B173A;
      line-height: 50px;
    }
  }

  .list-wrap {
    width: 1240px;
    padding-top: 250px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    flex-wrap: wrap;

    .list-join {
      display: flex;
      flex-direction: column;

      .list-item {
        display: flex;
        width: 100%;
        margin-top: 40px;
        margin-bottom: 50px;

        .number-tip {
          width: 50px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          background-color: #007EFB;
          font-size: 20px;
          font-family: MicrosoftYaHeiSemibold;
          color: #FFFFFF;
          margin-right: 20px;
        }

        .info-wrap {
          display: flex;
          flex-direction: column;

          .title {
            font-size: 24px;
            font-family: MicrosoftYaHeiSemibold;
            color: #0B173A;
            line-height: 32px;
            margin-bottom: 30px;
          }

          .tip {
            font-size: 16px;
            font-family: MicrosoftYaHeiSemibold;
            color: #0B173A;
            line-height: 21px;
            margin-bottom: 18px;
          }

          .desc {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #989CA7;
            line-height: 19px;
          }
        }
      }
    }

    .no-join {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .join-img {
        width: 400px;
        height: 306px;
        margin-bottom: 200px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

}
</style>

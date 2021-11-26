<template>
  <div class="careershe-app-fun-container">
    <div class="fun-wrap">
      <div class="common-title text-center">千职鹤APP解决方案</div>
      <div class="fun-content">
        <img :src="appServiceImg" alt="">
      </div>
    </div>
    <web-list :one-info="oneInfo" :two-info="twoInfo" @clickFunction="clickFunction"/>
  </div>
</template>

<script>
import WebList from '~/components/webList'
import { IMG_BASE_URL, randomId } from '~/utils'

export default {
  name: "webAppFun",
  components: {
    WebList,
  },
  data () {
    return {
      appServiceImg: IMG_BASE_URL + '/web-img/service/app/app-service.png',
      oneInfo: {
        title: '生涯发展',
        btnFont: '立即下载',
        list: [
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
            title: '职业百科',
            desc: '200+职业、300+职业视频',
          },
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn05%2F533%2Fw800h533%2F20180606%2Febc8-hcqccin9939664.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639895596&t=0348d8fbaa8da12064cea1513645e023',
            title: '职业专访',
            desc: '21个职场人士职业分享',
          },
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
            title: '测评中心',
            desc: '性格测试、兴趣测试、职业价值观测试',
          },
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn05%2F533%2Fw800h533%2F20180606%2Febc8-hcqccin9939664.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639895596&t=0348d8fbaa8da12064cea1513645e023',
            title: '推荐服务',
            desc: '高考志愿填报、生涯规划咨询、新加坡硕士留学...',
          },
        ],
      },
      twoInfo: {
        title: '升学规划',
        btnFont: '立即下载',
        list: [
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
            title: '3+1+2选科查询',
            desc: '输入选科组合查询可填报专业',
          },
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn05%2F533%2Fw800h533%2F20180606%2Febc8-hcqccin9939664.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639895596&t=0348d8fbaa8da12064cea1513645e023',
            title: '志愿填报',
            desc: '2021年模拟志愿填报',
          },
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
            title: '院校库',
            desc: '收录全国2000+所大学',
          },
          {
            id: randomId(),
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn05%2F533%2Fw800h533%2F20180606%2Febc8-hcqccin9939664.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639895596&t=0348d8fbaa8da12064cea1513645e023',
            title: '专业库',
            desc: '600+专业详解',
          },
        ],
      },
    }
  },
  methods: {
    clickFunction () {
      this.$emit('clickFunction')
    },
  },
}
</script>

<style scoped lang="less">
.careershe-app-fun-container {
  .fun-wrap {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F1F5F8;
    padding: 80px 0;

    .fun-content {
      width: 981px;
      height: 720px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

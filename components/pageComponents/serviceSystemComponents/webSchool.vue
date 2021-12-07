<template>
  <div class="careershe-app-fun-container">
    <div class="fun-wrap">
      <div class="common-title text-center">生涯教育平台解决方案</div>
      <div class="fun-content" @click="clickFunction">
        <img :src="bgImg" alt="">
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
      bgImg: IMG_BASE_URL + '/web-img/service/system/fanan.png',
      oneInfo: {
        title: '教师端',
        btnFont: '免费试用',
        list: [
          {
            id: randomId(),
            imgUrl: IMG_BASE_URL + '/web-img/jiaoshi-one.png',
            title: '选科征集统计',
            desc: '线上完成学生选科征集工作，统计分析一目了然',
          },
          {
            id: randomId(),
            imgUrl: IMG_BASE_URL + '/web-img/jiaoshi-two.png',
            title: '测评统计',
            desc: '兴趣测试、性格测试，更加了解每一个学生',
          },
          {
            id: randomId(),
            imgUrl: IMG_BASE_URL + '/web-img/jiaoshi-three.png',
            title: '学生数据分析',
            desc: '学生数据在线统计分析，及时掌握学生动态',
          },
        ],
      },
      twoInfo: {
        title: '学生端',
        btnFont: '免费试用',
        list: [
          {
            id: randomId(),
            imgUrl: IMG_BASE_URL + '/web-img/xuesheng-one.png',
            title: '测评中心',
            desc: '性格测试、兴趣测试，让学生更加了解自我',
          },
          {
            id: randomId(),
            imgUrl: IMG_BASE_URL + '/web-img/xuesheng-two.png',
            title: '选科征集',
            desc: '线上填写选科征集信息，快捷方便',
          },
          {
            id: randomId(),
            imgUrl: IMG_BASE_URL + '/web-img/xuesheng-three.png',
            title: '新高考选科查询',
            desc: '高一的选科可以填报哪些专业？一查便知',
          },
        ],
      },
    }
  },
  methods: {
    clickFunction() {
      this.$emit('clickFunction')
    }
  }
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
      width: 1540px;
      height: 487px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

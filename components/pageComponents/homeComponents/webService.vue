<template>
  <div class="white-guahui-wrap">
    <div class="desc-wrap">
      <div class="common-title">{{ serviceInfo.title }}</div>
      <div class="common-desc">{{ serviceInfo.desc }}</div>
      <div class="item-wrap">
        <template v-for="item in  serviceInfo.serviceList">
          <div class="wrap" :key="item.id">
            <div class="text">{{ item.name }}</div>
          </div>
        </template>
      </div>
      <div class="btn-home">
        <div class="btn-down" @click="changeVisible">预约咨询</div>
        <div class="btn-more" @click="goPage">了解更多</div>
      </div>
    </div>
    <div class="img">
      <img :src="serviceInfo.serviceImg" alt="">
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { IMG_BASE_URL } from '~/utils'

export default {
  name: "webService",
  data () {
    return {
      serviceInfo: {
        title: '生涯规划咨询',
        desc: '生涯专家1对1打造生涯发展方案，帮你摆脱生涯困境、重塑自我',
        serviceList: [
          {
            id: nanoid(8),
            name: '求职咨询',
          },
          {
            id: nanoid(8),
            name: '职业规划',
          },
          {
            id: nanoid(8),
            name: '职场私人定制',
          },
          {
            id: nanoid(8),
            name: '高中志愿填报',
          },
          {
            id: nanoid(8),
            name: '新高考咨询',
          },
          {
            id: nanoid(8),
            name: '高中未来生涯咨询',
          },
        ],
        serviceImg: IMG_BASE_URL + '/web-img/home/guihua.png',
      },
    }
  },
  methods: {
    changeVisible () {
      this.$emit('changeVisible', 'service')
    },
    goPage() {
      this.$emit('goPage', 'service')
    }
  },
}
</script>

<style scoped lang="less">
.white-guahui-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFFFFF;
  padding: 100px 0;

  .desc-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item-wrap {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 654px;
      box-sizing: border-box;
      background: linear-gradient(90deg, #F1F5F8 0%, #FFFFFF 100%);
      margin-bottom: 60px;
      padding: 37px 30px 0 30px;

      .wrap {
        display: flex;
        align-items: center;
        width: 194px;
        margin-bottom: 37px;

        .img {
          width: 32px;
          height: 32px;
          margin-right: 20px;

          img {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }

        .text {
          font-size: 20px;
          font-family: MicrosoftYaHei;
          color: #0B173A;
        }
      }
    }
  }

  .img {
    width: 428px;
    height: 435px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

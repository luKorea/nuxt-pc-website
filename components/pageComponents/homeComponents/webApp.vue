<template>
  <div class="white-wrap">
    <div class="desc-wrap">
      <div class="common-title">{{ appInfo.title }}</div>
      <div class="common-desc">{{ appInfo.desc }}</div>
      <div class="item-wrap">
        <template v-for="item in  appInfo.appList">
          <div class="wrap" :key="item.id">
            <div class="img"><img :src="item.icon" alt=""/></div>
            <div class="text">{{ item.name }}</div>
          </div>
        </template>
      </div>
      <div class="btn-home">
        <div class="btn-down">立即下载</div>
        <div class="btn-more" @click="goPage">了解更多</div>
      </div>
    </div>
    <div class="img">
      <img :src="appInfo.appImg" alt="">
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: "webApp",
  data () {
    return {
      appInfo: {
        title: '千职鹤—生涯规划APP',
        desc: '让所有学生都能找到理想的职业！',
        appList: [
          {
            id: nanoid(8),
            name: '测评中心',
            icon: require('~/static/image/home/icon/ceping.png'),
          },
          {
            id: nanoid(8),
            name: '职业百科',
            icon: require('~/static/image/home/icon/zhiye.png'),
          },
          {
            id: nanoid(8),
            name: '职业专访',
            icon: require('~/static/image/home/icon/zhuanfang.png'),
          },
          {
            id: nanoid(8),
            name: '社区问答',
            icon: require('~/static/image/home/icon/shequ.png'),
          },
          {
            id: nanoid(8),
            name: '志愿填报',
            icon: require('~/static/image/home/icon/zhiyuan.png'),
          },
          {
            id: nanoid(8),
            name: '选科查询',
            icon: require('~/static/image/home/icon/xuanke.png'),
          },
          {
            id: nanoid(8),
            name: '专业库',
            icon: require('~/static/image/home/icon/zhuanye.png'),
          },
          {
            id: nanoid(8),
            name: '院校库',
            icon: require('~/static/image/home/icon/yuanxiao.png'),
          },
        ],
        appImg: require('~/static/image/home/APP.png'),
      },
    }
  },
  methods: {
    goPage() {
      this.$emit('goPage', 'app')
    }
  }
}
</script>

<style scoped lang="less">
.white-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFFFFF;
  margin: 100px 0;

  .desc-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item-wrap {
      display: flex;
      flex-wrap: wrap;
      width: 654px;

      .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 194px;
        height: 74px;
        line-height: 74px;
        background-color: #F1F5F8;
        margin-right: 24px;
        margin-bottom: 24px;

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
    width: 476px;
    height: 621px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

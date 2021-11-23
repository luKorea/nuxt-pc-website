<template>
  <div class="gray-wrap">
    <div class="img">
      <img :src="systemInfo.systemImg" alt="">
    </div>
    <div class="desc-wrap">
      <div class="common-title">{{ systemInfo.title }}</div>
      <div class="common-desc" style="width: 451px">{{ systemInfo.desc }}</div>
      <div class="item-wrap">
        <template v-for="item in  systemInfo.systemList">
          <div class="wrap" :key="item.id">
            <div class="img"><img :src="item.icon" alt=""/></div>
            <div class="text">{{ item.name }}</div>
          </div>
        </template>
      </div>
      <div class="btn-home">
        <div class="btn-down" @click="changeVisible">免费试用</div>
        <div class="btn-more" @click="goPage">了解更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { IMG_BASE_URL } from '~/utils'

export default {
  name: "webSystem",
  data () {
    return {
      systemInfo: {
        title: '学校生涯管理平台',
        desc: '帮助学校快速掌握学生信息，帮助学生认识自我，促使学生内驱力更好地自我成长',
        systemList: [
          {
            id: nanoid(8),
            name: '学生选科征集',
            icon: IMG_BASE_URL + '/web-img/service/system/nan.png',
          },
          {
            id: nanoid(8),
            name: '测评中心',
            icon: IMG_BASE_URL + '/web-img/home/ceping.png',
          },
          {
            id: nanoid(8),
            name: '生涯统计分析',
            icon: IMG_BASE_URL + '/web-img/tongji.png',
          },
          {
            id: nanoid(8),
            name: '职业百科',
            icon: IMG_BASE_URL + '/web-img/zhiyebaike.png',
          },
          {
            id: nanoid(8),
            name: '新高考选科查询',
            icon: IMG_BASE_URL + '/web-img/gaokao.png',
          },
          {
            id: nanoid(8),
            name: '院校库',
            icon: IMG_BASE_URL + '/web-img/yuanxiao.png',
          },
          {
            id: nanoid(8),
            name: '专业库',
            icon: IMG_BASE_URL + '/web-img/zhuanye.png',
          },
          {
            id: nanoid(8),
            name: '...',
            icon: IMG_BASE_URL + '/web-img/more.png',
          },
        ],
        systemImg: IMG_BASE_URL + '/web-img/home/school.png',
      },
    }
  },
  methods: {
    changeVisible () {
      this.$emit('changeVisible', 'school')
    },
    goPage () {
      this.$emit('goPage', 'school')
    },
  },
}
</script>

<style scoped lang="less">
.gray-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #F1F5F8;
  padding: 100px 0;

  .desc-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item-wrap {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 670px;
      box-sizing: border-box;
      background: linear-gradient(90deg, #FFFFFF 0%, #F1F5F8 100%);
      margin-bottom: 60px;
      padding: 37px 30px 0 30px;

      .wrap {
        display: flex;
        align-items: center;
        width: 200px;
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
    width: 500px;
    height: 500px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

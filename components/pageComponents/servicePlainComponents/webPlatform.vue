<template>
  <div class="platform-container">
    <div class="common-title">生涯教育平台解决方案</div>
    <div class="type-wrap">
      <template v-for="(item, index) in typeList">
        <div class="type-item"
             :style="{backgroundImage: 'url(' + item.bgImg + ')'}"
             @mouseenter="changeShowData(index)"
             @mouseleave="changeHideData(index)"
        >
          <div class="type-title" v-show="typeList[index].showItem">
            <div class="title">{{ item.title }}</div>
          </div>
          <div class="type-info" v-show="!typeList[index].showItem" @click="changeVisible">
            <div class="info-title">{{ item.title }}</div>
            <span class="tip"></span>
            <div class="bottom-btn">立即咨询</div>
            <template v-for="(child, i) in item.tip">
              <div class="tip-wrap" :key="i">{{ child }}</div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: "platform",
  data () {
    return {
      dialogVisible: false,
      typeList: [
        {
          id: nanoid(8),
          title: '求职指导',
          showItem: true,
          tip: ['专业HR一对一指导', '简历定制', '面试辅导', '资深企业HR团队模拟面试'],
          bgImg: require('~/static/image/service/zhidao.png'),
        },
        {
          id: nanoid(8),
          title: '高中生辅导',
          showItem: true,
          tip: ['新高考指导', '志愿填报', '学生幸福感咨询', '未来生涯指导'],
          bgImg: require('~/static/image/service/fudao.png'),
        },
        {
          id: nanoid(8),
          title: '职业规划',
          showItem: true,
          tip: ['基于千职鹤互联网职业规划', '专业评测系统', '国际认证职业规划全程指导', '个性化生涯规划方案'],
          bgImg: require('~/static/image/service/guihua.png'),
        },
        {
          id: nanoid(8),
          title: '私人定制',
          showItem: true,
          tip: ['个人竞争力评估', '行业导师', '求职社交礼仪指导', '实习机会推荐', '简历内推'],
          bgImg: require('~/static/image/service/dingzhi.png'),
        },
      ],
    }
  },
  methods: {
    changeVisible () {
      this.$emit('changeVisible')
    },
    changeShowData (index) {
      this.typeList[index].showItem = false;
    },
    changeHideData (index) {
      this.typeList[index].showItem = true;
    },
  },
}
</script>

<style scoped lang="less">
.platform-container {
  width: 100%;
  height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .type-wrap {
    display: flex;
    margin-top: 60px;

    .type-item {
      width: 310px;
      height: 460px;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;

      .type-title {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        font-family: MicrosoftYaHeiSemibold;
        color: #FFFFFF;

        .title {
          width: 36px;
        }
      }

      .type-info {
        display: flex;
        flex-direction: column;
        padding: 40px;

        .info-title {
          font-size: 24px;
          font-family: MicrosoftYaHeiSemibold;
          color: #FFFFFF;
          line-height: 32px;
        }

        .tip {
          width: 28px;
          height: 2px;
          margin-top: 40px;
          background: #FFFFFF;
        }

        .tip-wrap {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 30px;
        }

        .bottom-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 60px;
          line-height: 60px;
          background: rgba(0, 0, 0, 0.3);
          text-align: center;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
        }
      }
    }
  }
}
</style>

<template>
  <div class="tutor-container">
    <div class="common-title text-center">生涯咨询师</div>
    <div class="type-wrap">
      <template v-for="(item, index) in list">
        <div class="type-item"
             @mouseenter="changeShowData(index)"
             @mouseleave="changeHideData(index)"
             :style="{backgroundImage: 'url(' + item.avatarUrl + ')', backgroundSize: 'cover'}"
        >
          <div class="type-title">
            <div class="name" style="margin-right: 8px">{{ item.chineseName }}</div>
            <div class="name">{{ item.englishName }}</div>
          </div>
          <div class="type-info" v-show="!list[index].showAvatar" @click="changeVisible">
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
//
import { randomId } from '~/utils'

export default {
  name: "tutor",
  data () {
    return {
      list: [
        {
          id: randomId(),
          showAvatar: true,
          chineseName: '岑继裘',
          englishName: 'Gecko Tsen',
          avatarUrl: 'https://www.careershe.com/images/gecko-1x.png',
          tip: [
            '前世界500强海德堡水泥、华润水泥信息及供应链经理',
            '前奥飞娱乐海外信息项目高级经理',
            'GCDF全球生涯发展规划师',
            'PMP国际项目管理专业人士',
            '超过10年大型企业流程管理经验',
            '擅长项目管理、产品开发、供应链管理及企业流程再造',
            '中山大学物理硕士',
          ],
        },
        {
          id: randomId(),
          showAvatar: true,
          chineseName: '李华珏',
          englishName: 'Eva Li',
          avatarUrl: 'https://www.careershe.com/images/lihuajue-1x.png',
          tip: [
            '前世界500强快消行业巨头玛氏公司人力资源总监',
            '资深生涯规划师及企业管理培训生导师',
            '美国正面管教协会认证家长讲师',
            '数家知名求职网面试及求职职业导师',
            '曾在知名央企及外企任咨询顾问及法务顾问',
            '暨南大学应用心理学研究生，统计学本科',
            '兼任中小型企业管理外部顾问',
          ],
        },
        {
          id: randomId(),
          showAvatar: true,
          chineseName: '伊美亭',
          englishName: '',
          avatarUrl: 'https://www.careershe.com/images/mei-1x.png',
          tip: [
            '觉者商学课程主任',
            '国家三级心理咨询师',
            '中国，加拿大认证情绪管理师',
            '生涯规划师',
            '英国素质教育发展认证中心学术顾问',
            '多家心理公司及学校心理导师',
            '华东师范大学应用心理学学士',
            '香港中文大学社会服务管理硕士',
          ],
        },
        {
          id: randomId(),
          showAvatar: true,
          chineseName: '李兆辉',
          englishName: 'Joe',
          avatarUrl: 'https://www.careershe.com/images/joe-1x.png',
          tip: [
            '前上市教育机构政策研究主任',
            '前中国邮政集团技术工程师',
            '新精英生涯规划师',
            '10年教育机构从业经验',
            '8年高考志愿规划经验',
            '广东工业大学计算机学士',
          ],
        },
      ],
    }
  },
  methods: {
    changeVisible () {
      this.$emit("changeVisible")
    },
    changeShowData (index) {
      this.list[index].showAvatar = false;
    },
    changeHideData (index) {
      this.list[index].showAvatar = true;
    },
  },
}
</script>

<style scoped lang="less">
.tutor-container {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #F1F5F8;

  .type-wrap {
    display: flex;
    margin-top: 60px;

    .type-item {
      width: 268px;
      height: 350px;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      margin-right: 56px;

      &:hover {
        transform: translateY(-20px);
        box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
      }

      &:last-child {
        margin-right: 0;
      }

      .type-title {
        position: absolute;
        top: -20px;
        left: 0;
        height: 45px;
        line-height: 45px;
        background: #000000;
        display: flex;
        padding: 0 8px;

        .name {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          text-align: center;
        }
      }

      .type-info {
        display: flex;
        flex-direction: column;
        padding: 30px;
        background: rgba(0, 0, 0, 0.6);
        height: 240px;

        .tip-wrap {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 19px;
        }

        .bottom-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 50px;
          line-height: 50px;
          background: linear-gradient(270deg, #00D8FF 0%, #0077FB 100%);
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

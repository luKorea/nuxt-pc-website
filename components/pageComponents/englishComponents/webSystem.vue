<template>
  <div class="gray-wrap">
    <div class="img">
      <img :src="systemInfo.systemImg" alt="">
    </div>
    <div class="desc-wrap">
      <div class="common-title">{{ systemInfo.title }}</div>
      <div class="common-desc" style="width: 588px">{{ systemInfo.desc }}</div>
      <div class="item-wrap">
        <template v-for="item in  systemInfo.systemList">
          <div class="wrap" :key="item.id">
            <div class="img"><img :src="item.icon" alt=""/></div>
            <div class="text-wrap">
              <div class="text">{{ item.name1 }}</div>
              <div class="text">{{ item.name2 }}</div>
            </div>
          </div>
        </template>
      </div>
      <div class="btn-home">
        <div class="btn-down" @click="changeVisible">Free trial</div>
        <div class="btn-more">Learn more</div>
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
        title: 'School career manage platform',
        desc: 'Help schools quickly grasp students\' information, help students know themselves, and promote students\' internal drive to grow better',
        systemList: [
          {
            id: nanoid(8),
            name1: 'Student selection',
            name2: 'and collection',
            icon: IMG_BASE_URL + '/web-img/service/system/nan.png',
          },
          {
            id: nanoid(8),
            name1: 'assessment',
            name2: 'center',
            icon: IMG_BASE_URL + '/web-img/home/ceping.png',
          },
          {
            id: nanoid(8),
            name1: 'Career statistical',
            name2: 'analysis',
            icon: IMG_BASE_URL + '/web-img/tongji.png',
          },
          {
            id: nanoid(8),
            name1: 'Professional',
            name2: 'Encyclopedia',
            icon: IMG_BASE_URL + '/web-img/zhiyebaike.png',
          },
          {
            id: nanoid(8),
            name1: 'Subject selection',
            name2: 'query',
            icon: IMG_BASE_URL + '/web-img/gaokao.png',
          },
          {
            id: nanoid(8),
            name1: 'College',
            name2: 'Library',
            icon: IMG_BASE_URL + '/web-img/yuanxiao.png',
          },
          {
            id: nanoid(8),
            name1: 'Professional',
            name2: 'library',
            icon: IMG_BASE_URL + '/web-img/zhuanye.png',
          },
          {
            id: nanoid(8),
            name1: '...',
            name2: '',
            icon: IMG_BASE_URL + '/web-img/more.png',
          },
        ],
        systemImg: IMG_BASE_URL + '/web-img/home/school.png',
      },
    }
  },
  methods: {
    changeVisible () {
      this.$emit('clickFunction', 'school')
    },
  }
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

        .text-wrap {
          display: flex;
          flex-direction: column;

          .text {
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: #0B173A;
          }
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

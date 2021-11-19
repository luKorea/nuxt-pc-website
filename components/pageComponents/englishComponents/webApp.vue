<template>
  <div>
    <div class="common-title" style="text-align: center">——— Our Key Products ———</div>
    <div class="white-wrap">
      <div class="desc-wrap">
        <div class="common-title">{{ appInfo.title }}</div>
        <div class="common-desc">{{ appInfo.desc }}</div>
        <div class="item-wrap">
          <template v-for="item in  appInfo.appList">
            <div class="wrap" :key="item.id">
              <div class="img"><img :src="item.icon" alt=""/></div>
              <div class="text-wrap">
                <div class="text">{{ item.name1 }}</div>
                <div class="text">{{item.name2}}</div>
              </div>
            </div>
          </template>
        </div>
        <div class="btn-home">
          <div class="btn-down">DownLoad now</div>
          <div class="btn-more">Learn more</div>
        </div>
      </div>
      <div class="img">
        <img :src="appInfo.appImg" alt="">
      </div>
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
        title: 'Careershe—Career planning app',
        desc: 'Let all students find the ideal career!',
        appList: [
          {
            id: nanoid(8),
            name1: 'assessment',
            name2: 'center',
            icon: require('~/static/image/home/icon/ceping.png'),
          },
          {
            id: nanoid(8),
            name1: 'Professional',
            name2: 'Encyclopedia',
            icon: require('~/static/image/home/icon/zhiye.png'),
          },
          {
            id: nanoid(8),
            name1: 'Professional',
            name2: 'interview',
            icon: require('~/static/image/home/icon/zhuanfang.png'),
          },
          {
            id: nanoid(8),
            name1: 'Community',
            name2: 'Q & A',
            icon: require('~/static/image/home/icon/shequ.png'),
          },
          {
            id: nanoid(8),
            name1: 'Voluntary',
            name2: 'filling',
            icon: require('~/static/image/home/icon/zhiyuan.png'),
          },
          {
            id: nanoid(8),
            name1: 'Subject',
            name2: 'selection query',
            icon: require('~/static/image/home/icon/xuanke.png'),
          },
          {
            id: nanoid(8),
            name1: 'Professional',
            name2: 'library',
            icon: require('~/static/image/home/icon/zhuanye.png'),
          },
          {
            id: nanoid(8),
            name1: 'College',
            name2: 'Library',
            icon: require('~/static/image/home/icon/yuanxiao.png'),
          },
        ],
        appImg: require('~/static/image/home/APP.png'),
      },
    }
  },
}
</script>

<style scoped lang="less">
.white-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFFFFF;
  margin: 40px 0;

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
        width: 190px;
        height: 74px;
        background-color: #F1F5F8;
        margin-right: 24px;
        margin-bottom: 24px;
        box-sizing: border-box;
        .img {
          width: 32px;
          height: 32px;
          margin-right: 20px;
          margin-left: 10px;
          img {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }

        .text-wrap {
          display: flex;
          flex-direction: column;
          width: 124px;
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
    width: 476px;
    height: 621px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

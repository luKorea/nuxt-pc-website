<template>
  <div class="white-guahui-wrap">
    <div class="desc-wrap">
      <div class="common-title">{{ serviceInfo.title }}</div>
      <div class="common-desc" style="width: 630px">{{ serviceInfo.desc }}</div>
      <div class="item-wrap">
        <template v-for="item in  serviceInfo.serviceList">
          <div class="wrap" :key="item.id">
            <div class="text">{{ item.name1 }}</div>
            <div class="text">{{ item.name2 }}</div>
          </div>
        </template>
      </div>
      <div class="btn-home">
        <div class="btn-down" @click="clickFunction">
          <span>Appointment</span>
          <span>consulta</span>
        </div>
        <div class="btn-more">Learn more</div>
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
        title: 'Career planning consultation',
        desc: 'Career experts create career development plans 1-on-1 to help you get rid of career difficulties and reshape yourself',
        serviceList: [
          {
            id: nanoid(8),
            name1: 'Job seeking',
            name2: 'consultation',
          },
          {
            id: nanoid(8),
            name1: 'Career',
            name2: 'planning',
          },
          {
            id: nanoid(8),
            name1: 'Private customization',
            name2: 'in the workplace',
          },
          {
            id: nanoid(8),
            name1: 'High school',
            name2: 'volunteer filling',
          },
          {
            id: nanoid(8),
            name1: 'New college entrance',
            name2: 'examination consultation',
          },
          {
            id: nanoid(8),
            name1: 'High school future',
            name2: 'career counseling',
          },
        ],
        serviceImg: IMG_BASE_URL + '/web-img/home/guihua.png',
      },
    }
  },
  methods: {
    clickFunction() {
      this.$emit('clickFunction', 'service')
    }
  }
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
      padding: 24px 20px 0 20px;

      .wrap {
        display: flex;
        flex-direction: column;
        width: 204px;
        margin-bottom: 37px;

        .text {
          font-size: 16px;
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

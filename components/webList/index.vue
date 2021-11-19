<template>
  <div class="common-list-container">
    <div class="common-white">
      <div class="common-title text-center">{{ oneInfo.title }}</div>
      <div class="common-content">
        <div class="img-wrap">
          <img :src="defaultOneImg" alt="">
        </div>
        <div class="content-wrap">
          <template v-for="(item, index) in oneInfo.list">
            <div class="item" :key="item.id" @mousemove="moveItemOne(index, item.imgUrl)">
              <div v-if="currentOneIndex !== index" class="number">{{ index + 1 }}</div>
              <div v-else class="number-wai">
                <div class="number-nei">{{ index + 1 }}</div>
              </div>
              <div class="title" :class="currentOneIndex === index && 'title-active'">{{ item.title }}</div>
              <div class="desc" :class="currentOneIndex === index && 'desc-active'">{{ item.desc }}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="btn-home" @click="clickBtn">
        <div class="btn-more">{{ oneInfo.btnFont }}</div>
      </div>
    </div>
    <div class="common-gray">
      <div class="common-title text-center">{{ twoInfo.title }}</div>
      <div class="common-content">
        <div class="content-wrap">
          <template v-for="(item, index) in twoInfo.list">
            <div class="item" :key="item.id" @mousemove="moveItemTwo(index, item.imgUrl)">
              <div v-if="currentTwoIndex !== index" class="number">{{ index + 1 }}</div>
              <div v-else class="number-wai">
                <div class="number-nei">{{ index + 1 }}</div>
              </div>
              <div class="title" :class="currentTwoIndex === index && 'title-active'">{{ item.title }}</div>
              <div class="desc" :class="currentTwoIndex === index && 'desc-active'">{{ item.desc }}</div>
            </div>
          </template>
        </div>
        <div class="img-wrap">
          <img :src="defaultTwoImg" alt="">
        </div>
      </div>
      <div class="btn-home" @click="clickBtn">
        <div class="btn-more">{{ twoInfo.btnFont }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    oneInfo: {
      type: Object,
      default: () => {},
    },
    twoInfo: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {
      currentOneIndex: 0,
      currentTwoIndex: 0,
      defaultOneImg: '',
      defaultTwoImg: '',
    }
  },
  mounted () {
    this.defaultOneImg = this.oneInfo.list[0].imgUrl
    this.defaultTwoImg = this.twoInfo.list[0].imgUrl
  },
  methods: {
    moveItemOne (index, img) {
      this.currentOneIndex = index;
      this.defaultOneImg = img;
    },
    moveItemTwo (index, img) {
      this.currentTwoIndex = index;
      this.defaultTwoImg = img;
    },
    clickBtn () {
      this.$emit('clickFunction')
    }
  },
}
</script>

<style scoped lang="less">
.common-list-container {
  .common-white, .common-gray {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 80px 0;
  }

  .common-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 40px 0;
    width: 70%;

    .img-wrap {
      width: 600px;
      height: 343px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content-wrap {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        align-items: center;
        margin-bottom: 28px;
        cursor: pointer;

        &:last-child {
          margin-bottom: 0
        }

        .number {
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: #CCE5FE;
          font-size: 30px;
          font-family: MicrosoftYaHeiSemibold;
          color: #007EFB;
          margin-right: 16px;
        }

        .number-wai {
          width: 40px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #CCE5FE;
          font-size: 30px;
          font-family: MicrosoftYaHeiSemibold;
          margin-right: 16px;
          text-align: center;
          box-sizing: border-box;

          .number-nei {
            color: #FFFFFF;
            width: 30px;
            height: 30px;
            margin: 4px;
            box-sizing: border-box;
            line-height: 30px;
            text-align: center;
            background-color: #007EFB;
          }
        }

        .title {
          font-size: 24px;
          font-family: MicrosoftYaHeiSemibold;
          color: #979BA6;
          line-height: 32px;
          margin-right: 20px;
        }

        .title-active {
          color: #0B173A;
        }

        .desc {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #979BA6;
          line-height: 19px;
        }

        .desc-active {
          color: #0B173A;
        }
      }
    }
  }

  .common-white {
    background-color: #FFFFFF;
  }

  .common-gray {
    background-color: #F1F5F8;
  }
}
</style>

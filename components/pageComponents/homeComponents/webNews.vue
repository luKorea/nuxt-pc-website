<template>
  <div class="news-container">
    <div class="news-title">近期动态</div>

    <div class="dynamic-list">
      <template v-for="item in list">
        <div class="list-item" :title="item.title" :key="item._id"
             @click="goDetail(item._id, item.type, item.url)">
          <div class="img"><img :src="item.image" alt=""></div>
          <div class="info">
            <span class="title text-overflow">{{ item.title }}</span>
            <span class="desc">{{ item.description }}</span>
            <div class="bottom-tip">
              <span class="time">{{ item._created_at }}</span>
              <span class="more">了解更多 <i class="el-icon-arrow-right"></i></span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: "webNews",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goDetail (id, type, url) {
      this.$emit('goDetail', id, type, url)
    }

  }
}
</script>

<style scoped lang="less">
.news-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 786px;
  background-image: url("https://www.careershe.com/images/web-img/home/home-dynamic-banner.png");
  .news-title {
    font-size: 36px;
    font-family: MicrosoftYaHeiSemibold;
    color: #FFFFFF;
    line-height: 48px;
    text-align: center;
  }
  .dynamic-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-top: 80px;
    width: 100%;
    .list-item {
      display: flex;
      flex-direction: column;
      width: 376px;
      margin-right: 45px;
      margin-bottom: 45px;
      cursor: pointer;
      border-radius: 8px;
      //&:hover {
      //  transform:translateY(-20px);
      //  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
      //}
      .img {
        width: 376px;
        height: 251px;
        margin-bottom: 20px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        padding: 10px;
        .title {
          font-size: 20px;
          font-family: MicrosoftYaHeiHeavy;
          color: #FFFFFF;
          line-height: 24px;
          margin-bottom: 15px;
        }
        .desc {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 24px;
          height: 60px;
          margin-bottom: 30px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .bottom-tip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .time {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: #979BA6;
            line-height: 24px;
          }
          .more {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: #FFFFFF;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>

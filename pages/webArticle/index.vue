<template>
  <div class="article-container">
    <div style="position: relative">
      <website-header>
        <template #imgWrap>
          <div class="content">
            <div class="img-wrap">
              <img :src="bannerImg" alt="">
            </div>
            <div class="service-wrap">
              <div class="title-wrap">
                <div class="title">千职鹤</div>
                <div class="title">最新资讯抢先看</div>
              </div>
              <div class="qrcode">
                <div class="img"><img :src="qrcode" alt=""/></div>
                <div class="tip">关注【千职鹤】公众号了解更多动态</div>
              </div>
            </div>
          </div>
        </template>
      </website-header>
    </div>
    <div class="item-wrap">
      <template v-for="(item, index) in itemList">
        <span :key="item.id" class="item"
              @click="changeClick(index, item.id)"
              :class="currentIndex === index && 'active'">{{ item.name }}</span>
      </template>
    </div>
    <div class="list-wrap">
      <template v-for="item in list">
        <div class="list-item" :key="item.id">
          <div class="item-img"><img :src="item.img" alt=""></div>
          <div class="title-wrap">
            <div class="title">{{ item.title }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
      </template>
    </div>

    <web-pagination :total="100"></web-pagination>
  </div>
</template>

<script>
import websiteHeader from '~/components/webHeader'
import webPagination from '~/components/webPagination/index';
import { nanoid } from 'nanoid'

export default {
  name: "index",
  components: {
    websiteHeader,
    webPagination
  },
  data () {
    return {
      currentIndex: 0,
      bannerImg: require('static/image/article/article-banner.png'),
      qrcode: require('static/image/qrcode.png'),
      itemList: [
        { id: nanoid(8), name: '全部债权' },
        { id: nanoid(8), name: '职业初了解' },
        { id: nanoid(8), name: '走进大学' },
        { id: nanoid(8), name: '新高考选科' },
        { id: nanoid(8), name: '双一流大学' },
        { id: nanoid(8), name: '高考新鲜事' },
        { id: nanoid(8), name: '公司活动与合作' },
        { id: nanoid(8), name: '职业再判断' },
        { id: nanoid(8), name: '真人采访' },
        { id: nanoid(8), name: '新闻时事' },
        { id: nanoid(8), name: '其他' },
      ],
      list: [
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
        {
          id: nanoid(8),
          title: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          time: new Date().toLocaleDateString(),
          img: require('static/image/article/test.png'),
        },
      ],
      params: {
        pageSize: 10,
        pageNumber: 0,
      },
    }
  },
  methods: {
    changeClick (index, id) {
      this.currentIndex = index;
    },
  },
}
</script>

<style scoped lang="less">
.article-container {
  .content {
    .img-wrap {
      width: 100%;
      height: 640px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .service-wrap {
      position: absolute;
      left: 340px;
      top: 180px;
      display: flex;
      justify-content: space-between;

      .title-wrap {
        display: flex;
        flex-direction: column;
        width: 689px;
        font-size: 48px;
        font-family: MicrosoftYaHeiSemibold;
        color: #FFFFFF;
        line-height: 80px;
      }

      .qrcode {
        display: flex;
        flex-direction: column;
        align-items: center;

        .img {
          width: 240px;
          height: 240px;
          margin-bottom: 20px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .tip {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 21px;
        }
      }
    }
  }

  .item-wrap {
    position: absolute;
    top: 644px;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 1240px;
    box-sizing: border-box;
    padding: 32px 40px 0 40px;
    background: #FFFFFF;
    box-shadow: 0px 6px 40px 0px rgba(18, 38, 65, 0.1);

    .item {
      cursor: pointer;
      margin-right: 48px;
      margin-bottom: 40px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #979BA6;
      line-height: 21px;
    }

    .active {
      color: #0B173A;
    }
  }

  .list-wrap {
    width: 1240px;
    padding-top: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    flex-wrap: wrap;
    .list-item {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      cursor: pointer;
      .item-img {
        width: 200px;
        height: 112px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
          vertical-align: center;
        }
      }
      .title-wrap {
        display: flex;
        flex-direction: column;
        width: 334px;
        .title {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #0B173A;
          line-height: 21px;
          margin-bottom: 16px;
        }
        .time {
          font-size: 13px;
          font-family: MicrosoftYaHei;
          color: #989CA7;
          line-height: 17px;
        }
      }
    }
  }

}
</style>

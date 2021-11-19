<template>
  <div class="article-container">
    <div style="position: relative">
      <website-header>
        <template #imgWrap>
          <div class="content">
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
        <span :key="index" class="item"
              @click="changeClick(index, item.category)"
              :class="currentIndex === index && 'active'">{{ item.category }}</span>
      </template>
    </div>
    <div class="list-wrap">
      <template v-for="item in list">
        <div class="list-item" :key="item._id" @click="goDetail(item.article)" :title="item.full_title">
          <div class="item-img"><img :src="item.image" alt=""></div>
          <div class="title-wrap">
            <div class="title">{{ item.full_title }}</div>
            <div class="time">{{ item._created_at }}</div>
          </div>
        </div>
      </template>
    </div>

    <web-pagination
        :page="params.pageNumber + 1"
        :total="params.total"
        @handleCurrentChange="handleCurrentChange"
        @handleSizeChange="handleSizeChange"
    ></web-pagination>
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
      qrcode: require('~/static/image/common/qrcode.png'),
      itemList: [],
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
        category: '',
        total: 0
      },
    }
  },
  mounted () {
    this.getArticleItem().then(res => {
      this.getData(this.params)
    })
  },
  methods: {
    async getData(params) {
      let url = `/article/getArticleDetailPage?pageSize=${params.pageSize}&pageNumber=${params.pageNumber}&category=${params.category}`
      let response = await this.$axios.get(url);
      if (response.errorCode === 200) {
        this.list = response.data.result;
        this.params.total = response.data.pageResult.total;
      }
    },
    changeClick (index, category) {
      this.currentIndex = index;
      this.params.category = category;
      this.resetParams();
      this.getData(this.params);
    },
    getArticleItem() {
      return new Promise((resolve, reject) => {
        this.$axios.get('/article/getArticleMenu')
        .then(res => {
          if (res.errorCode === 200) {
            this.itemList = res.data;
            this.params.category = this.itemList[this.currentIndex].category;
            resolve();
          } else {
            reject(res.errMsg)
          }
        })
      })
    },
    goDetail(url) {
      window.open(url, '_blank')
    },
    resetParams() {
      this.params.pageSize = 10;
      this.params.pageNumber = 0;
    },
    handleSizeChange(val) {
      this.params.pageSize = val;
      this.getData(this.params);
    },
    handleCurrentChange(val) {
      this.params.pageNumber = val;
      this.getData(this.params);
    },

  },
}
</script>

<style scoped lang="less">
.article-container {
  .content {
    background-image: url("static/image/article/article-banner.png");
    background-size: 100% 100%;
    width: 100%;
    height: 640px;
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

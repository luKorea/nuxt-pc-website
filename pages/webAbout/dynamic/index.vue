<template>
  <div class="dynamic-container">
    <div style="position: relative">
      <website-header>
        <template #imgWrap>
          <div class="content">
            <div class="service-wrap">
              <div class="info-wrap">
                <div class="title-wrap">
                  <div class="title">企业动态</div>
                  <div class="title">NEWS</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </website-header>
    </div>

    <div class="dynamic-list">
      <template v-for="item in list">
        <div class="list-item" :title="item.title" @click="goDetail(item._id)">
          <div class="img"><img :src="item.image" alt=""></div>
          <div class="info">
            <span class="title text-overflow">{{ item.title }}</span>
            <span class="desc">{{ item.description }}</span>
            <span class="time">{{ item._updated_at }}</span>
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
import webPagination from '~/components/webPagination';
import { nanoid } from 'nanoid'
import { errorTip } from '~/utils'

export default {
  head () {
    return {
      title: '企业动态',
    }
  },
  name: "contact",
  components: {
    websiteHeader,
    webPagination,
  },
  data () {
    return {}
  },
  async asyncData ({ query, app }) {
    let list = [],
        params = {
          pageSize: +query.pageSize,
          pageNumber: +query.pageNumber,
          total: +query.total,
        },
        url = `/dynamicConsulting/getDynamicConsultingPage?pageSize=${params.pageSize}&pageNumber=${params.pageNumber}`
    let { result, pageResult } = await app.$axios.$get(url);
    params.total = pageResult.total || 0;
    list = result !== undefined ? result : [];
    return {
      list: result,
      params: params,
    }
  },
  watchQuery: true,
  methods: {
    handleSizeChange (val) {
      this.params.pageSize = val;
      this.queryData(this.params);
    },
    handleCurrentChange (val) {
      this.params.pageNumber = val;
      this.queryData(this.params);
    },
    queryData (params) {
      this.$router.push({
        path: '/webAbout/dynamic',
        query: {
          pageSize: +params.pageSize,
          pageNumber: +params.pageNumber,
          total: +params.total,
        },
      })
    },
    goDetail (_id) {
      this.$router.push({
        path: `/webAbout/dynamic/${_id}`,
      })
    },
  },
}
</script>

<style scoped lang="less">
.dynamic-container {
  background-color: #F1F5F8;

  .content {
    background-image: url("https://www.careershe.com/images/web-img/about/dynamic-banner.png");
    background-size: 100% 100%;
    width: 100%;
    height: 640px;
    position: relative;

    .service-wrap {
      position: absolute;
      left: 340px;
      top: 180px;
      display: flex;
      justify-content: space-between;

      .info-wrap {
        display: flex;
        flex-direction: column;

        .title-wrap {
          display: flex;
          flex-direction: column;
          width: 689px;
          font-size: 48px;
          font-family: MicrosoftYaHeiSemibold;
          color: #FFFFFF;
          line-height: 80px;
          margin-bottom: 40px;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          line-height: 30px;
        }
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        //justify-content: center;
        align-items: center;
        padding: 20px;
        width: 400px;
        box-sizing: border-box;
        height: 400px;
        background: #FFFFFF;
        box-shadow: 0px 6px 40px 0px rgba(18, 38, 65, 0.1);

        .title {
          font-size: 20px;
          font-family: MicrosoftYaHeiSemibold;
          color: #0B173A;
          line-height: 32px;
          margin-bottom: 40px;
        }

        .el-input {
          margin-bottom: 22px;
        }
      }
    }
  }

  .dynamic-list {
    display: flex;
    //justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-top: 80px;
    width: 67%;

    .list-item {
      display: flex;
      flex-direction: column;
      width: 376px;
      background-color: #FFFFFF;
      margin-right: 45px;
      margin-bottom: 45px;
      cursor: pointer;
      border-radius: 8px;

      &:hover {
        transform: translateY(-20px);
        box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
      }

      .img {
        width: 376px;
        height: 251px;

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
          font-family: MicrosoftYaHeiSemibold;
          color: #0B173A;
          line-height: 24px;
          margin-bottom: 15px;
        }

        .desc {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #0B173A;
          line-height: 24px;
          height: 60px;
          //margin-bottom: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .time {
          font-size: 12px;
          font-family: MicrosoftYaHei;
          color: #979BA6;
          line-height: 24px;
        }
      }
    }
  }
}
</style>

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
        <div class="list-item" :title="item.title">
          <div class="img"><img :src="item.img" alt=""></div>
          <div class="info">
            <span class="title">{{ item.title }}</span>
            <span class="desc">{{ item.desc }}</span>
            <span class="time">{{ item.time }}</span>
          </div>
        </div>
      </template>
    </div>
    <web-pagination :total="100"></web-pagination>
  </div>
</template>

<script>
import websiteHeader from '~/components/webHeader'
import webPagination from '~/components/webPagination';
import { nanoid } from 'nanoid'

export default {
  name: "contact",
  components: {
    websiteHeader,
    webPagination,
  },
  data () {
    return {
      bannerImg: require('~/static/image/about/dynamic-banner.png'),
      list: [
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
        {
          id: nanoid(8),
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639797566&t=32354825476c494fca61e653c70a6d30',
          title: '"千职鹤"公测版正式上线 助力学生进行职业规划',
          desc: '近日，为了解决广大学生的职业规划难题，恒德瑞科技（深圳）有限公司（以下简称“恒德瑞科技”）致力为中国学生开发一套适合他们的职业规划工具，从2018年底经过大半年密锣紧鼓的开发，一款名为“千职鹤”的手机APP公测版（ios版及安卓版）正式发布，目的是给中国学生的职业规划提供有效的指导。',
          time: new Date().toLocaleDateString(),
        },
      ],
    }
  },
}
</script>

<style scoped lang="less">
.dynamic-container {
  background-color: #F1F5F8;
  .content {
    background-image: url("static/image/about/dynamic-banner.png");
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
      background-color: #FFFFFF;
      margin-right: 45px;
      margin-bottom: 45px;
      cursor: pointer;
      border-radius: 8px;
      &:hover {
        transform:translateY(-20px);
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
          margin-bottom: 8px;
          text-overflow: -o-ellipsis-lastline;
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

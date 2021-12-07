<template>
  <div class="header-container">
    <!--第一种导航栏-->
    <div class="nav-container">
      <!--图片区域-->
      <slot name="imgWrap"></slot>
      <div class="nav-wrap" id="nav">
        <!-- LOGO 插槽 -->
        <slot name="logo">
          <div class="logo" @click="goToHome">
            <img :src="defaultLogo" alt="千职鹤">
          </div>
        </slot>
        <!--link固定链接-->
        <template>
          <el-menu :default-active="activeIndex"
                   router
                   mode="horizontal" @select="handleSelect">
            <template v-for="value in linkList">
              <el-submenu v-if="value.children && value.children.length > 0" :index="value.href" :key="value.id">
                <template slot="title">{{ value.name }}</template>
                <template v-for="item in value.children">
                  <el-menu-item :index="item.href" :key="item.id">
                    <span slot="title" :index="item.href">{{ item.name }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item v-else :index="value.href" :key="value.id">
                <span slot="title" :index="value.href">{{ value.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </template>
      </div>
      <!--轮播图或者图片插槽-->
    </div>
    <div class="fixed-nav" v-if="showFixedNavBar">
      <div class="nav-wrap">
        <!-- LOGO 插槽 -->
        <slot name="logo">
          <div class="logo" @click="goToHome">
            <img :src="colorLogo" alt="千职鹤">
          </div>
        </slot>
        <!--link固定链接-->
        <template>
          <el-menu :default-active="activeIndex"
                   router
                   mode="horizontal" @select="handleSelect">
            <template v-for="value in linkList">
              <el-submenu v-if="value.children && value.children.length > 0" :index="value.href" :key="value.id">
                <template slot="title">{{ value.name }}</template>
                <template v-for="item in value.children">
                  <el-menu-item :index="item.href" :key="item.id">
                    <span slot="title" :index="item.href">{{ item.name }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item v-else :index="value.href" :key="value.id">
                <span slot="title" :index="value.href">{{ value.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import webMenuItem from '~/components/webMenuItem'
import { IMG_BASE_URL } from '~/utils'
import routerLink from '~/utils/routerLink'

export default {
  name: "webHeader",
  components: {
    webMenuItem,
  },
  data () {
    return {
      showFixedNavBar: false,
      activeIndex: '/',
      article: '/webArticle?pageSize=10&pageNumber=0&index=0&category=""',
      dynamic: '/webAbout/dynamic?pageNumber=0&pageSize=9',
      defaultLogo: IMG_BASE_URL + '/web-img/common/logo.png',
      colorLogo: IMG_BASE_URL + '/web-img/common/color-logo.png',
      linkList: routerLink,
    }
  },
  created () {
    this.activeIndex = this.$route.path;
  },
  methods: {
    goToHome () {
      this.$router.push({
        path: '/',
      })
    },
    handleSelect (key, keyPath) {
      this.activeIndex = key;
    },
    goPage (href) {
      this.$router.push({
        path: href,
      })
    },
    watchScroll () {
      // 滚动的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // 容器的高度
      let offsetTop = document.querySelector("#nav").offsetHeight;
      //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
      if (this.$route.params.id) {
        this.showFixedNavBar = true;
      } else {
        this.showFixedNavBar = scrollTop > offsetTop;
      }
    },
  },
  mounted () {
    if (this.$route.params.id) {
      this.showFixedNavBar = true;
    }
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },

  destroyed () {
    // 移除事件监听
    window.removeEventListener("scroll", this.watchScroll);
  },
}
</script>

<style>

.el-menu.el-menu--horizontal {
  border-bottom: none;
  padding-right: 120px;
  background-color: transparent;
}

.nav-container .el-menu--horizontal > .el-menu-item {
  color: #FFFFFF !important;
}

.nav-container .el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #FFFFFF;
}

.nav-container .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #009EFC;
}

.nav-container .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.nav-container .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.nav-container .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
  color: #FFFFFF;
}

.nav-container .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  color: #FFFFFF;
}

.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  color: #007EFB;
}

.nav-container .el-menu--horizontal > .el-menu-item.is-active {
  color: #FFFFFF;
}

.nav-container .el-menu--horizontal > .el-submenu .el-submenu__title i {
  display: none;
}

.el-menu--collapse .el-submenu__title span{
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse .el-submenu__icon-arrow{
  display: none;
}

</style>

<style lang="less">
.header-container {
  .nav-container {
    .nav-wrap {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 108px;
      border-bottom: solid 2px rgba(248, 244, 244, 0.2);

      .logo {
        width: 120px;
        height: 48px;
        padding-left: 120px;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .nav-link {
        padding-right: 120px;
        background-color: transparent;
        border-bottom: none;

        .link {
          font-size: 16px;
          font-family: MicrosoftYaHeiSemibold;
          color: #FFFFFF;
          line-height: 21px;
          cursor: pointer;
          padding-right: 56px;
        }

        :last-child {
          padding-right: 0;
        }
      }
    }
  }
}
</style>

<style lang="less">
.fixed-nav {
  position: fixed;
  width: 100%;
  height: 108px;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
  z-index: 99;

  .nav-wrap {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 108px;
    border-bottom: solid 2px rgba(248, 244, 244, 0.2);

    .logo {
      width: 120px;
      height: 48px;
      padding-left: 120px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .nav-link {
      padding-right: 120px;
      background-color: transparent;
      border-bottom: none;

      .link {
        font-size: 16px;
        font-family: MicrosoftYaHeiSemibold;
        color: #0B173A;
        line-height: 21px;
        cursor: pointer;
        padding-right: 56px;
      }

      :last-child {
        padding-right: 0;
      }
    }
  }
}
</style>

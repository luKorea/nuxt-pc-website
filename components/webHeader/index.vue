<template>
  <div class="header-container">
    <!--第一种导航栏-->
    <div class="nav-container">
      <!--图片区域-->
      <slot name="imgWrap"></slot>
      <div class="nav-wrap">
        <!-- LOGO 插槽 -->
        <slot name="logo">
          <div class="logo">
            <img :src="defaultLogo" alt="">
          </div>
        </slot>
        <!--link固定链接-->
        <el-menu :default-active="activeIndex"
                 router
                 class="nav-link"
                 mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">产品与服务</template>
            <el-menu-item index="/webService/careersheApp">千职鹤APP</el-menu-item>
            <el-menu-item index="/webService/schoolSystem">校园生涯平台</el-menu-item>
            <el-menu-item index="/webService/consultingPlanning">生涯咨询规划</el-menu-item>
          </el-submenu>
          <el-menu-item index="/webArticle">生涯资讯</el-menu-item>
          <el-submenu index="3">
            <template slot="title">关于我们</template>
            <el-menu-item index="2-1">企业简介</el-menu-item>
            <el-menu-item index="/webAbout/dynamic">企业动态</el-menu-item>
            <el-menu-item index="/webAbout/joinUs">加入我们</el-menu-item>
            <el-menu-item index="/webAbout/contact">联系我们</el-menu-item>
          </el-submenu>
          <el-menu-item index="/webDownload">下载APP</el-menu-item>
          <el-menu-item index="/webEnglish">English</el-menu-item>
        </el-menu>
      </div>
      <!--轮播图或者图片插槽-->
    </div>
    <!--第二种导航-->
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: "webHeader",
  data () {
    return {
      activeIndex: '/',
      defaultLogo: require('~/static/image/common/logo.png'),
      link: [
        {
          id: nanoid(),
          href: '/',
          name: '首页',
        },
        {
          id: nanoid(),
          href: '/webService',
          name: '产品与服务',
          children: [],
        },
        {
          id: nanoid(),
          href: '/webArticle',
          name: '文章资讯',
          children: [],
        },
        {
          id: nanoid(),
          href: '',
          name: '关于我们',
        },
        {
          id: nanoid(),
          href: '/webDownload',
          name: '下载APP',
        },
        {
          id: nanoid(),
          href: '/webEnglish',
          name: 'English',
        },
      ],
    }
  },
  created () {
    this.activeIndex = this.$route.path;
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key;
    },
    goPage (href) {
      this.$router.push({
        path: href,
      })
    },
  },
}
</script>

<style>

.el-menu--horizontal > .el-menu-item {
  color: #FFFFFF !important;
}

.el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #FFFFFF;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #009EFC;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
  color: #FFFFFF;
}

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  color: #FFFFFF;
}

.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  color: #007EFB;
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: #FFFFFF;
}
</style>

<style scoped lang="less">
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
      border-bottom:solid 2px rgba(248, 244, 244, 0.2);
      .logo {
        width: 120px;
        height: 48px;
        padding-left: 120px;

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

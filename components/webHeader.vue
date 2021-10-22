<template>
  <div>
    <template>
      <nuxt-link v-for="item in link" :key="item.id" :to="item.href" style="padding-right: 10px">{{ item.name }}</nuxt-link>
    </template>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: "webHeader",
  data () {
    return {
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
          href: '/webAbout',
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
}
</script>

<style scoped>

</style>

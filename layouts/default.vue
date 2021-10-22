<template>
  <div class="website-container">
    <website-header></website-header>
    <div class="content">
      <nuxt/>
    </div>
    <website-footer></website-footer>
  </div>
</template>

<script>
import websiteHeader from '~/components/webHeader'
import websiteFooter from '~/components/webFooter'

export default {
  name: "default",
  components: {
    websiteHeader,
    websiteFooter,
  },
}
</script>

<style scoped lang="less">
.website-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }
}
</style>

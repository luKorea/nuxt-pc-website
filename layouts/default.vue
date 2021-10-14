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
import websiteHeader from '~/layouts/webHeader'
import websiteFooter from '~/layouts/webFooter'

export default {
  name: "default",
  components: {
    websiteHeader,
    websiteFooter,
  },
}
</script>

<style scoped>
.website-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.website-container .content {
  flex: 1;
}
</style>

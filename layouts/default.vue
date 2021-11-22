<template>
  <div class="website-container">
    <nuxt/>
    <website-footer></website-footer>
  </div>
</template>

<script>
import websiteFooter from '~/components/webFooter'

export default {
  name: "default",
  components: {
    websiteFooter,
  },

}
</script>

<style scoped lang="less">
.website-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

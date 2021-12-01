<template>
  <div class="website-container">
    <div class="selection">
      <nuxt/>
    </div>
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

<style lang="less">
.website-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .selection {
    flex: 1;
    width: 100%;
    //overflow-y: scroll;
  }
}
</style>

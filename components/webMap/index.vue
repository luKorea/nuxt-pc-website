<template>
  <div
      class="map"
      id="map-container"
      :style="{height: mapHeight, width: mapWidth}"
  />
</template>

<script>
export default {
  name: "index",
  props: {
    mapHeight: {
      type: String,
      default: '250px',
    },
    mapWidth: {
      type: String,
      default: '520px',
    },
  },
  mounted () {
    this.createMap();
  },
  methods: {
    createMap () {
      const map = new window.AMap.Map('map-container', {
        resizeEnable: true,
        zoom: 100,
        center: [113.277056, 23.088307],
      });
    },
  },
}
</script>

<style scoped lang="less">
</style>

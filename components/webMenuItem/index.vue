<template>
  <div>
    <template v-for="value in list">
      <el-submenu v-if="value.children && value.children.length > 0" :index="value.href" :key="value.id">
        <template slot="title">{{ value.name }}</template>
        <web-menu-item :list="value.children"/>
      </el-submenu>
      <el-menu-item v-else :index="value.href" :key="value.id">
        <span slot="title" :index="value.href">{{ value.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "webMenuItem",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  mounted () {
    this.list.forEach(item => {
      console.log(item)
    })
  },
}
</script>

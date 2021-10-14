<template>
  <div>
    这是首页
  </div>
</template>

<script>
export default {
  mounted () {
    localStorage.setItem('key', '111');
  }
}
</script>

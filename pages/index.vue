<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <div class="banner">
      HOME PAGE
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  mounted() {
    window.scrollTo(0,0);
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
}
.dark-theme {
  background:#212121;
  color:#dcdcdc;
}
.light-theme {
  background:#fcfcfc;
  color:#606060;
}
</style>

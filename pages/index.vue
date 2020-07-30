<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <Terminal :dark="dark"/>
  </div>
</template>

<script>
import Terminal from '../components/terminal'
export default {
  props: {
    dark: Boolean
  },
  components: {
    Terminal
  },
  mounted() {
    window.scrollTo(0,0);
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 180px);
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

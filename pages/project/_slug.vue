<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  async asyncData ({ $content, params }) {
    const data = await $content('project', params.slug).fetch()
    return { data }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
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

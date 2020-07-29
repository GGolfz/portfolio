<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
      Show Case Page waiting for idea
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  components: {
  },
  mounted() {
    window.scrollTo(0,0);
  },
  async asyncData ({ $content, params }) {
    const data = await $content('showcase', params.slug).fetch()
    const [prev, next] = await $content("showcase")
      .only(["title", "slug","blogimg"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return { data, prev, next}
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

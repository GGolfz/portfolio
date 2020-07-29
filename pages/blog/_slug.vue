<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <BlogDetail :data="data" :dark="dark" :prev="prev" :next="next" />
  </div>
</template>

<script>
import BlogDetail from '../../components/blogdetail'
export default {
  props: {
    dark: Boolean
  },
  components: {
    BlogDetail
  },
  mounted() {
    window.scrollTo(0,0);
  },
  async asyncData ({ $content, params }) {
    const data = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content("blog")
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

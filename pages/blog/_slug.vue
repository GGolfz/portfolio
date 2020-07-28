<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <BlogDetail :data="data" :dark="dark"/>
  </div>
</template>

<script>
import BlogDetail from '../../components/blogdetail'
import markdown from 'remark-attr'
export default {
  props: {
    dark: Boolean
  },
  components: {
    BlogDetail
  },
  async asyncData ({ $content, params }) {
    const data = await $content('blog', params.slug).fetch()
    return { data }
  },
  
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

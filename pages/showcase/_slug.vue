<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <ShowcaseDetail :data="data" :dark="dark" :prev="prev" :next="next" />
  </div>
</template>

<script>
import ShowcaseDetail from '../../components/showcasedetail'
export default {
  props: {
    dark: Boolean
  },
  components: {
    ShowcaseDetail
  },
  mounted() {
    window.scrollTo(0,0);
  },
  head() {
    return {
      title: this.data.title || NUXT_CONFIG.head.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.data.description ||
            this.data.title + " - All about @GGolfz",
        },
        {
          property: 'og:image',
          content: `https://ggolfz.github.io/portfolio/${this.data.img}`
        }
      ],
    };
  },
  async asyncData ({ $content, params }) {
    const data = await $content('showcase', params.slug).fetch()
    const [prev, next] = await $content("showcase").where({ tag: data.tag })
      .only(["title", "slug","img"])
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch();
    return { data, prev, next}
  },
  
}
</script>

<style>
.container {
  padding: 3% 5%;
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

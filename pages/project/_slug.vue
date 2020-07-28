<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <div>
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
      <nuxt-content :document="data" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  async asyncData ({ $content, params }) {
    const data = await $content('blog', params.slug).fetch()

    return { data }
  }
}
</script>

<style>
</style>

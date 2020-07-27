<template>
  <article><h1>{{ data.title }}</h1>
        <p>{{ data.description }}</p>
    <nuxt-content :document="data" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const data = await $content('blog', params.slug).fetch()

    return { data }
  }
}
</script>

<style>

</style>
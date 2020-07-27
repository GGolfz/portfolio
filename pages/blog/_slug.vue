<template>
  <div class="container">
    <h1>{{ data.title }}</h1>
    <p>{{ data.description }}</p>
    <nuxt-content :document="data" />
  </div>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
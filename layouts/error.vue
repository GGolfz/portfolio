<template>
  <div class="container error-container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <div style="margin-top: 2rem">
      <NuxtLink to="/">Back to home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
}
</script>
<style>
.error-container {
  flex-flow: column;
}
</style>

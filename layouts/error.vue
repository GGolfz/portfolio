<template>
  <div :class="'container error-container ' + ($store.state.dark?'dark-theme':'light-theme')">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <div style="margin-top: 2rem">
      <NuxtLink to="/" class="error-link">Back to home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
  mounted() {
      console.log(this.dark);
  } 
}
</script>
<style>
.error-container {
  flex-flow: column;
}
.error-link {
    text-decoration: underline;
}
.dark-theme .error-link {
    color: #bdbdbd;
}
.light-theme .error-link{
    color: #4c4c4c;
}
</style>

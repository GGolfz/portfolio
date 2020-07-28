<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <div>
      Blog Page
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  }
}
</script>

<style>
</style>

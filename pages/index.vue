<template>
  <div class="container">
    <div>
      Hello GGolfz
      {{dark}}
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      dark: true
    }
  },
  methods: {
    change(){
      this.dark= !this.dark
    }
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

<template>
  <div :class="$store.state.dark?'container dark-theme':'container light-theme'">
    <Terminal :dark="$store.state.dark"/>
  </div>
</template>

<script>
import Terminal from '../components/home/terminal'
export default {
  components: {
    Terminal
  },
  mounted() {
    window.scrollTo(0,0);
  },
  head() {
    return {
      title: "GGolfz",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GGolfz"
        },
      ],
    };
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

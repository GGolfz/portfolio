<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <div>
      <Contact :dark="dark"/>
    </div>
  </div>
</template>

<script>
import Contact from '../../components/Contact'
export default {
  props: {
    dark: Boolean
  },
  components: {
    Contact
  },
  mounted() {
    window.scrollTo(0,0);
  },
  head() {
    return {
      title: "GGolfz's Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GGolfz's Contact"
        },
      ],
    };
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 3% 5%;
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

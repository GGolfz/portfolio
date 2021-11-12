<template>
    <el-row :class="$store.state.dark?'container dark-theme':'container light-theme'">
      <el-col :span="24">
        <a href="https://resume.ggolfz.me">Interactive Resume</a>
      </el-col>
        <el-col :span="24">
        <iframe src="/resume.pdf" frameborder="0" 
            style="width:100%;height:100%;"/>
        </el-col>
    </el-row>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0,0);
  },
  head() {
    return {
      title: "GGolfz's Resume",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GGolfz's Resume"
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

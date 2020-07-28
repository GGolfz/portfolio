<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <el-row>
      <el-col :span="24">
        <h1 :class="dark?'dark-blog-header blog-header':'light-blog-header blog-header'">Blog</h1>
      </el-col>
      <el-col :md="8" :xs="24" :sm="12" v-for="(d,index) in data" :key="index" >
        <Box :data="d" :dark="dark" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Box from '../../components/blogbox'
export default {
  components: {
    Box
  },
  props: {
    dark: Boolean
  },
  async asyncData ({ $content, params }) {
    const data = await $content('blog').sortBy('createdAt','desc').fetch()
    return { data }
  },
  methods: {
    print() {
      console.log("PRINT")
    }
  }
}
</script>

<style>
.blog-header {
  font-size: 3em !important;
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
}
.dark-blog-header.blog-header {
  color: #f8f8f8;
}
.light-blog-header.blog-header {
  color: #2f2f2F;
}
.container {
  margin: 0 auto;
  padding: 3% 5%;
  min-height: 100vh;
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

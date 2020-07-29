<template>
  <div :class="dark?'container dark-theme':'container light-theme'">
    <el-row>
      <el-col :span="24">
        <h1 :class="dark?'dark-blog-header blog-header':'light-blog-header blog-header'">Blog</h1>
      </el-col>
      <el-col :span="24">
        <el-input v-model="search" />
      </el-col>
      <el-col :md="8" :xs="24" :sm="12" v-for="(d,index) in show" :key="index" >
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
  data() {
    return {
      search: '',
      show: []
    }
  },
  props: {
    dark: Boolean
  },
  mounted() {
    window.scrollTo(0,0);
    this.show = this.data
  },
  async asyncData ({ $content, params }) {
    const data = await $content('blog').sortBy('createdAt','desc').fetch()
    return { data }
  },
  watch: {
    search(val) {
      if(val == ''){
        this.show = this.data
      } else{
        this.show = this.data.filter(a=> {return new RegExp(val.toLowerCase()).test(a.title.substring(0,val.length).toLowerCase())})
        if(this.show.length == 0){
          this.show = this.data
          this.$message({
            type: 'error',
            showClose: true,
            message:'Not Found',
            duration: '1000'
            })
        }
      }
      
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
  min-height: calc(100vh - 80px);
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

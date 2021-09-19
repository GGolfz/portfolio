<template>
  <div :class="$store.state.dark ? 'container dark-theme' : 'container light-theme'">
    <el-row>
      <el-col :span="24">
        <h1
          :class="
            $store.state.dark
              ? 'dark-blog-header blog-header'
              : 'light-blog-header blog-header'
          "
        >
          Blog
        </h1>
      </el-col>
      <el-col :span="24">
        <el-row
          style="display: flex; justify-content: center; padding: 2% 6% 1% 6%;"
        >
          <el-col :xs="24" :md="8" :sm="12">
            <el-input v-model="search" placeholder="Search by title" />
          </el-col>
        </el-row>
        <el-row
          v-if="message != ''"
          style="display: flex; justify-content: center; padding: 0% 6%;"
        >
          <el-col :xs="24" :md="8" :sm="12">
            {{ message }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="tag-list">
            <span
              @click="searchtag(tag)"
              class="tag-list-item"
              v-for="(tag, index) in tags"
              :key="index"
              >{{ tag }}</span
            >
          </el-col>
        </el-row>
      </el-col>
      <el-col class="blog-list">
      <template v-for="(boxdata, index) in show" >
        <Box :data="boxdata" :key="index" :dark="$store.state.dark" />
      </template></el-col>
    </el-row>
    
  </div>
</template>

<script>
import Box from '../../components/blog/blogbox'
export default {
  components: {
    Box,
  },
  data() {
    return {
      search: '',
      show: [],
      tags: ['All'],
      clear: false,
      message: '',
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.data.forEach((el, index) => {
      if (this.tags.indexOf(el.tag) == -1) {
        this.tags.push(el.tag)
      }
    })
    this.show = this.data;
  },
  async asyncData({ $content, params }) {
    const data = await $content('blog').sortBy('date', 'desc').fetch()
    return { data }
  },
  head() {
    return {
      title: "GGolfz's Blog",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "GGolfz's Blog",
        },
      ],
    }
  },
  methods: {
    searchtag(tag) {
      this.message = ''
      this.clear = true
      this.search = ''
      if (tag == 'All') {
        this.show = this.data
      } else {
        this.show = this.data.filter((a) => a.tag == tag)
      }
    },
  },
  watch: {
    search(val) {
      if (this.clear) {
        this.clear = false
      } else {
        if (val == '') {
          this.show = this.data
          this.message = ''
        } else {
          let temp =  this.data.filter((a) => {
            return new RegExp(val.toLowerCase()).test(a.title.toLowerCase())
          })
          temp = temp.sort(
            (a, b) =>
              a.title.toLowerCase().indexOf(val) -
              b.title.toLowerCase().indexOf(val)
          )
          if (temp.length == 0) {
            this.show = this.data
            this.message = 'Not Found'
          } else {
            this.show = temp;
            this.message = 'Found ' + this.show.length + ' posts'
          }
        }
      }
    },
  },
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
  color: #2f2f2f;
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0% 3% 1% 3%;
  list-style: none;
  justify-content: center;
}
.dark-theme .tag-list-item {
  color: #af8969;
}
.light-theme .tag-list-item {
  color: #d2aa88;
}
.tag-list-item {
  margin: 0% 1%;
  font-size: 1.2em;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
}
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
  background: #212121;
  color: #dcdcdc;
}
.light-theme {
  background: #fcfcfc;
  color: #606060;
}
.blog-list {
  display:grid;
}
@media screen and (max-width: 767px) {
  .blog-list {
    grid-template-columns: auto;
  }
}
@media screen and (min-width: 768px) {
  .blog-list {
    grid-template-columns: repeat(2,1fr);
  }
}
@media screen and (min-width: 992px) {
  .blog-list {
  grid-template-columns: repeat(3,1fr);
  }
}
</style>

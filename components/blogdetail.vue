<template>
  <div class="blog-detail">
    <el-row
      :class="
        dark
          ? 'dark-content blog-detail-header'
          : 'light-content blog-detail-header'
      "
    >
      <el-col
        :span="24"
        :class="
          dark ? 'blog-dark blog-content-tag' : 'blog-light blog-content-tag'
        "
      >
        <i class="far fa-bookmark" />
        <span style="margin-left: 2px;">
          {{ data.tag }}
        </span>
      </el-col>
      <el-col
        :span="24"
        style="padding-bottom: 1%; border-bottom: #7b7b7b solid 1px;"
      >
        <h1
          :class="
            dark
              ? 'dark-content blog-content-header'
              : 'light-content blog-content-header'
          "
        >
          {{ data.title }}
        </h1>
      </el-col>
      <el-col
        :span="24"
        :class="
          dark
            ? 'blog-dark blog-content-author'
            : 'blog-light blog-content-author'
        "
        style="margin-bottom: 2%;"
      >
        <el-row style="align-items: center; display: flex;">
          <el-col :xs="6" :sm="4" :md="2">
            <picture>
              <source type="image/webp" srcset="profile.webp">
              <source type="image/jpeg" srcset="profile.jpg">
              <img width="100%" style="border-radius:200px" src="profile.jpg"/>
            </picture>
          </el-col>
          <el-col :xs="18" :sm="20" :md="22" style="padding-left: 2%;">
            <el-row>
              <el-col :span="24">
                {{ data.author }}
              </el-col>
              <el-col
                :span="24"
                :class="dark ? 'blog-dark blog-time' : 'blog-light blog-time'"
              >
                {{ formatTime(data.createdAt) }} · {{ data.readTime }}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="blog-detail-image-header">
      <el-col :span="24">
        <picture>
          <source type="image/webp" :srcset="`${data.blogimg.split('.')[0]}.webp`">
          <source type="image/png" :srcset="data.blogimg">
          <img width="100%" :src="data.blogimg" alt="blog-img" />
        </picture>
      </el-col>
    </el-row>
    <el-row
      style="margin-top: 1%;display: flex;
    flex-wrap: nowrap;"
      :class="
        dark
          ? 'dark-content blog-detail-content'
          : 'light-content blog-detail-content'
      "
    >
      <el-col v-if="data.toc.length" :xs="24" :sm="8" :md="6" class="toc-menu">
        <el-menu class="toc-sticky"
    :text-color="dark?'#bdbdbd':'#4c4c4c'"
    :background-color="dark?'#0a0a0a':'#efefef'"
    style="border-right:none">
            <el-menu-item class="toc-title">
              <span :style="dark?'color:#c99d78;font-weight:600;':'color:#d2aa88;font-weight:600'">Table of contents</span>
            </el-menu-item>
            <el-menu-item v-for="header in data.toc" :key="header.id" class="toc-item">
              <a @click="gotoHash(header.id)">{{ header.text }}</a>
            </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="24" :sm="16" :md="18" class="markdown-content">
        <main>
          <nuxt-content :document="data" />
        </main>
      </el-col>
    </el-row>
    <el-row 
      :class="
        dark
          ? 'dark-content blog-detail-content blog-nav'
          : 'light-content blog-detail-content blog-nav'">
      <el-col :span="12" class="blog-next-nav">
        <div v-if="next">
          <a :href="`/portfolio/blog/${next.slug}`">
            <div class="blog-nav-sub">
              <i class="fa fa-arrow-left" aria-hidden="true" style="margin-right:2px" /> บทความถัดไป
            </div>
            <div class="blog-nav-title">
            {{next.title}}
            </div>
            <div class="blog-nav-img">
               <picture>
                <source type="image/webp" :srcset="`${next.blogimg.split('.')[0]}.webp`">
                <source type="image/png" :srcset="next.blogimg">
                <img width="60%" :src="next.blogimg" alt="next-blog-img" />
              </picture>
            </div>
          </a>
        </div>
        <div v-else>
          &nbsp;
        </div>
      </el-col>
      <el-col :span="12" class="blog-prev-nav">
        <div v-if="prev">
          <a :href="`/portfolio/blog/${prev.slug}`">
            <div class="blog-nav-sub">
              บทความก่อนหน้า <i class="fa fa-arrow-right" aria-hidden="true" style="margin-left:2px"/>
            </div>
            <div class="blog-nav-title">
            {{prev.title}}
            </div>
            <div class="blog-nav-img">
              <picture>
                <source type="image/webp" :srcset="`${prev.blogimg.split('.')[0]}.webp`">
                <source type="image/png" :srcset="prev.blogimg">
                <img width="60%" :src="prev.blogimg" alt="prev-blog-img" />
              </picture>
            </div>
          </a>
        </div>
        <div v-else>
          &nbsp;
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    dark: Boolean,
    prev: Object,
    next: Object
  },
  methods: {
    formatTime(time) {
      let date = new Date(time)
      let weekday = date.getDay()
      switch (weekday) {
        case 0:
          weekday = 'Sun'
          break
        case 1:
          weekday = 'Mon'
          break
        case 2:
          weekday = 'Tue'
          break
        case 3:
          weekday = 'Wed'
          break
        case 4:
          weekday = 'Thu'
          break
        case 5:
          weekday = 'Fri'
          break
        case 6:
          weekday = 'Sat'
          break
      }
      let day = date.getDate()
      let month = date.getMonth()
      switch (month) {
        case 0:
          month = 'Jan'
          break
        case 1:
          month = 'Feb'
          break
        case 2:
          month = 'Mar'
          break
        case 3:
          month = 'Apr'
          break
        case 4:
          month = 'May'
          break
        case 5:
          month = 'Jun'
          break
        case 6:
          month = 'Jul'
          break
        case 7:
          month = 'Aug'
          break
        case 8:
          month = 'Sep'
          break
        case 9:
          month = 'Oct'
          break
        case 10:
          month = 'Nov'
          break
        case 11:
          month = 'Dec'
          break
      }
      let year = date.getFullYear()
      return weekday + ' ' + day + ' ' + month + ' ' + year
    },
    gotoHash(hash) {
      window.scrollTo(
        0,
        document.getElementById(hash).getBoundingClientRect().top +
          window.scrollY - 80
      )
    },
  },
}
</script>

<style>
@media only screen and (max-width: 767px) {
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  p {
    font-size: 1.2em;
  }
  h1.blog-content-header{
    font-size: 2.4em;
  }
  .toc-menu {
    display: none;
  }
  .blog-nav-img {
    display: none;
  }
.blog-detail-header {
  padding: 0% 10%;
}
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  h1 {
    font-size: 2.8em;
  }
  h2 {
    font-size: 2.6em;
  }
  p {
    font-size: 1.4em;
  }
  .toc-sticky {
    position: sticky;
    position: -webkit-sticky;
    top: 85px;
    text-align: center;
  }
  .toc-title {
    font-size: 1.1em !important;
  }
  .toc-item {
    line-height: 30px !important;
    height: fit-content !important;
    padding: 3% 0% !important;
    font-size: 0.9em !important;
  }  
  .toc-menu {
    padding-right:5%;
  }
  h1.blog-content-header{
    font-size: 3em;
  }
.blog-detail-header {
  padding: 0% 15%;
}
}
@media only screen and (min-width: 1025px) {
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.3em;
  }
  h1.blog-content-header{
    font-size: 3em;
  }
  .toc-sticky {
    position: sticky;
    top: 85px;
    text-align: center;
  }
  .toc-title {
    font-size: 1.4em !important;
  }
  .toc-item {
    line-height: 30px !important;
    height: fit-content !important;
    padding: 3% 0% !important;
    font-size: 1.2em !important;
  }
  .toc-menu {
    padding-right:3%;
  }
  .blog-detail-header {
    padding: 0% 15%;
  }
  .blog-nav-img img{
    width:50%;
  }
}
  .blog-detail-content {
    padding: 0% 5% !important;
  }
.blog-detail {
  width: 100%;
  text-align: left;
}
.blog-content-tag {
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
  font-size: 1.3em;
  margin-left: 5px;
  margin-top: 5px;
}
.blog-dark.blog-content-tag {
  color: #c99d78;
}
.blog-light.blog-content-tag {
  color: #d2aa88;
}
.blog-content-author {
  font-weight: 400;
  font-family: 'Titillium Web', sans-serif;
  font-size: 1.1em;
  margin-top: 3%;
}
.blog-dark.blog-content-author {
  color: #ffffffbf;
}
.blog-light.blog-content-author {
  color: #4c4c4cbf;
}
.blog-nav {
  margin-top: 2%;
}
.blog-next-nav{
  text-align: left;
}
.blog-prev-nav{
  text-align: right;
}
a .blog-nav-title {
  font-size: 1.4em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
a .blog-nav-sub {
  font-size: 1.2em;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 400;
}
.blog-nav-sub{
  margin-bottom: 1%;
}
.blog-nav-title{
  margin-bottom: 2%;
}
.dark-content a .blog-nav-sub{
  color:#bdbdbd !important;
}
.dark-content a .blog-nav-title{
  color:#d2aa88 !important;
}
.light-content a .blog-nav-sub{
  color:#606060 !important;
}
.light-content a .blog-nav-title{
  color:#c99d78 !important;
}
h1.dark-content.blog-content-header {
  color: #f8f8f8;
}
h1.light-content.blog-content-header {
  color: #2f2f2f;
}
.blog-detail-image-header {
  padding: 0% 5%;
}
h1 {
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
}
.dark-content h1 {
  color: #f8f8f8;
}
.light-content h1 {
  color: #2f2f2f;
}
h2 {
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
  margin-top: 3%;
}
.dark-content h2 {
  color: #dcdcdc;
}
.light-content h2 {
  color: #4c4c4c;
}
p {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
}
.dark-content p {
  color: #bdbdbd;
}
.light-content p {
  color: #606060;
}
blockquote {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  margin-left: 0;
  padding: 0.4em 0.8em;
}
.dark-content blockquote {
  border-left: 0.2em solid #dcdcdc;
  color: #dcdcdc;
}
.light-content blockquote {
  border-left: 0.2em solid #606060;
  color: #606060;
}
.dark-content pre.language-text.line-numbers {
  background: #0a0a0a;
}
.light-content pre.language-text.line-numbers {
  background: #f5f2f0;
}
.dark-content code {
  color: #f8f8f8;
  text-shadow: none;
  font-size: 1.2em;
}
.light-content code {
  color: #2f2f2f;
  text-shadow: none;
  font-size: 1.2em;
}
</style>

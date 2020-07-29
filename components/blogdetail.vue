<template>
    <div class="blog-detail">
      <el-row :class="dark?'dark-content blog-detail-header':'light-content blog-detail-header'">
        <el-col :span="24" :class="dark?'blog-dark blog-content-tag':'blog-light blog-content-tag'">
            <i class="far fa-bookmark" />
              <span style="margin-left:2px">
              {{data.tag}}
              </span>        
        </el-col>
        <el-col :span="24" style="padding-bottom:1%;border-bottom:#7b7b7b solid 1px">
            <h1 :class="dark?'dark-content blog-content-header':'light-content blog-content-header'">{{ data.title }}</h1>
        </el-col>
        <el-col :span="24" :class="dark?'blog-dark blog-content-author':'blog-light blog-content-author'" style="margin-bottom:2%">
              <el-row style="align-items:center;display:flex">
                  <el-col :xs="6" :sm="4" :md="2">
                      <img src="profile.jpg" width="100%" style="border-radius:200px">
                  </el-col>
                  <el-col :xs="18" :sm="20" :md="22" style="padding-left:2%">
                      <el-row>
                          <el-col :span="24">
                            {{data.author}}
                          </el-col>
                          <el-col :span="24" :class="dark?'blog-dark blog-time':'blog-light blog-time'">
                            {{formatTime(data.createdAt)}} · {{data.readTime}}
                          </el-col>
                      </el-row>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>
      <el-row class="blog-detail-image-header">
          <el-col :span="24">
              <img :src="data.blogimg" width="100%" alt="blog-img">
          </el-col>
      </el-row>
      <article style="margin-top:1%">
        <nuxt-content :class="dark?'dark-content blog-detail-content':'light-content blog-detail-content'" :document="data" />
      </article>
    </div>
</template>

<script>
export default {
    props: {
        data:Object,
        dark:Boolean
    },
    methods: {
        formatTime(time){
            let date = new Date(time)
            let weekday = date.getDay()
            switch(weekday){
                case 0: weekday="Sun";break;
                case 1: weekday="Mon";break;
                case 2: weekday="Tue";break;
                case 3: weekday="Wed";break;
                case 4: weekday="Thu";break;
                case 5: weekday="Fri";break;
                case 6: weekday="Sat";break;
            }
            let day = date.getDate()
            let month = date.getMonth()
            switch(month){
                case 0: month="Jan";break;
                case 1: month="Feb";break;
                case 2: month="Mar";break;
                case 3: month="Apr";break;
                case 4: month="May";break;
                case 5: month="Jun";break;
                case 6: month="Jul";break;
                case 7: month="Aug";break;
                case 8: month="Sep";break;
                case 9: month="Oct";break;
                case 10: month="Nov";break;
                case 11: month="Dec";break;
            }
            let year = date.getFullYear()
            return weekday+" "+day+" "+month+" "+year
        }
    }
}
</script>

<style>
.blog-detail{
    width:100%;
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
    color: #FFFFFFBF;
}
.blog-light.blog-content-author {
    color: #4C4C4CBF;
}
.blog-detail-header{
    padding: 0% 15%
}
h1.dark-content.blog-content-header{
    color: #f8f8f8;
    font-size: 3em;
}
.blog-detail-image-header {
    padding: 0% 5%
}
.blog-detail-content{
    padding: 0% 15%
}
h1{
  font-size:2.5em;
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
}
.dark-content h1 {
  color: #bdbdbd;
}
.light-content h1 {
  color: #4c4c4c
}
h2{
  font-size:1.8em;
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
}
.dark-content h2 {
  color: #bdbdbd
}
.light-content h2 {
  color: #4c4c4c
}
p{
  font-size:1.2em;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
}
.dark-content p {
  color: #dcdcdc
}
.light-content p {
  color: #606060
}
blockquote{
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  margin-left: 0;
  padding: .4rem .8rem;
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
    background: #0A0A0A;
}
.light-content pre.language-text.line-numbers {
    background: #f5f2f0;
}
.dark-content code {
    color: #F8F8F8;
    text-shadow:none;
}
.light-content code {
    color: #2F2F2F;
    text-shadow:none;
}
</style>
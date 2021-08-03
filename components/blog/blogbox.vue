<template>
  <div class="box" @click="goto(data.slug)">
      <el-row>
          <el-col :span="24">
              <picture>
                <source type="image/webp" :srcset="`${data.blogimg.split('.')[0]}.webp`">
                <source type="image/png" :srcset="data.blogimg">
                <img width="100%" :src="data.blogimg" alt="blog-img" />
              </picture>
          </el-col>
          <el-col :span="24" :class="dark?'blog-dark blog-tag':'blog-light blog-tag'">
              <i class="far fa-bookmark"></i>
              <span style="margin-left:2px">
              {{data.tag}}
              </span>
          </el-col>
          <el-col :span="24" :class="dark?'blog-dark blog-title':'blog-light blog-title'">
              {{data.title}}
          </el-col>
          <el-col :span="24" :class="dark?'blog-dark blog-description':'blog-light blog-description'">
              {{data.description}}
          </el-col>
          <el-col :span="24" :class="dark?'blog-dark blog-author':'blog-light blog-author'">
              <el-row style="align-items:center;display:flex">
                  <el-col :span="4">
                    <picture>
                        <source type="image/webp" srcset="profile.webp">
                        <source type="image/jpeg" srcset="profile.jpg">
                        <img width="100%" style="border-radius:200px" src="profile.jpg" alt="profile_ic"/>
                    </picture>
                  </el-col>
                  <el-col :span="20" style="padding-left:3%">
                      <el-row>
                          <el-col :span="24">
                            {{data.author}}
                          </el-col>
                          <el-col :span="24" :class="dark?'blog-dark blog-time':'blog-light blog-time'">
                            {{formatTime(data.date)}} · {{data.readTime}}
                          </el-col>
                      </el-row>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    props: {
        data:Object,
        dark:Boolean
    },
    methods: {
        goto(path){
            this.$router.push({ path: '/blog/' + path.toLowerCase() })
        },
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
.box {
    padding: 5%;
    text-align: left;
    cursor: pointer;
    margin-bottom: 2%;
}
.blog-tag {
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
    font-size: 1em;
    margin-left: 2px;
    margin-top: 5px;
}
.blog-dark.blog-tag {
    color: #c99d78;
}
.blog-light.blog-tag {
    color: #d2aa88;
}
.blog-title {
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.5em;
}
.blog-dark.blog-title {
    color: #bdbdbd;
}
.blog-light.blog-title {
    color: #4c4c4c;
}
.blog-description {
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    margin-top: 2px;
}
.blog-dark.blog-description {
    color: #dcdcdc;
}
.blog-light.blog-description {
    color: #606060;
}
.blog-author {
    font-weight: 400;
    font-family: 'Titillium Web', sans-serif;
    font-size: 0.95em;
    margin-top: 3%;
}
.blog-dark.blog-author {
    color: #FFFFFFBF;
}
.blog-light.blog-author {
    color: #4C4C4CBF;
}
.blog-time {
    font-weight: 400;
    font-family: 'Titillium Web', sans-serif;
    font-size: 0.95em;
}
.blog-dark.blog-time {
    color: #FFFFFF99;
}
.blog-light.blog-time {
    color: #4C4C4C99;
}
</style>
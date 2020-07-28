<template>
    <div class="blog-detail">
      <el-row :class="dark?'dark-content blog-detail-header':'light-content blog-detail-header'">
        <el-col :span="24">
            <h1 :class="dark?'dark-content blog-content-header':'light-content blog-content-header'">{{ data.title }}</h1>
        </el-col>
      </el-row>
      <el-row class="blog-detail-image-header">
          <el-col :span="24">
              <img :src="data.blogimg" width="100%" alt="blog-img">
          </el-col>
      </el-row>
      <article>
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
    mounted() {
        console.log(this)
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
</style>
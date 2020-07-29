<template>
  <el-row :class="dark?'dark-content':'light-content'">
      <el-col :xs="24" :sm="12" :md="8" style="padding:5%">
          <img src="profile.jpg" width="100%" style="border-radius:300px"/>
      </el-col>
      <el-col :xs="24" :sm="12" :md="16" class="about-content">
          <section>
              <h1 class="about-name">
                  WISARUT KITTICHAROENPHONNGAM
              </h1>
              <blockquote class="about-me">
                  FULL STACK DEVELOPER
              </blockquote>
              <p class="about-me">              
                  Glad to see you! My name is Wisarut Kitticharoenphonngam. You can call me <b>Golf</b>. 
              </p>
              <p class="about-me">
                I am a sophomore student in Computer Science, School of Information Technology, King Mongkut's University of Technology Thonburi (KMUTT).
              </p>  
          </section>
      </el-col>
      <section class="about-content">
              <p class="about-me">
                I am interested in Competitive Programming, Website Development both Front-end and Back-end, Application Development on a portable device in terms of native and cross-platform including Data Science, Cybersecurity, and Artificial Intelligence.
              </p>
              <p class="about-me">  
                In addition, I am also interested in System Analysis and Design because I believe that an efficient system and well design in terms of the user interface (UI) and user experience (UX) will make people's lives better.
              </p>
      </section>
  </el-row>
</template>

<script>
export default {
    props: {
        dark: Boolean
    }
}
</script>

<style>
@media only screen and (max-width: 767px) {
    .about-name {
        font-size: 1.3em;
    }
    .about-content {
        padding: 0% 5%;
    }
    .about-me {
        font-size: 1.1em;
    }
    p.about-me {
        padding-bottom: 3%;
        border-bottom: 1px solid #7b7b7b;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .about-name {
        font-size: 1.65em;
    }
    .about-me {
        font-size: 1.3em;
    }
}
@media only screen and (min-width: 992px) {
    .about-name {
        font-size: 2.5em;
    }
    .about-me {
        font-size: 1.45em;
    }
}
    .about-name {
        font-family: 'Titillium Web', sans-serif;
    }
    .about-me {
        text-align:left;
        font-family: 'Montserrat', sans-serif;
        margin: 3% 0%;
    }
    blockquote.about-me {
        padding-left: 2% ;
        font-family: 'Titillium Web', sans-serif;
    }
.dark-content blockquote.about-me {
  border-left: 0.2em solid #dcdcdc;
  color: #dcdcdc;
}
.light-content blockquote.about-me {
  border-left: 0.2em solid #606060;
  color: #606060;
}
</style>
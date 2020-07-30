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
                  FULL STACK SOFTWARE DEVELOPER
              </blockquote>
              <p class="about-me">              
                  Glad to see you! My name is Wisarut Kitticharoenphonngam.<br/> You can call me <b>Golf</b>. 
              </p>
              <p class="about-me">
                I am a sophomore student in Computer Science, School of Information Technology, King Mongkut's University of Technology Thonburi (KMUTT).
              </p>  
          </section>
      </el-col>
      <section class="about-content">
              <p class="about-me">
                I am interested in Competitive Programming, Website Development both Front-end and Back-end, Application Development on a portable device in terms of native and cross-platform including Data Science, Cybersecurity, Game Development, and Artificial Intelligence.
              </p>
              <p class="about-me">  
                In addition, I am also interested in System Analysis and Design because I believe that an efficient system and well design in terms of the user interface (UI) and user experience (UX) will make people's lives better. And I am interested in video editing, photography, photo editing, and using technology tools such as Microsoft Power Automate to make my life easier.
              </p>
      </section>
      <el-col :span="24" class="about-content divider">
          <el-row class="about-tech">
              <el-col :xs="24" :sm="24" :md="10">
                  <el-row>
                      <el-col :span="24">
                        <h2 class="about-title">Education</h2>
                      </el-col>
                      <el-col :span="24" class="about-edu">
                          <div class="about-edu-item">
                          <strong class="about-title">King Mongkut's University of Technology Thonburi</strong> <br/>
                          Studying Bachelor's degree (2<sup>nd</sup>&nbsp;year) of
                          Computer Science, School of Information Technology.<br/>
                          Current GPAX : 3.88
                          </div>
                          <div class="about-edu-item">
                          <strong class="about-title">Ramkhamhaeng University</strong> <br/>
                          Studying Bachelor's degree (4<sup>th</sup>&nbsp;year) of 
                          Business Administration (Management), Faculty of Business Administration.<br/>
                          Current GPAX : 2.55
                          </div>
                          <div class="about-edu-item">
                          <strong class="about-title">Wat Raja O Ros School</strong> <br/>
                          Studying Science - Mathematics Program. <br/>
                          GPAX : 3.97
                          </div>
                      </el-col>
                  </el-row>
              </el-col>
              <el-col :xs="24" :sm="24" :md="14" class="about-tech-skill">
                  <el-row>
                      <el-col :span="24">
                        <h2 class="about-title">Technology Skills</h2>
                      </el-col>
                        <el-col :span="24">
                            <el-row>
                                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                                    <div class="about-title">
                                    😍 Proficient with :
                                    </div>
                                    <li v-for="(data,index) in proficient" :key="index" class="about-skill-item-list">
                                        {{data}}
                                    </li>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                                    <div class="about-title">
                                    ⭐️ Familiar with :
                                    </div>
                                    <li v-for="(data,index) in familiar" :key="index" class="about-skill-item-list">
                                        {{data}}
                                    </li>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="24">
                            <el-row>
                                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                                    <div class="about-title">
                                    🔥 Experienced with :
                                    </div>
                                    <li v-for="(data,index) in experience" :key="index" class="about-skill-item-list">
                                        {{data}}
                                    </li>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                                    <div class="about-title">
                                    🤩 Other interests :
                                    </div>
                                    <li v-for="(data,index) in interests" :key="index" class="about-skill-item-list">
                                        {{data}}
                                    </li>
                                </el-col>
                            </el-row>
                        </el-col>
                  </el-row>
              </el-col>
          </el-row>
      </el-col>
      <el-col :span="24" class="about-content">
          <div class="about-quote" style="margin-bottom:15px">
           <i>" Never gonna know if you never even try "</i>
          </div>
          <div class="about-quote" style="margin-bottom:15px">
          <i>— The script —</i>
          </div>
      </el-col>
  </el-row>
</template>

<script>
export default {
    data() {
        return{
            proficient: ["HTML & CSS","JavaScript","VueJS & NuxtJS","Java","RDBMS","Git & Github"],
            familiar: ["Python 3","C & C++","TypeScript","NodeJS","ReactJS & NextJS","MongoDB","PHP"],
            experience: ["Numpy & Pandas","Docker","Kubernetes","AngularJS","Servlet","Firebase","CI/CD","Google Cloud & Azure","Ruby"],
            interests: ["Game Development","Mobile Development","Cyber Security","Artificial Intelligence"],
        }
    },
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
    .about-tech {
        font-size: 1.1em;
    }
    .about-edu-item {
        margin: 2% 0% 2% 8%;
    }
    h2.about-title {
        font-size: 1.2em;
    }
    p.about-me {
        padding-bottom: 3%;
        border-bottom: 1px solid #7b7b7b;
    }
    .about-quote {
        font-size: 0.95em;
    }
    .about-skill-item-list {
        padding-left: 5%;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .about-name {
        font-size: 1.65em;
    }
    .about-me {
        font-size: 1.3em;
    }
    .about-tech {
        font-size: 1.3em;
    }
    .about-quote {
        font-size: 1.35em;
    }
    h2.about-title {
        font-size: 1.4em;
    }
    .about-edu-item {
        margin: 3% 0% 3% 6%;
    }
    .divider {
        padding-top: 2%;
        border-top: 1px solid #7b7b7b;
    }
    .about-skill-item-list {
        padding-left: 8%;
    }

}
@media only screen and (min-width: 992px) {
    .about-name {
        font-size: 2.5em;
    }
    .about-me {
        font-size: 1.45em;
    }
    .about-tech {
        font-size: 1.45em;
    }
    .about-quote {
        font-size: 1.5em;
    }
    h2.about-title {
        font-size: 1.5em;
    }
    .about-edu-item {
        margin: 4% 0% 4% 3%;
    }
    .divider {
        padding-top: 2%;
        border-top: 1px solid #7b7b7b;
    }
    .about-skill-item-list {
        padding-left: 10%;
    }
}   
    .about-skill-item{
        margin-bottom: 3%;
    }
    .about-tech {
        margin:0%;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
    }
    .about-quote {
        font-family: 'Montserrat', sans-serif;
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
.dark-content .about-quote{
  color:#f8f8f8;
}
.light-content .about-quote{
  color: #2f2f2f;
}
.dark-content .about-title {
  color: #CBB7A6;
  font-weight: bolder;
}
.light-content .about-title {
  color: #c99d78;
  font-weight: bolder;
}
</style>
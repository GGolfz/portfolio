<template>
  <el-row :class="dark ? 'dark-content' : 'light-content'">
    <el-col :xs="24" :sm="12" :md="8" style="padding: 5%;">
      <picture>
        <source type="image/webp" srcset="profile.webp" />
        <source type="image/jpeg" srcset="profile.jpg" />
        <img
          width="100%"
          style="border-radius: 300px;"
          src="profile.jpg"
          alt="ggolfz_pic"
        />
      </picture>
    </el-col>
    <el-col :xs="24" :sm="12" :md="16" class="about-content">
      <section>
        <h1 class="about-name">
          WISARUT KITTICHAROENPHONNGAM
        </h1>
        <h1 class="about-name">
          ( GGolfz )
        </h1>
        <blockquote class="about-me">
          FULL STACK SOFTWARE DEVELOPER
        </blockquote>
        <p class="about-me">
          Glad to see you! My name is Wisarut Kitticharoenphonngam.<br />
          You can call me <b>Golf</b>.
        </p>
        <p class="about-me">
          I am a junior student in Computer Science, School of Information
          Technology, King Mongkut's University of Technology Thonburi (KMUTT).
          And I am also Google Developer Student Club Lead KMUTT and Beta Microsoft Learn Student Ambassadors Thailand.
        </p>
      </section>
    </el-col>
    <section class="about-content">
      <p class="about-me">
        I love to do anything with computer like solving the competitive
        programming problem, develop the website and mobile application and also
        interest in the scope of AI and Data Science.
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
                <strong class="about-title"
                  >King Mongkut's University of Technology Thonburi</strong
                >
                <br />
                Studying Bachelor's degree (3<sup>rd</sup>&nbsp;year) of
                Computer Science,<br/> School of Information Technology.<br />
                Current GPAX : 3.94
              </div>
              <div class="about-edu-item">
                <strong class="about-title">Ramkhamhaeng University</strong>
                <br />
                Bachelor's degree of Business Administration (Management), <br/>
                Faculty of Business Administration.<br />
                GPAX : 2.60
              </div>
              <div class="about-edu-item">
                <strong class="about-title">Wat Raja O Ros School</strong>
                <br />
                Science - Mathematics Program. <br />
                GPAX : 3.97
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="14" class="about-tech-skill">
          <el-row>
            <el-col :span="24">
              <h2 class="about-title">Technology Skills ✨</h2>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                  <div class="about-title">
                    😍 Web Development :
                  </div>
                  <ul>
                    <li
                      v-for="(data, index) in web"
                      :key="index"
                      class="about-skill-item-list"
                    >
                      {{ data }}
                    </li>
                  </ul>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                  <div class="about-title">
                    ⭐️ Mobile Development :
                  </div>
                  <ul>
                    <li
                      v-for="(data, index) in mobile"
                      :key="index"
                      class="about-skill-item-list"
                    >
                      {{ data }}
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                  <div class="about-title">
                    🔥 Database and Tools :
                  </div>
                  <ul>
                    <li
                      v-for="(data, index) in database"
                      :key="index"
                      class="about-skill-item-list"
                    >
                      {{ data }}
                    </li>
                  </ul>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" class="about-skill-item">
                  <div class="about-title">
                    🤩 AI and Data Science :
                  </div>
                  <ul>
                    <li
                      v-for="(data, index) in datasci"
                      :key="index"
                      class="about-skill-item-list"
                    >
                      {{ data }}
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="about-content">
      <div class="about-quote" style="margin-bottom: 15px;">
        <i>" Never gonna know if you never even try "</i>
      </div>
      <div class="about-quote" style="margin-bottom: 15px;">
        <i>— The script —</i>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      web: [
        'HTML & CSS',
        'JavaScript & TypeScript',
        'ReactJS & NextJS',
        'VueJS & NuxtJS',
        'NodeJS & Express',
        'Flask & Django',
        'Servlet & Spring',
        "Ruby & Rails",
        "PHP",
        "Web3"
      ],
      mobile: ['Flutter (Dart)', 'Kotlin', 'Swift'],
      database: [
        'RDBMS',
        'MongoDB',
        'CLI',
        'Git & Github',
        'Docker',
        'Kubernetes',
        'Firebase',
        'Google Cloud & Azure',
        'Google Colab',
        'Dialogflow',
      ],
      datasci: [
        'Python 3',
        'Numpy',
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'Scikit-learn',
        'Keras & Tensorflow',
        'Darknet',
      ],
    }
  },
  props: {
    dark: Boolean,
  },
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
    padding-left: 2%;
  }
}
.about-skill-item {
  margin-bottom: 3%;
}
.about-tech {
  margin: 0%;
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
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  margin: 3% 0%;
}
blockquote.about-me {
  padding-left: 2%;
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
.dark-content .about-quote {
  color: #f8f8f8;
}
.light-content .about-quote {
  color: #2f2f2f;
}
.dark-content .about-title {
  color: #cbb7a6;
  font-weight: bolder;
}
.light-content .about-title {
  color: #af8969;
  font-weight: bolder;
}
ul {
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
</style>

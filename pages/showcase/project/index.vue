<template>
  <div :class="dark ? 'container dark-theme' : 'container light-theme'">
    <el-row class="project">
      <el-col :span="24">
        <el-row>
          <el-col :span="24" class="project-title">Project</el-col>
        </el-row>
        <el-row v-for="(data, index) in project" :key="index">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            v-for="(el, index) in data"
            :key="index"
            class="project-item"
          >
            <ShowcaseItem :data="el" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowcaseItem from '../../../components/showcase/showcaseitem'
export default {
  props: {
    dark: Boolean,
  },
  components: {
    ShowcaseItem,
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  head() {
    return {
      title: "GGolfz's Project",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "GGolfz's Project",
        },
      ],
    }
  },
  async asyncData({ $content, params }) {
    const data = await $content('showcase').sortBy('date', 'desc').fetch()
    const allProject = data
      .filter((el) => el.tag === 'project')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    let project = []
    let temp = []
    for (let i = 0; i < allProject.length; i++) {
      temp.push(allProject[i])
      if ((i + 1) % 3 == 0) {
        project.push(temp)
        temp = []
      }
    }
    if (temp.length != 0) {
      project.push(temp)
      temp = []
    }
    return { project }
  },
}
</script>

<style>
.container {
  padding: 3% 5%;
  margin: 0 auto;
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
@media only screen and (max-width: 767px) {
  .project {
    width: 100%;
    padding: 2% 5%;
  }
  .project-title {
    font-size: 2.7em;
    font-family: 'Titillium Web', sans-serif;
    padding: 0% 0% 1% 0%;
  }
  .project-item {
    padding: 5%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .project {
    width: 100%;
    padding: 2% 5%;
  }
  .project-title {
    font-size: 2.7em;
    font-family: 'Titillium Web', sans-serif;
    padding: 0% 0% 1% 0%;
  }
  .project-item {
    padding: 3%;
  }
}
@media only screen and (min-width: 1025px) {
  .project {
    width: 100%;
    padding: 0% 2%;
  }
  .project-title {
    font-size: 3.5em;
    font-family: 'Titillium Web', sans-serif;
    padding: 0% 0% 1% 0%;
  }
  .project-item {
    padding: 2%;
  }
}
.project-title {
  cursor: default;
}
.dark-theme .project-title {
  color: #f8f8f8;
}
.light-theme .project-title {
  color: #2f2f2f;
}
</style>

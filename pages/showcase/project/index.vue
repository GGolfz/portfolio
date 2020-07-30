<template>
  <div :class="dark ? 'container dark-theme' : 'container light-theme'">
    <el-row class="project">
      <el-col :span="24">
        <el-row>
          <el-col :span="24" class="project-title">Project</el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="12" :md="8" v-for="(el, index) in project" :key="index" class="project-item">
                <ShowcaseItem :data="el" />
            </el-col>
        </el-row>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowcaseItem from '../../../components/showcaseitem'
export default {
  data() {
    return {
    }
  },
  props: {
    dark: Boolean,
  },
  components: {
    ShowcaseItem
  },
  methods: {
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  async asyncData({ $content, params }) {
    const data = await $content('showcase').sortBy('date', 'desc').fetch()
    const project = data.filter((el) => el.tag === 'project')
    return { project }
  },
}
</script>

<style>
.container {
  padding: 3% 5%;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
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
    width:100%;
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
    width:100%;
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
    width:100%;
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
  color:#f8f8f8;
}
.light-theme .project-title {
  color: #2F2F2F;
}
</style>

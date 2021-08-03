<template>
  <div :class="dark ? 'container dark-theme' : 'container light-theme'">
    <el-row class="showcase">
      <el-col :span="24">
        <el-row>
          <el-col :span="24" class="showcase-title">Showcase</el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="showcase-subtitle">
            <div>
              Award
            </div>
            <div @click="goto('award')">
              <span class="view-button">View All</span>
            </div>
          </el-col>
          <el-col :span="24" class="showcase-desktop">
            <el-row class="showcase-grid">
              <el-col :span="8" v-for="(el, index) in Array.from(award).splice(showaward,size)" :key="index" :data-index="index" style="text-align:center;width:100%">
                <ShowcaseItem :data="el" />
              </el-col>
              <div v-if="showaward !=0" class="page-naviga prev" @click="prevaward"  icon="el-icon-arrow-left" circle>
                <i aria-hidden="true" class=" fa fa-chevron-left"/>
              </div>
              <div v-if="showaward != award.length-size && award.length > size" class="page-naviga next" @click="nextaward"  icon="el-icon-arrow-right" circle>
                <i aria-hidden="true" class=" fa fa-chevron-right"/>
              </div>
            </el-row>
          </el-col>
          <el-col :span="24" class="showcase-mobile" v-for="(el,index) in Array.from(award).splice(0,3)" :key="index">
            <ShowcaseMobile :data="el" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="showcase-subtitle"><div>Project</div>
            <div @click="goto('project')">
              <span class="view-button">View All</span>
            </div>
            </el-col>
          <el-col :span="24" class="showcase-desktop">
            <el-row class="showcase-grid">
              <el-col :span="8" v-for="(el, index) in Array.from(project).splice(showproject,size)" :key="index" :data-index="index" style="text-align:center;width:100%">
                <ShowcaseItem :data="el"/>
              </el-col>
              <div v-if="showproject !=0" class="page-naviga prev" @click="prevproject" circle>
                <i aria-hidden="true" class=" fa fa-chevron-left"/>
              </div>
              <div v-if="showproject != project.length-size && project.length > size" class="page-naviga next" @click="nextproject"  icon="el-icon-arrow-right" circle>
                <i aria-hidden="true" class=" fa fa-chevron-right"/>
              </div>
            </el-row>
          </el-col>
          <el-col :span="24" class="showcase-mobile" v-for="(el,index) in Array.from(project).splice(0,3)" :key="index">
            <ShowcaseMobile :data="el" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowcaseItem from '../../components/showcase/showcaseitem'
import ShowcaseMobile from '../../components/showcase/showcasemobile'
export default {
  data() {
    return {
      showaward: 0,
      showproject: 0,
      size: 3
    }
  },
  props: {
    dark: Boolean,
  },
  head() {
    return {
      title: "GGolfz's Showcase",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GGolfz's Showcase"
        },
      ],
    };
  },
  components: {
    ShowcaseItem,
    ShowcaseMobile
  },
  methods: {
    prevaward() {
      if(this.showaward > 0){
        this.showaward-= 1;
      }
    },
    nextaward() {
      if(this.showaward < this.award.length-this.size){
        this.showaward +=1
      }
    },
    prevproject() {
      if(this.showproject > 0){
        this.showproject-= 1;
      }
    },
    nextproject() {
      if(this.showproject < this.project.length-this.size){
        this.showproject +=1
      }
    },
    changeSize() {
      if(this.award.length > this.size && this.showaward == this.award.length-this.size){
        this.showaward +=1
      }
      if(this.project.length > this.size && this.showproject == this.project.length-this.size){
        this.showproject +=1
      }
      this.size = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches?2:3
      if(this.award.length > this.size && this.showaward >= this.award.length-this.size){
        this.showaward = this.award.length-this.size
      }
      if(this.project.length > this.size && this.showproject >= this.project.length-this.size){
        this.showproject = this.project.length-this.size
      }
    },
    goto(val){
      this.$router.push(`/showcase/${val}`)
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.changeSize);
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.changeSize);
    this.size = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches?2:3
  },
  async asyncData({ $content, params }) {
    const data = await $content('showcase').sortBy('date', 'desc').fetch()
    const award = data.filter((el) => el.tag === 'award').splice(0,6)
    const project = data.filter((el) => el.tag === 'project').splice(0,6)
    const award1 = award.sort((a,b)=> new Date(b.date).getTime() -new Date(a.date).getTime())
    const project1 = project.sort((a,b)=> new Date(b.date).getTime() -new Date(a.date).getTime())
    return { award:award1, project:project1 }
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
.showcase-mobile {
  padding: 3% 0%;
}
@media only screen and (max-width: 767px) {
  .showcase-desktop {
    display:none
  }
  .showcase-mobile {
    display: block;
  }
  .showcase {
    width:100%;
    padding: 2% 5%;
  }
  .showcase-title {
      font-size: 2.5em;
      font-family: 'Titillium Web', sans-serif;
      padding: 0% 0% 1% 0%;
  }
  .showcase-subtitle {
      font-size: 1.7em;
      font-family: 'Titillium Web', sans-serif;
      padding: 1% 0%;
      text-align: left;
      display: flex;
      justify-content: space-between;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .showcase-grid{
    grid-auto-columns: calc((100% - (2 - 1) * 1.6rem)/2);
  }
  .showcase {
    width:100%;
    padding: 2% 5%;
  }
  .showcase-title {
      font-size: 2.7em;
      font-family: 'Titillium Web', sans-serif;
      padding: 0% 0% 1% 0%;
  }
  .showcase-subtitle {
      font-size: 2em;
      font-family: 'Titillium Web', sans-serif;
      padding: 1% 0%;
      text-align: left;
      display: flex;
      justify-content: space-between;
  }
  .showcase-desktop {
    display: block
  }
  .showcase-mobile {
    display: none;
  }

}
@media only screen and (min-width: 1025px) {
  .showcase-grid{
    grid-auto-columns: calc((100% - (3 - 1) * 3rem)/3);
  }
  .showcase {
    width:100%;
    padding: 0% 2%;
  }  
  .showcase-title {
      font-size: 3.5em;
      font-family: 'Titillium Web', sans-serif;
      padding: 0% 0% 1% 0%;
  }
  .showcase-subtitle {
      font-size: 2.5em;
      font-family: 'Titillium Web', sans-serif;
      padding: 1% 0%;
      text-align: left;
      display: flex;
      justify-content: space-between;
  }
  .showcase-desktop {
    display:block
  }
  .showcase-mobile {
    display: none;
  }
}
.view-button {
  padding-bottom: 3px;
  font-size: 0.5em;
  cursor:pointer;
  transition: 0.3s;
}
.dark-theme .view-button {
  border-bottom: 1px solid #bcbcbc;
  color: #bcbcbc;
}
.dark-theme .view-button:hover{
  border-bottom: 1px solid #f7f7f7;
  color: #f7f7f7;
}
.light-theme .view-button {
  border-bottom: 1px solid #4d4d4d;
  color: #4d4d4d;
}
.light-theme .view-button:hover{
  border-bottom: 1px solid #2a2a2a;
  color: #2a2a2a;
}
.showcase-grid {
  display:grid;
  grid-auto-flow:column;
  overflow:auto;
  grid-column-gap: 3rem;
}
.showcase-grid::before{
  content:none;
}
.showcase-grid::-webkit-scrollbar {
  display:none;
  width: 0;
}
.page-naviga.prev {
  left: 2%;
}
.page-naviga.next {
  right: 2%;
}
.page-naviga {
  position: absolute;
  top:35%;
  font-size: 1.6em;
  font-weight: bold;
  padding: 0.7% !important;
  cursor: pointer;
}
.showcase-title,.showcase-subtitle {
  cursor: default;
}
.dark-theme .showcase-title,.dark-theme .showcase-subtitle{
  color:#f8f8f8;
}
.light-theme .showcase-title,.light-theme .showcase-subtitle {
  color: #2F2F2F;
}
.dark-theme .page-naviga {
  color: #c99d78;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.7);
}
.light-theme .page-naviga {
  color: #CBB7A6;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
}
</style>

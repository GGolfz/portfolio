<template>
  <div :class="dark ? 'container dark-theme' : 'container light-theme'">
    <el-row class="award">
      <el-col :span="24">
        <el-row>
          <el-col :span="24" class="award-title">Award</el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="12" :md="8" v-for="(el, index) in award" :key="index" class="award-item">
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
  head() {
    return {
      title: "GGolfz's Award",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GGolfz's Award"
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  async asyncData({ $content, params }) {
    const data = await $content('showcase').sortBy('date', 'desc').fetch()
    const award = data.filter((el) => el.tag === 'award')
    const award1 = award.sort((a,b)=> new Date(b.date).getTime() -new Date(a.date).getTime())
    return { award }
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
  .award {
    width:100%;
    padding: 2% 5%;
  }
  .award-title {
      font-size: 2.7em;
      font-family: 'Titillium Web', sans-serif;
      padding: 0% 0% 1% 0%;
  }
  .award-item {
      padding: 5%;
  }

}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .award {
    width:100%;
    padding: 2% 5%;
  }
  .award-title {
      font-size: 2.7em;
      font-family: 'Titillium Web', sans-serif;
      padding: 0% 0% 1% 0%;
  }
  .award-item {
      padding: 3%;
  }
}
@media only screen and (min-width: 1025px) {
  .award {
    width:100%;
    padding: 0% 2%;
  }  
  .award-title {
      font-size: 3.5em;
      font-family: 'Titillium Web', sans-serif;
      padding: 0% 0% 1% 0%;
  }
  .award-item {
      padding: 2%;
  }
}
.award-title {
  cursor: default;
}
.dark-theme .award-title {
  color:#f8f8f8;
}
.light-theme .award-title {
  color: #2F2F2F;
}
</style>

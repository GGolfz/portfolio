<template>
  <div style="width:100%;cursor:pointer" @click="goto(data.slug)">
  <el-row>
      <el-col :span="12" style="padding:2% 5% 2% 0%">
          <img :src="data.img" width="100%">
      </el-col>
      <el-col :span="12" style="text-align:start">
          <el-row>
          <el-col :span="24" class="showcase-item-mobile-title">
          {{data.title}}
          </el-col>
          <el-col :span="24"  class="showcase-item-mobile-description">
          {{data.description}}
          </el-col>
          </el-row>
      </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
    props: {
        data: Object
    },
    methods: {
        goto(path){
            this.$router.push({ path: '/showcase/' + path.toLowerCase() })
            console.log(path)
        },
    }
}
</script>

<style>
.showcase-item-mobile-title {
    padding: 2% 0%;
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
}
.showcase-item-mobile-description {
    font-size: 0.8em;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
}
.dark-theme .showcase-item-mobile-title{
    color: #bdbdbd;
}
.dark-theme .showcase-item-mobile-description{
    color: #dcdcdc;
}
.light-theme .showcase-item-mobile-title{
    color: #4c4c4c;
}
.light-theme .showcase-item-mobile-description{
    color: #606060;
}
</style>
<template>
  <div style="width:100%;cursor:pointer" @click="goto(data.slug)">
  <el-row>
      <el-col :span="24">
          <picture>
            <source type="image/webp" :srcset="`${data.img.split('.')[0]}.webp`">
            <source type="image/png" :srcset="data.img">
            <img width="100%" :src="data.img" alt="showcase-img" />
          </picture>
      </el-col>
      <el-col :span="24" class="showcase-item-title" style="text-align:start">
          {{data.title}}
      </el-col>
      <el-col :span="24" class="showcase-item-description" style="text-align:start">
          {{data.description}}
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
.showcase-item-title {
    padding: 2% 0%;
    font-size: 1.8em;
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
}
.showcase-item-description {
    font-size: 1.2em;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
}
.dark-theme .showcase-item-title{
    color: #bdbdbd;
}
.dark-theme .showcase-item-description{
    color: #dcdcdc;
}
.light-theme .showcase-item-title{
    color: #4c4c4c;
}
.light-theme .showcase-item-description{
    color: #606060;
}
</style>
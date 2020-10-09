<template>
  <div style="width:100%">
  <el-row class="showcase-detail">
      <el-col :span="24" class="showcase-detail-mobile-title" style="text-align:center">
            {{data.title}}
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" class="showcase-detail-image">
          <picture>
            <source type="image/webp" :srcset="`${data.img.split('.')[0]}.webp`">
            <source type="image/png" :srcset="data.img">
            <img width="100%" :src="data.img" alt="showcase-img" />
          </picture>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" class="showcase-detail-content">
          <el-row>
            <el-col :span="24" class="showcase-detail-title" style="text-align:start">
                {{data.title}}
            </el-col>
            <el-col :span="24" class="showcase-detail-description" style="text-align:start">
                <main>
                    <nuxt-content :document="data" />
                </main>
            </el-col>
          </el-row>
      </el-col>
  </el-row>
  <el-row 
      class="showcase-nav">
      <el-col :span="12" class="showcase-next-nav">
        <div v-if="next">
          <a :href="`/portfolio/showcase/${next.slug}`">
            <div class="showcase-nav-sub">
              <i class="fa fa-arrow-left" aria-hidden="true" style="margin-right:2px" /> ถัดไป
            </div>
            <div class="showcase-nav-title">
            {{next.title}}
            </div>
            <div class="showcase-nav-img">
              <picture>
                <source type="image/webp" :srcset="`${next.img.split('.')[0]}.webp`">
                <source type="image/png" :srcset="next.img">
                <img width="60%" :src="next.img" alt="next-showcase-img" />
              </picture>
            </div>
          </a>
        </div>
        <div v-else>
          &nbsp;
        </div>
      </el-col>
      <el-col :span="12" class="showcase-prev-nav">
        <div v-if="prev">
          <a :href="`/portfolio/showcase/${prev.slug}`">
            <div class="showcase-nav-sub">
              ก่อนหน้า <i class="fa fa-arrow-right" aria-hidden="true" style="margin-left:2px"/>
            </div>
            <div class="showcase-nav-title">
            {{prev.title}}
            </div>
            <div class="showcase-nav-img">
              <picture>
                <source type="image/webp" :srcset="`${prev.img.split('.')[0]}.webp`">
                <source type="image/png" :srcset="prev.img">
                <img width="60%" :src="prev.img" alt="prev-showcase-img" />
              </picture>
            </div>
          </a>
        </div>
        <div v-else>
          &nbsp;
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    props: {
        data:Object,
        prev:Object,
        next:Object
    }
}
</script>

<style>
@media only screen and (max-width: 767px) {
    .showcase-detail{
        padding: 8%;
    }
    .showcase-detail-mobile-title{
        display:block;
        font-size: 2.2em;
    }
    .showcase-detail-image{
        margin: 5% 0% 8% 0%;
    }
    .showcase-detail-title{
        display:none;
    }
    .showcase-nav-img {
        display: none;
    }
    .showcase-nav {
    padding:6% 8% 0% 8%;
    }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
    .showcase-detail{
        padding: 4% 8%;
    }
    .showcase-detail-mobile-title{
        display:block;
        font-size: 3em;
    }
    .showcase-detail-image{
        margin: 5% 0% 6% 0%;
    }
    .showcase-detail-title{
        display:none
    }
    .showcase-nav {
        padding: 4% 8% 0% 8%;
    }
}
@media only screen and (min-width: 1024px) {
    .showcase-detail-content {
        padding-left:3%;
    }
    .showcase-detail-mobile-title{
        display:none;
    }
    .showcase-detail-title{
        display:block;
        font-size: 3em;
    }
    .showcase-detail-description {
        padding-top: 3%;
    }
    .showcase-nav-img img{
        width:50%;
    }
    .showcase-nav {
        padding-top:4%;
    }
}
.showcase-detail-title {
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
}
.showcase-detail-mobile-title {
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
}
.showcase-detail-description {
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
}
.dark-theme .showcase-detail-title{
    color: #f8f8f8;
}
.dark-theme .showcase-detail-mobile-title{
    color: #f8f8f8;
}
.dark-theme .showcase-detail-description{
    color: #dcdcdc;
}
.light-theme .showcase-detail-title{
    color: #2f2f2f;
}
.light-theme .showcase-detail-mobile-title{
    color: #2f2f2f;
}
.light-theme .showcase-detail-description{
    color: #606060;
}
.showcase-next-nav{
  text-align: left;
}
.showcase-prev-nav{
  text-align: right;
}
a .showcase-nav-title {
  font-size: 1.4em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
a .showcase-nav-sub {
  font-size: 1.2em;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 400;
}
.showcase-nav-sub{
  margin-bottom: 1%;
}
.showcase-nav-title{
  margin-bottom: 2%;
}
.dark-theme a .showcase-nav-sub{
  color:#bdbdbd !important;
}
.dark-theme a .showcase-nav-title{
  color:#d2aa88 !important;
}
.light-theme a .showcase-nav-sub{
  color:#606060 !important;
}
.light-theme a .showcase-nav-title{
  color:#c99d78 !important;
}
</style>
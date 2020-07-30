<template>
  <el-menu
    :class="dark?'mo dark': 'mo light'"
    mode="horizontal"
    :active-text-color="dark?'#f8f8f8':'#2F2F2F'"
    :text-color="dark?'#bdbdbd':'#4c4c4c'"
    :background-color="dark?'#0a0a0a':'#efefef'"
    :default-active="current"
  >
    <el-col :span="6">
    <el-menu-item style="cursor:default">
        <svg viewBox="0 0 100 70" :stroke="dark?'#f8f8f8':'#2F2F2F'"  width="40" height="40" @click="drawer = true" style="cursor:pointer">
            <rect :fill="dark?'#f8f8f8':'#2F2F2F'" y="0" width="100" height="10"></rect>
            <rect :fill="dark?'#f8f8f8':'#2F2F2F'" y="30" width="100" height="10"></rect>
            <rect :fill="dark?'#f8f8f8':'#2F2F2F'" y="60" width="100" height="10"></rect>
        </svg>
    </el-menu-item>
    </el-col>
    <el-col :span="12">
    <el-menu-item style="text-align:center;padding:0%;cursor:default" index="1" >
      <img src="logo.png" alt="logo" height="100%" style="transform: scaleX(-1);cursor:pointer" @click="goto('Home')">
      <span :class="dark?'title-mobile title-dark':'title-mobile title-light'" @click="goto('Home')">GGolfz</span>
    </el-menu-item>
    </el-col>
    <el-col :span="6">
    </el-col>
    <el-drawer 
      :visible.sync="drawer"
      direction="ltr"
      size="100%"
      :with-header="false"
      :modal="false"
    >
    <div class="container">
        <el-row style="height:100vh;width:100vw">
            <el-col :span="6" style="text-align:start;padding:4%">
                <svg @click="drawer = false" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" :stroke="dark?'#f8f8f8':'#2F2F2F'" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <line style="stroke-width:2" x1="20" y1="4" x2="4" y2="20" />
                    <line style="stroke-width:2" x1="4" y1="4" x2="20" y2="20" />
                </svg>
            </el-col>
            <el-col :span="18">
            </el-col>
            <el-col :span="24"
                style="margin-bottom:3%">
                <img src="logo.png" alt="logo" width="50%" style="transform: scaleX(-1);cursor:pointer" @click="goto('Home')">
            </el-col>
            <el-col :span="24">
                <div
                v-for="(item, index) in menu"
                :key="index"
                :index="`` + (index + 2)"
                @click="goto(item)"
                :class="current==item?'active':''"
                style="font-size:1.6em;margin-bottom:5%"
                >
                <nuxt-link :to="`/${item == 'Home' ? '' : item.toLowerCase()}`"
                    >{{ item }}
                </nuxt-link>
                </div>
            </el-col>
        </el-row>
    </div>
    </el-drawer>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: ['Home', 'About','Blog','Showcase', 'Contact'],
      current: '',
      isHome: true,
      drawer: false
    }
  },
  components: {
  },
  props: {
    dark:Boolean
  },
  methods: {
    goto(href) {
      if (href == 'Home') {
        href = ''
        this.isHome = true
        this.current = 'Home'
      }
      else{
        this.isHome = false
        this.current = href
      }
      this.drawer = false
      this.$router.push({ path: '/' + href.toLowerCase() })
    },
  },
  async mounted() {
    const path = this.$route.path.split('/')[1]
    if(path == 'index'){
      this.current = 'Home'
      this.isHome = true
    } else {
      await this.menu.forEach((el, index) => {
        if (el.toLowerCase() == path) {
          this.current = el
          this.isHome = false
        }
      })
    }
  },
}
</script>
<style>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  transition: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
  padding: 1% 0%;
}
.el-menu-item {
  transition: none;
}
.el-menu-item:hover {
  background: none !important;
}
.mo {
  height: 80px;
  display:flex;
  align-items: center;
}
.dark a {
  font-weight: 400;
  text-decoration: none;
  font-family: 'Titillium Web', sans-serif;
  color:#bdbdbd;
}
.light a {
  text-decoration: none;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 400;
  color:#4c4c4c;
}
.title-mobile {
    font-family: 'Titillium Web', sans-serif;
    font-size: 2em;
    cursor: pointer;
}
.title-mobile.title-dark {
    color:#f8f8f8;
}
.title-mobile.title-light {
    color:#2F2F2F;
}
.dark .active a {
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
  color: #f8f8f8;
  border-bottom: #f8f8f8 solid 2px ;
}
.light .active a {
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
  color: #2F2F2F;
  border-bottom: #2F2F2F solid 2px ;
}
.dark .container {
  background: #0a0a0a
}
.container {
  height:100vh;
}
.light .container {
  background: #efefef
}
.light.el-menu--horizontal > .el-menu-item.is-active > a {
  padding-bottom: 5px;
  border-bottom: 2px #CBB7A6 solid;
  font-weight: 600;
  color: #2F2F2F;
}
.dark.el-menu--horizontal > .el-menu-item.is-active > a {
  padding-bottom: 5px;
  border-bottom: 2px #c99d78 solid;
  font-weight: 600;
  color: #f8f8f8;
}
</style>

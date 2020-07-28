<template>
  <el-menu
    :class="dark?'nav dark': 'nav light'"
    mode="horizontal"
    :active-text-color="dark?'#f8f8f8':'#2F2F2F'"
    :text-color="dark?'#bdbdbd':'#4c4c4c'"
    :background-color="dark?'#212121':'#efefef'"
    :default-active="current"
  >
    <el-menu-item style="padding:0%" index="1" @click="goto('Home')">
      <img src="logo.png" alt="logo" height="100%" style="transform: scaleX(-1);">
    </el-menu-item>
    <el-menu-item
      v-for="(item, index) in menu"
      :key="index"
      :index="`` + (index + 2)"
      @click="goto(item)"
      :class="isHome && item== 'Home'? 'is-active':''"
    >
      <nuxt-link :to="`/${item == 'Home' ? '' : item.toLowerCase()}`"
        >{{ item }}
      </nuxt-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: ['Home', 'About', 'Blog', 'Award', 'Project', 'Contact'],
      current: '',
      isHome: true
    }
  },
  props: {
    dark:Boolean
  },
  methods: {
    goto(href) {
      if (href == 'Home') {
        href = ''
        this.isHome = true
      }
      else{
        this.isHome = false
      }
      this.$router.push({ path: '/' + href.toLowerCase() })
    },
  },
  async mounted() {
    const path = this.$route.name
    if(path == 'index'){
      this.current = '2'
      this.isHome = true
    } else {
      await this.menu.forEach((el, index) => {
        if (el.toLowerCase() == path) {
          this.current = `` + (index + 2)
          this.isHome = false
        }
      })
    }
  },
}
</script>
<style>
.nav {
  display: flex;
  justify-content: center;
}
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
  font-size: 1.1em;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 400;
}
.el-menu-item:hover {
  background: none !important;
}
a {
  text-decoration: none;
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

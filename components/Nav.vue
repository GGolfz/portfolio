<template>
  <el-menu
    class="nav"
    mode="horizontal"
    active-text-color="black"
    text-color="grey"
    background-color="white"
    :default-active="current"
  >
    <el-menu-item
      v-for="(item, index) in menu"
      :key="index"
      :index="`` + (index + 1)"
      @click="goto(item)"
    >
      <nuxt-link :to="`/${item == 'Home' ? '' : item.toLowerCase()}`"
        >{{ item }}
      </nuxt-link></el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: ['Home', 'About', 'Blog', 'Award', 'Project', 'Contact'],
      current: '',
    }
  },
  methods: {
    goto(href) {
      if (href == 'Home') {
        href = ''
      }
      this.$router.push({ path: '/' + href.toLowerCase() })
    },
  },
  async mounted() {
    const path = this.$route.name
    await this.menu.forEach((el, index) => {
      if (el.toLowerCase() == path) {
        this.current = `` + (index + 1)
      }
    })
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
}
.el-menu-item {
  transition: none;
  font-size: 1.1em;
  font-family: 'Titillium Web', sans-serif;
}
.el-menu-item:hover {
  background: none !important;
}
a {
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item.is-active > a {
  padding-bottom: 5px;
  border-bottom: 2px black solid;
}
</style>

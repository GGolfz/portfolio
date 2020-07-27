<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item v-for="(item, index) of menu" :key="index" :index="index">
      <nuxt-link :to="`/${item=='Home'?'':item.toLowerCase()}`"
        >{{ item }}
      </nuxt-link></el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: ['Home','About', 'Blog', 'Contact', 'Award', 'Project'],
    }
  },
}
</script>
<style></style>

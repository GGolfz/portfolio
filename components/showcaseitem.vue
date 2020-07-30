<template>
  <el-row style="width:100%">
      <el-col :span="24">
          <img src="group1.png" width="100%">
      </el-col>
      <el-col :span="24" class="showcase-item-title" style="text-align:start">
          Title หัวข้อ
      </el-col>
      <el-col :span="24" class="showcase-item-description" style="text-align:start">
          Description รายละเอียดDescription รายละเอียดDescription รายละเอียด
      </el-col>
  </el-row>
</template>

<script>
export default {

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
</style>
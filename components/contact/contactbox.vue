<template>
  <a :href="`${data.prefix}${data.value}`">
  <el-card :class="dark?'dark-contact contact-card':'light-contact contact-card'">
    <el-row>
      <el-col :span="24">
        <span class="contact-card-title">{{ data.name }}</span>
        <i :class="`fab fa-${data.icon}`" :style="dark?`color:${data.darkcolor}`:`color:${data.lightcolor}`"></i>
      </el-col>
      <el-col :span="24">
        <span>{{data.value}}</span>
      </el-col>
    </el-row>
  </el-card>
  </a>
</template>

<script>
export default {
  props: {
    data: Object,
    dark: Boolean
  },
}
</script>

<style>
@media only screen and (max-width: 767px) {
  .contact-card {
    text-align: left;
    padding: 4%;
    font-size: 1.2em;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-card {
    text-align: left;
    padding: 4%;
    font-size: 1.3em;
  }
}
@media only screen and (min-width: 992px) {
  .contact-card {
    text-align: left;
    padding: 4%;
    font-size: 1.4em;
  }
}
.contact-card {
    font-family: 'Titillium Web', sans-serif;
    opacity: 0.75;
    transition: opacity 0.3s;
    border-radius: 10px;
}
.contact-card:hover{
    opacity: 1;
}
.dark-contact .contact-card {
    background: #212121;
    border: 1px solid #333333;
    color: #f2f2f2;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.7);
}
.light-contact .contact-card {
    background: #F7F7F7;
    border: 1px solid #EBEEF5;
    color:#303030;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.7);
}
.contact-card-title {
    font-weight: 600;
}
.el-card__body {
  padding: 0px;
}
</style>

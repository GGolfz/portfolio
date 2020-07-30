<template>
  <footer :class="dark?'dark-footer footer':'light-footer footer'">
      <div style="width:100%">
        All right reserved © by GGolfz
        <span v-for="(data,index) of contact" :key="index" class="footer-icon">
            <a :href="`${data.prefix}${data.value}`">
            <i :class="`fab fa-${data.icon}`" :style="dark?`color:${darkcolor}`:`color:${lightcolor}`"></i>
            </a>
        </span>
      </div>
  </footer>
</template>

<script>
export default {
    props: {
        dark:Boolean
    },
    data() {
        return{
            lightcolor: "#24292ECC",
            darkcolor: "#EBEEF5AA",
            contact:[
                {
                    icon: "facebook",
                    value: "fb.me/ggolfz.wsr",
                    prefix: "https://"
                },
                {
                    icon: "google-plus",
                    value: "info.ggolfz@gmail.com",
                    prefix: "mailto:"
                },
                {
                    icon: "linkedin",
                    value: "linkedin.com/in/ggolfz",
                    prefix: "https://"
                },
                {
                    icon: "github",
                    value: "github.com/ggolfz",
                    prefix: "https://"
                }]
        }
    }
}
</script>

<style>
@media only screen and (max-width: 767px) {
    .footer {
        font-size: 1em !important;
    }
}
.footer {
    width: 100%;
    height: 100px;
    padding: 0% 5%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em
}
.footer-icon {
    padding:0% 1%;
}
.dark-footer {
    background: #0a0a0a;
    color:#f8f8f8;
}
.light-footer {
    background: #efefef;
    color: #2f2f2f;
}
</style>
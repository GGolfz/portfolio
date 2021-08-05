<template>
  <el-row :class="dark?'dark-contact card-contact':'light-contact card-contact'">
      <el-col :xs="24" class="contact-title contact-title-mobile">
          Contact
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" class="contact-banner">
          <picture>
            <source type="image/webp" srcset="contact.webp">
            <source type="image/png" srcset="contact.png">
            <img width="100%" src="contact.png" alt="contact" />
          </picture>
      </el-col>
      <el-col :xs="24" :sm="12" :md="16">
          <el-row>
              <el-col :span="24" class="contact-title contact-title-desktop">
                  Contact
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" v-for="(data,index) in contacts" :key="index" class="contact-list">
                  <Contactbox :data="data" :dark="dark"/>
              </el-col>
          </el-row>
      </el-col>
  </el-row>
</template>

<script>
import Contactbox from './contactbox'
export default {
    data() {
        return {
            contacts: [
                {
                    name: "Facebook",
                    icon: "facebook",
                    value: "fb.me/ggolfz.wsr",
                    lightcolor: "#4267B2",
                    darkcolor: "#3b5998",
                    prefix: "https://"
                },
                {
                    name: "Email Address",
                    icon: "google-plus",
                    value: "info.ggolfz@gmail.com",
                    lightcolor: "#D44638",
                    darkcolor: "#D44638",
                    prefix: "mailto:"
                },
                {
                    name: "LinkedIn",
                    icon: "linkedin",
                    value: "linkedin.com/in/ggolfz",
                    lightcolor: "#0077b5",
                    darkcolor: "#0077b5",
                    prefix: "https://"
                },
                {
                    name: "Github",
                    icon: "github",
                    value: "github.com/ggolfz",
                    lightcolor: "#24292e",
                    darkcolor: "#f6f8fa",
                    prefix: "https://"
                }
            ]
        }
    },
    components: {
        Contactbox
    },
    props: {
        dark: Boolean
    }
}
</script>

<style>
@media only screen and (max-width: 767px) {
    .contact-banner {
        padding: 0% 15% 5% 15%;
    }
    .contact-title-mobile {
        display: block;
    }
    .contact-title-desktop {
        display: none;
    }
    .contact-title {
        font-size: 3em;
        font-family: 'Titillium Web', sans-serif;
        padding: 2% 0% 3% 0%;
    }
    .contact-list {
        padding: 0% 8% 5% 8%;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .contact-banner {
        padding: 8%;
    }
    .contact-title-mobile {
        display: none;
    }
    .contact-title-desktop {
        display: block;
    }
    .contact-title {
        font-size: 2.7em;
        font-family: 'Titillium Web', sans-serif;
        padding: 2% 0% 3% 0%;
    }
    .contact-list {
        padding: 3%;
    }
    .card-contact {
        display: flex;
    }
}
@media only screen and (min-width: 992px) {
    .contact-banner {
        padding: 3%;
    }
    .contact-title-mobile {
        display: none;
    }
    .contact-title-desktop {
        display: block;
    }
    .contact-title {
        font-size: 3.5em;
        font-family: 'Titillium Web', sans-serif;
        padding: 2% 0% 3% 0%;
    }
    .contact-list {
        padding: 2%;
    }    
    .card-contact {
        display: flex;
    }
}
.dark-contact .contact-title{
    color:#f8f8f8;
}
.light-contact .contact-title{
    color:#2F2F2F;
}
.contact-title {
    cursor: default;
}
</style>
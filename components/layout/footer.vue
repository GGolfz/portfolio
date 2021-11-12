<template>
  <footer :class="dark ? 'dark-footer footer' : 'light-footer footer'">
    <div class="footer-content">
      <div class="footer-icon">
        <a
          class="webring-icon"
          href="https://webring.wonderful.software#ggolfz.me"
          title="วงแหวนเว็บ"
        >
          <img
            v-if="dark"
            alt="วงแหวนเว็บ"
            width="20"
            height="20"
            src="/webring.white.svg"
          />
          <img
            v-else
            alt="วงแหวนเว็บ"
            width="20"
            height="20"
            src="/webring.black.svg"
          />
        </a>
      </div>
      <div>All right reserved © by GGolfz</div>
      <div v-for="(data, index) of contact" :key="index" class="footer-icon">
        <a :href="`${data.prefix}${data.value}`" :aria-label="data.icon">
          <i
            :class="`fab fa-${data.icon}`"
            :style="dark ? `color:${darkcolor}` : `color:${lightcolor}`"
          ></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    dark: Boolean,
  },
  data() {
    return {
      lightcolor: '#24292ECC',
      darkcolor: '#EBEEF5AA',
      contact: [
        {
          icon: 'facebook',
          value: 'fb.me/ggolfz.wsr',
          prefix: 'https://',
        },
        {
          icon: 'google-plus',
          value: 'info.ggolfz@gmail.com',
          prefix: 'mailto:',
        },
        {
          icon: 'linkedin',
          value: 'linkedin.com/in/ggolfz',
          prefix: 'https://',
        },
        {
          icon: 'github',
          value: 'github.com/ggolfz',
          prefix: 'https://',
        },
      ],
    }
  },
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
  font-size: 1.2em;
}
.footer-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-icon {
  padding: 0% 1%;
}
.webring-icon {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
.footer-content {
  justify-content: space-between;
}
}

.dark-footer {
  background: #0a0a0a;
  color: #f8f8f8;
}
.light-footer {
  background: #efefef;
  color: #2f2f2f;
}
</style>

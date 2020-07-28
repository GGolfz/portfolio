<template>
  <div>
    <Nav :dark="val" class="desktop"/>
    <NavMobile :dark="val" class="mobile"/>
      <div :class="val?'light toggle':'dark toggle'">
        <svg v-if="val" @click="val=!val" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
        </svg>
        <svg v-else @click="val=!val" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
        </svg>
      </div>
      <router-view :dark="val" style="margin-top:80px" />
  </div>
</template>

<script>
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
export default {
  components:{
    Nav,NavMobile
  },
  data() {
    return {
      val: true
    }
  },
  mounted() {
    console.log(this.$content)
  }
}
</script>
<style>
@media only screen and (max-width: 600px) {
  .desktop{
    display: none !important;
  }
  .mobile {
    display: block;
  }
}
@media only screen and (min-width: 601px) {
  .desktop{
    display: flex;
  }
  .mobile {
    display: none;
  }
  
}

html {
  font-family: 'Montserrat', sans-serif, 'Titillium Web', sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.desktop,.mobile {
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  z-index: 1200;
}
.toggle {
  width: fit-content;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.5%;
  border-radius:50px;
  border: 1px solid #f8f8f855;
  display: flex;
  align-items: center;
  justify-items: center;
  cursor:pointer;
  z-index: 1000;
}
.light {
  background: #ffcc00ee;
}
.dark {
  background: #212121;
}

</style>

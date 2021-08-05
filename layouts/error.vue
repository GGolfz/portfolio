<template>
  <div>
    <Nav :dark="val" class="desktop" />
    <NavMobile :dark="val" class="mobile" />
    <div :class="val ? 'light toggle' : 'dark toggle'">
      <svg
        v-if="val"
        @click="val = !val"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#FFFFFF"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="4" />
        <path
          d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7"
        />
      </svg>
      <svg
        v-else
        @click="val = !val"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#FFFFFF"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
      </svg>
    </div>
    <main>
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink to="/">Home page</NuxtLink>
    </main>
    <Footer :dark="val" />
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>
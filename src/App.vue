<template>
  <div id="app">
    <app-card>
      <router-view />
    </app-card>
  </div>
</template>

<script>
import AppCard from './components/UI/AppCard.vue'

export default {
  name: 'App',
  components: {
    AppCard
  }
}
</script>

<style lang="scss">
body {
  background-color: #edeff1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: $app-max-width;
  margin: 60px auto;
  font-size: $font-size-standard;
  color: $text-color-standard;
  a {
    text-decoration: none; 
    color: inherit;
  }
  > .card {
    min-height: 60vh;
    overflow: hidden;
  }
  .back-arrow {
    cursor: pointer;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  #app > .card {
    max-width: initial;
    margin: 0 auto;
  }
}
</style>

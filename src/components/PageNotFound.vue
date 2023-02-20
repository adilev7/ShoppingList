<template>
  <div class="page-not-found">
    <back-to-home-button :style="{position: 'absolute', left: '1em', top: '1em'}" />
    <app-heading>404 Page Not Found</app-heading>
  </div>
</template>

<script>
import BackToHomeButton from './UI/BackToHomeButton.vue'
import AppHeading from './UI/AppHeading.vue'
export default {
  name: "PageNotFound",
  components: { AppHeading, BackToHomeButton },
}
</script>
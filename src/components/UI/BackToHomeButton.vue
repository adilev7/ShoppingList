<template>
  <router-link to="/" :style="style">
    <img class="back-arrow" src="../../assets/arrow.png" alt="Back" title="Back">
  </router-link>
</template>

<script>
export default {
  name: "BackToHomeButton",
  props: {
    style: Object
  }
}
</script>
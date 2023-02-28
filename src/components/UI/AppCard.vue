<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppCard"
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  max-width: $app-max-width;
  padding: 1em 2em;
  border-radius: 10px;
  box-shadow: $box-shadow-standard;
  background-color: #fff;
}
</style>
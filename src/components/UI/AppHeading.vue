<template>
  <h1>
    <slot />
  </h1>
</template>

<script>
export default {
  name: "AppHeading"
}
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
    font-size: $font-size-heading;
    margin-bottom: 1em;
  }
</style>
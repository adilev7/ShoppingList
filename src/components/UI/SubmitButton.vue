<template>
  <img @click.stop="clickHandler" :style="style" class="submit-arrow" src="../../assets/submit-arrow.png" alt="Submit" title="Submit">
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    style: Object,
  },
  methods: {
    clickHandler() {
      this.$emit('customClick');
    }
  }
}
</script>

<style lang="scss" scoped>
  .submit-arrow {
    cursor: pointer;
  }
</style>
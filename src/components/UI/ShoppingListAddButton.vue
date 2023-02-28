<template>
  <div class="add-product-button" @click="$emit('click')">
    <img src="../../assets/plus.png" alt="plus">
    <div class="add-product-text">Add Product</div>
  </div>  
</template>

<script>
export default {
  name: "ShoppingListAddButton"
}
</script>

<style lang="scss" scoped>
  .add-product-button {
    display: flex;
    align-items: center;
    gap: 1.8em;
    width: fit-content;
    margin-top: 4em;
    color: $orange;
    cursor: pointer;
    img {
      padding: 1em calc(1em + 10px);
    }
  }
</style>
<template>
  <li class="total-price">
    <div class="product-number">
      0
    </div>
    <div class="product-title-price">
      <div class="product-title">
        Total:
      </div>
      <div class="product-price">
        {{ totalPrice }}
      </div>
    </div>
    <div class="product-actions">
      <img src="../assets/edit.png" alt="Edit" title="Edit" />
      <img src="../assets/delete.png" alt="Delete" title="Delete" />
    </div>
  </li>
</template>

<script>
export default {
  name: "ShoppingListTotalPrice",
  props: ['totalPrice']
}
</script>

<style scoped lang="scss">
li {
  display: flex;
  align-items: center;
  gap: 1em;

  .product-number {
    visibility: hidden;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    border-right: $border-standard;
    padding: 0.5em 1em;
  }

  .product-title-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    *:first-child {
      margin-left: 1em;
    }

    *:last-child {
      margin-right: 1em;
    }
  }

  .product-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1em;
    visibility: hidden;

    * {
      padding: 0 1em;
      margin: 0.5em 0;

      &:not(:last-child) {
        border-right: $border-standard;
      }
    }
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  li {
    .product-title-price {
      *:first-child {
        margin-left: initial;
      }
      *:last-child {
        margin-right: initial;
      }
    }
  }
}
</style>
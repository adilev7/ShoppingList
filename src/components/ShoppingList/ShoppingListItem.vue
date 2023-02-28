<template>
  <router-link :to="`/product/${product.id}`">
    <li class="shopping-list-item">
      <input type="checkbox" :checked="product.isChecked" class="product-checkbox" @click.prevent="$emit('checkboxClick', product)">
      <div class="product-number">
        {{ index + 1 }}
      </div>
      <div class="product-title-price" :class="product.isChecked ? 'done' : ''">
        <div class="product-title">
          {{ product.title }}
        </div>
        <div class="product-price">
          {{ product.price }} NIS
        </div>
      </div>
      <div class="product-actions">
        <img src="../../assets/edit.png" alt="Edit" title="Edit" @click.prevent="editClickHandler" />
        <img src="../../assets/delete.png" alt="Delete" title="Delete" @click.prevent="deleteClickHandler" />
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'ShoppingListItem',
  emits: ['editClick', 'deleteClick', 'checkboxClick'],
  props: {
    product: Object,
    index: Number
  },
  methods: {
    editClickHandler() {
      this.$emit('editClick', this.product);
    },
    async deleteClickHandler() {
      this.$emit('deleteClick', this.product.id);
    }
  }
}
</script>

<style scoped lang="scss">
li {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;
  border-bottom: $border-standard;
  cursor: pointer;
  .product-checkbox {
    position: absolute;
    left: -1em;
    width: 1.1em;
    height: 1.1em;
    cursor: pointer;
  }
  .product-number {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    border-right: $border-standard;
    color: $orange;
    padding: 0.5em 1em;
  }

  .product-title-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &.done {
      position: relative;
      color: #B1B0B8;

      .product-title {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      &:after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: #E3E3E6;
      }
    }

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
    gap: 0.5em;
    .product-checkbox {
      left: -1.5em;
      width: 1em;
      height: 1em;
    }
    .product-number {
      font-size: 21px;
      padding: 0.5em;
    }
    .product-title-price {
      *:first-child {
        margin-left: initial;
      }
      *:last-child {
        margin-right: initial;
      }
    }
    .product-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 0.5em;

      * {
        padding: 0 0.5em;
        margin: 0.5em 0;
      }
    }
  }


  li {
    
    // .product-checkbox {
    //   position: absolute;
    //   left: -1em;
    //   width: 1.1em;
    //   height: 1.1em;
    //   cursor: pointer;
    // }

    
  }
}
</style>

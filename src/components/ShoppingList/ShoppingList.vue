<template>
  <div>
    <app-heading>Shopping List</app-heading>
    <ul class="shopping-list" v-if="products?.length">
      <shopping-list-item
        v-for="(product, index) in products"
        :key="product.id"
        :product="product"
        :index="index"
        @editClick="editClickHandler"
        @deleteClick="deleteClickHandler"
        @checkboxClick="checkboxClickHandler"
      />
      <shopping-list-total-price :totalPrice="totalPrice" />
    </ul>
    <div class="shopping-list-empty" v-else>
      {{ emptyShoppingListText }}
    </div>
    <shopping-list-add-button @click="modalOpenHandler" />
    <shopping-list-item-form
      :open="modalIsOpen"
      :formData="formData"
      @close="modalCloseHandler"
      @submit="submitHandler"
    />
  </div>
</template>

<script>
  import ShoppingListItem from "./ShoppingListItem.vue";
  import ShoppingListItemForm from "./ShoppingListItemForm.vue";
  import ShoppingListTotalPrice from "../ShoppingListTotalPrice.vue";
  import ShoppingListAddButton from "../ShoppingListAddButton.vue";
  import AppHeading from "../UI/AppHeading.vue";
  import { createUpdateShoppingListItem, deleteShoppingListItem, getShoppingList } from "../../services/ShoppingListService";

  const formDataInitialValue = {
    title: "",
    price: "",
    description: "",
  };

  export default {
    components: {
      AppHeading,
      ShoppingListItem,
      ShoppingListItemForm,
      ShoppingListTotalPrice,
      ShoppingListAddButton,
    },

    name: "ShoppingList",

    data() {
      return {
        isLoading: false,
        modalIsOpen: false,
        products: [],
        formData: formDataInitialValue,
      };
    },

    computed: {
      emptyShoppingListText() {
        return this.isLoading ? "Loading..." : "Your shopping list is empty.";
      },
      totalPrice() {
        const prices = this.products.map((product) => product.price);
        const priceSum = prices.reduce((acc, val) => acc + val, 0);
        return `${priceSum} NIS`;
      },
    },

    methods: {
      modalOpenHandler() {
        this.modalIsOpen = true;
      },

      modalCloseHandler() {
        this.modalIsOpen = false;
        this.formData = { ...formDataInitialValue };
      },

      editClickHandler(product) {
        this.formData = {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          isChecked: product.isChecked
        };
        this.modalOpenHandler();
      },

      async deleteClickHandler(id) {
        const newList = await deleteShoppingListItem(id);
        this.products = [...newList];
      },

      async checkboxClickHandler(product) {
        const newList = await createUpdateShoppingListItem({...product, isChecked: !product.isChecked });
        this.products = [...newList];
      },

      async submitHandler(newItem) {
        try {
          this.isLoading = true;
          const newList = await createUpdateShoppingListItem(newItem);
          this.products = [...newList];
          this.modalCloseHandler();
          this.isLoading = false;
        } catch (err) {
          console.log(err);
        }
      },
    },

    async created() {
      try {
        this.isLoading = true;
        this.products = await getShoppingList();
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    },
  };
</script>

<style scoped lang="scss">
  ul.shopping-list {
    list-style-type: none;
    padding: initial;
  }

  .shopping-list-empty {
    margin: 2em 0 1em;
    text-align: center;
  }
</style>

<template>
  <div class="shopping-list-item-details" v-if="emptyState">
    <p class="loading" v-if="isLoading">
      Loading...
    </p>
  </div>
  <div class="shopping-list-item-details" v-else>
    <back-to-home-button :style="{ position: 'absolute', left: '1em', top: '1em' }" />
    <app-heading>{{ product.title }}</app-heading>
    <p v-if="product.description?.length">
      {{ product.description }}
    </p>
  </div>
</template>

<script>
import { getShoppingListItem } from '../../services/ShoppingListService'
import BackToHomeButton from '../UI/BackToHomeButton.vue';
import AppHeading from '../UI/AppHeading.vue';
export default {
  components: { AppHeading, BackToHomeButton },
  name: "ShoppingListItemDetails",
  data() {
    return {
      isLoading: false,
      product: {}
    }
  },

  computed: {
    emptyState() {
      return Object.keys(this.product).length === 0;
    }
  },

  async created() {
    try {
      this.isLoading = true;
      this.product = await getShoppingListItem(this.$route.params.id);
      this.isLoading = false;
    } catch (err) {
      console.log(err);
      this.$router.replace('/PageNotFound');
    }
  }
}
</script>

<style scoped lang="scss">
p.loading {
  text-align: center;
}
</style>
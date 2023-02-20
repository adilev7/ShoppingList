<template>
  <app-card :class="open ? 'is-open' : ''">
    <img src="../../assets/times-circle.png" class="close" alt="close" title="close" @click="modalCloseHandler">

    <form class="shopping-list-item-form">
      <input type="text" placeholder="Name" v-model="title">
      <input type="number" min="0" placeholder="Price" v-model="price">
      <textarea rows="10" placeholder="Description" v-model="description" />
      <submit-button @click.prevent="submitHandler" class="submit-button" />
    </form>
    <div class="errorMessage" v-if="errorMessage">{{ errorMessage }}</div>
  </app-card>
</template>

<script>
import SubmitButton from '../UI/SubmitButton.vue';
import AppCard from '../UI/AppCard.vue';
import { generateID } from '@/utils';
export default {
  components: { SubmitButton, AppCard },
  name: "ShoppingListItemForm",
  emits: ['close', 'submit'],
  props: {
    open: Boolean,
    formData: {
      type: Object,
      default: () => ({
        title: "",
        price: "",
        description: "",
      })
    }
  },
  data() {
    return {
      id: this.formData.id,
      title: this.formData.title,
      price: this.formData.price,
      description: this.formData.description,
      isChecked: this.formData.isChecked,
      errorMessage: ''
    }
  },
  watch: {
    formData: {
      handler(newData) {
        this.id = newData.id;
        this.title = newData.title;
        this.price = newData.price;
        this.description = newData.description;
        this.isChecked = newData.isChecked;
      },
      deep: true
    }
  },
  methods: {
    modalCloseHandler() {
      this.$emit('close');
    },

    async submitHandler() {
      if (!this.title && this.price === "") {
        this.errorMessage = 'Please fill out the fields.';
        return;
      } else if (this.price <= 0) {
        this.errorMessage = 'Please provide a valid price.';
        return;
      }
      else if (!this.title) {
        this.errorMessage = 'Please provide a valid title.';
        return;
      }
      this.errorMessage = '';
      const newItem = {
        id: this.id || generateID(),
        title: this.title,
        description: this.description,
        price: this.price,
        isChecked: this.isChecked || false,
      }
      this.$emit('submit', newItem);
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80%;
  padding: 2em 2em 0;
  border-radius: initial;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(110%);
  transition: all 0.2s ease-in-out;

  &.is-open {
    transform: translateY(0);
  }

  .shopping-list-item-form {
    display: grid;
    grid-template: auto / 45% 45%;
    gap: 10%;

    input,
    textarea {
      border: initial;
      border-bottom: $border-standard;
      padding: 0.5em 1em;
    }

    textarea {
      grid-column: 1 / 3;
      resize: none;
      font-family: inherit;
    }

    .submit-button {
      position: absolute;
      right: 2em;
      bottom: 2em;
    }
  }

  .close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    cursor: pointer;
  }

  .errorMessage {
    position: absolute;
    left: 2em;
    bottom: 2em;
    color: rgb(255, 84, 84);
  }
}
</style>
import { createRouter, createWebHistory } from 'vue-router';
import ShoppingList from '../components/ShoppingList/ShoppingList';
import ShoppingListItemDetails from '../components/ShoppingList/ShoppingListItemDetails';
import PageNotFound from '../components/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'ShoppingList',
    component: ShoppingList,
  },
  {
    path: '/product/:id',
    name: 'ShoppingListItemDetails',
    component: ShoppingListItemDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
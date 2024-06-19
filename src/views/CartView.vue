<template>
  <div class="container">
    <h1>Shopping Cart</h1>
    <div class="cart">
      <div v-for="item in carts" :key="item.userId" class="cart-item">
        <div class="item-image">
          <img :src="`/${item.itemPicturePath}`" :alt="`${item.itemPicturePath}`">
        </div>
        <div class="item-details">
          <h3>{{ item.itemName }}</h3>
          <p class="price">Price: ${{ item.itemPrice }}</p>
          <p>Quantity: <input type="number" v-model="item.quantity" min="1"></p>
        </div>
        <button @click="removeItem(item.itemId)" class="remove-btn">Remove</button>
      </div>
    </div>
    <div class="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: ${{ totalPrice }}</p>
      <button class="checkout-btn">Checkout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import type { Cart } from '@/types/Cart';
import { useToast } from 'vue-toast-notification';

const toast = useToast();

const carts = ref<Cart[]>([]);

onMounted(async () => {
  try {
    const { data: allItems } = await axios.get<Cart[]>('http://localhost:5104/api/Cart/GetItemsFromCart');
    carts.value = allItems;
  } catch (e) {
    console.error(e);
  }
});

const token = localStorage.getItem('token');

async function removeItem(itemId: number) {
  try {
    const response = await axios.delete('http://localhost:5104/api/Cart/RemoveFromCart', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: {
        itemId: itemId
      }
    });

    toast.success('proizvod je obrisan iz korpe')

    carts.value = carts.value.filter(item => item.itemId !== itemId);
    
    return response.data;
  } catch (error) {
    console.error('Greška prilikom brisanja proizvoda iz korpe:');
    throw error;
  }
}

// Izračunavanje ukupnog broja proizvoda
const totalItems = computed(() => {
  return carts.value.reduce((total, item) => total + item.quantity, 0);
});

// Izračunavanje ukupne cene
const totalPrice = computed(() => {
  return carts.value.reduce((total, item) => total + (item.itemPrice * item.quantity), 0);
});

</script>

<style scoped>
@import "../assets/cart.css";
</style>

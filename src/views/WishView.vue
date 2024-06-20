<template>
  <div class="wrapper">
      <div class="container">
          <h1>Wishlist</h1>
          <div class="cart">
              <div v-for="item in wishs" :key="item.userId" class="cart-item">
                  <div class="item-image">
                      <img :src="`/${item.itemPicturePath}`" :alt="`${item.itemPicturePath}`">
                  </div>
                  <div class="item-details">
                      <h3>{{ item.itemName }}</h3>
                      <p class="price">Price: ${{ item.itemPrice }}</p>
                  </div>
                  <button @click="removeItem(item.itemId)" class="remove-btn">Remove</button>
                  <button @click="addToWishlist(item.itemId)" class="add-btn">Dodaj u korpu</button>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios, { AxiosError } from 'axios';
import type { Wish } from '@/types/Wish';
import type { Item } from '@/types/Item';
import { useToast } from 'vue-toast-notification';

const toast = useToast();

const wishs = ref<Wish[]>([]);
const items = ref<Item[]>([]);

const data = ref({
itemName: '',
itemPicturePath: '',
itemPrice: null,
});

onMounted(async () => {
try {
  const { data: allItems } = await axios.get<Wish[]>('http://localhost:5104/api/Wish/GetItemsFromWishlist');
  wishs.value = allItems;
  console.log(wishs.value)
} catch (e) {
  console.error(e);
}
});

async function addToWishlist(itemId: number) {
  try {
      const token = JSON.parse(JSON.stringify(localStorage.getItem('token')) || '{}');
      const response = await axios.post('http://localhost:5104/api/Cart/AddToCart', { itemId }, {
          headers: {
              Authorization: `Bearer ${token}` 
          }
      });
      toast.success('proizvod dodat u korpu')
  } catch (error) {
      if(error instanceof AxiosError)
      console.log('Greška prilikom dodavanja proizvoda u korpu:', error.response?.data);
  }
}

const token = localStorage.getItem('token');

async function removeItem(itemId: number) {
try {
  const response = await axios.delete('http://localhost:5104/api/Wish/RemoveFromWishlist', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    data: {
      itemId: itemId
    }
  });

  toast.success('proizvod je obrisan iz liste zelja')

  wishs.value = wishs.value.filter(item => item.itemId !== itemId);
  
  return response.data;
} catch (error) {
  console.error('Greška prilikom brisanja proizvoda iz korpe:');
  throw error;
}
}

</script>

<style scoped>
@import "../assets/cart.css";
</style>
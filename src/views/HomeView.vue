<template>
  <div class="container">
    <div id="div-search">
        <input type="text" placeholder="Pretraga...">
        <button>Pretraži</button>
    </div>
    <div id="shop-page">
      <aside>
        <h2>Filteri</h2>
        <!-- Dodajte filtere ovde -->
      </aside>
      <main>
          <!-- <div class="product" v-for="item in items" :key="item.itemId">
            <img :src="`/${item.picturePath}`" :alt="`${item.picturePath}`">
            <h2>{{ item.name }}</h2>
            <p>Opis proizvoda 1</p>
            <p>Cena: {{ item.price }}</p>
            <p>Veličina: {{ item.size }}</p>
            <button>Kupi</button>
          </div> -->
          <div class='product'>
            <img src="/slika1.jpg" alt="Proizvod 1">
            <h2>Naziv proizvoda 1</h2>
            <p>Opis proizvoda 1</p>
            <p>Cena: $20</p>
            <p>Veličina: M</p>
            <button>Kupi</button>
          </div>
          <div class='product'>
            <img src="/slika1.jpg" alt="Proizvod 1">
            <h2>Naziv proizvoda 1</h2>
            <p>Opis proizvoda 1</p>
            <p>Cena: $20</p>
            <p>Veličina: M</p>
            <button>Kupi</button>
          </div>
          <div class='product'>
            <img src="/slika1.jpg" alt="Proizvod 1">
            <h2>Naziv proizvoda 1</h2>
            <p>Opis proizvoda 1</p>
            <p>Cena: $20</p>
            <p>Veličina: M</p>
            <button>Kupi</button>
          </div>
          <div class='product'>
            <img src="/slika1.jpg" alt="Proizvod 1">
            <h2>Naziv proizvoda 1</h2>
            <p>Opis proizvoda 1</p>
            <p>Cena: $20</p>
            <p>Veličina: M</p>
            <button>Kupi</button>
          </div>
      </main>
    </div>
  </div>
  <footer>
    <p>&copy; 2024 Mili Shop. Sva prava zadržana.</p>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import type { Item } from '@/types/Item';
const items = ref<Item[]>([]);

const data = ref({
  name: '',
  type: '',
  size: '',
  manufacturer: '',
  dateAdded: '',
  price: null,
  picturePath: ''
});

(async () => {
  try {
    const { data: allItems } = await axios.get<Item[]>('http://localhost:5104/api/Item/GetItems');
    items.value = allItems
  } catch (e) {
  }
})() //imidiatly envoke function
// import { ref, onMounted } from 'vue';
// import axios from 'axios';
// import type { User } from '@/types/User';
// const users = ref<User[]>([]);
// const fetchUsers = async () => {
//   try {
//     const { data } = await axios.get<User[]>('https://localhost:7062/api/User/GetUsers');
//     users.value = data; 
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// };

// onMounted(() => {
//   fetchUsers()
// } 
// );
</script>

<style scoped>
  @import "../assets/home.css";
</style>

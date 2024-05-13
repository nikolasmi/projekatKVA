<template>
  <div class="container">
    <aside>
      <h2>Filteri</h2>
      <!-- Dodajte filtere ovde -->
    </aside>
    <main>
      <div id="div-search">
        <input type="text" placeholder="Pretraga...">
        <button>Pretraži</button>
      </div>
      <div class="products">
        <div class='product'>
          <img src="/majica1.jpg" alt="Proizvod 1">
          <h2>Naziv proizvoda 1</h2>
          <p>Opis proizvoda 1</p>
          <p>Cena: $20</p>
          <p>Veličina: M</p>
          <button>Kupi</button>
        </div>
        <!-- Dodajte ostale proizvode -->
        <div class='product'>
          <img src="./majica2.jpg" alt="Proizvod 2">
          <h2>Naziv proizvoda 2</h2>
          <p>Opis proizvoda 2</p>
          <p>Cena: $30</p>
          <p>Veličina: L</p>
          <button>Kupi</button>
        </div>
        <div class='product'>
          <img src="./pantalone.jpg" alt="Proizvod 3">
          <h2>Naziv proizvoda 3</h2>
          <p>Opis proizvoda 3</p>
          <p>Cena: $40</p>
          <p>Veličina: S</p>
          <button>Kupi</button>
        </div>
      </div>
    </main>
  </div>

  <footer>
    <p>&copy; 2024 Mili Shop. Sva prava zadržana.</p>
  </footer>
</template>

<script setup lang="ts">
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

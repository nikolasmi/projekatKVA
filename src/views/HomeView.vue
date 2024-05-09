<template>
  <header>
    <a href="http://localhost:5173/"><h1>MILI SHOP</h1></a>
    <div id="div-search">
      <input type="text" placeholder="Pretraga...">
      <button>Pretraži</button>
    </div>
    <div id="div-register">
      <a href="http://localhost:5173/register"><img alt="register-icon" src="/icons8-register-32 (1).png"></a>
      <p>registracija</p>
    </div>
    <div id="div-log-in">
      <a href="http://localhost:5173/"><img alt="register-icon" src="/icons8-log-in-30.png"></a>
      <p>prijava</p>
    </div>
    <div id="div-cart">
      <a><img alt="register-icon" src="/icons8-cart-30.png"></a>
      <p>korpa</p>
    </div>
  </header>

  <div class="container">
    <aside>
      <h2>Filteri</h2>
      <!-- Dodajte filtere ovde -->
    </aside>

    <main>
      <div class="products">
        <!-- Dodajte prikaz proizvoda ovde -->
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

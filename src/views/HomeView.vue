<template>
  <div class="container">
    <aside>
      <h2>Filteri</h2>
      <!-- Dodajte filtere ovde -->
    </aside>

    <main>
      <div class="products">
        <!-- Dodajte prikaz proizvoda ovde -->
        <div id="div-search">
      <input type="text" placeholder="Pretraga...">
      <button>Pretraži</button>
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

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
        <form id="filter-form">
            <!-- Proizvođač Deo -->
            <div class="filter-group">
                <label>Proizvođač</label>
                <div>
                    <input type="checkbox" id="nike" name="proizvodjac" value="nike">
                    <label for="nike">Nike</label>
                </div>
                <div>
                    <input type="checkbox" id="adidas" name="proizvodjac" value="adidas">
                    <label for="adidas">Adidas</label>
                </div>
                <div>
                    <input type="checkbox" id="puma" name="proizvodjac" value="puma">
                    <label for="puma">Puma</label>
                </div>
                <div>
                    <input type="checkbox" id="reebok" name="proizvodjac" value="reebok">
                    <label for="reebok">Reebok</label>
                </div>
            </div>
            
            <!-- Veličina -->
            <div class="filter-group">
                <label>Veličina</label>
                <div>
                    <input type="checkbox" id="s" name="velicina" value="s">
                    <label for="s">S</label>
                </div>
                <div>
                    <input type="checkbox" id="m" name="velicina" value="m">
                    <label for="m">M</label>
                </div>
                <div>
                    <input type="checkbox" id="l" name="velicina" value="l">
                    <label for="l">L</label>
                </div>
                <div>
                    <input type="checkbox" id="xl" name="velicina" value="xl">
                    <label for="xl">XL</label>
                </div>
            </div>
            
            <!-- Proizvod -->
            <div class="filter-group">
                <label>Proizvod</label>
                <div>
                    <input type="checkbox" id="majica" name="proizvod" value="majica">
                    <label for="majica">Majica</label>
                </div>
                <div>
                    <input type="checkbox" id="sorc" name="proizvod" value="sorc">
                    <label for="sorc">Šorc</label>
                </div>
                <div>
                    <input type="checkbox" id="patike" name="proizvod" value="patike">
                    <label for="patike">Patike</label>
                </div>
            </div>
            
            <!-- Cena -->
            <div class="filter-group">
                <label for="cena">Cena</label>
                <input type="number" id="cena" name="cena" placeholder="Unesite maksimalnu cenu">
            </div>
            
            <button type="submit">Primeni filtere</button>
        </form>
      </aside>
      <main>
         <!-- <div class="product" v-for="item in Items" :key="item.itemId">
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
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import axios from 'axios';
import type { Item } from '@/types/Item';
const items = ref<Item[]>([]);
const filteredItems = ref<Item[]>([]);

const data = ref({
  name: '',
  type: '',
  size: '',
  manufacturer: '',
  dateAdded: '',
  price: null,
  picturePath: ''
});

const filterData = ref({
  manufacturer: '',
  type: '',
  size: '',
  price: null,
});

// async function submitForm(){
//   try {
//     const { data: user } = await axios.post('http://localhost:5104/api/User/AddUser', data.value);
//     console.log(user);
//   } catch (e) {
//   }
// }

// async function submitFilter(){
//   try {
//     const { filterData: filteredItems } = await axios.post('http://localhost:5104/api/User/AddUser', filterData.value);
//     console.log(filteredItems);
//   } catch (e) {
//   }
// }

(async () => {
  try {
    const { data: allItems } = await axios.get<Item[]>('http://localhost:5104/api/Item/GetItems');
    items.value = allItems
  } catch (e) {
  }
})() //imidiatly invoke function
</script>

<style scoped>
  @import "../assets/home.css";
</style>

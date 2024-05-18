<template>
  <div class="container">
    <div id="div-search">
        <input type="text" placeholder="Pretraga...">
        <button>Pretraži</button>
    </div>
    <div id="shop-page">
      <aside>
        <h2>Filteri</h2>
        <form id="filter-form" @submit.prevent="submitFilter">
            <div class="filter-group">
                <label>Proizvođač</label>
                <div>
                    <input type="checkbox" id="nike" name="proizvodjac" value="nike" v-model="filterData.manufacturer">
                    <label for="nike">Nike</label>
                </div>
                <div>
                    <input type="checkbox" id="adidas" name="proizvodjac" value="adidas" v-model="filterData.manufacturer">
                    <label for="adidas">Adidas</label>
                </div>
                <div>
                    <input type="checkbox" id="puma" name="proizvodjac" value="puma" v-model="filterData.manufacturer">
                    <label for="puma">Puma</label>
                </div>
                <div>
                    <input type="checkbox" id="reebok" name="proizvodjac" value="reebok" v-model="filterData.manufacturer">
                    <label for="reebok">Reebok</label>
                </div>
            </div>
            <div class="filter-group">
                <label>Veličina</label>
                <div>
                    <input type="checkbox" id="s" name="velicina" value="s" v-model="filterData.size">
                    <label for="s">S</label>
                </div>
                <div>
                    <input type="checkbox" id="m" name="velicina" value="m" v-model="filterData.size">
                    <label for="m">M</label>
                </div>
                <div>
                    <input type="checkbox" id="l" name="velicina" value="l" v-model="filterData.size">
                    <label for="l">L</label>
                </div>
                <div>
                    <input type="checkbox" id="xl" name="velicina" value="xl" v-model="filterData.size">
                    <label for="xl">XL</label>
                </div>
            </div>
            <div class="filter-group">
                <label>Proizvod</label>
                <div>
                    <input type="checkbox" id="majica" name="proizvod" value="majica" v-model="filterData.type">
                    <label for="majica">Majica</label>
                </div>
                <div>
                    <input type="checkbox" id="sorc" name="proizvod" value="sorc" v-model="filterData.type">
                    <label for="sorc">Šorc</label>
                </div>
                <div>
                    <input type="checkbox" id="patike" name="proizvod" value="patike" v-model="filterData.type">
                    <label for="patike">Patike</label>
                </div>
            </div>
            <div class="filter-group">
                <label for="cena">Cena</label>
                <input type="number" id="cena" name="cena" placeholder="Unesite maksimalnu cenu" v-model.number="filterData.price">
            </div>
            
            <button type="submit">Primeni filtere</button>
        </form>
      </aside>
      <main>
          <div class="product" v-for="item in filteredItems.length ? filteredItems : items" :key="item.itemId">
            <img :src="`/${item.picturePath}`" :alt="`${item.picturePath}`">
            <h2>{{ item.name }}</h2>
            <p>Opis proizvoda 1</p>
            <p>Cena: {{ item.price }}</p>
            <p>Veličina: {{ item.size }}</p>
            <button>Kupi</button>
          </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
  manufacturer: [],
  type: [],
  size: [],
  price: null,
});

onMounted(async () => {
  try {
    const { data: allItems } = await axios.get<Item[]>('http://localhost:5104/api/Item/GetItems');
    items.value = allItems;
  } catch (e) {
    console.error(e);
  }
});

async function submitFilter(){
  try {
    const response = await axios.get('http://localhost:5104/api/Item/GetFilterItem', {
      params: {
        manufacturer: filterData.value.manufacturer.join(','),
        type: filterData.value.type.join(','),
        size: filterData.value.size.join(','),
        price: filterData.value.price
      }
    });
    filteredItems.value = response.data;
    console.log(filteredItems.value);
  } catch (e) {
    console.error(e);
  }
}
</script>

<style scoped>
  @import "../assets/home.css";
</style>

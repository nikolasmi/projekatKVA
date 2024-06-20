<template>
  <div class="container">
    <div id="div-search">
      <input type="text" placeholder="Pretraga..." v-model="searchTerm" @input="filterItems">
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
                <label>Tip</label>
                <div>
                    <input type="checkbox" id="majica" name="proizvod" value="casual" v-model="filterData.type">
                    <label for="casual">Casual</label>
                </div>
                <div>
                    <input type="checkbox" id="sorc" name="proizvod" value="sport" v-model="filterData.type">
                    <label for="sport">Sport</label>
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
            <p>{{ item.manufacturer }}</p>
            <p>Cena: {{ item.price }}$</p>
            <p>Veličina: {{ item.size }}</p>
            <p>Tip-odece: {{ item.type }}</p>
            <button @click="addToCart(item.itemId)">Kupi</button>
            <button id="wish" @click="addToWishlist(item.itemId)" v-show="!item.inWishList">★</button>
            <button id="wish" @click="addToWishlist(item.itemId)" v-show="item.inWishList">Ukloni iz liste zelja</button>
          </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios, { AxiosError } from 'axios';
import type { Item } from '@/types/Item';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import type { Wish } from '@/types/Wish';

const items = ref<Item[]>([]);
const filteredItems = ref<Item[]>([]);
const toast = useToast();

const filterData = ref({
  manufacturer: [],
  type: [],
  size: [],
  price: null,
});

(async () => {
  try {
    const apiAllItems = axios.get<Item[]>('http://localhost:5104/api/Item/GetItems');
    const apiItemsInWishList = axios.get<Wish[]>('http://localhost:5104/api/Wish/GetItemsFromWishlist');
    const [allItems, itemsInWishList] = await Promise.all([apiAllItems, apiItemsInWishList])
    if (allItems.data && itemsInWishList.data) {
       const map: Record<number , string> = {};
       itemsInWishList.data.forEach((product) => map[product.itemId] = product.itemName);
       items.value = allItems.data.map((item) => map[item.itemId] ? ({ ...item, inWishList: true }) : ({ ...item, inWishList: false }) )
    }
  } catch (e) {
    console.error(e);
  }
})();

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
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error('Ne postoji predmet');
    } else {
      console.error(error);
      toast.error('Došlo je do greške prilikom pretrage predmeta');
    }
  }
}

async function addToCart(itemId: number) {
    try {
        const token = JSON.parse(JSON.stringify(localStorage.getItem('token')) || '{}');
        await axios.post('http://localhost:5104/api/Cart/AddToCart', { itemId });
        toast.success('Proizvod dodat u korpu')
    } catch (error) {
        if(error instanceof AxiosError)
        console.log('Greška prilikom dodavanja proizvoda u korpu:', error.response?.data);
    }
}

async function addToWishlist(itemId: number) {
    try {
        const token = JSON.parse(JSON.stringify(localStorage.getItem('token')) || '{}');
        const response = await axios.post('http://localhost:5104/api/Wish/AddToWishlist', { itemId });
        items.value = items.value.map((item) => item.itemId === itemId ? {...item, inWishList: true} : item);
        toast.success('Proizvod dodat u listu zelja')
    } catch (error) {
        if(error instanceof AxiosError)
        console.log('Greška prilikom dodavanja proizvoda u listu zelja:', error.response?.data);
    }
}

const searchTerm = ref('');

function filterItems() {
  const search = searchTerm.value.toLowerCase();
  if (!search) {
    filteredItems.value = [...items.value];
  } else {
    filteredItems.value = items.value.filter(item =>
      item.name.toLowerCase().includes(search)
    );
  }
}
</script>

<style scoped>
  @import "../assets/home.css";
</style>

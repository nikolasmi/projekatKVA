<template>
  <div class="container">
    <form @submit.prevent="submitForm()" class="registration-form">
      <h2>Registracija</h2>
      <div class="form-group">
        <label for="name">Ime:</label>
        <input v-model="data.name" type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="surname">Prezime:</label>
        <input v-model="data.surname" type="text" id="surname" name="surname" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="data.email" type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Telefon:</label>
        <input v-model="data.phone" type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="address">Adresa:</label>
        <input v-model="data.address" type="text" id="address" name="address" required>
      </div>
      <div class="form-group">
        <label for="favoriteItems">Omiljeni predmeti (broj):</label>
        <input v-model="data.favouriteItems" type="number" id="favoriteItems" name="favoriteItems" required>
      </div>
      <div class="form-group">
        <label for="username">Korisničko ime:</label>
        <input v-model="data.username" type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="password">Lozinka:</label>
        <input v-model="data.password" type="password" id="password" name="password" required>
      </div>
      <button type="submit">Registracija</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';
import axios, { AxiosError } from 'axios';
import type { User } from '@/types/User';
import { useToast } from 'vue-toast-notification';

const data = ref({
  name: '',
  surname: '',
  email: '',
  phone: '',
  address: '',
  favouriteItems: null,
  username: '',
  password: ''
});
const toast = useToast();
async function submitForm(){
  try {
    const { data: user } = await axios.post('http://localhost:5104/api/User/AddUser', data.value);
    toast.success('uspesno registrovan')
  } catch (e) {
  }
}

</script>

<style scoped>
  @import "../assets/register.css";
</style>
















<!-- <div class="form-group">
        <label for="firstName">Ime:</label>
        <input v-model="data.name" type="text" id="name" name="name">
        <template v-if="error">
         <p v-for="field in error.name" class="error" :key="field">{{ field }}</p>
        </template>
      </div>
      <div class="form-group">
        <label for="surname">Prezime:</label>
        <input v-model="data.surname" type="text" id="surname" name="surname">
        <template v-if="error">
        <p v-for="field in error.surname" class="error" :key="field">{{ field }}</p>
        </template>
      </div> -->
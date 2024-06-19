<template>
  <div id="wraper">
  <div class="container">
      <form @submit.prevent="submitForm()" class="login-form">
        <h2>Login</h2>
        <p>ulogujte se kako biste videli listu zelja i korpu</p>
        <div class="form-group">
        <label for="username">Korisničko ime:</label>
        <input v-model="data.username" type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
        <label for="password">Lozinka:</label>
        <input v-model="data.password" type="password" id="password" name="password" required>
    </div>
          <button type="submit">Prijava</button>
      </form>
  </div>
</div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '../router';
import { useToast } from 'vue-toast-notification';

const data = ref({
  username: '',
  password: ''
});

const toast = useToast();

async function submitForm() {
  try {
    const { data: token } = await axios.post('http://localhost:5104/api/Korisnik/Login', data.value);
    localStorage.setItem('token', token);
    
    setTimeout(() => {
      localStorage.removeItem('token');
      router.push({ name: 'login' });
      toast.error('Istekla sesija');
    }, 600000);
    
    toast.success('Dobrodošli');
    router.push('/')
  } catch (error) {
    toast.error('Pogrešno korisničko ime ili lozinka');
  }
}
</script>

<style scoped>
.container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
    margin-top: 15px;
  }

  p{
    margin-top: 5px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: calc(100% - 16px);
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: rgb(0,0,0);
  }
</style>
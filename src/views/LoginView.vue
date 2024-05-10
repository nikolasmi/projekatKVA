<template>
    <div class="container">
        <form @submit.prevent="submitForm()" class="login-form">
          <h2>Login</h2>
            
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
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'

const router = useRouter();

const data = ref({
  username: '',
  password: ''
});

async function submitForm(){
  try {
    const { data: token } = await axios.post('http://localhost:5104/api/Korisnik/Login', data.value);
    localStorage.setItem('token', token);
    
    setTimeout(() => {
          localStorage.removeItem('token');
          router.push({ name: 'login' });
        }, 60000);
  } catch (e) {
  }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }
  
.container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  header h1{
    margin-top: auto;
    margin-bottom: auto;
  }

  header a{
    text-decoration: none;
    color: #fff;
  }

  #div-log-in{
    margin-top: auto;
    margin-bottom: auto;
  }

  #div-login a, #div-login p{
    cursor: pointer;
  }

  #div-cart{
    margin-top: auto;
    margin-bottom: auto;
  }

  #div-cart a, #div-cart p{
    cursor: pointer;
  } 
  
  .login-form {
    text-align: center;
  }
  
  
  .form-group {
    margin-bottom: 20px;
    margin-top: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="number"],
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
  
  button:hover {
    background-color: #0056b3;
 }
</style>
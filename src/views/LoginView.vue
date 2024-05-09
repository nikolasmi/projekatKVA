<template>
    <header>
    <link rel="stylesheet" href="style.css">
    <a href="http://localhost:5173/"><h1>MILI SHOP</h1></a>
    <div></div>
    <div></div>
    <div id="div-log-in">
        <a href="http://localhost:5173/"><img alt="login-icon" src="/icons8-log-in-30.png"></a>
        <p>prijava</p>
    </div>
    <div id="div-cart">
        <a><img alt="login-icon" src="/icons8-cart-30.png"></a>
        <p>korpa</p>
    </div>
    </header>
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
            <button type="submit">Registracija</button>
        </form>
    </div>
</template>

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
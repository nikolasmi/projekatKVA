<template>
    <header>
    <router-link to="/"><h1>MILI SHOP</h1></router-link>
    <div id="div-register">
        <router-link to="/register"><img alt="login-icon" src="/icons8-register-32 (1).png"></router-link>
        <p>registracija</p>
    </div>
    <div id="div-log-in">
        <router-link to="/login"><img alt="login-icon" src="/icons8-log-in-30.png"></router-link>
        <p>prijava</p>
    </div>
    <div id="div-cart">
        <router-link to="/"><img alt="login-icon" src="/icons8-cart-30.png"></router-link>
        <p>korpa</p>
    </div>
    </header>
</template>

<style scoped>
    @import "../assets/home.css";
</style>
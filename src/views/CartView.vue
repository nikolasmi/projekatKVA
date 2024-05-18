<template>
    <div class="container">
        <h1>Shopping Cart</h1>
        <div class="cart">
            <div class="cart-item">
                <div class="item-image">
                    <img src="https://via.placeholder.com/100" alt="Item 1">
                </div>
                <div class="item-details">
                    <h3>Item 1</h3>
                    <p class="price">Price: $10</p>
                    <p>Quantity: <input type="number" value="1" min="1"></p>
                </div>
                <button class="remove-btn">Remove</button>
            </div>
            <div class="cart-item">
                <div class="item-image">
                    <img src="https://via.placeholder.com/100" alt="Item 2">
                </div>
                <div class="item-details">
                    <h3>Item 2</h3>
                    <p class="price">Price: $15</p>
                    <p>Quantity: <input type="number" value="1" min="1"></p>
                </div>
                <button class="remove-btn">Remove</button>
            </div>
        </div>
        <div class="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: 2</p>
            <p>Total Price: $25</p>
            <button class="checkout-btn">Checkout</button>
        </div>
    </div>
</template>

<style scoped>
    @import "../assets/cart.css";
</style>
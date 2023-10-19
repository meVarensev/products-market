<script setup lang="ts"></script>

<template>
    <header>
        <p>header</p>
        <router-link class="link" to="checkout-main">В корзину</router-link>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;

    & .link {
        text-decoration: none;
        margin-top: 18.5px;
        font: 600 17px Montserrat;
        color: #ffffff;
        background-color: transparent;
        border: 1px solid #ffffff;
        padding: 5px 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 8px;

        &:hover {
            background-color: #459efa;
            color: white;
        }
    }
}
</style>

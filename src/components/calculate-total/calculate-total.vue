<script setup lang="ts">
import { useProductStore } from '@/stores/product'

const store = useProductStore()
</script>

<template>
    <div class="total-box">
        <div class="total-amount-box">
            <p class="total-amount">ИТОГО</p>
            <p class="total-amount">{{ store.totalPrice.toFixed(2) }} ₽</p>
        </div>
        <button>Перейти к оформлению</button>
    </div>
</template>

<style scoped>
.total-box {
    min-width: 349px;
    height: 114px;
    background: white;
    border-radius: 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.total-amount-box {
    display: flex;
    justify-content: space-between;
    padding: 18px;
}

.total-amount {
    flex: 0 0 auto;
    font: 600 15px Montserrat;
    color: black;
}

button {
    margin-top: 5px;
    color: white;
    padding: 22px;
    border-radius: 20px;
    background: #101010;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    transition:
        background 0.3s,
        color 0.3s,
        border 0.3s;

    &:hover {
        background: #1c1c1c;
    }
}
</style>

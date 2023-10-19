<script setup lang="ts">

import type {ProductWithQuantity} from "@/model/types";
import {useProductStore} from "@/stores/product";
import {computed} from "vue";


const props = defineProps<{
  product: ProductWithQuantity
}>()
const store = useProductStore()

const currentPrice = computed(() => {
  const result = props.product.price * props.product.quantity;
  return result.toFixed(2);
});

</script>

<template>
  <div class="price-container1">
    <div class="container-with-price">
      <div class="counter">
        <button @click="store.decrement(product)">-</button>
        {{ product.quantity }}
        <button @click="store.increment(product)">+</button>
      </div>
    </div>
    <p class="price-label">{{ currentPrice }} ₽</p>
  </div>
</template>

<style scoped>
.price-container1 {
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
}

.container-with-price {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  height: 30px;
}

.price-label {
  box-sizing: border-box;
  flex: 0 0 auto;
  font: 600 15px Montserrat;
  color: #1c1c27;
  text-align: right;
}

.counter {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #181818;
  margin-left: 15px;
}

.counter button {
  background: #ffce7f;
  border-radius: 50%;
  padding: 8px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  margin: 0 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ffd200;
    color: #000000;
  }
}
</style>

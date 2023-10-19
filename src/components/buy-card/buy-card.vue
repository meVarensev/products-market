<script setup lang="ts">

import type {Product} from '@/model/types'
import Counter from '@/components/buy-card/counter.vue'
import {useProductStore} from '@/stores/product'
import UiDeleteSvg from "@/components/svg/ui-delete-svg.vue";

defineProps<{
  product: Product
}>()

const store = useProductStore()
</script>

<template>
  <div class="product-card1">
    <div class="product-card2">
      <div class="product-card">
        <div class="product-info">
          <img class="image-container" :src="product.image" alt="image"/>
        </div>
        <div class="product-info1">
          <p class="apple-title">{{ product.title }}</p>
          <p class="price-label1">{{ product.price }} ₽</p>
        </div>
      </div>
      <button class="price-container" @click="store.deleteProduct(product)">
        <UiDeleteSvg/>
      </button>
    </div>
    <Counter :product="product"/>
  </div>
</template>

<style scoped>
.product-card1 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-width: 633px;
  padding: 16.5px 28px 17px 16.5px;
  background: white;
  border-radius: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.product-card2 {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 2.25px;
}

.price-container {
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-bottom: 118px;
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

.product-card {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

.product-info {
  box-sizing: border-box;
  flex: 0 0 auto;
}

.image-container {
  box-sizing: border-box;
  display: block;

  max-width: initial;
  width: 147px;
  border: none;
  object-fit: cover;
}

.product-info1 {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding-top: 58px;
  padding-bottom: 27px;
  margin-left: 23.5px;
}

.apple-title {
  box-sizing: border-box;
  flex: 0 0 auto;
  font: 500 17px Montserrat;
  color: #1c1c27;
}

.price-label1 {
  box-sizing: border-box;
  flex: 0 0 auto;
  margin-top: 12px;
  font: 600 15px Montserrat;
  color: #aaaaaa;
}
</style>

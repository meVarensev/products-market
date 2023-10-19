<script setup lang="ts">

import type {Product} from '@/model/types'
import {useProductStore} from '@/stores/product'
import UiStarSvg from "@/components/svg/ui-star-svg.vue";

defineProps<{
  product: Product
}>()

const store = useProductStore()
</script>

//TODO: нужно подумать buy-button :disabled=""

<template>
  <div class="card">
    <div class="card-img">
      <img :src="product.image" alt="image"/>
    </div>

    <div class="product-card">
      <div class="product-info">
        <p class="apple-title">{{ product.title }}</p>
        <div class="flex-container-with-rating">
          <UiStarSvg class="svg-container"/>
          <p class="rating-text">{{ product.rating.rate }}</p>
        </div>
      </div>

      <div class="price-container">
        <div class="price-container1">
          <p class="price-label">{{ `${product.price}  ₽` }}</p>
        </div>
        <button class="buy-button" @click="store.addProduct(product)">Купить</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 350px;
  height: 407px;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  position: relative;
}

.card-img {
  width: 220px;
  height: 220px;
  margin: 0 auto;

  & img {
    width: 100%;
    height: 100%;
  }
}

.product-card {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;

  bottom: 0;
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding-bottom: 5px;
}

.apple-title {
  font: 600 17px Montserrat;
  color: #1c1c27;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}

.flex-container-with-rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24.5px;
}

.svg-container {
  display: flex;
  width: 24px;
  height: 24px;
}

.rating-text {
  margin-left: 9.5px;
  font: 600 17px Montserrat;
  color: #838383;
}

.price-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.price-container1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-right: 4.5px;
  padding-left: 3px;
}

.price-label {
  align-self: stretch;
  font: 600 17px Montserrat;
  color: #ffa542;
}

.discount-price {
  margin-top: 4px;
  font: 600 13px Montserrat;
  color: #ffce7f;
  text-decoration-line: line-through;
}

.buy-button {
  margin-top: 18.5px;
  font: 600 17px Montserrat;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;

  &:hover {
    background-color: #2c3e50;
    color: white;
  }
}
</style>

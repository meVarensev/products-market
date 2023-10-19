<script setup lang="ts">

import CardItem from "@/components/main-content/card-item.vue";
import {useFetch} from "@/utils/use-fetch";
const {productsFetch, isLoading, isError} = useFetch('https://fakestoreapi.com/products');
</script>

<template>
  <h2 class="heading">Товары</h2>
  <div v-if="isLoading">Loading...</div>
  <div v-if="isError">Error... {{ isError }}</div>
  <div v-else class="card-container">
    <template v-for="product  in productsFetch" :key="product.id">
      <CardItem :product="product"/>
    </template>
  </div>
</template>

<style scoped>
.heading {
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

</style>

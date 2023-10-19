<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import BuyCard from '@/components/buy-card/buy-card.vue'
import CalculateTotal from '@/components/calculate-total/calculate-total.vue'

const store = useProductStore()
</script>

<template>
    <section>
        <div class="productsFetch">
            <div class="card" v-for="item in store.products" :key="item.id">
                <BuyCard :product="item" />
            </div>
        </div>
        <div class="register">
            <CalculateTotal />
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
}

.card {
    margin-bottom: 15px;
}
</style>

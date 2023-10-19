import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import type {ProductWithQuantity} from '@/model/types'
import {findProductById} from "@/utils/find-product-by-id";


export const useProductStore = defineStore('product', () => {
    const products = ref<ProductWithQuantity[]>([])

    function addProduct(product: ProductWithQuantity): void {
        const existingProduct = findProductById(products, product.id)

        if (!existingProduct) {
            products.value.push({...product, quantity: 1})
        }
    }

    function deleteProduct(product: ProductWithQuantity): void {
        const index = products.value.indexOf(product)
        if (index !== -1) {
            products.value.splice(index, 1)
        }
    }

    function increment(product: ProductWithQuantity) {
        const existingProduct = findProductById(products, product.id)
        if (existingProduct) {
            existingProduct.quantity++
        }
    }

    function decrement(product: ProductWithQuantity) {
        const existingProduct = findProductById(products, product.id)
        if (existingProduct && existingProduct.quantity > 1) {
            existingProduct.quantity--
        }
    }

    const totalPrice = computed(() => {
        return products.value.reduce((acc, {price, quantity}) => {
            return acc + (price * quantity)
        }, 0)
    })

    return {
        products,
        totalPrice,
        addProduct,
        deleteProduct,
        increment,
        decrement
    }
})


import { computed, ref } from 'vue'

export const useCounter = (price: number) => {
    const count = ref<number>(1)

    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }

    const currentPrice = computed(() => (price * count.value).toFixed(2))

    return { count, increment, decrement, currentPrice }
}

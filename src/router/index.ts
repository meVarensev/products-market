import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '@/pages/main-content.vue'
import CheckoutMain from '@/pages/checkout-main.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            component: MainContent
        },
        {
            path: '/checkout-main',
            name: 'checkout-main',
            component: CheckoutMain
        }
    ]
})

export default router

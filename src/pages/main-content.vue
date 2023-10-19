<script setup lang="ts">
import MainContent from '@/components/main-content/main-content.vue'
import UiContainer from '@/components/ui-container/ui-container.vue'
import UiHeader from '@/components/ui-header/ui-header.vue'
import UiFooter from '@/components/footer/ui-footer.vue'
</script>

<template>
    <UiContainer>
        <template #header>
            <UiHeader />
        </template>

        <template #main>
            <MainContent />
        </template>

        <template #footer>
            <UiFooter />
        </template>
    </UiContainer>
</template>

<style scoped></style>

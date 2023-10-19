import {type Ref, ref} from "vue";
import type {Product} from "@/model/types";
import {ExtendedError} from "@/utils/extended-error";

interface Data {
    productsFetch: Ref<Product[]>
    isLoading: Ref<boolean>
    isError: Ref<string>
}

export const useFetch = (url: string): Data => {
    const productsFetch = ref<Product[]>([])
    const isLoading = ref(true);
    const isError = ref("");

    (async function fetchData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = {response, time: new Date()}
                throw new ExtendedError("fetchData", 'Failed to fetch data', errorData);
            }

            productsFetch.value = await response.json();
        } catch (error) {
            if (error instanceof ExtendedError) {
                isError.value = error.message
                error.logError()
            } else {
                console.error('Произошла другая ошибка:', error);
            }
        } finally {
            isLoading.value = false;
        }
    })()

    return {productsFetch, isLoading, isError}
};

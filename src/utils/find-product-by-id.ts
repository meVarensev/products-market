import type {Ref} from "vue";
import type {ProductWithQuantity} from "@/model/types";

export function findProductById(products: Ref<ProductWithQuantity[]>, productId: number): ProductWithQuantity | undefined {
    return products.value.find((p: ProductWithQuantity) => p.id === productId);
}

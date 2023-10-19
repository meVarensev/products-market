export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}


export type ProductWithQuantity = Product & {
    quantity: number;
};
export interface Rating {
    rate: number
    count: number
}

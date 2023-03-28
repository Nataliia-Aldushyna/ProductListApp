import { Product } from "../src/classes";

export interface ProductInterface{
    name: string;
    price: number;
    description: string;
    imagePath: string;
}

export interface ProductListInterface{
    products: Product[];
    addProduct(product: Product): void;
    showProducts(): void;
}

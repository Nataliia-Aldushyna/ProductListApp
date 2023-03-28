import { ProductInterface, ProductListInterface } from "../src/interfaces";

export class Product implements ProductInterface{
    name: string;
    price: number;
    description: string;
    imagePath: string;
    
    constructor(name: string, price: number, description: string, imagePath: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
    }
}

export class ProductList implements ProductListInterface{
    products: Product[];
    
    constructor() {
        this.products = [];
    }
    
    addProduct(product: Product){
        this.products.push(product);
    }
    
    showProducts() {
        let productCard = document.querySelector("#productCard");

        for (const product of this.products) {
            // console.log(product);
            
            let element = document.createElement("div");
            element.insertAdjacentHTML("beforeend", `<img class="img" src=${product.imagePath}>`);
            element.insertAdjacentHTML("beforeend", `<p class="name">${product.name}</p>`);
            element.insertAdjacentHTML("beforeend", `<p class="description">${product.description}</p>`);
            element.insertAdjacentHTML("beforeend", `<p class="price">${product.price} €</p>`);
            productCard.append(element);
           
        }
    }
}

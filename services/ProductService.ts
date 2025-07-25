import { Product } from "../interfaces";

type ProductBody = {
    title: string;
    price: number;
    description: string;
}

// * Service => data storage and retrieval

export default class ProductService {
    // private readonly products: Product[] = fakeProductsData;

    constructor(private products: Product[]) {
        this.products = products;
    }

    findAll() {
        return this.products;
    }

    filterByQuery(filterQuery?: string) {
        // ** Filter By, keyof Product

        if (filterQuery) {
            const propertiesToFilter = filterQuery.split(",");

            let filteredProducts = [];

            filteredProducts = this.findAll().map(product => {
                const filteredProduct: any = {};
                propertiesToFilter.forEach(property => {
                    if (product.hasOwnProperty(property as keyof Product)) {
                        filteredProduct[property] = product[property as keyof Product];
                    }
                });
                return { id: product.id, ...filteredProduct };
            });

            return filteredProducts;
        }
        //? If no filter query is provided, return all products
        return this.findAll();
    }

    getProductById(productId: number) {
        return this.findAll().find(product => product.id === productId);
    }

    createProduct(productBody: ProductBody) {
        this.findAll().push({ id: this.findAll().length + 1, ...productBody });
    }

    updateProductByIndex(index: number, productBody: ProductBody) {
        return this.findAll()[index] = { ...this.findAll()[index], ...productBody };
    }

    deleteProduct(id: number) {
        return this.findAll().filter(product => product.id !== id);
    }
}
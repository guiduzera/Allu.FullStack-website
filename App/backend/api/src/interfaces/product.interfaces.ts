import { Products } from "@prisma/client";

export interface IProductsModel {
    getProducts(): Promise<Products[]>;
    getProductById(id: number): Promise<Products | null>;
}

export interface IProductsService {
    getProducts(): Promise<Products[]>;
    getProductById(id: number): Promise<Products | null>;
};
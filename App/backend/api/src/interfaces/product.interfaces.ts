import { Products } from "@prisma/client";

export interface IProductsModel {
    getProducts(): Promise<Products[]>;
}

export interface IProductsService {
    getProducts(): Promise<Products[]>;
};
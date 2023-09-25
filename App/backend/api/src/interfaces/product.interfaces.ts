import { Products } from "@prisma/client";

export interface IProductsModel {
    getProducts(): Promise<Products[]>;
}
import { Products } from "@prisma/client";
import { IProductsService } from "../interfaces/product.interfaces";

export default class ProductsService implements IProductsService {
    private _productsModel: IProductsService;
    
    constructor(productsModel: IProductsService) {
        this._productsModel = productsModel;
    }
    
    public async getProducts(): Promise<Products[]> {
        return await this._productsModel.getProducts();
    }

    public async getProductById(id: number): Promise<Products | null> {
        return await this._productsModel.getProductById(id);
    }
}
import { NextFunction, Request, Response } from 'express';
import { IProductsService } from '../interfaces/product.interfaces';

export default class ProductsController {
  private _productsService: IProductsService;

  constructor(productsService: IProductsService) {
    this._productsService = productsService;
    this.getProducts = this.getProducts.bind(this);
  }

  public async getProducts(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const products = await this._productsService.getProducts();

      return res.status(200).json({ products });
    } catch (error) {
      next(error);
    }
  }
}
import express from 'express';
import ProductsRoutes from './products.routes';

export default class Router {
  public router = express.Router();
  private _productsRoutes: ProductsRoutes;

  constructor() {
    this._productsRoutes = new ProductsRoutes();
    this.routes();
  }

  private routes(): void {
    this.router.use('/products', this._productsRoutes.router);
  }
}
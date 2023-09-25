import express from 'express';
import ProductsRoutes from './products.routes';
import OrdersRoutes from './orders.routes';

export default class Router {
  public router = express.Router();
  private _productsRoutes: ProductsRoutes;
  private _ordersRoutes: OrdersRoutes;

  constructor() {
    this._productsRoutes = new ProductsRoutes();
    this._ordersRoutes = new OrdersRoutes();
    this.routes();
  }

  private routes(): void {
    this.router.use('/products', this._productsRoutes.router);
    this.router.use('/orders', this._ordersRoutes.router);
  }
}
import express from 'express';
import ProductsModel from '../model/products.model';
import ProductsService from '../services/products.service';
import ProductsController from '../controllers/products.controller';
import prisma from '../../prisma/client';
import SharedMiddlewares from '../middlewares/shared.middlewares';
export default class ProductsRoutes {
  public router = express.Router();
  private _productsModel: ProductsModel;
  private _productsService: ProductsService;
  private _productsController: ProductsController;

  constructor() {
    this._productsModel = new ProductsModel(prisma);
    this._productsService = new ProductsService(this._productsModel);
    this._productsController = new ProductsController(this._productsService);
    this.userRoutes();
  }

  private userRoutes(): void {
    this.router.get('/all', SharedMiddlewares.verifyJwtRequest, this._productsController.getProducts);
  }
}
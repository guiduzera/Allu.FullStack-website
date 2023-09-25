import express from 'express';
import OrdersModel from '../model/orders.model';
import OrdersService from '../services/orders.service';
import OrdersController from '../controllers/orders.controller';
import prisma from '../../prisma/client';
import SharedMiddlewares from '../middlewares/shared.middlewares';
import OrdersMiddlewares from '../middlewares/orders.middlewares';

export default class OrdersRoutes {
  public router = express.Router();
  private _ordersModel: OrdersModel;
  private _ordersService: OrdersService;
  private _ordersController: OrdersController;

  constructor() {
    this._ordersModel = new OrdersModel(prisma);
    this._ordersService = new OrdersService(this._ordersModel);
    this._ordersController = new OrdersController(this._ordersService);
    this.userRoutes();
  }

  private userRoutes(): void {
    this.router.get('/byUser', SharedMiddlewares.verifyJwtRequest, this._ordersController.getOrdersByUser);
    this.router.post('/create', OrdersMiddlewares.validateOrderFields,  SharedMiddlewares.verifyJwtRequest, this._ordersController.createOrder);
  }
}

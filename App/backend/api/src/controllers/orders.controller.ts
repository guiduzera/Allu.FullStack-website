import { NextFunction, Request, Response } from 'express';
import { IOrdersService } from '../interfaces/orders.interfaces';
import { ICustomRequest } from '../interfaces/customRequest.intreface';

export default class OrdersController {
  private _ordersService: IOrdersService;

  constructor(ordersService: IOrdersService) {
    this._ordersService = ordersService;
    this.getOrdersByUser = this.getOrdersByUser.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  public async getOrdersByUser(req: ICustomRequest, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.user as { id: number };

      const orders = await this._ordersService.getOrdersByUser(id);

      return res.status(200).json({ orders });
    } catch (error) {
      next(error);
    }
  }

  public async createOrder(req: ICustomRequest, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.user as { id: number };
      const { productId, document, total, image, quantity  } = req.body;

      const order = await this._ordersService.createOrder({ userId: id, productId, document, total, image, quantity });

      if (!order) {
        return res.status(400).json({ message: "Não foi possível criar o pedido!" });
      }

      return res.status(201).json({ order });
    } catch (error) {
      next(error);
    }
  }
}
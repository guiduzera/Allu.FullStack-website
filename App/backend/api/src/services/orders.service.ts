import { Orders } from "@prisma/client";
import { ICreateOrder, IOrdersModel, IOrdersService } from "../interfaces/orders.interfaces";

export default class OrdersService implements IOrdersService {
    private _ordersModel: IOrdersModel;

    constructor(ordersModel: IOrdersModel) {
        this._ordersModel = ordersModel;
    }

    public async getOrdersByUser(userId: number): Promise<Orders[]> {
        return await this._ordersModel.getOrdersByUser(userId);
    }

    public async createOrder(order: ICreateOrder): Promise<boolean> {
        return await this._ordersModel.createOrder(order);
    }
}
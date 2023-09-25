import { Orders, PrismaClient } from "@prisma/client";
import { ICreateOrder, IOrdersModel } from "../interfaces/orders.interfaces";

export default class OrdersModel implements IOrdersModel {
  private _prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._prismaClient = prismaClient;
  }

  public async getOrdersByUser(userId: number): Promise<Orders[]> {
    const orders = await this._prismaClient.orders.findMany({
      where: { user_id: userId },
    });

    return orders;
  }

  public async createOrder(order: ICreateOrder): Promise<boolean> {
    const newOrder = await this._prismaClient.orders.create({
      data: {
        product_id: order.productId,
        user_id: order.userId,
        quantity: order.quantity,
        total: order.total,
        status: "Ativo",
        image: order.image,
        document: order.document,
      },
    });

    return !!newOrder;
  }
}

import { Orders } from "@prisma/client";

export interface IOrdersModel {
    getOrdersByUser(userId: number): Promise<Orders[]>;
    createOrder(order: ICreateOrder): Promise<boolean>;
}

//-----------------------//
//interface de parametros//

export interface ICreateOrder {
  userId: number;
  document: string;
  total: number;
  productId: number;
  image: string;
  quantity: number;
}
import { PrismaClient, Products } from "@prisma/client";
import { IProductsModel } from "../interfaces/product.interfaces";

export default class ProductsModel implements IProductsModel {
  private _prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._prismaClient = prismaClient;
  }

  public async getProducts(): Promise<Products[]> {
    return await this._prismaClient.products.findMany();
  }

  public async getProductById(id: number): Promise<Products | null> {
    return await this._prismaClient.products.findUnique({
      where: {
        id: id
      }
    });
  }
}
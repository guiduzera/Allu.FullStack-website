import { PrismaClient } from "@prisma/client";
import { orderByUserMock, orderCreateMock } from "../mocks/orders.mocks";
import OrdersModel from "../../../model/orders.model";

const prismaClientMock = {
  orders: {
    findMany: jest.fn().mockResolvedValue(orderByUserMock),
    create: jest.fn().mockResolvedValue({ id: 1 }),
  },
} as unknown as PrismaClient;

const ordersModel = new OrdersModel(prismaClientMock);

describe("Testando os métodos da classe OrdersModel", () => {
  describe("Testando o método createOrder", () => {
    test("Deve retornar um boolean caso o pedido seja criado com sucesso!", async () => {
      const response = await ordersModel.createOrder(orderCreateMock);

      expect(response).toBe(true);
    });
  });

  describe("Testando o método getOrdersByUser", () => {
    test("Deve retornar todos os pedidos de um usuário", async () => {
      const orders = await ordersModel.getOrdersByUser(1);

      expect(orders).toEqual(orderByUserMock);
    });
  });
});

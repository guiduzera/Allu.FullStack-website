import { IOrdersModel } from "../../../interfaces/orders.interfaces";
import OrdersService from "../../../services/orders.service";
import { orderByUserMock, orderCreateMock } from "../mocks/orders.mocks";

describe("Testando os métodos da classe OrdersService", () => {
  describe("Testando o método createOrders", () => {
    test("Deve retornar o pedido criado", async () => {
      const ordersModelMock = {
        createOrder: jest.fn().mockResolvedValue(true),
      } as unknown as IOrdersModel;
      const ordersService = new OrdersService(ordersModelMock);
      const order = await ordersService.createOrder(orderCreateMock);

      expect(order).toEqual(true);
    });
  });

  describe("Testando o método getOrdersByUser", () => {
    test("Deve retornar todos os pedidos de um usuário", async () => {
      const ordersModelMock = {
        getOrdersByUser: jest.fn().mockResolvedValue(orderByUserMock),
      } as unknown as IOrdersModel;
      const ordersService = new OrdersService(ordersModelMock);
      const orders = await ordersService.getOrdersByUser(1);

      expect(orders).toEqual(orderByUserMock);
    });
  });
});

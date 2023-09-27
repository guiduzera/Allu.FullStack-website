import { Response } from "express";
import { IOrdersService } from "../../../interfaces/orders.interfaces";
import OrdersController from "../../../controllers/orders.controller";
import { ICustomRequest } from "../../../interfaces/customRequest.intreface";
import { orderByUserMock, orderCreateMock } from "../mocks/orders.mocks";

describe("Testando os métodos da classe OrdersController", () => {
  describe("Testando o método createOrder", () => {
    test("Deve retornar o booleano caso a respota da camada service for true", async () => {
      const ordersServiceMock = {
        createOrder: jest.fn().mockResolvedValue(true),
      } as unknown as IOrdersService;

      const req = {
        user: { id: 1 },
        body: orderCreateMock
      } as unknown as ICustomRequest;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const ordersController = new OrdersController(ordersServiceMock);

      await ordersController.createOrder(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ order: true });
    });

    test("Caso ocorra algum erro, deve chamar o next passando o erro", async () => {
        const ordersServiceMock = {
            createOrder: jest.fn().mockRejectedValue(new Error("Erro")),
        } as unknown as IOrdersService;
    
        const req = {
            user: { id: 1 },
            body: orderCreateMock
        } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        const ordersController = new OrdersController(ordersServiceMock);
    
        await ordersController.createOrder(req, res, next);
    
        expect(next).toHaveBeenCalledWith(new Error("Erro"));
    });

    test("caso a resposta da camada service seja false", async () => {
        const ordersServiceMock = {
            createOrder: jest.fn().mockResolvedValue(false),
        } as unknown as IOrdersService;
    
        const req = {
            user: { id: 1 },
            body: orderCreateMock
        } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        const ordersController = new OrdersController(ordersServiceMock);
    
        await ordersController.createOrder(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Não foi possível criar o pedido!" });
    });
  });

  describe("Testando o método getOrdersByUser", () => {
    test("Deve retornar todos os pedidos de um usuário", async () => {
      const ordersServiceMock = {
        getOrdersByUser: jest.fn().mockResolvedValue(orderByUserMock),
      } as unknown as IOrdersService;

      const req = {
        user: { id: 1 },
      } as unknown as ICustomRequest;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const ordersController = new OrdersController(ordersServiceMock);

      await ordersController.getOrdersByUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ orders: orderByUserMock });
    });

    test("Caso ocorra algum erro, deve chamar o next passando o erro", async () => {
        const ordersServiceMock = {
            getOrdersByUser: jest.fn().mockRejectedValue(new Error("Erro")),
        } as unknown as IOrdersService;
    
        const req = {
            user: { id: 1 },
        } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        const ordersController = new OrdersController(ordersServiceMock);
    
        await ordersController.getOrdersByUser(req, res, next);
    
        expect(next).toHaveBeenCalledWith(new Error("Erro"));
    });
  });
});
import { Response } from "express";
import { ICustomRequest } from "../../../interfaces/customRequest.intreface";
import OrdersMiddlewares from "../../../middlewares/orders.middlewares";
import { orderCreateMock } from "../mocks/orders.mocks";

describe("Testando os métodos da classe OrdersMiddlewares", () => {
  describe("Testando o método validateOrderFields", () => {
    test("Caso ocorra tudo bem, deve chamar o next", async () => {
      const req = { body: orderCreateMock } as unknown as ICustomRequest;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      OrdersMiddlewares.validateOrderFields(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    test("Caso não seja informado o document, deve retornar um erro", async () => {
        const req = { body: { ...orderCreateMock, document: "" } } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        OrdersMiddlewares.validateOrderFields(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });

    test("Caso não seja informado o image, deve retornar um erro", async () => {
        const req = { body: { ...orderCreateMock, image: "" } } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        OrdersMiddlewares.validateOrderFields(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });

    test("Caso não seja informado o quantity, deve retornar um erro", async () => {
        const req = { body: { ...orderCreateMock, quantity: "" } } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        OrdersMiddlewares.validateOrderFields(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });

    test("Caso não seja informado o total, deve retornar um erro", async () => {
        const req = { body: { ...orderCreateMock, total: "" } } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        OrdersMiddlewares.validateOrderFields(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });

    test("Caso não seja informado o productId, deve retornar um erro", async () => {
        const req = { body: { ...orderCreateMock, productId: null } } as unknown as ICustomRequest;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;
        const next = jest.fn();
    
        OrdersMiddlewares.validateOrderFields(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });
  });
});

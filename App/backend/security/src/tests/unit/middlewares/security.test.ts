import { Request, Response } from "express";
import SecurityMiddlewares from "../../../middlewares/security.middlewares";
import { registerReqMock } from "../mocks/security.mocks";

describe("Testando os middlewares da classe SecurityMiddleware", () => {
  describe("Testando o método verifyFields", () => {
    test("Caso ocorra tudo bem, deve chamar o next", async () => {
      const req = { body: registerReqMock } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyFields(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    test("Caso não seja informado o name, deve retornar um erro", async () => {
      const req = { body: { ...registerReqMock, name: "" } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyFields(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });

    test("Caso não seja informado o email, deve retornar um erro", async () => {
      const req = { body: { ...registerReqMock, email: "" } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyFields(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });

    test("Caso não seja informado o password, deve retornar um erro", async () => {
      const req = { body: { ...registerReqMock, password: "" } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyFields(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });
  });

  describe("Testando o método verifyLoginFields", () => {
    test("Caso ocorra tudo bem, deve chamar o next", async () => {
      const req = { body: { ...registerReqMock } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyLoginFields(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    test("Caso não seja informado o email, deve retornar um erro", async () => {
      const req = { body: { ...registerReqMock, email: "" } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyLoginFields(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });

    test("Caso não seja informado o password, deve retornar um erro", async () => {
      const req = { body: { ...registerReqMock, password: "" } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyLoginFields(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });
  });

  describe("Testando o método verifyJwtFields", () => {
    test("Caso ocorra tudo bem, deve chamar o next", async () => {
      const req = { body: { token: 'token' } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyJwtFields(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    test("Caso não seja informado o token, deve retornar um erro", async () => {
      const req = { body: { token: "" } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      SecurityMiddlewares.verifyJwtFields(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Preencha todos os campos!" });
    });
  });
});

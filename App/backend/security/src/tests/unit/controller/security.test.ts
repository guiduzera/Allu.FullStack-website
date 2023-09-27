import { Request, Response } from "express";
import SecurityController from "../../../controller/security.controller";
import { ISecurityService } from "../../../interfaces/security.interfaces";
import { registerReqMock, loginReqMock, jwtPayloadMock } from "../mocks/security.mocks";

describe("Testando os métodos da classe SecurityController", () => {
  describe("Testando o método register", () => {
    test("Caso ocorra tudo bem, deve retornar o token", async () => {
      const securityServiceMock = {
        register: jest.fn().mockResolvedValue("token"),
      } as unknown as ISecurityService;
      const req = { body: registerReqMock } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const securityController = new SecurityController(securityServiceMock);

      await securityController.register(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
      // json com token
      expect(res.json).toHaveBeenCalledWith({ token: "token" });
    });

    test("Caso ocorra algum erro, deve chamar o next passando o erro", async () => {
      const securityServiceMock = {
        register: jest.fn().mockRejectedValue(new Error("Erro")),
      } as unknown as ISecurityService;
      const req = { body: registerReqMock } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const securityController = new SecurityController(securityServiceMock);

      await securityController.register(req, res, next);

      expect(next).toHaveBeenCalledWith(new Error("Erro"));
    });
  });

  describe("Testando o método login", () => {
    test("Caso ocorra tudo bem, deve retornar o token", async () => {
      const securityServiceMock = {
        login: jest.fn().mockResolvedValue("token"),
      } as unknown as ISecurityService;
      const req = { body: { loginReqMock } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const securityController = new SecurityController(securityServiceMock);

      await securityController.login(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      // json com token
      expect(res.json).toHaveBeenCalledWith({ token: "token" });
    });

    test("Caso ocorra algum erro, deve chamar o next passando o erro", async () => {
      const securityServiceMock = {
        login: jest.fn().mockRejectedValue(new Error("Erro")),
      } as unknown as ISecurityService;
      const req = { body: { loginReqMock } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const securityController = new SecurityController(securityServiceMock);

      await securityController.login(req, res, next);

      expect(next).toHaveBeenCalledWith(new Error("Erro"));
    });
  });

  describe("Testando o método verifyJwt", () => {
    test("Caso ocorra tudo bem, deve retornar o payload", async () => {
      const securityServiceMock = {
        verifyJwt: jest.fn().mockResolvedValue(jwtPayloadMock),
      } as unknown as ISecurityService;
      const req = { body: { token: 'token' } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({ payload: jwtPayloadMock }),
      } as unknown as Response;
      const next = jest.fn();

      const securityController = new SecurityController(securityServiceMock);

      await securityController.verifyJwt(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

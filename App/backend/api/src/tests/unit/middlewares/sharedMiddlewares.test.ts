import { Response } from "express";
import { ICustomRequest } from "../../../interfaces/customRequest.intreface";
import SharedMiddlewares from "../../../middlewares/shared.middlewares";
import Requests from "../../../http/requests";
import { AxiosResponse } from "axios";
import { IJwtPayload } from "../../../interfaces/requests.interfaces";


describe("Testando os middlewares da classe SharedMiddlewares", () => {
  describe("Testando o método verifyJwtRequest", () => {
    test("Caso ocorra tudo bem, deve chamar o next", async () => {
      const req = {
        headers: { authorization: "validToken" },
      } as unknown as ICustomRequest;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const mockGetJwtAuth = jest
        .spyOn(Requests, "getJwtAuth")
        .mockResolvedValue({
          data: { payload: { id: 1, name: "name", email: "email" } },
        } as unknown as AxiosResponse<IJwtPayload>);

      await SharedMiddlewares.verifyJwtRequest(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(mockGetJwtAuth).toHaveBeenCalled();
    });

    test("Caso não seja informado o authorization, deve retornar um erro", async () => {
      const req = {
        headers: { authorization: "" },
      } as unknown as ICustomRequest;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      await SharedMiddlewares.verifyJwtRequest(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Token não enviado!" });
    });

    test("Caso o token seja inválido, deve retornar um erro", async () => {
      const req = {
        headers: { authorization: "invalidToken" },
      } as unknown as ICustomRequest;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

        jest.spyOn(Requests, "getJwtAuth").mockResolvedValue(false);

      await SharedMiddlewares.verifyJwtRequest(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Token inválido!" });
    });
  });
});

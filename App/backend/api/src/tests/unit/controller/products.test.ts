import { Request, Response } from "express";
import ProductsController from "../../../controllers/products.controller";
import { IProductsService } from "../../../interfaces/product.interfaces";
import { allProductsMock } from "../mocks/products.mocks";

describe("Testando os métodos da classe ProductsController", () => {
  describe("Testando o método getProducts", () => {
    test("Deve retornar todos os produtos", async () => {
      const productsServiceMock = {
        getProducts: jest.fn().mockResolvedValue(allProductsMock),
      } as unknown as IProductsService;

      const req = {} as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const productsController = new ProductsController(productsServiceMock);

      await productsController.getProducts(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ products: allProductsMock});
    });

    test("Caso ocorra algum erro, deve chamar o next passando o erro", async () => {
      const productsServiceMock = {
        getProducts: jest.fn().mockRejectedValue(new Error("Erro")),
      } as unknown as IProductsService;

      const req = {} as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const productsController = new ProductsController(productsServiceMock);

      await productsController.getProducts(req, res, next);

      expect(next).toHaveBeenCalledWith(new Error("Erro"));
    });
  });

  describe("Testando o método getProductById", () => {
    test("Deve retornar o produto caso ele exista", async () => {
      const productsServiceMock = {
        getProductById: jest
          .fn()
          .mockResolvedValue({ product: allProductsMock.products[0] }),
      } as unknown as IProductsService;

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const productsController = new ProductsController(productsServiceMock);

      await productsController.getProductById(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ product: { product: allProductsMock.products[0] } });
    });

    test("Caso ocorra algum erro, deve chamar o next passando o erro", async () => {
      const productsServiceMock = {
        getProductById: jest.fn().mockRejectedValue(new Error("Erro")),
      } as unknown as IProductsService;

      const req = { params: { id: 1 } } as unknown as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;
      const next = jest.fn();

      const productsController = new ProductsController(productsServiceMock);

      await productsController.getProductById(req, res, next);

      expect(next).toHaveBeenCalledWith(new Error("Erro"));
    });
  });
});

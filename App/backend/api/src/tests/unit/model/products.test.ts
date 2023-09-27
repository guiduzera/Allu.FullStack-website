import { PrismaClient } from "@prisma/client";
import ProductsModel from "../../../model/products.model";
import { allProductsMock } from "../mocks/products.mocks";

const prismaClientMock = {
  products: {
    findMany: jest.fn().mockResolvedValue(allProductsMock),
    findUnique: jest.fn().mockResolvedValue({ product: allProductsMock.products[0] }),
  },
} as unknown as PrismaClient;

const productsModel = new ProductsModel(prismaClientMock);

describe("Testando os métodos da classe ProductsModel", () => {
  describe("Testando o método getProducts", () => {
    test("Deve retornar todos os produtos", async () => {
      const products = await productsModel.getProducts();

      expect(products).toEqual(allProductsMock);
    });
  });

  describe("Testando o método getProductById", () => {
    test("Deve retornar o produto caso ele exista", async () => {
      const product = await productsModel.getProductById(1);

      expect(product).toEqual({ product: allProductsMock.products[0] });
    });
  });
});

import { IProductsModel } from "../../../interfaces/product.interfaces";
import ProductsService from "../../../services/products.service";
import { allProductsMock } from "../mocks/products.mocks";

describe("Testando os métodos da classe ProductsService", () => {
  describe("Testando o método getProducts", () => {
    test("Deve retornar todos os produtos", async () => {
      const productsModelMock = {
        getProducts: jest.fn().mockResolvedValue(allProductsMock),
      } as unknown as IProductsModel;

      const productsService = new ProductsService(productsModelMock);

      const products = await productsService.getProducts();

      expect(products).toEqual(allProductsMock);
    });
  });

  describe("Testando o método getProductById", () => {
    test("Deve retornar o produto caso ele exista", async () => {
      const productsModelMock = {
        getProductById: jest
          .fn()
          .mockResolvedValue({ product: allProductsMock.products[0] }),
      } as unknown as IProductsModel;

      const productsService = new ProductsService(productsModelMock);

      const product = await productsService.getProductById(1);

      expect(product).toEqual({ product: allProductsMock.products[0] });
    });
  });
});

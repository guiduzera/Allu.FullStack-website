// testes unitários para o model de security
import { PrismaClient } from "@prisma/client";
import SecurityModel from "../../../model/security.model";
import { registerReqMock, userMock } from "../mocks/security.mocks";

const prismaClientMock = {
  user: {
    create: jest.fn().mockResolvedValue({ id: 1 }),
    findUnique: jest.fn().mockResolvedValue(userMock),
  },
} as unknown as PrismaClient;

const securityModel = new SecurityModel(prismaClientMock);

describe("Testando os métodos da classe SecurityModel", () => {
  describe("Testando o método register", () => {
    test("Deve retornar o id do usuário criado caso ocorra tudo bem", async () => {
      const id = await securityModel.register(registerReqMock);

      expect(id).toBe(1);
    });
  });

  describe("Testando o método getUserByEmail", () => {
    test("Deve retornar o usuário caso ele exista", async () => {
      const user = await securityModel.getUserByEmail(registerReqMock.email);

      expect(user).toEqual(userMock);
    });
  });
});

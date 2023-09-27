import { IBycript, IJwt, ISecurityModel } from "../../../interfaces/security.interfaces";
import SecurityService from "../../../services/security.service";
import { jwtPayloadMock, registerReqMock, userMock } from "../mocks/security.mocks";

describe("Testando os métodos da classe SecurityService", () => {
  describe("Testando o método register", () => {
    test("Caso ocorra tudo bem, deve retornar o token", async () => {
      const securityModelMock = {
        register: jest.fn().mockResolvedValue(1),
        getUserByEmail: jest.fn().mockResolvedValue(null),
      } as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        encryptPassword: jest.fn().mockResolvedValue("encrypted"),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      const token = await securityService.register(registerReqMock);

      expect(token).toBe("token");
    });

    test("Caso já exista um usuário cadastrado com o email informado, deve lançar um CustomError('usuário já existe!', 400)", async () => {
      const securityModelMock = {
        register: jest.fn().mockResolvedValue(1),
        getUserByEmail: jest.fn().mockResolvedValue(userMock),
      } as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        encryptPassword: jest.fn().mockResolvedValue("encrypted"),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      await expect(securityService.register(registerReqMock)).rejects.toThrow("usuário já existe!");
    });

    test("Caso ocorra algum erro ao criar o usuário, deve lançar um CustomError('Erro ao criar usuário!', 500)", async () => {
      const securityModelMock = {
        register: jest.fn().mockResolvedValue(null),
        getUserByEmail: jest.fn().mockResolvedValue(null),
      } as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        encryptPassword: jest.fn().mockResolvedValue("encrypted"),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      await expect(securityService.register(registerReqMock)).rejects.toThrow("Erro ao criar usuário!");
    });
  });

  describe("Testando o método login", () => {
    test("Caso ocorra tudo bem, deve retornar o token", async () => {
      const securityModelMock = {
        getUserByEmail: jest.fn().mockResolvedValue(userMock),
      } as unknown as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        comparePassword: jest.fn().mockResolvedValue(true),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      const token = await securityService.login({ email: userMock.email, password: "password" });

      expect(token).toBe("token");
    });

    test("Caso não exista um usuário cadastrado com o email informado, deve lançar um CustomError('Conta não encontrada!', 404)", async () => {
      const securityModelMock = {
        getUserByEmail: jest.fn().mockResolvedValue(null),
      } as unknown as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        comparePassword: jest.fn().mockResolvedValue(true),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      await expect(securityService.login({ email: userMock.email, password: "password" })).rejects.toThrow("Conta não encontrada!");
    });

    test("Caso a senha informada não seja válida, deve lançar um CustomError('Senha inválida!', 401)", async () => {
      const securityModelMock = {
        getUserByEmail: jest.fn().mockResolvedValue(userMock),
      } as unknown as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        comparePassword: jest.fn().mockResolvedValue(false),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      await expect(securityService.login({ email: userMock.email, password: "password" })).rejects.toThrow("Senha inválida!");
    });
  });

  describe("Testando o método bcryptVerify", () => {
    test("Caso a senha informada seja válida, deve retornar true", async () => {
      const securityModelMock = {
        getUserByEmail: jest.fn().mockResolvedValue(userMock),
      } as unknown as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        comparePassword: jest.fn().mockResolvedValue(true),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      const isPasswordValid = await securityService.bcryptVerify("password", "hash");

      expect(isPasswordValid).toBe(true);
    });

    test("Caso a senha informada não seja válida, deve lançar um CustomError('Senha inválida!', 401)", async () => {
      const securityModelMock = {
        getUserByEmail: jest.fn().mockResolvedValue(userMock),
      } as unknown as ISecurityModel;

      const jwtMock = {
        createToken: jest.fn().mockReturnValue("token"),
      } as unknown as IJwt;

      const bcryptMock = {
        comparePassword: jest.fn().mockResolvedValue(false),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      await expect(securityService.bcryptVerify("password", "hash")).rejects.toThrow("Senha inválida!");
    });
  });

  describe("Testando o método verifyJwt", () => {
    test("Caso o token seja válido, deve retornar o payload do token", () => {
      const securityModelMock = {
        getUserByEmail: jest.fn().mockResolvedValue(userMock),
      } as unknown as ISecurityModel;

      const jwtMock = {
        verifyToken: jest.fn().mockReturnValue(jwtPayloadMock),
      } as unknown as IJwt;

      const bcryptMock = {
        comparePassword: jest.fn().mockResolvedValue(true),
      } as unknown as IBycript;

      const securityService = new SecurityService( securityModelMock, jwtMock, bcryptMock);

      const payload = securityService.verifyJwt("token");

      expect(payload).toEqual(jwtPayloadMock);
    });
  });
});

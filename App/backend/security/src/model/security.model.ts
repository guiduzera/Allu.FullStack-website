import { PrismaClient, User } from '@prisma/client';
import { ISecurityModel, IUserRegister } from '../interfaces/security.interfaces';

export default class SecurityModel implements ISecurityModel {
  private _prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._prismaClient = prismaClient;
  }

  public async register(registerReq: IUserRegister): Promise<number | null> {
    const { name, email, password } = registerReq;
    const create = await this._prismaClient.user.create({
      data: { name, email, password }
    });

    return create.id;
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const user = await this._prismaClient.user.findUnique({ where: { email } });

    return user;
  }
}
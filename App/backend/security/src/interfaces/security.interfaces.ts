import { User } from "@prisma/client";

export interface ISecurityModel {
  register(registerReq: IUserRegister): Promise<number | null>;
  getUserByEmail(email: string): Promise<User | null>;
}

export interface IJwt {
  createToken(payload: IJwtPayload): string;
  verifyToken(token: string): IJwtPayload;
}

export interface IBycript {
  encryptPassword(password: string): Promise<string>;
  comparePassword(password: string, encrypted: string): Promise<boolean>;
}

export interface IJwtPayload {
  accountNumber: string;
  agency: string;
  name: string;
}

// -------------------
//interfaces de objetos
export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

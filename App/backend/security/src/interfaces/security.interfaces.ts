import { User } from "@prisma/client";

export interface ISecurityModel {
  register(registerReq: IUserRegister): Promise<number | null>;
  getUserByEmail(email: string): Promise<User | null>;
}

export interface ISecurityService {
  login(loginReq: IUserLogin): Promise<string>;
  register(registerReq: IUserRegister): Promise<string>;
  verifyJwt(token: string): IJwtPayload;
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
  id: number;
  name: string | null;
  email: string;
}

// -------------------
//interfaces de objetos

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserRegister extends IUserLogin {
  name: string;
}

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

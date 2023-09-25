import { sign, verify } from 'jsonwebtoken';
import CustomError from './CustomError';
import { IJwt, IJwtPayload } from '../interfaces/security.interfaces';

export default class Jwt implements IJwt {
  private _secret: string;
  private _options: Record<string, string>;

  constructor() {
    this._secret = process.env.JWT_SECRET || 'secret';
    this._options = { expiresIn: '24h', algorithm: 'HS256' };
  }

  public createToken(payload: IJwtPayload): string {
    return sign({ data: payload }, this._secret, this._options);
  }

  public verifyToken(token: string): IJwtPayload {
    try {
      const { data } = verify(token, this._secret) as { data: IJwtPayload };
      return data;
    } catch (error) {
      throw new CustomError('Token inválido', 401);
    }
  }
}
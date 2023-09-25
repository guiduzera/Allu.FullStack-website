import * as bcrypt from 'bcryptjs';
import { IBycript } from '../interfaces/security.interfaces';

export default class Bcrypt implements IBycript {
  public async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  public async comparePassword(password: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(password, encrypted);
  }
}
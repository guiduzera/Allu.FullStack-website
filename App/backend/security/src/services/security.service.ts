import CustomError from '../helpers/CustomError';
import { IJwtPayload, ISecurityService, IUserLogin, IUserRegister } from '../interfaces/security.interfaces';
import { IBycript, IJwt, ISecurityModel } from '../interfaces/security.interfaces';

export default class SecurityService implements ISecurityService {
  public securityModel: ISecurityModel;
  public jwt: IJwt;
  public bcrypt: IBycript;

  constructor(securityModel: ISecurityModel, jwt: IJwt, bcrypt: IBycript) {
    this.securityModel = securityModel;
    this.jwt = jwt;
    this.bcrypt = bcrypt;
  }

  public async bcryptVerify(password: string, hash: string): Promise<boolean> {
    const isPasswordValid = await this.bcrypt.comparePassword(password, hash);

    if (!isPasswordValid) throw new CustomError('Senha inválida!', 401);

    return true;
  }

  public verifyJwt(token: string): IJwtPayload {
    return this.jwt.verifyToken(token);
  }

  public async login(loginReq: IUserLogin): Promise<string> {
    const { email, password } = loginReq;
    const user = await this.securityModel.getUserByEmail(email);

    if (!user) throw new CustomError('Conta não encontrada!', 404);

    const hashPasword = user.password || '';
    const isPasswordValid = await this.bcryptVerify(password, hashPasword);

    if (!isPasswordValid) throw new CustomError('Senha inválida!', 401);

    const token = this.jwt.createToken({ id: user.id, name: user.name, email: user.email });

    return token;
  }

  public async register(registerReq: IUserRegister): Promise<string> {
    const { name, email, password } = registerReq;
    const user = await this.securityModel.getUserByEmail(email);

    if (user) throw new CustomError('usuário já existe!', 400);

    const encryptedPassword = await this.bcrypt.encryptPassword(password);
    const createdId = await this.securityModel.register({ name, email, password: encryptedPassword });

    if (!createdId) throw new CustomError('Erro ao criar usuário!', 500);

    const token = this.jwt.createToken({ id: createdId, name, email });

    return token;
  }
}
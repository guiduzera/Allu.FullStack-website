import { NextFunction, Request, Response } from 'express';
import { ISecurityService } from '../interfaces/security.interfaces';

export default class SecurityController {
  private _securityService: ISecurityService;

  constructor(securityService: ISecurityService) {
    this._securityService = securityService;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.verifyJwt = this.verifyJwt.bind(this);
  }

  public async register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, email, password } = req.body;
      const token = await this._securityService.register({ name, email, password });

      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      const token = await this._securityService.login({ email, password });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  public async verifyJwt(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { token } = req.body;
      const payload = this._securityService.verifyJwt(token);

      return res.status(200).json({ payload });
    } catch (error) {
      next(error);
    }
  }
}
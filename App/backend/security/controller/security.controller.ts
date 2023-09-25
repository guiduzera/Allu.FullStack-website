import { NextFunction, Request, Response } from 'express';
import { ISecurityService } from '../src/interfaces/security.interfaces';

export default class SecurityController {
  public securityService: ISecurityService;

  constructor(securityService: ISecurityService) {
    this.securityService = securityService;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  public async register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, email, password } = req.body;
      const token = await this.securityService.register({ name, email, password });

      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      const token = await this.securityService.login({ email, password });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  public async verifyJwt(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { token } = req.body;
      const payload = this.securityService.verifyJwt(token);

      return res.status(200).json({ payload });
    } catch (error) {
      next(error);
    }
  }
}
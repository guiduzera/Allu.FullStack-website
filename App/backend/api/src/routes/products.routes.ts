import express from 'express';
// import SecurityService from '../services/security.service';
// import SecurityController from '../controller/security.controller';
// import SecurityModel from '../model/security.model';
// import prisma from '../../prisma/client';
// import SecurityMiddlewares from '../middlewares/security.middlewares';

export default class SecurityRoutes {
  public router = express.Router();
//   private _securityModel: SecurityModel;
//   private _securityService: SecurityService;
//   private _securityController: SecurityController;

  constructor() {
    // this._securityModel = new SecurityModel(prisma);
    // this._securityService = new SecurityService(this._securityModel, this._jwt, this._bcrypt);
    // this._securityController = new SecurityController(this._securityService);
    this.userRoutes();
  }

  private userRoutes(): void {
    // this.router.post('/register', SecurityMiddlewares.verifyFields, this._securityController.register);
    // this.router.post('/login', SecurityMiddlewares.verifyLoginFields, this._securityController.login);
    // this.router.post('/verify-jwt', SecurityMiddlewares.verifyJwtFields, this._securityController.verifyJwt);
  }
}
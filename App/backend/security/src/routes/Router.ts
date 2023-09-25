import express from 'express';
import SecurityRoutes from './security.routes';

export default class Router {
  public router = express.Router();
  private _securityRoutes: SecurityRoutes;

  constructor() {
    this._securityRoutes = new SecurityRoutes();
    this.routes();
  }

  private routes(): void {
    this.router.use('/security', this._securityRoutes.router);
  }
}
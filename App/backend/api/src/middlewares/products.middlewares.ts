import { NextFunction, Request, Response } from 'express';

export default class SecurityMiddlewares {
  public static async verifyProductsRequest(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(400).json({ message: 'Token não enviado!' });
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}
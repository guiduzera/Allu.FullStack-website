import { NextFunction, Request, Response } from 'express';
import registerZodSchema from '../helpers/zodSchema';
import CustomError from '../helpers/CustomError';

export default class SecurityMiddlewares {
  public static async verifyFields(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos!' });
      }

      const parsed = registerZodSchema.safeParse({ name, email, password });

      if (!parsed.success) {
        const { error } = parsed;
        const parsedError = JSON.parse(error.message);
        throw new CustomError(parsedError[0].message, 400);
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  public static async verifyLoginFields(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos!' });
      }

      return next();
    } catch (error) {
      next(error);
    }
  }

  public static async verifyJwtFields(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { token } = req.body;
      
      if (!token) {
        return res.status(400).json({ message: 'Preencha todos os campos!' });
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}
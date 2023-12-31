import { NextFunction, Response } from "express";
import { ICustomRequest } from "../interfaces/customRequest.intreface";
import Requests from "../http/requests";

export default class SharedMiddlewares {
  public static async verifyJwtRequest(req: ICustomRequest, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(400).json({ message: "Token não enviado!" });
      }

      const securityService = await Requests.getJwtAuth(authorization);

      if (!securityService) {
        return res.status(400).json({ message: "Token inválido!" });
      }

      const { payload } = securityService as unknown as { payload: { id: number, name: string | null, email: string } };

      req.user = payload;

      return next();
    } catch (error) {
      next(error);
    }
  }
}

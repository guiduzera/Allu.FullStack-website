import { NextFunction, Response, Request } from "express";

export default class OrdersMiddlewares {
  public static async validateOrderFields( req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
        const { productId, document, total, image, quantity  } = req.body;

      if (!productId || !document || !total || !image || !quantity) {
        return res.status(400).json({ message: "Preencha todos os campos!" });
      }

      return next();
    } catch (error) {
      next(error);
    }
  }
}

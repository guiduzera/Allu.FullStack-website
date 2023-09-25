import { Request } from "express";

export interface ICustomRequest extends Request {
  user?: {
    id: number;
    name: string | null;
    email: string;
  };
}

import axios, { AxiosResponse } from "axios";
import { IJwtPayload } from "../interfaces/requests.interfaces";

export default class Requests {
  public static async getJwtAuth(token: string): Promise<AxiosResponse<IJwtPayload> | boolean> {
    try {
      const response = axios.post(
        "http://localhost:3004//security/verify-jwt",
        {
          token: token,
        }
      );

      return response;
    } catch (error) {
      return false;
    }
  }
}

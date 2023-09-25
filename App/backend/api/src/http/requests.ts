import axios, { AxiosResponse } from "axios";
import { IJwtPayload } from "../interfaces/requests.interfaces";

const URL = process.env.SECURITY_URL || "http://security:3002";
export default class Requests {
  public static async getJwtAuth(token: string): Promise<AxiosResponse<IJwtPayload> | boolean> {
    try {
      const response = await axios.post(
        `${URL}/security/verify-jwt`,
        {
          token: token,
        }
      );

      return response.data;
    } catch (error) {
        console.log(error);
      return false;
    }
  }
}

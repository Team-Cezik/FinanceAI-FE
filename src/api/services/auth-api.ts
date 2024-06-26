import { SignUpModel } from './../models/sign-up-model';
import { LogInModel } from "../models/log-in-model";
import { BaseApi } from "./base-api";

export class AuthApi extends BaseApi {

  public async LogIn(loginModel: LogInModel) {
    return await this.axios.post(this.basePath + "/auth/login", loginModel);
  }
  
  public async SignUp(RegisterModel: SignUpModel) {
    return await this.axios.post(this.basePath + "/auth/register", RegisterModel);
  }
}

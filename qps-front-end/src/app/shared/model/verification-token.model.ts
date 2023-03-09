import {UserModel} from "./user.model";

export interface VerificationTokenModel {
  id: number;
  token: string;
  user: UserModel;
  expiryDate: Date;
}

import {RoleModel} from "./role.model";

export interface UserModel {
  id: number;
  email: string;
  password: string;
  username: string;
  gender: boolean;
  phone: string;
  image: string;
  role: RoleModel;
  status: boolean;
  introduce: string;
}

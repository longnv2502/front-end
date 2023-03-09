import {CategoryModel} from "./category.model";
import {UserModel} from "./user.model";

export interface PostModel {
  id: number;
  title: string;
  date: Date;
  content: string;
  category: CategoryModel;
  user: UserModel;
  thumbnail: string;
  brief: string;
}

import { User } from "./User";

export interface Profile {
    user: User;
    password: string;
    isLoggedIn: boolean;
  }
import { User } from '../../interfaces/user.interfaces';
export type Token = { token: string };

export interface LoginPayload {
  email: User['email'];
  password: User['password'];
}

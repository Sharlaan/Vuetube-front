import { Token } from '../modules/auth/auth.interfaces';

export interface NewUserId extends Token {
  id: User['id'];
}

export interface User {
  id: string;
  email: string;
  password: string;
  nickName: string;
  avatarUrl: string;
  role: 'user' | 'admin';
}

export type UserPayload = Omit<User, 'id'>;

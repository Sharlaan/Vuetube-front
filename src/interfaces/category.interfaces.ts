import { User } from './user.interfaces';

export interface NewCategoryId {
  id: Category['id'];
}

export interface Category {
  id: string;
  userId: User['id'];

  title: string;
  description: string;
}

export type CategoryPayload = Omit<Category, 'id'>;

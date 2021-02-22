import { Category } from './category.interfaces';
import { User } from './user.interfaces';

export interface NewVideoId {
  id: Video['id'];
}

export interface Video {
  id: string;
  userId: User['id'];
  categoryId: Category['id'];

  title: string;
  description: string;
  thumbnailUrl: string;
  status: 'draft' | 'private' | 'public';
  views: number;
  url: string;
}

export type VideoPayload = Omit<Video, 'id'>;

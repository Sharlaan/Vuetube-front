import { User } from './user.interfaces';
import { Video } from './video.interfaces';

export interface NewCommentId {
  id: Comment['id'];
}

export interface Comment {
  id: string;
  videoId: Video['id'];
  userId: User['id'];
  text: string;
}

export type CommentPayload = Omit<Comment, 'id'>;

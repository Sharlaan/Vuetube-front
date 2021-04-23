import { COMMENT_URL } from '../endpoints';
import { Comment, CommentPayload, NewCommentId } from '../interfaces/comment.interfaces';
import { HTTPMethod, QueryParams } from './api.interfaces';
import useFetch from './_useFetch';

export class CommentService {
  static fetchAll(filters?: QueryParams) {
    return useFetch<Comment[]>({ endpoint: COMMENT_URL, params: filters });
  }

  static create(payload: CommentPayload) {
    return useFetch<NewCommentId>({
      endpoint: COMMENT_URL,
      options: {
        method: HTTPMethod.POST,
        body: JSON.stringify(payload),
      },
    });
  }

  static update(commentId: Comment['id'], payload: Partial<CommentPayload>) {
    return useFetch<void>({
      endpoint: `${COMMENT_URL}/${commentId}`,
      options: {
        method: HTTPMethod.PATCH,
        body: JSON.stringify(payload),
      },
    });
  }

  static remove(commentId: Comment['id']) {
    return useFetch<void>({
      endpoint: `${COMMENT_URL}/${commentId}`,
      options: { method: HTTPMethod.DELETE },
    });
  }
}

import { VIDEO_URL } from '../endpoints';
import { NewVideoId, Video, VideoPayload } from '../interfaces/video.interfaces';
import { QueryParams } from './api.interfaces';
import useFetch from './_useFetch';

export class VideoService {
  static fetchAll(params: QueryParams) {
    return useFetch<Video[]>({ endpoint: VIDEO_URL, params });
  }

  static fetchOne(videoId: Video['id']) {
    return useFetch<Video>({ endpoint: `${VIDEO_URL}/${videoId}` });
  }

  // Create new video
  static upload(payload: VideoPayload) {
    return useFetch<NewVideoId>({
      endpoint: VIDEO_URL,
      options: {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    });
  }

  // Update given video
  static update(videoId: Video['id'], payload: Partial<VideoPayload>) {
    return useFetch<void>({
      endpoint: `${VIDEO_URL}/${videoId}`,
      options: {
        method: 'PATCH',
        body: JSON.stringify(payload),
      },
    });
  }

  static remove(videoId: Video['id']) {
    return useFetch<void>({
      endpoint: `${VIDEO_URL}/${videoId}`,
      options: { method: 'DELETE' },
    });
  }
}

export type Props<T> = T extends T[] ? T[0] : T;

export type QueryParams = Record<string, string>;

export interface FetchData {
  endpoint: Request['url'];
  params?: QueryParams;
  options?: RequestInit; // used for method, payload, and headers definitions
  isPublic?: boolean; // default: false. Used to specify if a request route should be authenticated with a token
}

/**
 * HTTP request methods
 *
 * [MDN]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
export enum HTTPMethod {
  CONNECT = 'CONNECT',
  DELETE = 'DELETE',
  GET = 'GET',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  TRACE = 'TRACE',
}

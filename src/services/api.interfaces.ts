export type Props<T> = T extends T[] ? T[0] : T;

export type QueryParams = Record<string, string>;

export interface FetchData {
  endpoint: Request['url'];
  params?: QueryParams;
  options?: RequestInit; // used for method, payload, and headers definitions
  isPublic?: boolean; // default: false. Used to specify if a request route should be authenticated with a token
}

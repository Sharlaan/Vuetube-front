import { useStore } from 'vuex';
import { AuthState } from '../pages/auth/auth.store';
import { RootState } from '../store';
import { FetchData, QueryParams } from './api.interfaces';

/**
 * Native Fetch extended with
 * auth, global loading, query params and generic typings
 *
 * check SWRV: more advanced alternative
 */

const API_URL = import.meta.env.VITE_API_URL;

export default async function useFetch<R>({
  endpoint,
  params,
  options,
  isPublic = false,
}: FetchData) {
  const url = appendQueryParams(API_URL + endpoint, params);
  const store = useStore<RootState>();

  store.commit('isLoading', true);

  const response = await fetch(url, { ...defaultHeaders(isPublic), ...options });

  store.commit('isLoading', false);

  // if (!response.ok) throw new Error(`ERROR ${response.status}: ${response.statusText}`);
  if (!response.ok) throw response;
  return (await response.json()) as R;
}

function defaultHeaders(isPublic: boolean): RequestInit {
  const store = useStore<AuthState>();
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  if (!isPublic) {
    const token = store.state.token;
    if (!token) throw new Error('You are trying to reach a secured endpoint without token');
    headers.set('Content-Type', `Bearer ${token}`);
    store.dispatch('');
  }
  return { headers };
}

function appendQueryParams(url: string, params: QueryParams = {}) {
  if (!url) return '';
  if (!Object.keys(params).length) return url;

  const parameterizedUrl = new URL(url);
  for (const [key, value] of Object.entries(params)) {
    value && parameterizedUrl.searchParams.set(key, value);
  }

  return parameterizedUrl.toString();
}

// function appendQueryParams(url: string, params?: QueryParams) {
//   if (!url) return '';
//   if (!params || !Object.keys(params).length) return url;

//   const queryString = Object.keys(params)
//     .reduce<string[]>(
//       (qs, key) =>
//         params[key]
//           ? qs.concat(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//           : qs,
//       [],
//     )
//     .join('&');

//   return `${url}?${queryString}`;
// }

import { AUTH_URL } from '../../endpoints';
import { NewUserId, User, UserPayload } from '../../interfaces/user.interfaces';
import useFetch from '../../services/_useFetch';
import { LoginPayload, Token } from './auth.interfaces';

export class AuthService {
  static signIn(credentials: LoginPayload) {
    return useFetch<Token>({
      endpoint: `${AUTH_URL}/login`,
      options: {
        method: 'POST',
        body: JSON.stringify(credentials),
      },
      isPublic: true,
    });
  }

  static signUp(payload: UserPayload) {
    return useFetch<NewUserId>({
      endpoint: `${AUTH_URL}/register`,
      options: {
        method: 'POST',
        body: JSON.stringify(payload),
      },
      isPublic: true,
    });
  }

  /** Requests API to check if the local stored token is a valid JWT */
  static checkTokenValidity() {
    return useFetch<boolean>({ endpoint: `${AUTH_URL}/checkToken` });
  }

  static me() {
    return useFetch<User>({ endpoint: `${AUTH_URL}/me` });
  }

  static updateUser(userId: User['id'], payload: Partial<UserPayload>) {
    return useFetch<void>({
      endpoint: `${AUTH_URL}/user/${userId}`,
      options: {
        method: 'PATCH',
        body: JSON.stringify(payload),
      },
    });
  }

  // FIXME: should be handle with request above
  // uploadUserAvatar(userId, payload) {
  //   return fetchData<any>({
  //     endpoint: `${AUTH_URL}/avatar`,
  //     options: {
  //       method: 'PATCH',
  //       body: JSON.stringify(payload)
  //     }
  //   });
  // }

  // FIXME: same as uploadUserAvatar + security hole ?
  // updatePassword(userId, payload) {
  //   return fetchData<any>({
  //     endpoint: `${AUTH_URL}/updatepassword`,
  //     options: {
  //       method: 'PATCH',
  //       body: JSON.stringify(payload)
  //     }
  //   });
  // }
}

import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { User, UserPayload } from '../../interfaces/user.interfaces';
import { RootState } from '../../store';
import { LoginPayload } from './auth.interfaces';
import { AuthService } from './auth.service';

export interface AuthState {
  token: string | null;
  user: User | null;
  error: string | null;
}

const state: AuthState = {
  token: null,
  user: null,
  error: null,
};

const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: (state) => !!state.token,
};

const mutations: MutationTree<AuthState> = {
  setToken(state, token) {
    state.token = token;
  },

  setCurrentUser(state, data) {
    state.user = data;
  },

  clearAuth(state) {
    state.token = null;
    state.user = null;
  },

  setError(state, error) {
    state.error = error;
  },
};

type Mutations = typeof mutations;

const actions: ActionTree<AuthState, RootState> = {
  async signUp({ commit }, payload: UserPayload) {
    try {
      const { id, token } = await AuthService.signUp(payload);
      commit('setToken', token);
      commit('setCurrentUser', { ...payload, id });
    } catch (error) {
      commit('setError', error);
      commit('clearAuth');
    }
  },

  async signIn({ commit }, credentials: LoginPayload) {
    console.log({ credentials });
    try {
      const { token } = await AuthService.signIn(credentials);
      commit('setToken', token);
    } catch (error) {
      commit('setError', error);
      commit('clearAuth');
    }
  },

  /** Validate locally stored JWT */
  async checkToken({ commit }) {
    try {
      // if no error, means the current token is still valid
      await AuthService.checkTokenValidity();
    } catch (error) {
      commit('setError', error);
      commit('clearAuth');
    }
  },

  async getCurrentUser({ commit }) {
    try {
      const currentUser = await AuthService.me();
      commit('setCurrentUser', currentUser);
    } catch (error) {
      commit('setError', error);
      commit('clearAuth');
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
} as Module<AuthState, RootState>;

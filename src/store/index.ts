import { createLogger, createStore, MutationTree } from 'vuex';
import auth from '../modules/auth/auth.store';
import layout from '../modules/layout/layout.store';
import comments from './modules/comment';

const isDevMode = !import.meta.env.PROD;

export interface RootState {
  isLoading: boolean;
}

const state: RootState = { isLoading: false };

const mutations: MutationTree<RootState> = {
  setIsLoading(state, flag: boolean) {
    state.isLoading = flag;
  },
};

export default createStore<RootState>({
  modules: { auth, comments, layout },
  state,
  mutations,
  strict: isDevMode,
  plugins: isDevMode ? [createLogger()] : [],
  devtools: isDevMode,
});

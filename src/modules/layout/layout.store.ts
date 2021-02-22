import { Module, MutationTree } from 'vuex';
import { RootState } from '../../store';

export interface LayoutState {
  isDrawerOpen: boolean;
}

const state: LayoutState = {
  isDrawerOpen: false,
};

const mutations: MutationTree<LayoutState> = {
  toggleDrawerOpen(state) {
    state.isDrawerOpen = !state.isDrawerOpen;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
} as Module<LayoutState, RootState>;

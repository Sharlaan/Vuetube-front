import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState } from '..';
import { Comment, CommentPayload } from '../../interfaces/comment.interfaces';
import { CommentService } from '../../services';
import { QueryParams } from '../../services/api.interfaces';

export interface CommentState {
  comments: Comment[];
}

const state: CommentState = {
  comments: [],
};

const getters: GetterTree<CommentState, RootState> = {};

enum MutationTypes {
  SET_COMMENTS = 'setComments',
  ADD_COMMENT = 'addComment',
}

type Mutations<S = CommentState> = {
  [MutationTypes.SET_COMMENTS](state: S, payload: Comment[]): void;
  [MutationTypes.ADD_COMMENT](state: S, payload: Comment): void;
};

const mutations: MutationTree<CommentState> & Mutations = {
  [MutationTypes.SET_COMMENTS](state, payload) {
    state.comments = payload;
  },

  [MutationTypes.ADD_COMMENT](state, payload) {
    state.comments.unshift(payload);
  },
};

enum ActionTypes {
  FETCH_COMMENTS = 'fetchComments',
  CREATE_COMMENT = 'createComment',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<CommentState, RootState>, 'commit'>;

interface Actions {
  [ActionTypes.FETCH_COMMENTS](
    { commit }: AugmentedActionContext,
    payload?: QueryParams, // Partial<Comment> & Pagination,
  ): void;
  [ActionTypes.CREATE_COMMENT]({ commit }: AugmentedActionContext, payload: CommentPayload): void;
}

const actions: ActionTree<CommentState, RootState> & Actions = {
  [ActionTypes.FETCH_COMMENTS]({ commit }, payload) {
    CommentService.fetchAll(payload)
      .then((comments) => {
        commit(MutationTypes.SET_COMMENTS, comments);
      })
      .catch(console.error);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
} as Module<CommentState, RootState>;

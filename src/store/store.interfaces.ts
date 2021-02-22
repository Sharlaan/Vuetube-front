import { ActionContext, ActionTree as VuexActionTree, MutationTree } from 'vuex';

/** S = Module State, R = RootState, M = MutationsTypes */
type AugmentedActionContext<S, R, M extends MutationTree<S>> = {
  commit<K extends keyof M>(key: K, payload: Parameters<M[K]>[1]): ReturnType<M[K]>;
} & Omit<ActionContext<S, R>, 'commit'>;

interface ActionTypes { [ K: string ]: string; payload: any };

/** A = ActionTypes */
export interface ActionTree<S, R, A extends ActionTypes, M extends MutationTree<S>> extends VuexActionTree<S, R> {
  [K: keyof A]({ commit }: AugmentedActionContext<S, R, M>, payload: number): void;
}

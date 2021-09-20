import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  user: {
    fbId: null,
    name: null,
    email: null,
    type: 'M',
    acessToken: null,
  },
};

function app(state = INITIAL_STATE, action) {
  //codigo onde irei receber/escutar minha acao -> fazer alteracoes necessarias sempre que forem disparadas.
  switch (action.type) {
    case types.UPDATE_USER: {
      return produce(state, draft => {
        draft.user = {...state.user, ...action.user};
      });
    }
    default:
      return state;
  }
}

export default app;

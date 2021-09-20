import types from './types';

export function createUser() {
  return {
    type: types.CREATE_USER,
  };
}

export function updateUser(user) {
  return {type: types.UPDATE_USER, user};
}

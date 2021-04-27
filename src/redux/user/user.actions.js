import UserActionTypes from './user.types';

export const userLogin = (user) => ({
  type: UserActionTypes.USER_LOGIN,
  payload: user,
});

export const userLogout = () => ({
  type: UserActionTypes.USER_LOGOUT,
});

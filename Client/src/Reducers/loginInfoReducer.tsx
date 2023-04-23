import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../TypeQuestion';

//  reducers의 타입과의 충돌을 막기위해 null을 union으로 주었지만 이게 적절한지 의문.
interface LoginState {
  login: boolean;
  userInfo: UserInfo | null;
}

interface LoginAction {
  payload: LoginState;
}

const initialState = { login: false, userInfo: null };

const loginInfoReducer = createSlice({
  name: 'logInOut',
  initialState,
  reducers: {
    login: (state: LoginState) => {
      state.login = true;
    },
    logout: (state: LoginState) => {
      state.login = false;
    },
    changeUserInfo: (state: LoginState, action: LoginAction) => {
      state.userInfo = action.payload.userInfo;
    },
  },
});

export const { login, logout, changeUserInfo } = loginInfoReducer.actions;
export default loginInfoReducer.reducer;
console.log(login, logout, changeUserInfo);
console.log(loginInfoReducer);

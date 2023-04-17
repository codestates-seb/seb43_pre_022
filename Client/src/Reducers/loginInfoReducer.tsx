import { createSlice } from '@reduxjs/toolkit';

const initialState = { login: false, userInfo: null };

const loginInfoReducer = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    changeLoginInfo: (
      state: { login: any; userInfo: any },
      action: { payload: { login: any; userInfo: any } },
    ) => {
      state.login = action.payload.login;
      state.userInfo = action.payload.userInfo;
    },
  },
});

export const loginInfoActions = loginInfoReducer.actions;
export default loginInfoReducer.reducer;

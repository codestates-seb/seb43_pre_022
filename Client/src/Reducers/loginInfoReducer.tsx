import { createSlice } from '@reduxjs/toolkit';

let initialState = {login : false, userInfo : null};

const loginInfoReducer = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    changeLoginInfo: (state, action) => {
      state.login = action.payload.login;
      state.userInfo = action.payload.userInfo;
    },
  }
})

export const loginInfoActions = loginInfoReducer.actions
export default loginInfoReducer.reducer
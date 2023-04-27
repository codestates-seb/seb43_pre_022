import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../TypeQuestion';

//  reducers의 타입과의 충돌을 막기위해 null을 union으로 주었지만 이게 적절한지 의문.

const initialState = {
  memberId: JSON.parse(localStorage.getItem('memberId')!),
  email: null,
  displayName: JSON.parse(localStorage.getItem('displayName')!),
  location: null,
  title: null,
  aboutme: null,
};

const userInfoSlice = createSlice({
  name: 'changeInfo',
  initialState,
  reducers: {
    UPDATE: (state: UserInfo, action: any) => {
      return action.payload;
    },
  },
});

export const { UPDATE } = userInfoSlice.actions;
export default userInfoSlice.reducer;

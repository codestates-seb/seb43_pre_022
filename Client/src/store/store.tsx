import { configureStore, Store } from '@reduxjs/toolkit';

import userInfoReducer from '../Reducers/userInfoReducer';
import questionReducer from '../Reducers/questionReducer';

import { UserInfo } from '../TypeQuestion';

export type RootState = {
  userInfos: UserInfo;
  crudquestion: any;
};

const store: Store<RootState> = configureStore({
  reducer: {
    userInfos: userInfoReducer,
    crudquestion: questionReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

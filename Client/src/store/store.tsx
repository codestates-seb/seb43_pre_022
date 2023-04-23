import { configureStore, Store } from '@reduxjs/toolkit';

import loginInfoReducer from '../Reducers/loginInfoReducer';
import questionReducer from '../Reducers/questionReducer';

export type RootState = {
  loginInfoReducer: any;
  crudquestion: any;
};

const store: Store<RootState> = configureStore({
  reducer: {
    loginInfoReducer,
    crudquestion: questionReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

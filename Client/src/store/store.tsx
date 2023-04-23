import { configureStore, Store } from '@reduxjs/toolkit';

import answerReducer from '../Reducers/answerReducer';
import commentReducer from '../Reducers/commentReducer';
import loginInfoReducer from '../Reducers/loginInfoReducer';
import questionReducer from '../Reducers/questionReducer';

export type RootState = {
  loginInfoReducer: any;
  crudquestion: any;
  answerReducer: any;
  commentReducer: any;
};

const store: Store<RootState> = configureStore({
  reducer: {
    loginInfoReducer,
    crudquestion: questionReducer,
    answerReducer,
    commentReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

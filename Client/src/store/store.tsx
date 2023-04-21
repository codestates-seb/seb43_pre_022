import { configureStore } from '@reduxjs/toolkit';

import answerReducer from '../Reducers/answerReducer';
import commentReducer from '../Reducers/commentReducer';
import loginInfoReducer from '../Reducers/loginInfoReducer';
import questionReducer from '../Reducers/questionReducer';

const store = configureStore({
  reducer: {
    loginInfoReducer,
    questionReducer,
    answerReducer,
    commentReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

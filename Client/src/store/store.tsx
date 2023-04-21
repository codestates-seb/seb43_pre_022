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

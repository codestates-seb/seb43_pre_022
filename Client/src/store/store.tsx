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
  }
})

export default store;
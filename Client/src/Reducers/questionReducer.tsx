import { createSlice } from '@reduxjs/toolkit';

// 이렇게 설정하면 tag빼고는 보존이 가능
const initialState = {
  titleValue:
    JSON.parse(localStorage.getItem('titleValue')!) === null
      ? ''
      : JSON.parse(localStorage.getItem('titleValue')!),
  questionValue:
    JSON.parse(localStorage.getItem('questionValue')!) === null
      ? ''
      : JSON.parse(localStorage.getItem('questionValue')!),
  tagList: [],
};

const commentReducer = createSlice({
  name: 'askquestion',
  initialState,
  reducers: {
    changeTitleValue: (
      state: { titleValue: any },
      action: { payload: { data: any } },
    ) => {
      localStorage.setItem('titleValue', JSON.stringify(action.payload.data));
      state.titleValue = JSON.parse(localStorage.getItem('titleValue')!);
    },
    changeQuestionValue: (
      state: { questionValue: any },
      action: { payload: { data: any } },
    ) => {
      localStorage.setItem(
        'questionValue',
        JSON.stringify(action.payload.data),
      );
      state.questionValue = JSON.parse(localStorage.getItem('questionValue')!);
    },
  },
});

export const askquestionActions = commentReducer.actions;
export default commentReducer.reducer;

import { createSlice } from '@reduxjs/toolkit';

// 이렇게 설정하면 tag빼고는 보존이 가능
const initialState = {};

const answerReducer = createSlice({
  name: 'askquestion',
  initialState,
  reducers: {
    changeTitleValue: (state: any, action: any) => {
      localStorage.setItem('titleValue', JSON.stringify(action.payload.data));
      state.titleValue = JSON.parse(localStorage.getItem('titleValue')!);
    },
    changeQuestionValue: (state: any, action: any) => {
      localStorage.setItem(
        'questionValue',
        JSON.stringify(action.payload.data),
      );
      state.questionValue = JSON.parse(localStorage.getItem('questionValue')!);
    },
  },
});

export const askquestionActions = answerReducer.actions;
export default answerReducer.reducer;

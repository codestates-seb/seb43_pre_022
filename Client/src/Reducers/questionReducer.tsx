<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
=======
import { createSlice } from '@reduxjs/toolkit';
>>>>>>> 84e34aa9a97ab364e00394db51157a21e0f25aae

// 이렇게 설정하면 tag빼고는 보존이 가능
const initialState = {
  titleValue:
<<<<<<< HEAD
    JSON.parse(localStorage.getItem("titleValue")!) === null
      ? ""
      : JSON.parse(localStorage.getItem("titleValue")!),
  questionValue:
    JSON.parse(localStorage.getItem("questionValue")!) === null
      ? ""
      : JSON.parse(localStorage.getItem("questionValue")!),
=======
    JSON.parse(localStorage.getItem('titleValue')!) === null
      ? ''
      : JSON.parse(localStorage.getItem('titleValue')!),
  questionValue:
    JSON.parse(localStorage.getItem('questionValue')!) === null
      ? ''
      : JSON.parse(localStorage.getItem('questionValue')!),
>>>>>>> 84e34aa9a97ab364e00394db51157a21e0f25aae
  tagList: [],
};

const questionReducer = createSlice({
<<<<<<< HEAD
  name: "askquestion",
  initialState,
  reducers: {
    changeTitleValue: (state, action) => {
      localStorage.setItem("titleValue", JSON.stringify(action.payload.data));
      state.titleValue = JSON.parse(localStorage.getItem("titleValue")!);
    },
    changeQuestionValue: (state, action) => {
      localStorage.setItem(
        "questionValue",
        JSON.stringify(action.payload.data)
      );
      state.questionValue = JSON.parse(localStorage.getItem("questionValue")!);
=======
  name: 'askquestion',
  initialState,
  reducers: {
    changeTitleValue: (state, action) => {
      localStorage.setItem('titleValue', JSON.stringify(action.payload.data));
      state.titleValue = JSON.parse(localStorage.getItem('titleValue')!);
    },
    changeQuestionValue: (state, action) => {
      localStorage.setItem(
        'questionValue',
        JSON.stringify(action.payload.data),
      );
      state.questionValue = JSON.parse(localStorage.getItem('questionValue')!);
>>>>>>> 84e34aa9a97ab364e00394db51157a21e0f25aae
    },
  },
});

export const askquestionActions = questionReducer.actions;
export default questionReducer.reducer;

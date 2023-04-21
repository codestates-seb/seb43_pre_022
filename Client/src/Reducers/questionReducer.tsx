import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Question {
  questionId: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  memberId: string;
  answer: any[];
}

const initialState: Question[] = [
  {
    questionId:
      JSON.parse(localStorage.getItem('questionId')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('questionId')!),
    title:
      JSON.parse(localStorage.getItem('title')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('title')!),
    content:
      JSON.parse(localStorage.getItem('content')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('content')!),
    createdAt:
      JSON.parse(localStorage.getItem('createdAt')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('createdAt')!),
    modifiedAt:
      JSON.parse(localStorage.getItem('modifiedAt')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('modifiedAt')!),
    memberId:
      JSON.parse(localStorage.getItem('memberId')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('memberId')!),
    answer:
      JSON.parse(localStorage.getItem('answer')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('answer')!),
  },
];

const questionSlice: any = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    READ: (
      state: Question[],
      action: PayloadAction<Question[]>,
    ): Question[] => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { READ } = questionSlice.actions;
export default questionSlice.reducer;

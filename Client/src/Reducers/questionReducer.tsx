import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Question {
  id: string;
  questionId: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  memberId: string;
  answerIds: string[];
}

const initialState: Question[] = [
  {
    id:
      JSON.parse(localStorage.getItem('id')!) === null
        ? ''
        : JSON.parse(localStorage.getItem('id')!),
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
      localStorage.getItem('memberId')! === null
        ? ''
        : localStorage.getItem('memberId')!,
    answerIds:
      JSON.parse(localStorage.getItem('answerIds')!) === null
        ? []
        : JSON.parse(localStorage.getItem('answerIds')!),
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
      return action.payload;
    },
    CREATE: (state: Question[], action: PayloadAction<Question>) => {
      console.log(action.payload);
      const newQuestion = action.payload;
      return [...state, newQuestion];
    },
  },
});

export const { READ, CREATE } = questionSlice.actions;
export default questionSlice.reducer;

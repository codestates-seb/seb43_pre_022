export interface TypeQuestion {
  questionId: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  memberId: string;
  answerIds: string[];
}
export interface TypeAnswer {
  questionId: string;
  answerId: string;
  content: string;
  memberId: string;
  createdAt: string;
  selected: boolean;
}
export interface TypeComment {
  questionId: string;
  answerId: string;
  commentId: string;
  memberId: string;
  createdAt: string;
  content: string;
}
export interface UserInfo {
  memberId: string | null;
  email: string | null;
  displayName: string | null;
  location: string | null;
  title: string | null;
  aboutme: string | null;
}

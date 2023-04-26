export interface TypeQuestion {
  id: string;
  questionId: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  memberId: string;
  answerIds: string[];
}
export interface TypeAnswer {
  id: string;
  questionId: string;
  answerId: string;
  content: string;
  memberId: string;
  createdAt: string;
  choose: boolean;
}
export interface TypeComment {
  id: string;
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

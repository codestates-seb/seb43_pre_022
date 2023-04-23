export interface TypeQuestion {
  questionId: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  memberId: string;
  answer?: TypeAnswer[];
}
export interface TypeAnswer {
  questionId: string;
  answerId: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  memberId: string;
  comment?: TypeComment[];
}
export interface TypeComment {
  answerId: string;
  commentId: string;
  content: string;
  createdAt: string;
  memberId: string;
}
export interface UserInfo {
  memberID: string | null; 
  email: string | null;
  displayname: string | null;
  location: string | null; 
  title: string | null;
  aboutme: string | null;
}

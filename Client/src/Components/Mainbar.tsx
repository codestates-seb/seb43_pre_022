import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import 'prismjs/themes/prism.css';

import { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import Prism from 'prismjs';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor, Viewer } from '@toast-ui/react-editor';

import { TypeAnswer, TypeComment, TypeQuestion } from '../TypeQuestion';

export const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 260px;
  word-break: break-all;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    left: 0px;
    width: 100%;
  }
  .answerBtnUserLayout {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }
  .answerUl {
    list-style: none;
    width: 100%;
  }
  .QuestionContent {
    margin-left: 20px;
  }
  .QuestionContent,
  .answerli {
    max-height: 1000px;
    width: 96%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 15px 25px;
    padding-right: 0px;
  }
  .answerli {
    max-height: 1000px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    width: 99%;
    margin-left: -20px;
  }
  .answerForm {
    height: 200px;
    width: 98%;
  }
  .AnswerInput {
    border: 1px solid rgb(203, 207, 210);
    border-radius: 3px;
    &:focus {
      border: none;
    }
  }
  span {
    font-size: 20px;
    margin: 10px 0px;
  }
  .linkBtn {
    border: none;
    color: rgba(0, 0, 0, 0.5);
    background: none;
    font-size: 13px;
    margin-right: 5px;
    padding: 0px;
  }
  .answerDeleteBtn,
  .answerEditBtn {
    &:hover {
      cursor: pointer;
      color: hsl(206, 85%, 57.5%);
    }
  }
  .answerChoose,
  .answerChoose > span {
    border: none;
    background: none;
  }
  .answerChoosegray,
  .answerChoosegreen {
    font-weight: bold;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.1);
    margin-left: -50px;
    &:hover {
      color: green;
    }
  }
  .PostBtn {
    border-radius: 3px;
    border: none;
    color: white;
    padding: 10px;
    font-size: 13px;
    margin: 20px 0px;
    background-color: var(--blue-500);
  }
  .AnswerTitle {
    padding: 0px;
  }
  .commentInput {
    height: 50px;
    width: 100%;
    border: 1px solid rgb(203, 207, 210);
    border-radius: 3px;
    &:focus {
      border: none;
    }
  }
  .commentBtn {
    background-color: var(--blue-500);
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: none;
    color: white;
    padding: 7px;
    font-size: 12px;
  }
  .commentUl {
    margin-top: 30px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      font-size: 13px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.8);
      &:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      .commentBtnList {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .commentDeleteBtn,
      .commentEditBtn {
        width: 50px;
        color: rgb(212, 215, 218);
        border: none;
        background: none;
        font-size: 11px;
        &:hover {
          color: hsl(206, 85%, 57.5%);
        }
      }
      .commentEditForm {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .commentEditInput {
        float: left;
        border: 1px solid rgb(203, 207, 210);
        border-radius: 3px;
        padding: 2px;
        &:focus {
          border: none;
        }
      }
      .commentEditSubmitBtn {
        float: right;
        margin-right: 3px;
        border: none;
        background: none;
        color: rgb(212, 215, 218);
        &:hover {
          color: hsl(206, 85%, 57.5%);
        }
      }
      .userId {
        font-size: 12px;
        color: #3183d2;
        &:hover {
          cursor: pointer;
          color: #28a4e2;
        }
      }
      .createdTime {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        margin-left: 5px;
      }
    }
  }
`;

export const QuestionUser = styled.div`
  border: none;
  background-color: rgb(217, 234, 247);
  padding: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  width: 190px;
  height: 70px;
  .memberLayout {
    display: flex;
    justify-content: baseline;
    align-items: flex-start;
    margin-top: 5px;
  }
  .userImage {
    background: black;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .userId {
    font-size: 12px;
    color: #3183d2;
    &:hover {
      cursor: pointer;
      color: #28a4e2;
    }
  }
`;

export const Comment = styled.button`
  border: none;
  background-color: white;
  color: rgb(212, 215, 218);
  font-size: 12px;
  &:hover {
    color: hsl(206, 85%, 57.5%);
  }
`;

interface Iprops {
  chooseId: string;
}

function Mainbar(this: any, { chooseId }: Iprops): JSX.Element {
  const token = localStorage.getItem('accessToken')!;
  const displayName = localStorage.getItem('displayName')!;

  const navigate = useNavigate();
  const [question, setQuestion] = useState<TypeQuestion>({
    questionId: '',
    title: '',
    content: '',
    createdAt: '',
    modifiedAt: '',
    memberId: '',
    answerIds: [],
  });
  const [answers, setAnswers] = useState<TypeAnswer[]>([]);
  const [comments, setComments] = useState<TypeComment[]>([]);

  const createdDate = new Date(question.createdAt);
  const createdAtDate = `${
    createdDate.toDateString().split('2023')[0]
  } at ${createdDate.getHours()}:${createdDate.getMinutes()}`;

  const queId = chooseId;
  useEffect(() => {
    async function getQData() {
      const questionData: any = await axios.get(
        `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/questions/${queId}`,
      );
      setQuestion(questionData.data.data);
    }
    getQData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function getAData() {
      const answerData: any = await axios.get(
        'http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/answers',
      );
      setAnswers(
        answerData.data.data.filter(
          (v: { questionId: any }) => v.questionId.toString() === queId,
        ),
      );
    }
    getAData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      'http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/comments',
    )
      .then((response) => response.json())
      .then((data) => setComments(data.data));
  }, []);

  const handleWriteButton = (event: any, targetId: string) => {
    if (!token) {
      alert('You should Log in');
      navigate('/api/signin');
    }
    let idx = 0;
    const elem = event.target.parentElement;
    for (let i = 0; i < elem.parentNode.childNodes.length; i += 1) {
      if (elem.parentNode.childNodes[i] === elem) {
        idx = i;
      }
    }
    const showInput = document.querySelectorAll('.showInput')[idx];
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    button.textContent = 'submit';
    button.type = 'submit';
    input.name = 'comment';
    button.classList.add('commentBtn');
    input.classList.add('commentInput');
    showInput?.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);

    async function commentSubmitHandler(e: any) {
      if (!token) {
        alert('You should Log in');
        navigate('/signin');
      } else {
        e.preventDefault();
        const number = Math.random().toString();
        const date = new Date();
        try {
          await axios.post(
            'http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/comments',
            {
              answerId: targetId,
              commentId: number,
              content: e.target.comment.value,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
              },
            },
          );
          window.location.reload();
        } catch (error) {
          navigate('/error');
        }
      }
    }
    form.addEventListener('submit', (e) => commentSubmitHandler(e));
  };

  const editorRef = useRef<Editor>(null);
  async function answerSubmit(e: any) {
    const getContentMd = editorRef.current?.getInstance().getMarkdown() || '';
    if (!token) {
      alert('You should Log in');
      navigate('/api/signin');
    } else {
      e.preventDefault();
      if (getContentMd === '') {
        alert('The content is empty!');
        window.location.reload();
      }
      try {
        await axios.post(
          'http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/answers',
          {
            questionId: queId,
            content: getContentMd,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`,
            },
          },
        );
        window.location.reload();
      } catch (error) {
        navigate('/error');
      }
    }
  }

  async function commentDelete(id: string) {
    if (!token) {
      alert('You should Log in');
      navigate('/signin');
    } else {
      try {
        await axios.delete(
          `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/comments/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`,
            },
          },
        );
        window.location.reload();
      } catch (error) {
        navigate('/error');
      }
    }
  }

  async function answerDelete(id: string) {
    if (!token) {
      alert('You should Log in');
      navigate('/signin');
    } else {
      try {
        await axios.delete(
          `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/answers/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`,
            },
          },
        );
        window.location.reload();
      } catch (error) {
        navigate('/error');
      }
    }
  }

  async function commentEditHandler(
    event: any,
    answerId: string,
    commentId: string,
  ) {
    if (!token) {
      alert('You should Log in');
      navigate('/api/signin');
    }
    const commentBtnList = event.target.parentElement;
    commentBtnList.style = 'display: none';

    const showInput = event.target.parentElement.parentElement;
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    button.textContent = '✔';
    button.type = 'submit';
    input.name = 'comment';
    form.classList.add('commentEditForm');
    input.classList.add('commentEditInput');
    button.classList.add('commentEditSubmitBtn');
    showInput?.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);

    async function commentEdit(e: any) {
      if (!token) {
        alert('You should Log in');
        navigate('/signin');
      } else {
        e.preventDefault();
        const date = new Date();
        try {
          await axios.patch(
            `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/comments/${commentId}`,
            {
              answerId: answerId,
              commentId: commentId,
              content: e.target.comment.value,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
              },
            },
          );
          window.location.reload();
        } catch (error) {
          navigate('/error');
        }
      }
    }
    form.addEventListener('submit', (e) => commentEdit(e));
  }

  const answerChoose = (answerId: string, content: string) => {
    if (!token) {
      alert('You should Log in');
      navigate('/api/signin');
    } else {
      const newAnswers = answers.filter((answer) => answer.selected);
      if (newAnswers.length !== 0) alert('You already chose a answer!');
      else {
        try {
          axios.patch(
            `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/answers/${answerId}`,
            {
              answerId: answerId,
              content: content,
              selected: true,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
              },
            },
          );
          window.location.reload();
        } catch (error) {
          navigate('/error');
        }
      }
    }
  };

  async function handleQuestionDelete(id: string) {
    if (!token) {
      alert('You should Log in');
      navigate('/api/signin');
    } else {
      try {
        console.log(id);
        await axios.delete(
          `http://ec2-15-164-233-142.ap-northeast-2.compute.amazonaws.com:8080/api/questions/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`,
            },
          },
        );
        window.location.reload();
        navigate(-1);
      } catch (error) {
        navigate('/error');
      }
    }
  }

  return (
    <Main>
      <div className="QuestionContent">
        {question.content}
        <div className="answerBtnUserLayout">
          <div className="btnList">
            <button className="linkBtn" type="button">
              Share
            </button>
            <Link to={{ pathname: `/api/questionedit/${question.questionId}` }}>
              <button className="linkBtn" type="button">
                Edit
              </button>
            </Link>
            <button className="linkBtn" type="button">
              Follow
            </button>
            <button
              className="linkBtn"
              type="button"
              onClick={() => handleQuestionDelete(queId)}
            >
              Delete
            </button>
          </div>
          <QuestionUser>
            <div>Asked {createdAtDate}</div>
            <div className="memberLayout">
              <img
                alt=""
                className="userImage"
                src="https://bantax.co.kr/common/img/default_profile.png"
              />
              <span className="userId">{question.memberId}</span>
            </div>
          </QuestionUser>
        </div>
      </div>
      <span className="AnswerTitle">{answers.length} Answer</span>
      <ul className="answerUl">
        {answers.map((answer) => {
          const date = new Date(answer.createdAt);
          const answerCreatedDate = `${
            date.toDateString().split('2023')[0]
          } at ${date.getHours()}:${date.getMinutes()}`;
          return (
            <li className="answerli" key={answer.answerId}>
              <button
                type="button"
                onClick={() => answerChoose(answer.answerId, answer.content)}
                className="answerChoose"
              >
                {answer.selected ? (
                  <span
                    className="answerChoosegreen"
                    style={{ color: 'green' }}
                  >
                    ✔
                  </span>
                ) : (
                  <span
                    className="answerChoosegray"
                    style={{ color: 'rgba(0,0,0,0.1)' }}
                  >
                    ✔
                  </span>
                )}
              </button>
              <Viewer
                initialValue={answer.content}
                plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
              />
              <div className="answerBtnUserLayout">
                <div className="btnList">
                  <button className="linkBtn" type="button">
                    Share
                  </button>
                  {token ? (
                    <Link
                      to={{
                        pathname: `/api/answeredit/${answer.answerId}`,
                      }}
                    >
                      <button className="linkBtn answerEditBtn" type="button">
                        Edit
                      </button>
                    </Link>
                  ) : (
                    <Link to={{ pathname: `/api/signin` }}>
                      <button className="linkBtn answerEditBtn" type="button">
                        Edit
                      </button>
                    </Link>
                  )}
                  <button className="linkBtn" type="button">
                    Follow
                  </button>
                  <button
                    className="linkBtn answerDeleteBtn"
                    type="button"
                    onClick={() => answerDelete(answer.answerId!)}
                  >
                    Delete
                  </button>
                </div>
                <QuestionUser style={{ background: 'white' }}>
                  <div>Answered {answerCreatedDate}</div>
                  <div className="memberLayout">
                    <img
                      alt=""
                      className="userImage"
                      src="https://bantax.co.kr/common/img/default_profile.png"
                    />
                    <span className="userId">{displayName}</span>
                  </div>
                </QuestionUser>
              </div>
              <ul className="commentUl">
                {comments
                  .filter((comment) => comment.answerId === answer.answerId)
                  .map((comment) => {
                    const commentCreatedDate = new Date(comment.createdAt);
                    const commentCreatedAt = `${
                      date.toDateString().split('2023')[0]
                    } at ${date.getHours()}:${date.getMinutes()}`;

                    return (
                      <li key={comment.commentId}>
                        <div>
                          {comment.content} -{' '}
                          <span className="userId">{displayName}</span>
                          <span className="createdTime">
                            {commentCreatedAt}
                          </span>
                        </div>
                        <div className="commentBtnList">
                          <button
                            className="commentEditBtn"
                            type="button"
                            onClick={(e) =>
                              commentEditHandler(
                                e,
                                answer.answerId,
                                comment.commentId!,
                              )
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="commentDeleteBtn"
                            type="button"
                            onClick={() => commentDelete(comment.commentId!)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    );
                  })}
              </ul>
              <div className="showInput" />
              <Comment onClick={(e) => handleWriteButton(e, answer.answerId!)}>
                Add a comment
              </Comment>
            </li>
          );
        })}
      </ul>
      <span className="YourAnswer">Your Answer</span>
      <form className="answerForm" onSubmit={(e) => answerSubmit(e)}>
        <Editor
          placeholder="Write Answer..."
          previewStyle="tab"
          height="300px"
          initialEditType="markdown"
          useCommandShortcut
          ref={editorRef}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          hideModeSwitch
        />
        <button className="PostBtn" type="submit">
          Post Your Answer
        </button>
      </form>
    </Main>
  );
}

export default Mainbar;

import '../Global.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { TypeAnswer, TypeComment, TypeQuestion } from '../TypeQuestion';

export const Main = styled.div`
  box-sizing: border-box;
  width: 90%;
  padding-bottom: 260px;
  height: 170vh;
  word-break: break-all;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  flex-direction: column;
  float: left;
  margin-left: 20px;
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
  .QuestionContent,
  .answerli {
    max-height: 1000px;
    width: 96%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 15px 25px;
  }
  .answerUl {
    list-style: none;
    width: 100%;
  }
  .answerForm,
  .AnswerInput {
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
    margin-left: -30px;
    margin-right: 10px;
    font-weight: bold;
    font-size: 30px;
    color: gray;
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

function Mainbar({ chooseId }: Iprops) {
  const displayName = 'hihijin';
  const token = localStorage.getItem('access_token');

  const navigate = useNavigate();
  const [question, setQuestion] = useState<TypeQuestion>({
    id: '',
    questionId: '',
    title: '',
    content: '',
    createdAt: '',
    modifiedAt: '',
    memberId: '',
  });
  const [answers, setAnswers] = useState<TypeAnswer[]>([]);
  const [comments, setComments] = useState<TypeComment[]>([]);

  const queId = chooseId;
  useEffect(() => {
    async function getData() {
      const questionData: any = await axios.get(
        `http://localhost:4000/questions/?questionId=${queId}`,
      );
      const answerData: any = await axios.get('http://localhost:4000/answers');
      setQuestion(questionData.data[0]);
      setAnswers(
        answerData.data.filter(
          (a: { questionId: string }) => a.questionId === queId,
        ),
      );
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleWriteButton = (event: any, targetId: string) => {
    if (!token) {
      alert('You should Log in');
      navigate('/signin');
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
          await axios.post('http://localhost:4000/comments', {
            id: number,
            questionId: question.questionId,
            answerId: targetId,
            commentId: number,
            content: e.target.comment.value,
            memberId: displayName,
            createdAt: `${
              date.toDateString().split('2023')[0]
            } at ${date.getHours()}:${date.getMinutes()}`,
          });
          window.location.reload();
        } catch (error) {
          navigate('/error');
        }
      }
    }
    form.addEventListener('submit', (e) => commentSubmitHandler(e));
  };

  async function answerSubmit(e: any) {
    if (!token) {
      alert('You should Log in');
      navigate('/signin');
    } else {
      e.preventDefault();
      if (e.target.answer.value === '') {
        alert('The content is empty!');
        window.location.reload();
      }
      const number = Math.random().toString();
      const date = new Date();
      try {
        await axios.post('http://localhost:4000/answers', {
          id: number,
          questionId: '1',
          answerId: number,
          content: e.target.answer.value,
          choose: false,
          memberId: displayName,
          createdAt: `${
            date.toDateString().split('2023')[0]
          } at ${date.getHours()}:${date.getMinutes()}`,
        });
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
        await axios.delete(`http://localhost:4000/comments/${id}`);
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
        await axios.delete(`http://localhost:4000/answers/${id}`);
        window.location.reload();
      } catch (error) {
        navigate('/error');
      }
    }
  }

  async function commentEdit(event: any, id: string) {
    if (!token) {
      alert('You should Log in');
      navigate('/signin');
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

    async function commentEditHandler(e: any) {
      if (!token) {
        alert('You should Log in');
        navigate('/signin');
      } else {
        e.preventDefault();
        const date = new Date();
        try {
          await axios.patch(`http://localhost:4000/comments/${id}`, {
            content: e.target.comment.value,
            createdAt: `${
              date.toDateString().split('2023')[0]
            } at ${date.getHours()}:${date.getMinutes()}`,
          });
          window.location.reload();
        } catch (error) {
          navigate('/error');
        }
      }
    }
    form.addEventListener('submit', (e) => commentEditHandler(e));
  }

  const answerChoose = (id: string) => {
    if (!token) {
      alert('You should Log in');
      navigate('/signin');
    } else {
      const newAnswers = answers.filter((answer) => answer.choose);
      if (newAnswers.length !== 0) alert('You already chose a answer!');
      else {
        try {
          axios.patch(`http://localhost:4000/answers/${id}`, {
            choose: true,
          });
          window.location.reload();
        } catch (error) {
          navigate('/error');
        }
      }
    }
  };

  return (
    <Main>
      <div className="QuestionContent">
        {question.content}
        <div className="answerBtnUserLayout">
          <div className="btnList">
            <button className="linkBtn" type="button">
              Share
            </button>
            <button className="linkBtn" type="button">
              Edit
            </button>
            <button className="linkBtn" type="button">
              Follow
            </button>
            <button className="linkBtn" type="button">
              Delete
            </button>
          </div>
          <QuestionUser>
            <div>Asked</div>
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
        {answers.map((answer) => (
          <li className="answerli" key={answer.id}>
            <button
              type="button"
              onClick={() => answerChoose(answer.id!)}
              className="answerChoose"
            >
              {answer.choose ? (
                <span style={{ color: 'green' }}>✔</span>
              ) : (
                <span style={{ color: 'gray' }}>✔</span>
              )}
            </button>
            {answer.content}
            <div className="answerBtnUserLayout">
              <div className="btnList">
                <button className="linkBtn" type="button">
                  Share
                </button>
                <Link to={{ pathname: `/answeredit/${answer.id}` }}>
                  <button className="linkBtn answerEditBtn" type="button">
                    Edit
                  </button>
                </Link>
                <button className="linkBtn" type="button">
                  Follow
                </button>
                <button
                  className="linkBtn answerDeleteBtn"
                  type="button"
                  onClick={() => answerDelete(answer.id!)}
                >
                  Delete
                </button>
              </div>
              <QuestionUser style={{ background: 'white' }}>
                <div>Answered {answer.createdAt}</div>
                <div className="memberLayout">
                  <img
                    alt=""
                    className="userImage"
                    src="https://bantax.co.kr/common/img/default_profile.png"
                  />
                  <span className="userId">{answer.memberId}</span>
                </div>
              </QuestionUser>
            </div>
            <ul className="commentUl">
              {comments
                .filter((comment) => comment.answerId === answer.answerId)
                .map((comment) => (
                  <li key={comment.commentId}>
                    <div>
                      {comment.content} -{' '}
                      <span className="userId">{comment.memberId}</span>
                      <span className="createdTime">{comment.createdAt}</span>
                    </div>
                    <div className="commentBtnList">
                      <button
                        className="commentEditBtn"
                        type="button"
                        onClick={(e) => commentEdit(e, comment.id!)}
                      >
                        Edit
                      </button>
                      <button
                        className="commentDeleteBtn"
                        type="button"
                        onClick={() => commentDelete(comment.id!)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="showInput" />
            <Comment onClick={(e) => handleWriteButton(e, answer.id!)}>
              Add a comment
            </Comment>
          </li>
        ))}
      </ul>
      <span className="YourAnswer">Your Answer</span>
      <form className="answerForm" onSubmit={(e) => answerSubmit(e)}>
        <input
          name="answer"
          className="AnswerInput"
          placeholder="Write Answer..."
        />
        <button className="PostBtn" type="submit">
          Post Your Answer
        </button>
      </form>
    </Main>
  );
}

export default Mainbar;

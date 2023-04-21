import '../Global.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import answercheck from '../assets/answercheck.png';

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
  form,
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
  .btnList {
    padding: 0px;
  }
  .linkBtn {
    border: none;
    color: rgba(0, 0, 0, 0.5);
    background: none;
    font-size: 13px;
    padding: 0px;
    margin-top: 20px;
    margin-right: 5px;
  }
  .answerDeleteBtn,
  .answerEditBtn {
    &:hover {
      cursor: pointer;
      color: hsl(206, 85%, 57.5%);
    }
  }
  .answerChoose {
    border: none;
    background: none;
    margin-left: -50px;
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
    border: none;
    color: white;
    padding: 7px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .commentUl {
    margin-top: 30px;
    li {
      position: relative;
      margin-bottom: 10px;
      font-size: 13px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.8);
      &:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      button {
        position: absolute;
        right: 0px;
        color: rgb(212, 215, 218);
        border: none;
        background: none;
        font-size: 11px;
        &:hover {
          color: hsl(206, 85%, 57.5%);
        }
      }
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

interface Iquestion {
  id?: string;
  questionId?: string;
  title?: string;
  content?: string;
  createdAt?: string;
  modifiedAt?: string;
  memberId?: string;
  answers?: Ianswer[];
}
interface Ianswer {
  id?: string;
  questionId?: string;
  answerId?: string;
  content?: string;
  comments?: Icomment[];
}
interface Icomment {
  id?: string;
  questionId?: string;
  answerId?: string;
  commentId: string;
  content?: string;
}

function Mainbar() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<Iquestion>({
    id: '',
    questionId: '',
    title: '',
    content: '',
    createdAt: '',
    modifiedAt: '',
    memberId: '',
    answers: [],
  });
  const [answers, setAnswers] = useState<Ianswer[]>([]);
  const [comments, setComments] = useState<Icomment[]>([]);

  useEffect(() => {
    async function getData() {
      const queId = '1';
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

  const handleWriteButton = (targetId: string) => {
    const showInput = document.querySelector('.showInput');
    const input = document.createElement('input');
    const button = document.createElement('button');
    button.textContent = 'submit';
    button.classList.add('commentBtn');
    input.classList.add('commentInput');
    showInput?.appendChild(input);
    showInput?.appendChild(button);

    let commentLi = '';
    function commentChangeHandler(e: any): void {
      commentLi += e.target.value;
      console.log(e.target.parentElement.parentElement, showInput);
    }
    async function commentSubmitHandler() {
      const number = Math.random().toString();
      try {
        await axios.post('http://localhost:4000/comments', {
          id: number,
          questionId: question.questionId,
          answerId: targetId,
          commentId: number,
          content: commentLi,
        });
      } catch (error) {
        navigate('/error');
      }
    }
    input.addEventListener('change', commentChangeHandler);
    button.addEventListener('click', commentSubmitHandler);
  };
  async function answerSubmit(e: any) {
    e.preventDefault();
    const number = Math.random().toString();
    try {
      await axios.post('http://localhost:4000/answers', {
        id: number,
        questionId: '1',
        answerId: number,
        content: e.target.answer.value,
        comments: [],
      });
      window.location.reload();
    } catch (error) {
      navigate('/error');
    }
  }

  async function commentDelete(id: string) {
    try {
      await axios.delete(`http://localhost:4000/comments/${id}`);
      window.location.reload();
    } catch (error) {
      navigate('/error');
    }
  }

  async function answerDelete(id: string) {
    console.log(id);
    try {
      await axios.delete(`http://localhost:4000/answers/${id}`);
      window.location.reload();
    } catch (error) {
      navigate('/error');
    }
  }

  const answerChoose = () => {
    const beforeAnswerChoose = document.querySelectorAll('.beforeAnswerChoose');
    console.log(beforeAnswerChoose[0]);
  };

  return (
    <Main>
      <div className="QuestionContent">
        {question.content}
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
      </div>
      <span className="AnswerTitle">{answers.length} Answer</span>
      <ul className="answerUl">
        {answers.map((answer) => (
          <li className="answerli" key={answer.id}>
            <button
              type="button"
              onClick={answerChoose}
              className="answerChoose"
            >
              <img
                src={answercheck}
                alt=""
                width="30px"
                height="30px"
                className="beforeAnswerChoose"
              />
            </button>
            {answer.content}

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
            <ul className="commentUl">
              {comments
                .filter((comment) => comment.answerId === answer.answerId)
                .map((comment) => (
                  <li key={comment.commentId}>
                    {comment.content}
                    <button
                      type="button"
                      onClick={() => commentDelete(comment.id!)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
            <div className="showInput" />
            <Comment onClick={() => handleWriteButton(answer.id!)}>
              Add a comment
            </Comment>
          </li>
        ))}
      </ul>
      <span className="YourAnswer">Your Answer</span>
      <form onSubmit={(e) => answerSubmit(e)}>
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

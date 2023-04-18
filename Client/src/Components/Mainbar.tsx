import styled from 'styled-components';

export const Main = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 100vh;
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
  .AnswerList {
    max-height: 1000px;
    width: 96%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 15px 25px;
  }
  form,
  Input {
    height: 200px;
    width: 98%;
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
  .PostBtn {
    border-radius: 3px;
    background-color: var(--blue-500);
    border: none;
    color: white;
    padding: 10px;
    font-size: 13px;
    margin-top: 20px;
  }
  .AnswerTitle {
    padding: 0px;
  }
`;

export const Comment = styled.button`
  border: none;
  background-color: white;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  margin-top: 30px;
`;

function Mainbar() {
  const QuestionContent =
    "QuestionContent / Let's say I have an object that I want to make sure its keys conform to another type. I'm creating a dictionary of mapped keys, where on the left I have the original, and on the right, the displayed key. I need this available in both runtime and compile time, so doing this as const objects and arrays seems to make sense?";

  const AnswerList =
    "Answers / But I also want to protect the keyMap from accidentally misspelling or adding keys that it shouldn't have, so I want to make it conform to the allowedKeys array.  But if I do that, I can't figure out how to infer or define the object values as readonly/const properties...";
  return (
    <Main>
      <div className="QuestionContent">
        {QuestionContent}
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
      <span className="AnswerTitle">Answer</span>
      <div className="AnswerList">
        {AnswerList}
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
        <Comment>Add a comment</Comment>
      </div>
      <span className="YourAnswer">Your Answer</span>
      <form>
        <input className="AnswerInput" placeholder="Write Answer..." />
        <button className="PostBtn" type="submit">
          Post Your Answer
        </button>
      </form>
    </Main>
  );
}

export default Mainbar;

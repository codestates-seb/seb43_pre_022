import { Navigate, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import AnswerEdit from './Pages/AnswerEdit';
import AskQuestion from './Pages/AskQuestion';
import ErrorPage from './Pages/ErrorPage';
import LogOut from './Pages/LogOut';
import QuestionEdit from './Pages/QuestionEdit';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import SingleQuestion from './Pages/SingleQuestion';
import MyPage from './Pages/MyPage';
import QuestionList from './Pages/QuestionList';

function App() {
  //  JWT token 보유 여부에 따라 truthy || falsy
  const token = localStorage.getItem('accessToken');
  const notNull = () => {
    if (token === null) {
      console.log('null');
      return false;
    }
    console.log('ture');
    return true;
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            token && notNull() ? <Navigate to="/questions" /> : <MainPage />
          }
        />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/question/:id" element={<SingleQuestion />} />
        <Route
          path="/signup"
          element={token && notNull() ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={token && notNull() ? <Navigate to="/" /> : <SignIn />}
        />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route
          path="/logout"
          element={token && notNull() ? <LogOut /> : <Navigate to="/" />}
        />
        <Route
          path="/answeredit/:id"
          element={
            token && notNull() ? <AnswerEdit /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/askquestion"
          element={
            token && notNull() ? <AskQuestion /> : <Navigate to="/signin" />
          }
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="/questionedit/:id"
          element={
            token && notNull() ? <QuestionEdit /> : <Navigate to="/signin" />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

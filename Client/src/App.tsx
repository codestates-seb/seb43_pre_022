import { Navigate, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import AnswerEdit from './Pages/AnswerEdit';
import AskQuestion from './Pages/AskQuestion';
import ErrorPage from './Pages/ErrorPage';
import LogOut from './Pages/LogOut';
import MyPage from './Pages/MyPage';
import QuestionEdit from './Pages/QuestionEdit';
import QuestionList from './Pages/QuestionList';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import SingleQuestion from './Pages/SingleQuestion';

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
            token && notNull() ? <Navigate to="api/questions" /> : <MainPage />
          }
        />
        <Route path="api/questions" element={<QuestionList />} />
        <Route path="api/question/:id" element={<SingleQuestion />} />
        <Route path="/mypage/*" element={<MyPage />} />

        <Route
          path="api/signin"
          element={token && notNull() ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="api/signup"
          element={token && notNull() ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="api/logout"
          element={token && notNull() ? <LogOut /> : <Navigate to="/" />}
        />
        <Route
          path="api/askquestion"
          element={
            token && notNull() ? <AskQuestion /> : <Navigate to="/api/signin" />
          }
        />
        <Route
          path="api/questionedit/:id"
          element={
            token && notNull() ? (
              <QuestionEdit />
            ) : (
              <Navigate to="/api/signin" />
            )
          }
        />
        <Route
          path="api/answeredit/:id"
          element={
            token && notNull() ? <AnswerEdit /> : <Navigate to="/api/signin" />
          }
        />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*
import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import AnswerEdit from './Pages/AnswerEdit';
import AskQuestion from './Pages/AskQuestion';
import ErrorPage from './Pages/ErrorPage';
import LogOut from './Pages/LogOut';
import QuestionEdit from './Pages/QuestionEdit';
import QuestionList from './Pages/QuestionList';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import SingleQuestion from './Pages/SingleQuestion';

function App() {
  //  JWT token 보유 여부에 따라 truthy || falsy
  let token = localStorage.getItem('accessToken');
  token = 'token';

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="api/questions" element={<QuestionList />} />
        <Route path="api/question/:id" element={<SingleQuestion />} />
        <Route
          path="api/signin"
          element={token ? <QuestionList /> : <SignIn />}
        />
        <Route
          path="api/signup"
          element={token ? <QuestionList /> : <SignUp />}
        />
        <Route path="api/logout" element={<LogOut />} />
        <Route
          path="api/askquestion"
          element={token ? <AskQuestion /> : <SignIn />}
        />
        <Route
          path="api/questionedit/:id"
          element={token ? <QuestionEdit /> : <SignIn />}
        />
        <Route
          path="api/answeredit/:id"
          element={token ? <AnswerEdit /> : <SignIn />}
        />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

*/

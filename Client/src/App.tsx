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

function App() {
  //  JWT token 보유 여부에 따라 truthy || falsy
  const token = localStorage.getItem('access_token');

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/quesitons" /> : <MainPage />}
        />
        <Route
          path="/questions"
          element={token ? <Navigate to="/questions" /> : <SignIn />}
        />
        <Route path="/question/:id" element={<SingleQuestion />} />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={token ? <Navigate to="/" /> : <SignIn />}
        />
        <Route path="/mypage" element=<MyPage /> />
        <Route path="/logout" element={<LogOut />} />
        <Route
          path="/answeredit/:id"
          element={token ? <AnswerEdit /> : <Navigate to="/signin" />}
        />
        <Route
          path="/askquestion"
          element={token ? <AskQuestion /> : <Navigate to="/signin" />}
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="/questionedit/:id"
          element={token ? <QuestionEdit /> : <Navigate to="/signin" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

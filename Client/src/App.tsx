import { Navigate, Route, Routes } from 'react-router-dom';

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
          element={token ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="api/signup"
          element={token ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="api/logout" element={<LogOut />} />
        <Route
          path="api/answeredit/:id"
          element={token ? <AnswerEdit /> : <Navigate to="/signin" />}
        />
        <Route
          path="api/askquestion"
          element={token ? <AskQuestion /> : <Navigate to="/signin" />}
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="api/questionedit/:id"
          element={token ? <QuestionEdit /> : <Navigate to="/signin" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

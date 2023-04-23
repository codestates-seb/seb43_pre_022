import { Navigate, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
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
  let token = localStorage.getItem('access_token');
  token = 'token';

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path="/question/:id" element={<SingleQuestion />} />
        <Route
          path="/signin"
          element={token ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <SignUp />}
        />
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
          path="/questionedit/"
          element={token ? <QuestionEdit /> : <Navigate to="/signin" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import {
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import AskQuestion from './Pages/AskQuestion';
import ErrorPage from './Pages/ErrorPage';
import LogOut from './Pages/LogOut';
import QuestionList from './Pages/QuestionList';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import SingleQuestion from './Pages/SingleQuestion';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path="/question" element={<SingleQuestion />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/askquestion" element={<AskQuestion />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

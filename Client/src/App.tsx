import * as reactRouterDom from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import AnswerEdit from './Pages/AnswerEdit';
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
      <reactRouterDom.Routes>
        <reactRouterDom.Route path="/" element={<QuestionList />} />
        <reactRouterDom.Route path="/question" element={<SingleQuestion />} />
        <reactRouterDom.Route path="/signin" element={<SignIn />} />
        <reactRouterDom.Route path="/signup" element={<SignUp />} />
        <reactRouterDom.Route path="/logout" element={<LogOut />} />
        <reactRouterDom.Route path="/askquestion" element={<AskQuestion />} />
        <reactRouterDom.Route path="/answeredit/:id" element={<AnswerEdit />} />
        <reactRouterDom.Route path="/error" element={<ErrorPage />} />
      </reactRouterDom.Routes>
      <Footer />
    </div>
  );
}

export default App;

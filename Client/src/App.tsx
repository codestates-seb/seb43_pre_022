import './Global.css';
import Header from './Components/Header';
import QuestionList from './Pages/QuestionList';
import Footer from './Components/Footer';
import LogOut from './Pages/Logout';

function App() {
  return (
    <div className="App">
      <Header />
      <LogOut />
      <Footer />
    </div>
  );
}

export default App;

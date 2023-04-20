import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
);

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
         <HomePage />
      </Router>
    </div>
  );
}

export default App;

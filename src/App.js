import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

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

import './App.css';
import Home from './Home.js';
import { Routes, Route } from 'react-router-dom';
import Applink from './Applink';
import Socialmedia from './Socialmedia';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/applink" element={<Applink />}>
      </Route>
      <Route path="/socialmedia" element={<Socialmedia />}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;

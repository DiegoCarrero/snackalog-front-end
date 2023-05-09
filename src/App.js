import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js'
import './App.css';
import Snacks from './Components/Snacks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/snacks' element={<Snacks />} />
        <Route path='/snacks/:id' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

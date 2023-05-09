import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js'
import './App.css';
import Snacks from './Components/Snacks';
import NavBar from './Components/NavBar.js';
import Snack from './Components/Snack.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/snacks' element={<Snacks />} />
        <Route path='/snacks/:id' element={<Snack />} />
      </Routes>
    </div>
  );
}

export default App;

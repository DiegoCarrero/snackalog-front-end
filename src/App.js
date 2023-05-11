import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js'
import './App.css';
import Snacks from './Components/Snacks';
import NotFound from './Components/NotFound.js';
import NavBar from './Components/NavBar.js';
import Snack from './Components/Snack.js';
import EditSnack from './Components/EditSnack.js';

function App() {



  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/snacks' element={<Snacks />} />
        <Route path='/snacks/:id' element={<Snack />} />
        <Route path='/snacks/:id/edit' element={<EditSnack />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

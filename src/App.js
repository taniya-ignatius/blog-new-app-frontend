import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Add from './components/Add';
import Addpost from './components/Addpost';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/signup' element={<Add/>}/>
      <Route path='/addpost' element={<Addpost/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

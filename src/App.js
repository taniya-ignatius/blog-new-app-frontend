import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Add from './components/Add';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/signup' element={<Add/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

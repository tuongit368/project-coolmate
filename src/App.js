import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className='app-container'>
      {/* Cau hinh chuyen trang */}
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/register' element={<Register />}  />
          <Route path='/login' element={<Login />}  />
          

        </Routes>
           
      </BrowserRouter>
     
    </div>

  );
}

export default App;

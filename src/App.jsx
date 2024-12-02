import './styles/App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


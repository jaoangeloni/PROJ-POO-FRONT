import './styles/App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { News } from './pages/news';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/news' element={<News/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


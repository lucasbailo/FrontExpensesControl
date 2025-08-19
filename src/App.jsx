import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './Pages/home';
import Header from './components/Header';

function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;

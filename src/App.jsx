import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './Pages/home';
import Header from './components/Header';
import Footer from './components/Footer';

function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;

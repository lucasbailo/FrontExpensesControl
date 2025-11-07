import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Home from './Pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Pages/login';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Se não houver token, redireciona para login
    return <Navigate to="/login" />;
  }
  
  return children;
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Página de login */}
        <Route path="/login" element={<Login />} />
        
        {/* Páginas protegidas, como Home */}
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;

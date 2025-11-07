import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Pages/login';
import Home from './Pages/home';

const ProtectedRoute = ({ children }: { children: React.JSX.Element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Se não houver token, redireciona para login
    return <Navigate to="/login" />;
  }

  return children;
};

const Layout = () => {
  const token = localStorage.getItem('token');
  
  return (
    <div>
      {/* Exibe o Header apenas se estiver logado */}
      {token && <Header />}
      
      <main>
        <Outlet /> {/* Renderiza a página atual */}
      </main>
      
      <Footer />
    </div>
  );
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Layout para páginas protegidas, com Header e Footer */}
        <Route element={<Layout />}>
          {/* Páginas protegidas */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

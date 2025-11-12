import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Login from './Pages/login';
import Home from './Pages/home';
import Expenses from './Pages/Expenses';
import Layout from './components/Layout';

const ProtectedRoute = ({ children }: { children: React.JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔹 Rota pública (sem layout, sem header/sidebar) */}
        <Route path="/login" element={<Login />} />

        {/* 🔹 Rotas protegidas dentro do layout fixo */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

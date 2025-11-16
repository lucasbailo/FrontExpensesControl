import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Login from './Pages/login';
import Home from './Pages/home';
import Expenses from './Pages/Expenses';
import Layout from './components/Layout';
import DashboardPage from './Pages/Dashboard';
import Register from './Pages/Register';

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
        <Route path="/register" element={<Register />} />

        {/* 🔹 Rotas protegidas dentro do layout fixo */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

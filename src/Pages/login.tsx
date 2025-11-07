import React from 'react';
import LoginForm from '../components/LoginForm';
import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login, loading, error, token } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    login(email, password);
  };

  if (token) {
    navigate('/');
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <LoginForm onLogin={handleLogin} />
      {loading && <p className="text-center text-blue-500">Carregando...</p>}
      {error && <p className="text-center text-red-500 animate-pulse mt-2">{error}</p>}
    </div>
  );
};

export default Login;

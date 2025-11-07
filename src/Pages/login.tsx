import React from 'react';
import LoginForm from '../components/LoginForm';
import useLogin from '../hooks/useLogin';

const Login: React.FC = () => {
  const { login, loading, error, token } = useLogin();

  const handleLogin = (email: string, password: string) => {
    login(email, password);
  };

  if (token) {
    return (
      <div className="text-center mt-6">
        <h1 className="text-2xl font-semibold text-green-500">Login bem-sucedido!</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginForm onLogin={handleLogin} />
      {loading && <p className="text-center text-blue-500">Carregando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
};

export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import useRegister from '../hooks/useRegister';

const Register: React.FC = () => {
  const { register, loading, error } = useRegister();
  const navigate = useNavigate();

  const handleRegister = (email: string, name: string, password: string) => {
    register(email, password, name);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <RegisterForm onRegister={handleRegister} />
      {loading && <p className="text-center text-blue-500">Carregando...</p>}
      {error && <p className="text-center text-red-500 animate-pulse mt-2">{error}</p>}
    </div>
  );
};

export default Register;

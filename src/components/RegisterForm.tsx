import React, { useState } from 'react';

interface RegisterFormProps {
  onRegister: (email: string, password: string, name: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    setError('');
    onRegister(email, password, name);
  };

  return (
    <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-700">Criar Usuário</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-600">Nome</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-semibold text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Cadastrar
        </button>
      </form>
      <a
        href="/login"
        className="text-blue-500 hover:underline cursor-pointer"
      >
        Voltar
      </a>
    </div>
  );
};

export default RegisterForm;

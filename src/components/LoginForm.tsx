import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    setError('');
    onLogin(email, password);
  };

  return (
    <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-700">Login</h2>
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
          Login
        </button>
      </form>
      <a
        href="/register"
        className="text-sm text-blue-600 hover:underline cursor-pointer"
      >
        Ainda nao possui uma conta?
      </a>
    </div>
  );
};

export default LoginForm;

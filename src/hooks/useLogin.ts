import { useState } from 'react';
import api from '../services/api';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/user/login', {
        email,
        password
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token);
    } catch (err: any) {
      setError('Credenciais inválidas');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, token };
};

export default useLogin;

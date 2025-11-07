import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://localhost:7116/api/user/login', {
        email,
        password
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token); // Armazena o token no localStorage
    } catch (err: any) {
      setError('Credenciais inválidas');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, token };
};

export default useLogin;

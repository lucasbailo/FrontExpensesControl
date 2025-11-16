import { useState } from 'react';
import api from '../services/api';

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSuccess] = useState<string | null>(null);

  const register = async (email: string, name: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('https://localhost:7116/api/user/register', {
        email,
        name,
        password
      });
      if (response.status === 200) {
        setSuccess('Cadastro realizado com sucesso');
      }
    } catch (err: any) {
      setError('Verifique os campos e tenten novamente');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, sucess };
};

export default useRegister;

import { useState } from 'react';
import axios from 'axios';

interface ExpenseRequest {
    amount: number;
    date: string; // formato ISO: ex. "2025-11-08T17:32:28Z"
    description: string;
    id?: string;
    type: string;
}

interface ExpenseResponse {
    id: string;
    amount: number;
    date: string;
    description: string;
    type: string;
}

const useExpense = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [expenses, setExpenses] = useState<ExpenseResponse | null>(null);

    const getExpense = async (id?: string) => {
        setLoading(true);
        setError(null);
        try {
            const url = id
                ? `https://localhost:7116/api/Expense/${id}`
                : `https://localhost:7116/api/Expense`;

            const response = await axios.get<ExpenseResponse>(url);
            setExpenses(response.data);
        } catch (err) {
            console.error(err);
            setError('Erro ao buscar despesa');
        } finally {
            setLoading(false);
        }
    };

    const postExpense = async (data: ExpenseRequest) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post<ExpenseResponse>(
                'https://localhost:7116/api/Expense',
                data
            );
        } catch (err: any) {
            setError('Erro ao cadastrar despesa');
        } finally {
            setLoading(false);
        }
    };

    const putExpense = async (data: ExpenseRequest) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.put<ExpenseResponse>(
                'https://localhost:7116/api/Expense/' + data.id,
                data
            );
        } catch (err: any) {
            setError('Erro ao editar despesa');
        } finally {
            setLoading(false);
        }
    };

    return { getExpense, postExpense, loading, error, expenses };
};

export default useExpense;

import { useState } from "react";
import axios from "axios";

export interface ExpenseRequest {
    amount: number;
    date: string;
    description: string;
    id?: string;
    type: string;
}

export interface ExpenseResponse {
    id: string;
    amount: number;
    date: string;
    description: string;
    type: string;
}

const useExpense = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [expenses, setExpenses] = useState<ExpenseResponse[] | null>(null);

    const api = axios.create({
        baseURL: "https://localhost:7116/api",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
    });

    const getExpense = async (id?: string): Promise<ExpenseResponse[]> => {
        setLoading(true);
        setError(null);
        try {
            const url = id ? `/Expense/${id}` : `/Expense`;
            const response = await api.get<ExpenseResponse[]>(url);
            setExpenses(response.data);
            return response.data;
        } catch (err: any) {
            setError("Erro ao buscar despesas");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const postExpense = async (data: ExpenseRequest) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post<ExpenseResponse>("/Expense", data);
            return response.data;
        } catch (err: any) {
            console.error(err);
            if (err.response?.status === 401) {
                setError("Sessão expirada. Faça login novamente.");
            } else {
                setError("Erro ao cadastrar despesa.");
            }
        } finally {
            setLoading(false);
        }
    };

    const putExpense = async (data: ExpenseRequest) => {
        if (!data.id) {
            setError("ID da despesa não informado.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await api.put<ExpenseResponse>(`/Expense/${data.id}`, data);
            return response.data;
        } catch (err: any) {
            console.error(err);
            if (err.response?.status === 401) {
                setError("Sessão expirada. Faça login novamente.");
            } else {
                setError("Erro ao atualizar despesa.");
            }
        } finally {
            setLoading(false);
        }
    };

    const deleteExpense = async (data: ExpenseRequest) => {
        if (!data.id) {
            setError("ID da despesa não informado.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await api.delete<ExpenseResponse>(`/Expense/${data.id}`);
            return response.data;
        } catch (err: any) {
            console.error(err);
            if (err.response?.status === 401) {
                setError("Sessão expirada. Faça login novamente.");
            } else {
                setError("Erro ao deletar despesa.");
            }
        } finally {
            setLoading(false);
        }
    };

    return { getExpense, postExpense, putExpense, deleteExpense, loading, error, expenses };
};

export default useExpense;

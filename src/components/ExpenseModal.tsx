import { useState, useEffect } from "react";
import { ExpenseRequest, ExpenseResponse } from "../hooks/useExpense";

interface ExpenseModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: ExpenseRequest) => void;
    expense?: ExpenseResponse | null;
}

export default function ExpenseModal({ isOpen, onClose, onSave, expense }: ExpenseModalProps) {
    const [formData, setFormData] = useState<ExpenseRequest>({
        id: undefined,
        amount: 0,
        date: new Date().toISOString(),
        description: "",
        type: "",
    });

    useEffect(() => {
        if (expense) {
            setFormData({
                id: expense.id,
                amount: expense.amount,
                date: expense.date,
                description: expense.description,
                type: expense.type,
            });
        } else {
            setFormData({
                id: undefined,
                amount: 0,
                date: new Date().toISOString(),
                description: "",
                type: "",
            });
        }
    }, [expense]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSave(formData);
        setFormData({
            id: undefined,
            amount: 0,
            date: new Date().toISOString(),
            description: "",
            type: "",
        })
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">{expense ? "Editar Despesa" : "Nova Despesa"}</h2>

                <div className="space-y-3">
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Valor"
                        className="w-full border rounded p-2"
                    />
                    <input
                        type="datetime-local"
                        name="date"
                        value={formData.date.slice(0, 16)}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descrição"
                        className="w-full border rounded p-2"
                    />
                    <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        placeholder="Tipo (ex: Alimentação, Transporte...)"
                        className="w-full border rounded p-2"
                    />
                </div>

                <div className="flex justify-end gap-2 mt-5">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

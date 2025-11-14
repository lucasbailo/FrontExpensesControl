import { useState, useEffect } from "react";
import { ExpenseRequest, ExpenseResponse } from "../hooks/useExpense";

interface DeleteModalProps {
    isDeleteOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

export default function DeleteModal({ isDeleteOpen, onDelete, onClose }: DeleteModalProps) {

    const handleSubmit = () => {
        onDelete();
        onClose();
    };

    if (!isDeleteOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">Deseja apagar a despesa?</h2>

                <div className="flex justify-end gap-2 mt-5">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

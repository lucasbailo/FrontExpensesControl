import { useEffect, useState } from "react";
import useExpense, { ExpenseRequest, ExpenseResponse } from "../hooks/useExpense";
import ExpenseModal from "../components/ExpenseModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Expenses() {
  const { getExpense, postExpense, putExpense, expenses, loading, error } = useExpense();
  const [list, setList] = useState<ExpenseResponse[]>([]);
  const [selected, setSelected] = useState<ExpenseResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const data = await getExpense();
    if (data) setList(data);
  };

  const handleSave = async (data: ExpenseRequest) => {
    try {
      if (data.id) {
        await putExpense(data);
        toast.success("Despesa atualizada com sucesso!");
      } else {
        await postExpense(data);
        toast.success("Despesa cadastrada com sucesso!");
      }
      await fetchExpenses();
    } catch {
      toast.error("Erro ao salvar despesa");
    }
  };

  return (
    <div className="p-8 h-[calc(100vh-115px)]">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Despesas</h1>
        <button
          onClick={() => {
            setSelected(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          + Nova Despesa
        </button>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <table className="w-full border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Descrição</th>
              <th className="p-3">Valor</th>
              <th className="p-3">Tipo</th>
              <th className="p-3">Data</th>
              <th className="p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.description}</td>
                <td className="p-3">R$ {item.amount.toFixed(2)}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">{new Date(item.date).toLocaleString()}</td>
                <td className="p-3">
                  <button
                    className="text-blue-600 hover:underline mr-3"
                    onClick={() => {
                      setSelected(item);
                      setIsModalOpen(true);
                    }}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        expense={selected}
      />
    </div>
  );
}

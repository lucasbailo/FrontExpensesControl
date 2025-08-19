import { useState } from "react";

export default function TesteGratis() {
    const [form, setForm] = useState({
        nome: "",
        telefone: "",
        email: "",
        empresa: "",
        totalFuncionarios: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: enviar dados
        console.log("Form enviado:", form);
    }

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Lado esquerdo: título e texto */}
                <div className="flex flex-col gap-4">
                    <div>
                        <p>[ Pronto para o <span>teste?</span> ]</p>
                    </div>

                    <div className="flex flex-col">
                        <h2>INICIE SEU</h2>
                        <h2>TESTE GRÁTIS!</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>
                            Preencha o formulário abaixo e um de
                            nossos <strong>especialistas</strong> entrará em contato
                            para uma consulta gratuita.
                        </p>
                    </div>
                </div>

                {/* Lado direito: formulário */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <label className="flex flex-col">
                        <span>Nome</span>
                        <input
                            className="border border-1 rounded-sm"
                            name="nome"
                            type="text"
                            placeholder="Nome:"
                            value={form.nome}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="flex flex-col">
                        <span>Telefone</span>
                        <input
                            className="border border-1 rounded-sm"
                            name="telefone"
                            type="tel"
                            placeholder="Telefone:"
                            value={form.telefone}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="flex flex-col">
                        <span>Email corporativo</span>
                        <input
                            className="border border-1 rounded-sm"
                            name="email"
                            type="email"
                            placeholder="Email corporativo:"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="flex flex-col">
                        <span>Nome da empresa</span>
                        <input
                            className="border border-1 rounded-sm"
                            name="empresa"
                            type="text"
                            placeholder="Nome da empresa:"
                            value={form.empresa}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="flex flex-col">
                        <span>Total de funcionários</span>
                        <input
                            className="border border-1 rounded-sm"
                            name="totalFuncionarios"
                            type="number"
                            placeholder="Total de funcionários"
                            value={form.totalFuncionarios}
                            onChange={handleChange}
                            min={0}
                        />
                    </label>

                    <button type="submit" className="cursor-pointer bg-blue-500 text-white p-2">
                        INICIAR TESTE GRÁTIS
                    </button>

                    <p>(*) Preencha o formulário, para iniciar seu teste.</p>
                </form>
            </div>
        </section>
    );
}

const FristSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-4xl font-bold">
            DESCUBRA O POTENCIAL EMOCIONAL DE SUA EQUIPE!
          </h1>
          <p className="mt-4">
            O IntegraMente revela o que o currículo não mostra — testes psicológicos validados que ajudam a posicionar cada colaborador no lugar certo, com consciência, desempenho e alinhamento à cultura da empresa.
          </p>
        </div>
        <div className="w-1/2">
          <img src="path_to_image.jpg" alt="Pessoa" className="w-full" />
        </div>
      </div>

      <div className="mt-8">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Seu nome</label>
            <input type="text" id="name" name="name" className="mt-2 w-full p-2 border border-gray-300 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">Seu telefone</label>
            <input type="tel" id="phone" name="phone" className="mt-2 w-full p-2 border border-gray-300 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Seu email</label>
            <input type="email" id="email" name="email" className="mt-2 w-full p-2 border border-gray-300 rounded" />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">SOLICITE SEU ORÇAMENTO!</button>
        </form>
      </div>

      <p className="mt-4 text-xs">(*) Preencha o formulário para solicitar seu orçamento</p>
    </div>
  );
};

export default FristSection;

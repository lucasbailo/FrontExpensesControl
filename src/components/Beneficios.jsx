const Beneficios = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">BENEFÍCIOS EM DESTAQUE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon goes here */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Redução de Rotatividade</h3>
          <p className="text-center">Com o mapeamento emocional, identificamos os pontos de insatisfação e alinhamos os colaboradores com funções ideais.</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon goes here */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Desenvolvimento Emocional Individualizado</h3>
          <p className="text-center">Oferecemos planos de desenvolvimento focados no crescimento emocional e pessoal de cada colaborador.</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon goes here */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Gestão Baseada em Dados Reais</h3>
          <p className="text-center">Acompanhamento contínuo e relatórios baseados em dados concretos, para decisões mais assertivas.</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon goes here */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Reforço da Cultura Organizacional</h3>
          <p className="text-center">Alinhamento dos colaboradores à cultura e valores da empresa, promovendo um ambiente mais harmônico e produtivo.</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon goes here */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Plataforma Intuitiva (App + Web)</h3>
          <p className="text-center">Acesse o IntegraMente de forma fácil e prática, através do aplicativo ou plataforma web.</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon goes here */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Aprimoramento Contínuo</h3>
          <p className="text-center">O IntegraMente promove a melhoria contínua dos colaboradores com avaliações regulares, garantindo que cada um evolua dentro do seu potencial.</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full">SOLICITE SEU ORÇAMENTO!</button>
      </div>
    </section>
  );
};

export default Beneficios;

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-10" />
        <h1 className="ml-2 text-xl font-semibold">INTEGRAMENTE</h1>
      </div>

      {/* Navegação */}
      <nav className="flex space-x-6">
        <a href="/home" className="text-lg">HOME</a>
        <a href="/depoimentos" className="text-lg">DEPOIMENTOS</a>
        <a href="/modelo-negocio" className="text-lg">MODELO DE NEGÓCIO</a>
        <a href="/sobre-nos" className="text-lg">SOBRE NÓS</a>
        <a href="/servicos" className="text-lg">SERVIÇOS</a>
      </nav>

      {/* Botão "Comece Agora" */}
      <div>
        <a href="#comecar" className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg">COMECE AGORA</a>
      </div>
    </header>
  );
};

export default Header;

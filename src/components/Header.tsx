const Header = () => {

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <header className="flex items-center justify-between p-4 bg-blue-500">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="ml-2 text-xl font-semibold">Expenses Control</h1>
      </div>

      {/* Navegação */}
      <nav className="flex space-x-6">
      </nav>

      {/* Botão "Comece Agora" */}
      <button
        onClick={logout}>
        Sair
      </button>
    </header>
  );
};

export default Header;

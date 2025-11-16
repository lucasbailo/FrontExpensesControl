import useLogout from "../hooks/useLogout";

const Header = ({ collapsed } : { collapsed: boolean }) => {
  
  const { logout } = useLogout();

  return (
    <header className={`flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-blue-300 bg-blue-500 transition-all duration-300 ${ collapsed ? "ml-16" : "ml-60"}`}>
      <div className="flex items-center">
        <h1 className="ml-2 text-xl font-semibold text-white">Expenses Control</h1>
      </div>

      <nav className="flex space-x-6">
      </nav>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
      >
        Sair
      </button>
    </header>
  );
};

export default Header;

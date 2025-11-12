import { useState } from "react";
import { Menu, Home, DollarSign, Settings } from "lucide-react"; // biblioteca de ícones
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-blue-700 text-white transition-all duration-300 fixed top-0 left-0
      ${isCollapsed ? "w-16" : "w-60"} flex flex-col`}
    >
      {/* Botão de recolher */}
      <div className="flex items-center justify-between p-4 border-b border-blue-600">
        {!isCollapsed && <h2 className="font-bold text-lg">Menu</h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-blue-600 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Links de navegação */}
      <nav className="flex-1 p-3 space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 p-2 rounded hover:bg-blue-600"
        >
          <Home size={20} />
          {!isCollapsed && <span>Início</span>}
        </Link>

        <Link
          to="/expenses"
          className="flex items-center gap-3 p-2 rounded hover:bg-blue-600"
        >
          <DollarSign size={20} />
          {!isCollapsed && <span>Despesas</span>}
        </Link>

        <Link
          to="/configuracoes"
          className="flex items-center gap-3 p-2 rounded hover:bg-blue-600"
        >
          <Settings size={20} />
          {!isCollapsed && <span>Configurações</span>}
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

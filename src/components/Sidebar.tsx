import { useState } from "react";
import { Menu, Home, DollarSign, Settings, LogOut } from "lucide-react"; // biblioteca de ícones
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Sidebar = ({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: any }) => {

  const { logout } = useLogout();

  return (
    <aside
      className={`h-screen bg-blue-700 text-white transition-all duration-300 fixed top-0 left-0
      ${collapsed ? "w-16" : "w-60"} flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-blue-600">
        {!collapsed && <h2 className="font-bold text-lg">Menu</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-blue-600 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 p-2 rounded hover:bg-blue-600"
        >
          <Home size={20} />
          {!collapsed && <span>Início</span>}
        </Link>

        <Link
          to="/expenses"
          className="flex items-center gap-3 p-2 rounded hover:bg-blue-600"
        >
          <DollarSign size={20} />
          {!collapsed && <span>Despesas</span>}
        </Link>

        <a
          onClick={logout}
          className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          <LogOut size={20} />
          {!collapsed && <span>Sair</span>}
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

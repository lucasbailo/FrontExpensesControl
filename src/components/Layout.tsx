import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar fixa à esquerda */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col ml-16 md:ml-60 transition-all duration-300">
        {/* Header fixo no topo */}
        <Header />

        {/* Área de conteúdo (Outlet para rotas internas) */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

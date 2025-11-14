import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import { useEffect, useState } from "react";

const Layout = () => {

    const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header
          collapsed={collapsed}
        />

        <main className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${collapsed ? "ml-16" : "ml-60"}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

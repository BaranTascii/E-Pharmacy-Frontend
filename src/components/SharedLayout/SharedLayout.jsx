import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} />

      <div className="layout-content">
        <Header toggleSidebar={toggleSidebar} />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;

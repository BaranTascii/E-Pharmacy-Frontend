import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const SharedLayout = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-content">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;

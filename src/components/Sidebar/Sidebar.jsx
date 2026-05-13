import clsx from "clsx";

import Logo from "../Logo/Logo";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={clsx("sidebar", isOpen && "sidebar-open")}>
      <Logo />
      <SidebarMenu />
    </aside>
  );
};

export default Sidebar;
